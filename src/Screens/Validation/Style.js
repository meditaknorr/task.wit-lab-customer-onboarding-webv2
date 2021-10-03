import styled from 'styled-components';
import { themeProvider } from '../../Configs/Themes/themeProvider';
import { ConvertorPixel2Rem } from '../../Hooks/useDimension';

export const ValidationScreen = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-rows: minmax(${ConvertorPixel2Rem(56)}, ${ConvertorPixel2Rem(60)}) minmax(1fr, max-content) minmax(${ConvertorPixel2Rem(56)}, ${ConvertorPixel2Rem(60)});
  grid-template-columns: 1fr;
  grid-gap: 0;
  row-gap: 0;
`;
export const Main = styled.main`
  grid-area: main;
  width: 100%;
  padding: ${ConvertorPixel2Rem(10)} ${ConvertorPixel2Rem(27)};
  display: flex;
  align-items: center;
  flex-flow: column;

  div.HeadingText {
    width: ${ConvertorPixel2Rem(312)};
    color: ${themeProvider.day.fontColor};
    letter-spacing: 0;
    margin: ${ConvertorPixel2Rem(17)} 0 ${ConvertorPixel2Rem(67)} 0;

    h1 {
      width: 100%;
      height: ${ConvertorPixel2Rem(60)};
      font-size: ${ConvertorPixel2Rem(24)};
      line-height: ${ConvertorPixel2Rem(29)};
      margin: 0 0 ${ConvertorPixel2Rem(14)} 0;
      font-weight: bold;
      text-align: left;
    }
    h2 {
      font-weight: normal;
      text-align: left;
      font-size: ${ConvertorPixel2Rem(14)};
      height: ${ConvertorPixel2Rem(55)};
      width: 100%;

      span {
        display: inline-block;
        margin: 0 ${ConvertorPixel2Rem(5)};
        line-height: ${ConvertorPixel2Rem(20)};
      }
    }
  }

  div.ActionButton {
    width: ${ConvertorPixel2Rem(312)};
    margin: ${ConvertorPixel2Rem(100)} 0 0 0;

    div.ActionButton-ResendPin {
      width: 80%;
      text-align: center;
      height: ${ConvertorPixel2Rem(17)};
      line-height: ${ConvertorPixel2Rem(17)};
      font-size: ${ConvertorPixel2Rem(14)};
      margin: ${ConvertorPixel2Rem(38)} auto ${ConvertorPixel2Rem(16)} auto;
      color: ${themeProvider.day.errorColor};
    }
    button {
      width: 100%;
      background-color: ${themeProvider.day.highlightColor};
      font-size: ${ConvertorPixel2Rem(16)};
      height: ${ConvertorPixel2Rem(44)};
      border-radius: ${ConvertorPixel2Rem(6)};
      border: 0;
      &[disabled] {
        background-color: ${themeProvider.day.disableColor};
      }
    }
  }
`;
