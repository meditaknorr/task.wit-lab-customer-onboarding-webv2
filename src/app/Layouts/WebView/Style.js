import styled from 'styled-components';
import { themeProvider } from '../../Configs/Themes/themeProvider';

export const WebActivity = styled.div`
  display: flex;
  width:  ${(props) => props.w};
  height: ${(props) => props.h};
  background: ${themeProvider.day.backgroundColor};
  font-family: ${themeProvider.day.fontFamily};
  color: ${themeProvider.day.fontColor};
`;
