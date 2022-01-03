import { useObservable } from '@mindspace-io/react';
import { Optional } from '../core/base/types/optional.type';
import { ProfileFacade, profileFacade as facade } from '../core/store/facades/profile.facade';
import { Nullable } from '../core/base/types/nullable.type';
import { Address, Avatar, PersonalData } from '../models/User.model';

export type ProfileHook = {
	address: Optional<Nullable<Address>>;
	personalData: Optional<Nullable<PersonalData>>;
	avatar: Optional<Nullable<Avatar>>;
	isAsyncError: Optional<boolean>;
	isProcessing: Optional<boolean>;
	facade: ProfileFacade;
};

export const useProfile = (): ProfileHook => {
	const [address] = useObservable<Nullable<Address>>(facade.address$);

	const [personalData] = useObservable<Nullable<PersonalData>>(facade.personalData$, null);

	const [avatar] = useObservable<Nullable<Avatar>>(facade.avatar$, null);

	const [isProcessing] = useObservable<boolean>(facade.isProcessing$, false);

	const [isAsyncError] = useObservable<boolean>(facade.isError$, false);

	return { address, personalData, avatar, isProcessing, isAsyncError, facade };
};
