import styled from 'styled-components';
import { themeProvider } from '../../../Configs/Themes/themeProvider';
import { ConvertorPixel2Rem } from '../../../Hooks/useDimension';
import Remove from '../../../Assets/Images/icons/ic_close_square.svg';

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

        &::-webkit-input-placeholder {
          color: ${themeProvider.day.disableColor};
        }

        &:-ms-input-placeholder {
          color: ${themeProvider.day.disableColor};
        }

        &::placeholder {
          color: ${themeProvider.day.disableColor};
        }

        &#firstName {
          border: ${ConvertorPixel2Rem(1)} solid ${(props) => (props.errorOnFirstName && themeProvider.day.errorColor)};
        }

        &#lastName {
          border: ${ConvertorPixel2Rem(1)} solid ${(props) => (props.errorOnLastName && themeProvider.day.errorColor)};
        }

        &#birthDate {
          border: ${ConvertorPixel2Rem(1)} solid ${(props) => (props.errorOnBirthDate && themeProvider.day.errorColor)};
        }

        &#birthPlace {
          border: ${ConvertorPixel2Rem(1)} solid ${(props) => (props.errorOnBirthPlace && themeProvider.day.errorColor)};
        }

        &#humanGender {
          border: ${ConvertorPixel2Rem(1)} solid ${(props) => (props.errorOnHumanGender && themeProvider.day.errorColor)};
        }

        &#citizenNationality {
          border: ${ConvertorPixel2Rem(1)} solid ${(props) => (props.errorOnCitizenNationality && themeProvider.day.errorColor)};
        }

        &#voterNumber {
          border: ${ConvertorPixel2Rem(1)} solid ${(props) => (props.errorOnVoterNumber && themeProvider.day.errorColor)};
        }
      }

      label {
        padding: ${ConvertorPixel2Rem(3)};
        background-color: ${themeProvider.day.backgroundColor};
        font-size: ${ConvertorPixel2Rem(12)};
        position: absolute;
        left: ${ConvertorPixel2Rem(10)};
        top: ${ConvertorPixel2Rem(-15)};

        &.firstName {
          color: ${(props) => (props.errorOnFirstName && themeProvider.day.errorColor)} !important;
        }

        &.lastName {
          color: ${(props) => (props.errorOnLastName && themeProvider.day.errorColor)} !important;
        }

        &.birthDate {
          color: ${(props) => (props.errorOnBirthDate && themeProvider.day.errorColor)} !important;
        }

        &.birthPlace {
          color: ${(props) => (props.errorOnBirthPlace && themeProvider.day.errorColor)} !important;
        }

        &.humanGender {
          color: ${(props) => (props.errorOnHumanGender && themeProvider.day.errorColor)} !important;
        }

        &.citizenNationality {
          color: ${(props) => (props.errorOnCitizenNationality && themeProvider.day.errorColor)} !important;
        }

        &.voterNumber {
          color: ${(props) => (props.errorOnVoterNumber && themeProvider.day.errorColor)} !important;
        }
      }

      div.InputBox__Error {
        position: absolute;
        bottom: ${ConvertorPixel2Rem(8)};
        right: ${ConvertorPixel2Rem(15)};
        text-align: right;
        font-style: italic;
        font-size: ${ConvertorPixel2Rem(10)};
        color: ${themeProvider.day.errorColor};
      }
    }
  }

  div.AttachedPhotos {
    width: ${ConvertorPixel2Rem(312)};
    margin: ${ConvertorPixel2Rem(16)} 0 ${ConvertorPixel2Rem(100)} 0;
    padding: ${ConvertorPixel2Rem(17)} ${ConvertorPixel2Rem(16)};
    box-shadow: 0 ${ConvertorPixel2Rem(4)} ${ConvertorPixel2Rem(10)} 1px ${themeProvider.day.lineColor};
    border-radius: ${ConvertorPixel2Rem(6)};

    h3.AttachedPhotos__Label {
      opacity: 0.8;
      margin: 0 0 ${ConvertorPixel2Rem(16)} 0;
      font-size: ${ConvertorPixel2Rem(12)};
      height: ${ConvertorPixel2Rem(12)};
      font-weight: bolder;
      width: 100%;
    }

    div.AttachedPhotos__Document-Front, div.AttachedPhotos__Document-Back {
      position: relative;
      display: inline-block;
      border-radius: ${ConvertorPixel2Rem(6)};
      margin: ${ConvertorPixel2Rem(16)} ${ConvertorPixel2Rem(16)} ${ConvertorPixel2Rem(16)} 0;
      width: ${ConvertorPixel2Rem(94)};
      height: ${ConvertorPixel2Rem(94)};
      border: ${ConvertorPixel2Rem(1)} solid ${themeProvider.day.lineColor};

      div.DocumentFront-Remover, div.DocumentBack-Remover {
        width: ${ConvertorPixel2Rem(24)};
        height: ${ConvertorPixel2Rem(24)};
        border: ${ConvertorPixel2Rem(1)} solid ${themeProvider.day.lineColor};
        border-radius: 50%;
        background: url(${Remove});
        background-size: contain;
        position: absolute;
        cursor: pointer;
        right: ${ConvertorPixel2Rem(-12)};
        top: ${ConvertorPixel2Rem(-12)};
        &:hover {
          cursor: pointer;
        }
      }
    }

    div.AttachedPhotos__Selfie {
      display: block;
      position: relative;
      border-radius: ${ConvertorPixel2Rem(6)};
      width: ${ConvertorPixel2Rem(280)};
      height: ${ConvertorPixel2Rem(280)};
      border: ${ConvertorPixel2Rem(1)} solid ${themeProvider.day.lineColor};
      margin: 0 auto;

      div.Selfie-Remover {
        width: ${ConvertorPixel2Rem(24)};
        height: ${ConvertorPixel2Rem(24)};
        border: ${ConvertorPixel2Rem(1)} solid ${themeProvider.day.lineColor};
        border-radius: 50%;
        background: url(${Remove});
        background-size: contain;
        position: absolute;
        right: ${ConvertorPixel2Rem(-8)};
        top: ${ConvertorPixel2Rem(-8)};
        &:hover {
          cursor: pointer;
        }
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
