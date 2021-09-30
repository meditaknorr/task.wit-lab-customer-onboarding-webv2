import styled from 'styled-components';
import { ConvertorPixel2Rem } from '../../Hooks/useDimension';
import { themeProvider } from '../../Configs/Themes/themeProvider';

export const LoadingBar = styled.div`
  position: relative;
  width: 100%;
  height: ${ConvertorPixel2Rem(2)};
  background-color: rgba(${themeProvider.day.lineColor}, 0.10);

  div.Loading-Signal {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => `${props.percent * 10}%`};
    height: ${ConvertorPixel2Rem(2)};
    background-color: rgba(${themeProvider.day.highlightColor}, 0.5);
  }
`;
