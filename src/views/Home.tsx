import React from 'react';
import { Actions, Content, InnerWrapper, Line, Title, Wrapper } from './Home.styles';
import Button from '../components/atoms/Button/Button';
import { RoutePath } from '../configuration/routing/static-routes';

const Home = () => {
	return (
		<Wrapper>
			<InnerWrapper>
				<Line delay={500}>
					Poszukujesz <b>programistów</b> do wykonania aplikacji?{' '}
				</Line>
				<Line delay={1200} fontSize={'m'}>
					... a może
				</Line>
				<Line delay={2000}>
					sam chcesz wykonać zlecony <b>projekt</b>?
				</Line>
				<Content>
					<Title>Taskownia</Title> jest serwisem ogłoszeniowym do zlecania projektów programistycznych.
					<br /> Portal stawia sobie za zadanie rozwiązania problemu dotyczącego trudności w znalezieniu pracy przez osobę bez doświadczenia
					zawodowego, jak możliwość utworzenia zlecenia
				</Content>
				<Actions>
					<Line delay={0} fontSize={'xl'}>
						Załóż konto jako
					</Line>
					<Button color={'yellow'} navigateTo={`${RoutePath.REGISTER}?role=AUTHOR`}>
						Zleceniodawca
					</Button>
					<Button navigateTo={`${RoutePath.REGISTER}?role=MAKER`}>Wykonawca </Button>
				</Actions>
			</InnerWrapper>
		</Wrapper>
	);
};

export default Home;
