import styled from 'styled-components';
import { themeProvider } from '../../Configs/Themes/themeProvider';
import { ConvertorPixel2Rem } from '../../Hooks/useDimension';
import Validate from '../../Assets/Images/icons/ic_details.png';
import Scan from '../../Assets/Images/icons/ic_scan.png';
import Selfie from '../../Assets/Images/icons/ic_selfie.png';

export const OnborardingScreen = styled.div`
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
  padding: ${ConvertorPixel2Rem(27)};
  display: flex;
  align-items: center;
  flex-flow: column;

  div.HeadingText {
    font-size: ${ConvertorPixel2Rem(32)};
    font-weight: bold;
    line-height: ${ConvertorPixel2Rem(40)};
    height: ${ConvertorPixel2Rem(80)};
    width: ${ConvertorPixel2Rem(312)};
    color: ${themeProvider.day.fontColor};
    letter-spacing: 0;
    margin: ${ConvertorPixel2Rem(17)} 0 ${ConvertorPixel2Rem(40)} 0;

    h1:nth-of-type(2) {
      width: 100%;
      font-size: ${ConvertorPixel2Rem(32)};
      color: ${themeProvider.day.highlightColor};
      font-weight: bolder;
    }
  }

  h2 {
    font-size: ${ConvertorPixel2Rem(16)};
    font-weight: normal;
    height: ${ConvertorPixel2Rem(25)};
    width: ${ConvertorPixel2Rem(312)};
    display: flex;
    align-items: center;
  }

  div.Registration {
    width: ${ConvertorPixel2Rem(312)};
    height: ${ConvertorPixel2Rem(180)};
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin: ${ConvertorPixel2Rem(36)} 0 ${ConvertorPixel2Rem(100)} 0;

    div.Registration-Step {
      width: 100%;
      height: ${ConvertorPixel2Rem(34)};
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
      &:nth-of-type(1) {
        div.Registration-Step__Icon {
          width: ${ConvertorPixel2Rem(34)};
          height: ${ConvertorPixel2Rem(34)};
          margin: 0 ${ConvertorPixel2Rem(20)} 0 0;
          background: url(${Validate}) no-repeat center;
          background-size: contain;
        }
      }
      &:nth-of-type(2) {
        div.Registration-Step__Icon {
          width: ${ConvertorPixel2Rem(34)};
          height: ${ConvertorPixel2Rem(34)};
          margin: 0 ${ConvertorPixel2Rem(20)} 0 0;
          background: url(${Scan}) no-repeat center;
          background-size: contain;
        }
      }
      &:nth-of-type(3) {
        div.Registration-Step__Icon {
          width: ${ConvertorPixel2Rem(34)};
          height: ${ConvertorPixel2Rem(34)};
          margin: 0 ${ConvertorPixel2Rem(20)} 0 0;
          background: url(${Selfie}) no-repeat center;
          background-size: contain;
        }
      }
    }
  }

  div.ActionButton {
    width: ${ConvertorPixel2Rem(312)};

    button.ActionButton-StartRegistration {
      width: 100%;
      height: ${ConvertorPixel2Rem(44)}
      margin: 0 0 ${ConvertorPixel2Rem(15)} 0;
      background-color: ${themeProvider.day.highlightColor};
    }
    div.ActionButton-CheckStatus {
      width: 100%;
      font-size: ${ConvertorPixel2Rem(16)};
      height: ${ConvertorPixel2Rem(44)};
      margin: ${ConvertorPixel2Rem(14)} 0 0 0;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        text-align: right;
        &:nth-of-type(2) {
          text-align: left;
          color: ${themeProvider.day.highlightColor};
          margin: 0 0 0 ${ConvertorPixel2Rem(10)};
        }
      }
    }
  }
`;
