import React from 'react';
import FeatureBaseTemplate from '../components/templates/FeatureBaseTemplate/FeatureBaseTemplate';
import { Header, Wrapper } from './ProfileEdit.styles';
import Tabs from '../components/molecules/ProfileEditTabs/Tabs';
import { Route, useParams } from 'react-router-dom';
import { Switch } from '../configuration/routing/Switch.styles';
import { profileEditInnerRoutes } from '../configuration/routing/routes';
import { SingleRoute } from '../core/base/models/router.model';

const ProfileEdit = () => {
	const { id } = useParams<{ id: string }>();

	return (
		<FeatureBaseTemplate headerContent="Edycja profilu">
			<Wrapper>
				<Header>
					<Tabs activeTab={id} />
				</Header>
				<Switch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }}>
					{profileEditInnerRoutes.map((singleRoute: SingleRoute, index) => (
						<Route path={singleRoute.path} component={singleRoute.component} key={index} />
					))}
				</Switch>
			</Wrapper>
		</FeatureBaseTemplate>
	);
};

export default ProfileEdit;
