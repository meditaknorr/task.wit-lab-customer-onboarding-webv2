import styled from 'styled-components';
import { themeProvider } from '../../../Configs/Themes/themeProvider';
import { ConvertorPixel2Rem } from '../../../Hooks/useDimension';

export const DetailsScreen = styled.div`
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
  padding: 0 ${ConvertorPixel2Rem(24)} 0 ${ConvertorPixel2Rem(24)};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  div.HeadingText {
    width: ${ConvertorPixel2Rem(themeProvider.dimensions.ChildrenWidth)};
    margin: ${ConvertorPixel2Rem(25)} 0 0 0;
    letter-spacing: 0;

    h1 {
      width: 100%;
      min-height: ${ConvertorPixel2Rem(29)};
      font-size: ${ConvertorPixel2Rem(24)};
      line-height: ${ConvertorPixel2Rem(29)};
      font-weight: bold;
    }

    h2 {
      margin: ${ConvertorPixel2Rem(10)} 0 0 0;
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

  div.AdditionalInformation {
    width: ${ConvertorPixel2Rem(themeProvider.dimensions.ChildrenWidth)};
    margin: ${ConvertorPixel2Rem(31)} 0 0 0;
    padding: ${ConvertorPixel2Rem(17)} ${ConvertorPixel2Rem(16)} ${ConvertorPixel2Rem(15)} ${ConvertorPixel2Rem(16)};
    box-shadow: 0 ${ConvertorPixel2Rem(2)} ${ConvertorPixel2Rem(8)} 0 ${themeProvider.day.detailsShadow};
    border-radius: ${ConvertorPixel2Rem(6)};
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    h3.AdditionalInformation__Label {
      opacity: 0.8;
      margin: 0 0 ${ConvertorPixel2Rem(32)} 0;
      font-size: ${ConvertorPixel2Rem(12)};
      height: ${ConvertorPixel2Rem(12)};
      font-weight: bolder;
      width: 100%;
    }

    div.InputBox {
      position: relative;
      width: 100%;
      margin: 0 0 ${ConvertorPixel2Rem(29)} 0;

      &.number, &.postCode {
        width: ${ConvertorPixel2Rem(140)};
      }

      input {
        width: 100%;
        height: ${ConvertorPixel2Rem(49)};
        padding: 0 ${ConvertorPixel2Rem(15)};
        border-radius: ${ConvertorPixel2Rem(6)};
        border: ${ConvertorPixel2Rem(1)} solid ${themeProvider.day.fontColor};

        &:focus {
          border: ${ConvertorPixel2Rem(1)} solid ${themeProvider.day.highlightColor} !important;
          font-size: ${ConvertorPixel2Rem(16)};

          & + label {
            display: inline-block;
            color: ${themeProvider.day.highlightColor};
          }
        }

        &:placeholder-shown + label {
          display: none;
        }

        &::-webkit-input-placeholder, &:-ms-input-placeholder , &::placeholder {
          color: ${themeProvider.day.disableColor};
        }

        &#address {
          border: ${ConvertorPixel2Rem(1)} solid ${(props) => (props.errorOnAddress && themeProvider.day.errorColor)};
        }

        &#number {
          border: ${ConvertorPixel2Rem(1)} solid ${(props) => (props.errorOnNumber && themeProvider.day.errorColor)};
        }

        &#postCode {
          border: ${ConvertorPixel2Rem(1)} solid ${(props) => (props.errorOnPostCode && themeProvider.day.errorColor)};
        }

        &#town {
          border: ${ConvertorPixel2Rem(1)} solid ${(props) => (props.errorOnTown && themeProvider.day.errorColor)};
        }

        &#district {
          border: ${ConvertorPixel2Rem(1)} solid ${(props) => (props.errorOnDistrict && themeProvider.day.errorColor)};
        }
      }

      label {
        padding: ${ConvertorPixel2Rem(3)};
        background-color: ${themeProvider.day.backgroundColor};
        font-size: ${ConvertorPixel2Rem(12)};
        position: absolute;
        left: ${ConvertorPixel2Rem(10)};
        top: ${ConvertorPixel2Rem(-15)};

        &.address {
          color: ${(props) => (props.errorOnAddress && themeProvider.day.errorColor)} !important;
        }

        &.number {
          color: ${(props) => (props.errorOnNumber && themeProvider.day.errorColor)} !important;
        }

        &.postCode {
          color: ${(props) => (props.errorOnPostCode && themeProvider.day.errorColor)} !important;
        }

        &.town {
          color: ${(props) => (props.errorOnTown && themeProvider.day.errorColor)} !important;
        }

        &.district {
          color: ${(props) => (props.errorOnDistrict && themeProvider.day.errorColor)} !important;
        }
      }

      div.InputBox__Error {
        position: absolute;
        bottom: ${ConvertorPixel2Rem(5)};
        right: ${ConvertorPixel2Rem(13)};
        text-align: right;
        font-style: italic;
        font-size: ${ConvertorPixel2Rem(10)};
        color: ${themeProvider.day.errorColor};
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
      width: 312px;
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
