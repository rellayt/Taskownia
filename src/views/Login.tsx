import React, { ReactElement } from 'react';
import { Header, InnerWrapper, Wrapper } from './Login.styles';
import Card from 'components/templates/Card/Card';
import TextField from '../components/atoms/TextField/TextField';

const Login = (): ReactElement => (
	<Wrapper>
		<Card>
			<InnerWrapper>
				<Header>Logowanie</Header>
				<TextField label="Nazwa / e-mail">elo</TextField>
				<TextField label="Hasło">elo</TextField>
			</InnerWrapper>
		</Card>
	</Wrapper>
);

export default Login;
