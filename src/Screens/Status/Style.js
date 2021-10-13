import styled from 'styled-components';
import { themeProvider } from '../../Configs/Themes/themeProvider';
import { ConvertorPixel2Rem } from '../../Hooks/useDimension';
import Error from '../../Assets/Images/icons/ic_illustrations_error.svg';
import Success from '../../Assets/Images/icons/ic_illustrations_success.png';
import Waiting from '../../Assets/Images/icons/ic_illustrations_waiting.png';

export const StatusScreen = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "header" "main";
  grid-template-rows: ${ConvertorPixel2Rem(56)} 1fr;
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
  padding: ${ConvertorPixel2Rem(10)} 0;
  display: flex;
  align-items: center;
  justify-content: center;

  div.Status__Pane {
    width: ${ConvertorPixel2Rem(themeProvider.dimensions.childrenWidth)};
    height: ${ConvertorPixel2Rem(250.55)};
    padding: 0;
    margin: 0;

    div.Status__Pane-Icon {
      width: ${ConvertorPixel2Rem(160)};
      height: ${ConvertorPixel2Rem(155)};
      margin: ${ConvertorPixel2Rem(-100)} auto 0 auto;

      &.Error {
        background: url(${Error}) no-repeat center;
        background-size: contain;
      }

      &.Success {
        background: url(${Success}) no-repeat center;
        background-size: contain;
      }

      &.Waiting {
        background: url(${Waiting}) no-repeat center;
        background-size: contain;
      }
    }

    div.Status__Pane-HeadingText {
      color: ${themeProvider.day.fontColor};
      letter-spacing: 0;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: ${ConvertorPixel2Rem(35)} 0 0 0;

      h1 {
        display: block;
        width: ${ConvertorPixel2Rem(300)};
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
        width: ${ConvertorPixel2Rem(280)}
      }
    }
  }

  div.ActionButton {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding:
      0
      ${ConvertorPixel2Rem(themeProvider.dimensions.horizontalMargin)}
      ${ConvertorPixel2Rem(10)}
      ${ConvertorPixel2Rem(themeProvider.dimensions.horizontalMargin)};

    button.ActionButton__Go {
      width: 100%;
      height: ${ConvertorPixel2Rem(44)};
      margin: 0 0 ${ConvertorPixel2Rem(10)} 0;
      border-radius: ${ConvertorPixel2Rem(6)};
      color: ${themeProvider.day.backgroundColor};
      background-color: ${themeProvider.day.highlightColor};
    }

    div.ActionButton__Ghost {
      width: 100%;
      height: ${ConvertorPixel2Rem(44)};
      background-color: ${themeProvider.day.backgroundColor};
      border-radius: ${ConvertorPixel2Rem(6)};
      padding: 0 0 ${ConvertorPixel2Rem(15)} 0;
    }
  }
`;
