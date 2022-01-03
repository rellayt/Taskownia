import { produce } from 'immer';
import { authService, AuthService, CurrentUserResponseData } from '../services/auth.service';
import { AUTH_INITIAL_STATE, authQuery, AuthQuery, authStore, AuthStore } from '../state/auth.store';
import { LoginCredentials } from '../../../views/Login';
import { AuthEntityState, AuthState } from '../models/Auth.model';
import { BaseRegisterCredentials } from '../../../views/Register';
import Cookies from 'universal-cookie';
import { isUndefined } from '../../base/utility/isUndefined';
import { asNonUndefined } from '../../base/utility/asNonUndefined';
import { Address, PersonalData, User } from '../../../models/User.model';
import { StoreManagement } from './store-management.abstract';
import { RunnableFunction } from '../../base/types/runnable-function';
import { profileFacade, ProfileFacade, ProfileSegment } from './profile.facade';

export class AuthFacade extends StoreManagement<AuthStore, AuthService, AuthQuery, AuthState, AuthEntityState> {
	readonly user$ = this.baseQuery.user$;

	readonly isAuthor$ = this.baseQuery.isAuthor$;

	readonly isProcessing$ = this.baseQuery.isProcessing$;

	readonly isAuthenticated$ = this.baseQuery.isAuthenticated$;

	readonly error$ = this.baseQuery.isError$;

	readonly isPageLoading$ = this.baseQuery.isPageLoading$;

	private cookies = new Cookies();

	constructor(
		protected baseService: AuthService,
		protected baseStore: AuthStore,
		protected baseQuery: AuthQuery,
		private profileFacade: ProfileFacade
	) {
		super(baseService, baseStore, baseQuery);
	}

	async login(credentials: LoginCredentials, afterSuccessHandler: RunnableFunction, afterErrorHandler: RunnableFunction) {
		this.baseStore.setLoading(true);

		try {
			const { data: token } = await this.baseService.login(credentials);
			const { data: user } = await this.getCurrentUser(token);
			this.cookies.set('token', token);
			this.setUser(user);
			afterSuccessHandler();
		} catch (error) {
			this.setIsErrorState(true);
			afterErrorHandler();
		}
	}

	logout(): void {
		this.cookies.remove('token');
		this.baseStore.update({ ...AUTH_INITIAL_STATE, isPageLoading: false });
	}

	async authenticateIfCan(afterErrorHandler: RunnableFunction) {
		const tokenIfSet = this.cookies.get('token');

		if (isUndefined(tokenIfSet)) {
			this.updateStateEntity<boolean>('isPageLoading', false);
			this.baseStore.setLoading(false);
			return;
		}
		try {
			const { data: user } = await this.getCurrentUser(asNonUndefined(tokenIfSet));
			this.setUser(user);
		} catch (error) {
			afterErrorHandler();
			this.updateStateEntity('isPageLoading', false);
			this.cookies.remove('token');
		}
	}

	async register(credentials: BaseRegisterCredentials<string[]>, afterSuccessHandler: RunnableFunction) {
		await this.baseAsyncHandler(async () => await this.baseService.register(credentials), afterSuccessHandler);
	}

	resetAsyncError(): void {
		this.setIsErrorState(false);
	}

	getUserId(): number {
		const { user } = this.baseStore.getValue();
		return user.id;
	}

	private parseUser(user: User): User {
		const { createdAt, updatedAt } = user;
		return { ...user, createdAt: new Date(createdAt), updatedAt: new Date(updatedAt) };
	}

	private getCurrentUser(token: string): Promise<CurrentUserResponseData> {
		return this.baseService.currentUser(`Bearer ${token}`);
	}

	private setUser(user: User): void {
		const address = this.profileFacade.parseToProfileSegment(user, ProfileSegment.ADDRESS);
		this.profileFacade.updateStateEntity<Address>('address', address);

		const personalData = this.profileFacade.parseToProfileSegment(user, ProfileSegment.PERSONAL_DATA);
		this.profileFacade.updateStateEntity<PersonalData>('personalData', personalData);

		this.baseStore.update(
			produce((authState: AuthEntityState) => {
				authState.user = this.parseUser(user);
				authState.isPageLoading = false;
			})
		);
		this.baseStore.setError(false);
		this.baseStore.setLoading(false);
	}
}

// // @todo - this should be part of a formal DI system
export const authFacade = new AuthFacade(authService, authStore, authQuery, profileFacade);
