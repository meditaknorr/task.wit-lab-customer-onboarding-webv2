import styled from 'styled-components';
import { themeProvider } from '../../Configs/Themes/themeProvider';
import { ConvertorPixel2Rem } from '../../Hooks/useDimension';
import Validate from '../../Assets/Images/icons/ic_details.png';
import Scan from '../../Assets/Images/icons/ic_scan.png';
import Selfie from '../../Assets/Images/icons/ic_selfie.png';

export const OnboardingScreen = styled.div`
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
  overflow-y: auto;
  height: 100%;
  width: 100%;

  div.HeadingText {
    padding: 0 ${ConvertorPixel2Rem(themeProvider.dimensions.horizontalMargin)};
    width: ${ConvertorPixel2Rem(themeProvider.dimensions.childrenWidth)};
    height: ${ConvertorPixel2Rem(80)};
    margin: ${ConvertorPixel2Rem(41.5)} 0 ${ConvertorPixel2Rem(38)} 0;
    font-family: Inter, sans-serif;
    letter-spacing: 0;

    h1 {
      height: ${ConvertorPixel2Rem(36)};;
      font-weight: bold;
      color: ${themeProvider.day.fontColor};
      line-height: ${ConvertorPixel2Rem(36)};
      font-size: ${ConvertorPixel2Rem(32)};

      &:nth-of-type(2) {
        color: ${themeProvider.day.highlightColor};
      }
    }
  }

  h2 {
    padding: 0 ${ConvertorPixel2Rem(themeProvider.dimensions.horizontalMargin)};
    width: ${ConvertorPixel2Rem(themeProvider.dimensions.childrenWidth)};
    height: ${ConvertorPixel2Rem(25)};
    font-size: ${ConvertorPixel2Rem(16)};
    font-weight: normal;
    display: flex;
    align-items: center;
  }

  div.Registration {
    padding: 0 ${ConvertorPixel2Rem(themeProvider.dimensions.horizontalMargin)};
    width: ${ConvertorPixel2Rem(themeProvider.dimensions.childrenWidth)};
    min-height: ${ConvertorPixel2Rem(180)};
    display: flex;
    flex-flow: column;
    margin: ${ConvertorPixel2Rem(36)} 0 0 0;

    div.Registration-Step {
      width: 100%;
      height: ${ConvertorPixel2Rem(34)};
      margin: ${ConvertorPixel2Rem(36)} 0 0 0;
      display: flex;
      align-items: center;

      p {
        width: 100%;
        height: ${ConvertorPixel2Rem(34)};
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
      }

      div {
        width: ${ConvertorPixel2Rem(34)};
        height: ${ConvertorPixel2Rem(34)};
        margin: 0 ${ConvertorPixel2Rem(25)} 0 0;
      }

      &:nth-of-type(1) {
        div.Registration-Step__Icon {
          background: url(${Validate}) no-repeat center;
          background-size: contain;
        }
      }

      &:nth-of-type(2) {
        div.Registration-Step__Icon {
          background: url(${Scan}) no-repeat center;
          background-size: contain;
        }
      }

      &:nth-of-type(3) {
        div.Registration-Step__Icon {
          background: url(${Selfie}) no-repeat center;
          background-size: contain;
        }
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

    button.ActionButton__StartRegistration {
      width: 100%;
      height: ${ConvertorPixel2Rem(44)};
      margin: 0 0 ${ConvertorPixel2Rem(10)} 0;
      border-radius: ${ConvertorPixel2Rem(6)};
      color: ${themeProvider.day.backgroundColor};
      background-color: ${themeProvider.day.highlightColor};
    }

    button.ActionButton__CheckStatus {
      width: 100%;
      height: ${ConvertorPixel2Rem(44)};
      background-color: ${themeProvider.day.backgroundColor};
      border-radius: ${ConvertorPixel2Rem(6)};
      padding: 0 0 ${ConvertorPixel2Rem(15)} 0;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        text-align: right;
        &:nth-of-type(2) {
          text-align: left;
          color: ${themeProvider.day.highlightColor};
          margin: 0 0 0 ${ConvertorPixel2Rem(5)};
        }
      }
    }
  }
`;
