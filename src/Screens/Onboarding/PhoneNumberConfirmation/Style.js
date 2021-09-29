import styled from 'styled-components';
import { themeProvider } from '../../../Configs/Themes/themeProvider';
import { ConvertorPixel2Rem } from '../../../Hooks/useDimension';

export const PhoneNumberConfirmationScreen = styled.div`
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
    margin: ${ConvertorPixel2Rem(17)} 0 0 0;

    h1 {
      width: 100%;
      height: ${ConvertorPixel2Rem(60)};
      font-size: ${ConvertorPixel2Rem(24)};
      line-height: ${ConvertorPixel2Rem(29)};
      margin: 0 0 ${ConvertorPixel2Rem()} 0;
      font-weight: bold;
    }
    h2 {
      font-weight: normal;
      font-size: ${ConvertorPixel2Rem(14)};
      height: ${ConvertorPixel2Rem(55)};
      width: 100%;
      display: flex;
      align-items: center;
    }
  }

  div.OneTimePin {
    width: ${ConvertorPixel2Rem(230)};
    height: ${ConvertorPixel2Rem(60)};
    margin: ${ConvertorPixel2Rem(36)} 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: ${ConvertorPixel2Rem(50)};
      height: ${ConvertorPixel2Rem(50)};
      border-radius: ${ConvertorPixel2Rem(6)};
      overflow: hidden;
      text-align: center;
      font-weight: bold;
      font-size: ${ConvertorPixel2Rem(18)};
      border: ${ConvertorPixel2Rem(1)} solid ${themeProvider.day.pinBorderColor};
      &:focus {
        content: "";
        border: ${ConvertorPixel2Rem(2)} solid ${themeProvider.day.highlightColor};
      }
    }
  }
`;
