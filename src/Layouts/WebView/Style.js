import styled from 'styled-components';
import { themeProvider } from '../../Configs/Themes/themeProvider';

export const WebActivity = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${themeProvider.day.backgroundColor};
  font-family: ${themeProvider.day.fontFamily}!important;
  color: ${themeProvider.day.fontColor};
`;
