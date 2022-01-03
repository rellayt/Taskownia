import { LoginCredentials } from '../../../views/Login';
import { ApiService } from './api.service';
import { BaseRegisterCredentials } from '../../../views/Register';
import { User } from '../../../models/User.model';
import { BaseResponseData } from '../../base/models/baseResponseData';

export interface LoginResponseData extends BaseResponseData<string> {}

interface RegisterResponseData extends BaseResponseData<{ user: User; token: string }> {}

export interface CurrentUserResponseData extends BaseResponseData<User> {}

export class AuthService {
	private apiService: ApiService;

	constructor() {
		this.apiService = new ApiService();
	}

	login(credentials: LoginCredentials): Promise<LoginResponseData> {
		return this.apiService.post<LoginResponseData>('user/login', { body: { ...credentials } });
	}

	register(credentials: BaseRegisterCredentials<string[]>): Promise<void> {
		return this.apiService.post<void>('user/register', { body: { ...credentials } });
	}

	checkName(username: string): Promise<LoginResponseData> {
		return this.apiService.post<LoginResponseData>('user/inuse', { params: { username } });
	}

	checkEmail(email: string): Promise<LoginResponseData> {
		return this.apiService.post<LoginResponseData>('user/inuse', { params: { email } });
	}

	currentUser(token: string): Promise<CurrentUserResponseData> {
		const headers = { headers: { Authorization: token } };
		return this.apiService.get<CurrentUserResponseData>('user/me', {
			...headers,
		});
	}
}

export const authService = new AuthService();
