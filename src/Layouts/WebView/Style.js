import styled from 'styled-components';
import { themeProvider } from '../../Configs/Themes/themeProvider';

export const WebActivity = styled.div`
  display: flex;
  width:  ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${themeProvider.day.backgroundColor};
  font-family: ${themeProvider.day.fontFamily}!important;
  color: ${themeProvider.day.fontColor};
`;
