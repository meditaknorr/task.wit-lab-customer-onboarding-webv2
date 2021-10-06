import styled from 'styled-components';
import { themeProvider } from '../../../Configs/Themes/themeProvider';
import { ConvertorPixel2Rem } from '../../../Hooks/useDimension';
import Success from '../../../Assets/Images/icons/ic_check_green.svg';
import Error from '../../../Assets/Images/icons/ic_alert_red.svg';

export const PhoneNumberScreen = styled.div`
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
  width: 100%;
  height: 100%;
  padding: 0 ${ConvertorPixel2Rem(24)};
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow-y: auto;

  div.HeadingText {
    width: ${ConvertorPixel2Rem(themeProvider.dimensions.ChildrenWidth)};
    height: auto;
    color: ${themeProvider.day.fontColor};
    letter-spacing: 0;
    margin: ${ConvertorPixel2Rem(24)} 0 0 0;

    h1 {
      width: 100%;
      min-height: ${ConvertorPixel2Rem(29)};
      font-size: ${ConvertorPixel2Rem(24)};
      line-height: ${ConvertorPixel2Rem(29)};
      font-weight: bold;
    }
    h2 {
      width: 100%;
      font-weight: normal;
      font-size: ${ConvertorPixel2Rem(14)};
      min-height: ${ConvertorPixel2Rem(30)};
      line-height: ${ConvertorPixel2Rem(20)};
      text-align: justify-all;
      display: flex;
      align-items: center;
    }
  }

  div.PhoneNumber {
    position: relative;
    width: ${ConvertorPixel2Rem(themeProvider.dimensions.ChildrenWidth)};
    display: flex;
    justify-content: space-between;
    margin: ${ConvertorPixel2Rem(59)} 0 0 0;
    padding: 0 0 ${ConvertorPixel2Rem(25)} 0;

    div.PhoneNumber__CountryCodeField{
      position: relative;
      display: inline-block;
      height: ${ConvertorPixel2Rem(49)};
      margin: 0 ${ConvertorPixel2Rem(8)} 0 0;

      select.PhoneNumber__CountryCodeField-SelectBox {
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';
        width: ${ConvertorPixel2Rem(96)};
        height: 100%;
        text-align: right;
        background-color: ${themeProvider.day.backgroundColor};
        padding: 0 ${ConvertorPixel2Rem(15)};
        border-radius: ${ConvertorPixel2Rem(6)};
        border: ${ConvertorPixel2Rem(1)} solid ${themeProvider.day.fontColor};
        border-color: ${(props) => props.nationalNumberLenght >= props.nnumberLenght && !props.checkSignal && themeProvider.day.errorColor} !important;
        overflow: hidden;

        option {
          width: ${ConvertorPixel2Rem(100)};
          text-align: right;
        }

        &:focus {
          border: 1px solid ${themeProvider.day.highlightColor};
          font-size: ${ConvertorPixel2Rem(16)};

          & + label {
            display: inline-block;
            color: ${themeProvider.day.highlightColor};
          }
        }

      }

      label.PhoneNumber__CountryCodeField-Label {
        padding: ${ConvertorPixel2Rem(3)};
        background-color: ${themeProvider.day.backgroundColor};
        font-size: ${ConvertorPixel2Rem(12)};
        position: absolute;
        color: ${(props) => props.phoneLength >= props.nnumberLenght && !props.checkSignal && themeProvider.day.errorColor}!important;
        left: ${ConvertorPixel2Rem(10)};
        top: ${ConvertorPixel2Rem(-15)};
      }

      div.PhoneNumber__CountryCodeField-IconFlag {
        width: ${ConvertorPixel2Rem(22)};
        height: ${ConvertorPixel2Rem(22)};
        border-radius: 100%;
        position: absolute;
        left: ${ConvertorPixel2Rem(15)};
        top: ${ConvertorPixel2Rem(12)};
        margin: 0;
        overflow: hidden;

        img {
          margin: ${ConvertorPixel2Rem(-5)} 0 0 0;
          width: ${ConvertorPixel2Rem(25)};
          height: ${ConvertorPixel2Rem(25)};
        }
      }

    }

    div.PhoneNumber__NumberField {
      position: relative;
      display: inline-block;
      width: ${ConvertorPixel2Rem(208)};
      height: ${ConvertorPixel2Rem(49)};

      input.PhoneNumber__NumberField-Input {
        width: ${ConvertorPixel2Rem(208)};
        height: 100%;
        padding: 0 ${ConvertorPixel2Rem(15)};
        border-radius: ${ConvertorPixel2Rem(6)};
        border: ${ConvertorPixel2Rem(1)} solid ${themeProvider.day.fontColor};
        border-color: ${(props) => props.phoneLength >= props.nationalNumberLength && !props.checkSignal && themeProvider.day.errorColor} !important;

        &:focus {
          border: ${ConvertorPixel2Rem(1)} solid ${themeProvider.day.highlightColor};
          font-size: ${ConvertorPixel2Rem(16)};

          & + label {
            display: inline-block;
            color: ${themeProvider.day.highlightColor};
          }

        }

        &::-webkit-input-placeholder {
          color: ${themeProvider.day.disableColor};
        }

        &:-ms-input-placeholder {
          color: ${themeProvider.day.disableColor};
        }

        &::placeholder {
          color: ${themeProvider.day.disableColor};
        }

      }

      label.PhoneNumber__NumberField-Label {
        padding: ${ConvertorPixel2Rem(3)};
        color: ${(props) => props.phoneLength >= props.nationalNumberLength && !props.checkSignal && themeProvider.day.errorColor}!important;
        background-color: ${themeProvider.day.backgroundColor};
        font-size: ${ConvertorPixel2Rem(12)};
        position: absolute;
        left: ${ConvertorPixel2Rem(10)};
        top: ${ConvertorPixel2Rem(-15)};
      }

      div.PhoneNumber__NumberField-Status {
        display: ${(props) => (props.phoneLength >= props.nationalNumberLength ? 'inline-block' : 'none')};
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
      position: absolute;
      left: 0;
      bottom: -3px;
      display: block;
      width: 100%;
      height: ${ConvertorPixel2Rem(30)};
      font-size: ${ConvertorPixel2Rem(14)};
      padding: ${ConvertorPixel2Rem(5)} 0;
      color: ${themeProvider.day.errorColor};
    }
  }

  div.ActionButton {
    width: ${ConvertorPixel2Rem(themeProvider.dimensions.ChildrenWidth)};
    margin: ${ConvertorPixel2Rem(70)} auto ${ConvertorPixel2Rem(20)} auto;

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
