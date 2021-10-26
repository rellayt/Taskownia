import React, { ReactElement } from 'react';
import { Header, InnerWrapper, TextFieldsWrapper, Wrapper } from './Login.styles';
import Card from 'components/templates/Card/Card';
import TextField from 'components/atoms/TextField/TextField';
import Button from 'components/atoms/Button/Button';

const Login = (): ReactElement => {
	const handleClick = () => {
		console.log('Tried to log in');
	};
	return (
		<Wrapper>
			<Card>
				<InnerWrapper>
					<Header>Logowanie</Header>
					<TextFieldsWrapper>
						<TextField label="Nazwa / e-mail" error={true} helperText={'hello'}>
							elo
						</TextField>
						<TextField type={'password'} label="Hasło">
							elo
						</TextField>
					</TextFieldsWrapper>
					<Button fullWidth processing color={'yellow'} onClick={handleClick}>
						Zaloguj
					</Button>
				</InnerWrapper>
			</Card>
		</Wrapper>
	);
};

export default Login;
