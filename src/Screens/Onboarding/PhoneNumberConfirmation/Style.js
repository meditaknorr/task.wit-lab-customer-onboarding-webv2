import styled from 'styled-components';
import { themeProvider } from '../../../Configs/Themes/themeProvider';
import { ConvertorPixel2Rem } from '../../../Hooks/useDimension';
import Close from '../../../Assets/Images/icons/ic_close.svg';
import RedClose from '../../../Assets/Images/icons/ic_close_red.png';
import ModalCard from '../../../Assets/Images/icons/modal_card_elevetaion.svg';

export const PhoneNumberConfirmationScreen = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "header" "main";
  grid-template-rows: ${ConvertorPixel2Rem(56)} 1fr;
  grid-template-columns: 1fr;
  grid-gap: 0;
  row-gap: 0;
`;

export const Modal = styled.div`
  z-index: 100;
  position: fixed;
  background-color: ${themeProvider.day.modalColor};
  width: 100%;
  height: 100%;
  display: ${(props) => (props.status ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  div.Modal__Pane {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: ${ConvertorPixel2Rem(6)};
    width: ${ConvertorPixel2Rem(296)};
    height: ${ConvertorPixel2Rem(189)};

    div.Modal__Pane-Card {
      position: absolute;
      top: -46px;
      background: url(${ModalCard}) no-repeat center;
      background-size: contain;
      width: ${ConvertorPixel2Rem(450)};
      height: ${ConvertorPixel2Rem(300)};
    }

    div.Modal__Pane-CloseButton {
      width: ${ConvertorPixel2Rem(18)};
      height: ${ConvertorPixel2Rem(18)};
      background: url(${Close}) no-repeat;
      background-size: cover;
      position: absolute;
      top: ${ConvertorPixel2Rem(14)};
      right: ${ConvertorPixel2Rem(14)};

    }

    div.Modal__Pane-Icon {
      position: relative;
      width: ${ConvertorPixel2Rem(43)};
      height: ${ConvertorPixel2Rem(43)};
      background: url(${RedClose}) no-repeat center;
      background-size: contain;
      margin: ${ConvertorPixel2Rem(32)} 0 ${ConvertorPixel2Rem(16)} 0;
      overflow: visible;
    }

    div.Modal__Pane-Information {
      position: relative;
      display: block;
      text-align: center;
      width: ${ConvertorPixel2Rem(240)};
      margin: 0 0 ${ConvertorPixel2Rem(30)} 0;

      h1 {
        height: ${ConvertorPixel2Rem(24)};
        line-height: ${ConvertorPixel2Rem(24)};
        font-size: ${ConvertorPixel2Rem(18)};
        margin: 0 0 ${ConvertorPixel2Rem(4)} 0;
        letter-spacing: ${ConvertorPixel2Rem(0.17)};
      }

      h2 {
        height: ${ConvertorPixel2Rem(40)};
        font-size: ${ConvertorPixel2Rem(14)};
        color: ${themeProvider.day.modalH2Color};
        opacity: 0.8;
      }
    }
  }
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
    margin: ${ConvertorPixel2Rem(24)} 0 0 0;

    h1 {
      text-align: left;
      width: 100%;
      min-height: ${ConvertorPixel2Rem(29)};
      font-size: ${ConvertorPixel2Rem(24)};
      line-height: ${ConvertorPixel2Rem(29)};
      font-weight: bold;
    }
    h2 {
      margin: ${ConvertorPixel2Rem(14)} 0 0 0;
      font-weight: normal;
      text-align: justify-all;
      width: 100%;
      font-size: ${ConvertorPixel2Rem(14)};
      min-height: ${ConvertorPixel2Rem(30)};
      line-height: ${ConvertorPixel2Rem(20)};
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

      &::-moz-selection {
        background: ${themeProvider.day.backgroundColor};
      }

      &::selection {
        background: ${themeProvider.day.backgroundColor};
      }
    }
  }

  div.ActionButton {
    width: ${ConvertorPixel2Rem(themeProvider.dimensions.childrenWidth)};
    margin: ${ConvertorPixel2Rem(70)} auto ${ConvertorPixel2Rem(20)} auto;

    div.ActionButton__ResendPin {
      width: 80%;
      text-align: center;
      height: ${ConvertorPixel2Rem(17)};
      line-height: ${ConvertorPixel2Rem(17)};
      font-size: ${ConvertorPixel2Rem(14)};
      margin: 0 auto ${ConvertorPixel2Rem(16)} auto;
      color: ${themeProvider.day.errorColor};
    }
    button {
      width: 100%;
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
