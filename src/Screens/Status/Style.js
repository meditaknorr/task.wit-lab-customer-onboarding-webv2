import styled from 'styled-components';
import { themeProvider } from '../../Configs/Themes/themeProvider';
import { ConvertorPixel2Rem } from '../../Hooks/useDimension';
import Loading from '../../Assets/Images/icons/ic_illustrations_waiting.png';

export const RegistrationStatusScreen = styled.div`
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
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: ${ConvertorPixel2Rem(10)} ${ConvertorPixel2Rem(27)};
  display: flex;
  align-items: center;
  justify-content: center;

  div.RegistrationStatus__Pane {
    width: ${ConvertorPixel2Rem(312)};
    padding: ${ConvertorPixel2Rem(19.55)} 0;
    margin: ${ConvertorPixel2Rem(100)} 0 0 0;

    div.RegistrationStatus__Pane-Icon {
      width: ${ConvertorPixel2Rem(143)};
      height: ${ConvertorPixel2Rem(143)};

      background: url(${Loading}) no-repeat;
      background-size: contain;
      margin: 0 auto;
    }
    div.RegistrationStatus__Pane-HeadingText {
      color: ${themeProvider.day.fontColor};
      letter-spacing: 0;
      text-align: center;
      margin: ${ConvertorPixel2Rem(35)} 0 0 0;

      h1 {
        display: block;
        width: 100%;
        font-size: ${ConvertorPixel2Rem(20)};
        line-height: ${ConvertorPixel2Rem(20)};
        margin: 0 0 ${ConvertorPixel2Rem(14)} 0;
        font-weight: bold;
      }

      h2 {
        display: block;
        opacity: 0.8;
        font-weight: normal;
        font-size: ${ConvertorPixel2Rem(14)};
        width: 100%;
      }
    }
  }

  div.ActionButton {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: ${ConvertorPixel2Rem(84)};
    background-color: ${themeProvider.day.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: ${ConvertorPixel2Rem(312)};
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
