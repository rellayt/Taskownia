import styled from 'styled-components';
import { Button as MaterialButton } from '@mui/material';

export const Wrapper = styled(MaterialButton)`
  background: ${({ theme: { colors } }) => colors.blue} !important;
  text-transform: none !important;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.m} !important;
  padding: 4px 18px !important;
  border-radius: 6px !important;
  color: ${({ theme: { colors } }) => colors.white} !important;
  transition: cubic-bezier(0.4, 0.07, 0.43, 1.01) all 325ms !important;
  box-shadow: 0 1px 4px -1px ${({ theme: { colors } }) => colors.darkGray} !important;
  //
  &:hover {
    background: ${({ theme: { colors } }) => colors.darkBlue} !important;
  }

  &:focus {
    background: ${({ theme: { colors } }) => colors.lightBlue} !important;
  }

  &:disabled {
    background-color: ${({ theme: { colors } }) => colors.error} !important;
    color: ${({ theme: { colors } }) => colors.white};
  }

  .MuiButton-root:hover.Mui-disabled {
    background-color: ${({ theme: { colors } }) => colors.error};
  }
`;
