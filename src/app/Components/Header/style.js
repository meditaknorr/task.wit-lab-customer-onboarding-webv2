import styled from 'styled-components';
import { ConvertorPixel2Rem } from '../../Hooks/useDimension';
import { themeProvider } from '../../Configs/Themes/themeProvider';
import ArrowDown from '../../Assets/Images/icons/ic_chevron_down.svg';
import ArrowLeft from '../../Assets/Images/icons/ic_arrow_left.svg';

export const AppHeader = styled.header`
  grid-area: header;
  width: 100%;
  height: ${ConvertorPixel2Rem(56)};
  padding: 0 ${ConvertorPixel2Rem(24)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* image size scalled to try fit well on screen*/
  div.App-logo {
    display: ${(props) => (props.logo ? 'inline-block' : 'none')};
    width: ${ConvertorPixel2Rem(35)};
    height: ${ConvertorPixel2Rem(25)};
  }

  div.App-BackButton {
    display: ${(props) => (props.backbutton ? 'flex' : 'none')};
    width: ${ConvertorPixel2Rem(24)};
    height: ${ConvertorPixel2Rem(24)};
    background: url(${ArrowLeft}) no-repeat center;
    background-size: contain;
    align-items: center;
    justify-content: flex-start;
  }

  div.App-ScreenLabel {
    display: ${(props) => (props.screenlabel ? 'flex' : 'none')};
    width: ${ConvertorPixel2Rem(200)};
    height: ${ConvertorPixel2Rem(42)};
    font-size: ${ConvertorPixel2Rem(16)};
    font-weight: 400;
    align-items: center;
    justify-content: center;
  }

  /* font size scalled up to try fit well on screens*/
  div.App-LanguageSwitcher {
    position: relative;
    display: ${(props) => (props.languagebutton ? 'flex' : 'none')};
    width: ${ConvertorPixel2Rem(50)};
    height: ${ConvertorPixel2Rem(42)};
    font-size: ${ConvertorPixel2Rem(14)};
    padding: 0 0 0 ${ConvertorPixel2Rem(15)}!important;
    align-items: center;
    justify-content: space-between;

    span.App-Language__Current {
      color: inherit;
      text-transform: uppercase;
    }

    div.App-Language__ArrowDown {
      position: absolute;
      right: 0;
      bottom: ${ConvertorPixel2Rem(12)};
      width: ${ConvertorPixel2Rem(14)};
      height: ${ConvertorPixel2Rem(14)};
      background: url(${ArrowDown}) no-repeat center;
      background-size: contain;
    }

    div.App-Language__Trigger {
      position: absolute;
      top: ${ConvertorPixel2Rem(38)};
      right: ${ConvertorPixel2Rem(-10)};
      display: ${(props) => (props.trigger ? 'inline-block' : 'none')};
      box-shadow: 0 ${ConvertorPixel2Rem(4)} ${ConvertorPixel2Rem(10)} 0 rgba(${themeProvider.day.fontColor}, 0.32);
      border-radius: ${ConvertorPixel2Rem(7)};
      width: ${ConvertorPixel2Rem(180)};
      z-index: 100;
      overflow: hidden;

      div.Trigger-Pane {
        background: ${themeProvider.day.backgroundColor};
        list-style: none;
        width: 100%;
        margin: 0;
        padding: 0;
        border: 0;
        div.Trigger-Pane__Option {
          width: 100%;
          text-transform: uppercase;
          height: ${ConvertorPixel2Rem(47)};
          padding: 0 ${ConvertorPixel2Rem(10)};
          border: ${ConvertorPixel2Rem(1)} solid rgba(${themeProvider.day.fontColor}, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          &:hover {
            cursor: pointer;
          }
          div.Pane-IconFlag {
            width: ${ConvertorPixel2Rem(27)};
            height: ${ConvertorPixel2Rem(27)};
            border-radius: ${ConvertorPixel2Rem(17.5)};
            border: 1px solid red;
          }
          span.Pane-Name {
            width: 100px;
            height: ${ConvertorPixel2Rem(27)};
            padding: 0 ${ConvertorPixel2Rem(5)};
            border: ${ConvertorPixel2Rem(1)} solid red;
            text-transform: capitalize;
          }
          div.Pane-Check {
            width: ${ConvertorPixel2Rem(27)};
            height: ${ConvertorPixel2Rem(27)};
            border: 1px solid red;
          }
        }
      }
    }
  }

  div.App-ProgressBar {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${ConvertorPixel2Rem(2)};
  }
`;
