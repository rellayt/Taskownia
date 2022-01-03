import React from 'react';
import FeatureBaseTemplate from '../components/templates/FeatureBaseTemplate/FeatureBaseTemplate';
import { Email, Name, Date, Wrapper, DataWrapper, Field, Header } from './Profile.styles';
import { useAuth } from '../hooks/useAuth';
import { useProfile } from '../hooks/useProfile';
import Moment from 'react-moment';
import { isToday } from '../helpers/is-today';
import { Address, PersonalData } from '../models/User.model';
import { not } from '../core/base/utility/not';

const Profile = () => {
	const { user } = useAuth();

	const { address, personalData } = useProfile();

	const isEmpty = (object: Address | PersonalData) => Object.values(object).every((value) => value === null || value === '');

	return (
		<FeatureBaseTemplate headerContent={'Mój profil'}>
			{user && (
				<Wrapper>
					<Name>{user.username}</Name>
					<Email>{user.email}</Email>
					<Date>
						Utworzono
						<div>
							{isToday(user.createdAt) && 'dzisiaj o '}
							<Moment format={isToday(user.createdAt) ? 'HH:mm' : 'DD/MM/YY HH:mm'}>{user.createdAt}</Moment>
						</div>
					</Date>
					{user.createdAt !== user.updatedAt && (
						<Date>
							Zaktualizowano
							<div>
								{isToday(user.updatedAt) && 'dzisiaj o '}
								<Moment format={isToday(user.updatedAt) ? 'HH:mm' : 'DD/MM/YY HH:mm'}>{user.updatedAt}</Moment>
							</div>
						</Date>
					)}
					{address && not(isEmpty(address)) && (
						<DataWrapper>
							<Header>Adres</Header>
							{address.country && <Field>Kraj: {address.country}</Field>}
							{address.state && <Field>Województwo: {address.state}</Field>}
							{address.city && <Field>Miasto: {address.city}</Field>}
						</DataWrapper>
					)}
					{personalData && not(isEmpty(personalData)) && (
						<DataWrapper>
							<Header>Dane personalne</Header>
							{personalData.firstName && <Field>Imię: {personalData.firstName}</Field>}
							{personalData.lastName && <Field>Nazwisko: {personalData.lastName}</Field>}
							{personalData.birthDate && (
								<Field>
									Data urodzenia: <Moment format={'DD/MM/YY'}>{personalData.birthDate}</Moment>
								</Field>
							)}
							{personalData.phone && <Field>Telefon: {personalData.phone}</Field>}
						</DataWrapper>
					)}
				</Wrapper>
			)}
		</FeatureBaseTemplate>
	);
};

export default Profile;
