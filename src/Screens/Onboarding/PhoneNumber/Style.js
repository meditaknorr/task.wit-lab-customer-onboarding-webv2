import styled from 'styled-components';
import { themeProvider } from '../../../Configs/Themes/themeProvider';
import { ConvertorPixel2Rem } from '../../../Hooks/useDimension';
import Success from '../../../Assets/Images/icons/ic_check_green.svg';
import Error from '../../../Assets/Images/icons/ic_alert_red.svg';

export const PhoneNumberScreen = styled.div`
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
  flex-flow: column;

  div.HeadingText {
    width: ${ConvertorPixel2Rem(312)};
    color: rgba(${themeProvider.day.fontColor}, 1.0);
    letter-spacing: 0;
    margin: ${ConvertorPixel2Rem(17)} 0 0 0;

    h1 {
      width: 100%;
      height: ${ConvertorPixel2Rem(60)};
      font-size: ${ConvertorPixel2Rem(24)};
      line-height: ${ConvertorPixel2Rem(29)};
      margin: 0 0 ${ConvertorPixel2Rem(20)} 0;
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

  div.PhoneNumber {
    width: ${ConvertorPixel2Rem(315)};
    margin: ${ConvertorPixel2Rem(59)} 0 ${ConvertorPixel2Rem(70)} 0;
    div.PhoneNumber__CountryCodeField{
      position: relative;
      display: inline-block;
      width: ${ConvertorPixel2Rem(96)};
      height: ${ConvertorPixel2Rem(49)};
      margin: 0 ${ConvertorPixel2Rem(10)} 0 0;
      select.PhoneNumber__CountryCodeField-SelectBox {
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';
        width: 100%;
        height: 100%;
        text-align: right;
        background-color: ${themeProvider.day.backgroundColor};
        padding: 0 ${ConvertorPixel2Rem(15)};
        border-radius: ${ConvertorPixel2Rem(6)};
        border: ${ConvertorPixel2Rem(1)} solid rgba(${themeProvider.day.fontColor}, 1.0);
        overflow: hidden;
        option {
          width: 100px;
          text-align: right;
        }
      }
      label.PhoneNumber__CountryCodeField-Label {
        padding: ${ConvertorPixel2Rem(3)};
        background-color: ${themeProvider.day.backgroundColor};
        font-size: ${ConvertorPixel2Rem(12)};
        position: absolute;
        left: ${ConvertorPixel2Rem(10)};
        top: ${ConvertorPixel2Rem(-15)};
      }
      div.PhoneNumber__CountryCodeField-IconFlag {
        width: ${ConvertorPixel2Rem(22)};
        height: ${ConvertorPixel2Rem(22)};
        border-radius: ${ConvertorPixel2Rem(11.66)};
        background-size: cover;
        position: absolute;
        left: ${ConvertorPixel2Rem(15)};
        top: ${ConvertorPixel2Rem(11)};
        margin: 0;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    div.PhoneNumber__NumberField {
      position: relative;
      display: inline-block;
      width: ${ConvertorPixel2Rem(208)};
      height: ${ConvertorPixel2Rem(49)};
      input.PhoneNumber__NumberField-Input {
        width: 100%;
        height: 100%;
        padding: 0 ${ConvertorPixel2Rem(15)};
        border-radius: ${ConvertorPixel2Rem(6)};
        border: ${ConvertorPixel2Rem(1)} solid rgba(${themeProvider.day.fontColor}, 1.0);
        &:focus {
          border: 1px solid rgba(${themeProvider.day.highlightColor}, 1.0);
          font-size: ${ConvertorPixel2Rem(16)};
          & + label {
            display: inline-block;
            color: rgba(${themeProvider.day.highlightColor}, 1.0);
          }
        }
        &::-webkit-input-placeholder {
          color: rgba(${themeProvider.day.disableColor}, 1.0);
        }
        &:-ms-input-placeholder {
          color: rgba(${themeProvider.day.disableColor}, 1.0);
        }
        &::placeholder {
          color: rgba(${themeProvider.day.disableColor}, 1.0);
        }
      }
      label.PhoneNumber__NumberField-Label {
        padding: ${ConvertorPixel2Rem(3)};
        color: (${(props) => (props.checkSignal ? Success : Error)}) no-repeat;
        background-color: ${themeProvider.day.backgroundColor};
        font-size: ${ConvertorPixel2Rem(12)};
        position: absolute;
        left: ${ConvertorPixel2Rem(10)};
        top: ${ConvertorPixel2Rem(-15)};
      }
      div.PhoneNumber__NumberField-Status {
        display: ${(props) => (props.phoneLength >= props.nnumberLenght ? 'inline-block' : 'none')};
        width: ${ConvertorPixel2Rem(20)};
        height: ${ConvertorPixel2Rem(20)};
        background: url(${(props) => (props.checkSignal ? Success : Error)}) no-repeat;
        background-size: cover;
        position: absolute;
        right: ${ConvertorPixel2Rem(15)};
        top: ${ConvertorPixel2Rem(14)};
      }
    }
    div.PhoneNumber__ErrorText {
      display: block;
      width: ${ConvertorPixel2Rem(200)};
      height: ${ConvertorPixel2Rem(30)};
      font-size: ${ConvertorPixel2Rem(14)};
      padding: ${ConvertorPixel2Rem(5)} 0;
      color: rgba(${themeProvider.day.errorColor}, 1.0);
    }
  }

  div.ActionButton {
    width: ${ConvertorPixel2Rem(315)};
    margin: 0 auto;
    button {
      width: 100%;
      background-color: rgba(${themeProvider.day.highlightColor});
      font-size: ${ConvertorPixel2Rem(16)};
      height: ${ConvertorPixel2Rem(44)};
      border-radius: ${ConvertorPixel2Rem(6)};
      border: 0;
      &[disabled] {
        background-color: rgba(${themeProvider.day.disableColor});
      }
    }
  }
`;
