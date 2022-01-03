import { DefaultTheme } from 'styled-components';

export const colors = {
	white: '#f7f7f7',
	black: '#212121',
	background: '#efeff6',
	blue: '#0163b8',
	blueLowOpacity: 'rgb(0,97,181,.1)',
	darkBlue: '#00539c',
	lightBlue: '#0077d7',
	yellow: '#FFD662',
	darkYellow: '#fecf20',
	lightYellow: '#ffd78b',
	gray: '#cacaca',
	lightGray: '#eaeaea',
	darkGray: '#919191',
	disabled: '#c14a4aaf',
	error: '#d55c5c',
	facebook: '#1877f2',
	twitter: '#00ACEE',
	inputFill: 'rgba(255,255,255,0.3)',
};

export const selectiveBasicColors = {
	blue: {
		normal: colors.blue,
		dark: colors.darkBlue,
		light: colors.lightBlue,
		inverted: colors.white,
	},
	yellow: {
		normal: colors.yellow,
		dark: colors.darkYellow,
		light: colors.lightYellow,
		inverted: colors.black,
	},
};

export const fontSizes = {
	xxl2: '56px',
	xxl: '38px',
	xl: '27px',
	l: '24px',
	m: '22px',
	xm: '19px',
	s: '16px',
	xs: '14px',
	xxs: '12px',
};

export const boxShadows = {
	auth: '0 2px 11px 3px rgb(0 0 0 / 8%)',
	basic: '0 3px 12px 1px rgb(0 0 0 / 10%)',
	project: '0 2px 30px -10px rgb(0 0 0 / 15%)',
	projectDetails: '0 15px 35px -20px rgb(0 0 0 / 15%)',
	basicHard: '0 4px 10px 2px rgb(0 0 0 / 18%)',
	navbar: 'rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px',
	card: 'rgb(255 255 255 / 10%) 0px 1px 1px 0px inset, rgb(50 50 93 / 8%) 0px 50px 100px -20px, rgb(0 0 0 / 8%) 0px 30px 60px -30px',
	sharp: '0 0 1px 1px rgb(0 0 0 / 45%)',
};
const navbarHeight = '80px';

export const theme: DefaultTheme = {
	colors,
	fontSizes,
	boxShadows,
	navbarHeight,
};
