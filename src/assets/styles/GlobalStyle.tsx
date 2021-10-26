// import { fade } from '../../components/templates/Backdrop/Backdrop';
import { createGlobalStyle } from 'styled-components';
import { background, fontSize } from './utility';

export const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    height: 100%;
    width: 100%;
    font-family: 'Source Sans Pro', sans-serif;
		${background('background')};
		${fontSize('m')};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a, button {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.l};
  }

  // .MuiSkeleton-text {
  // transform: scale(1, 0.8);
  // transition: opacity; 
  // }
  // .MuiMenuItem-root {
  //   font-size: ${({ theme: { fontSizes } }) => fontSizes.l};
  // }

`;
