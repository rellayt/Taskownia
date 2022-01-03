import { StoreManagement } from './store-management.abstract';
import { RunnableFunction } from '../../base/types/runnable-function';
import { ProfileQuery, profileQuery, ProfileStore, profileStore } from '../state/profile.store';
import { ProfileData, ProfileResponseData, ProfileService, profileService } from '../services/profile.service';
import { ProfileEntityState, ProfileState } from '../models/Profile.model';
import { SetPasswordData } from '../../../components/organisms/SetPassword/SetPassword';
import { Address, ADDRESS_KEYS, PERSONAL_DATA_KEYS, PersonalData } from '../../../models/User.model';

export enum ProfileSegment {
	ADDRESS = 'Address',
	PERSONAL_DATA = 'PersonalData',
}

export class ProfileFacade extends StoreManagement<ProfileStore, ProfileService, ProfileQuery, ProfileState, ProfileEntityState> {
	readonly personalData$ = this.baseQuery.personalData$;

	readonly address$ = this.baseQuery.address$;

	readonly avatar$ = this.baseQuery.avatar$;

	readonly isProcessing$ = this.baseQuery.isProcessing$;

	readonly isError$ = this.baseQuery.isError$;

	async changePassword(passwordData: SetPasswordData, afterSuccessHandler: RunnableFunction, afterErrorHandler: RunnableFunction) {
		const doAfterErrorHandler = () => {
			afterErrorHandler();
			this.baseStore.setError(true);
		};
		await this.baseAsyncHandler(async () => await this.baseService.changePassword(passwordData), afterSuccessHandler, doAfterErrorHandler);
	}

	resetAsyncError(): void {
		this.setIsErrorState(false);
	}

	async updateProfile(
		profileData: ProfileData,
		profileSegmentKey: ProfileSegment,
		afterSuccessHandler: RunnableFunction,
		afterErrorHandler: RunnableFunction
	) {
		await this.baseAsyncHandler(
			async () => {
				const { data }: ProfileResponseData = await this.baseService.updateProfile(profileData);

				const parsedData = this.parseToProfileSegment(data, profileSegmentKey);

				if (ProfileFacade.isAddressSegment(profileSegmentKey)) {
					this.updateStateEntity<Address>('address', parsedData);
				} else {
					this.updateStateEntity<PersonalData>('personalData', parsedData);
				}
			},
			afterSuccessHandler,
			afterErrorHandler
		);
	}

	private static isAddressSegment(profileSegment: ProfileSegment): boolean {
		return profileSegment === ProfileSegment.ADDRESS;
	}

	parseToProfileSegment(profileData: ProfileData, profileSegment: ProfileSegment) {
		const profileSegmentKeys = ProfileFacade.isAddressSegment(profileSegment) ? ADDRESS_KEYS : PERSONAL_DATA_KEYS;
		const object = {};
		profileSegmentKeys.forEach((key) => {
			// @ts-ignore
			object[key] = profileData[key];
		});
		return object;
	}
}

// // @todo - this should be part of a formal DI system
export const profileFacade = new ProfileFacade(profileService, profileStore, profileQuery);
