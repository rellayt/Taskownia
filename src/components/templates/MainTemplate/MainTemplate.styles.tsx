import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-rows: ${({ theme: { navbarHeight } }) => `${navbarHeight}`} 1fr;
	grid-template-columns: 100%;
`;
