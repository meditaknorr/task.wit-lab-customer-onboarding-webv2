import styled from 'styled-components';
import { themeProvider } from '../../../Configs/Themes/themeProvider';
import { ConvertorPixel2Rem } from '../../../Hooks/useDimension';
import CardSuccess from '../../../Assets/Images/icons/ic_illustrations_card_success.png';
import CardError from '../../../Assets/Images/icons/ic_illustrations_card_error.png';

export const ConfirmationScreen = styled.div`
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
  padding: ${ConvertorPixel2Rem(10)} 0;
  display: flex;
  align-items: center;
  justify-content: center;

  div.Confirmation__Pane {
    width: ${ConvertorPixel2Rem(themeProvider.dimensions.ChildrenWidth)};
    height: ${ConvertorPixel2Rem(250.55)};
    padding: 0;
    margin: 0;

    div.Confirmation__Pane-Icon {
      width: ${ConvertorPixel2Rem(150)};
      height: ${ConvertorPixel2Rem(91)};
      background: url(${(props) => (props.submissionStatus ? CardSuccess : CardError)}) no-repeat;
      background-size: contain;
      margin: 0 auto;
    }
    div.Confirmation__Pane-HeadingText {
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
    height: ${ConvertorPixel2Rem(84)};
    background-color: ${themeProvider.day.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: ${ConvertorPixel2Rem(themeProvider.dimensions.ChildrenWidth)};
      margin: 0 ${ConvertorPixel2Rem(24)};
      color: ${themeProvider.day.backgroundColor};
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
