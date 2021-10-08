import styled from 'styled-components';
import { themeProvider } from '../../../Configs/Themes/themeProvider';
import { ConvertorPixel2Rem } from '../../../Hooks/useDimension';
import Close from '../../../Assets/Images/icons/ic_close.svg';
import RedClose from '../../../Assets/Images/icons/ic_close_red.png';

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
export const Modal = styled.div`
  z-index: 100;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.status ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  div.Modal__Pane {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${themeProvider.day.backgroundColor};
    box-shadow: 0 ${ConvertorPixel2Rem(4)} ${ConvertorPixel2Rem(10)} 3px ${themeProvider.day.modalShadow};
    border-radius: ${ConvertorPixel2Rem(6)};
    width: ${ConvertorPixel2Rem(296)};
    height: ${ConvertorPixel2Rem(189)};

    div.Modal__Pane--CloseButton {
      width: ${ConvertorPixel2Rem(18)};
      height: ${ConvertorPixel2Rem(18)};
      background: url(${Close}) no-repeat;
      background-size: cover;
      position: absolute;
      top: ${ConvertorPixel2Rem(14)};
      right: ${ConvertorPixel2Rem(14)};
    }

    div.Modal__Pane--Icon {
      width: ${ConvertorPixel2Rem(42)};
      height: ${ConvertorPixel2Rem(42)};
      background: url(${RedClose}) no-repeat;
      margin: ${ConvertorPixel2Rem(32)} 0 ${ConvertorPixel2Rem(16)} 0;
      background-size: cover;
    }

    div.Modal__Pane--Information {
      display: block;
      text-align: center;
      width: ${ConvertorPixel2Rem(240)};

      h1 {
        height: ${ConvertorPixel2Rem(24)};
        font-size: ${ConvertorPixel2Rem(18)};
        margin: 0 0 ${ConvertorPixel2Rem(4)} 0;
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
    margin: ${ConvertorPixel2Rem(17)} 0 0 0;

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

  div.ActionButton {
    width: ${ConvertorPixel2Rem(312)};

    div.ActionButton__ResendPin {
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
