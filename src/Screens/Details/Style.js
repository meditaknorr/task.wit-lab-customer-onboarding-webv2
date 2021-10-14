import styled from 'styled-components';
import { themeProvider } from '../../Configs/Themes/themeProvider';
import { ConvertorPixel2Rem } from '../../Hooks/useDimension';
import Remove from '../../Assets/Images/icons/ic_close_square.svg';

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

export const Modal = styled.div`
  z-index: 100;
  position: fixed;
  background-color: ${themeProvider.day.modalColor};
  width: 100%;
  height: 100%;
  display: ${(props) => (props.modalStatus ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  div.Modal__Pane {
    position: relative;
    padding: ${ConvertorPixel2Rem(24)};
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    background-color: ${themeProvider.day.backgroundColor};
    box-shadow: 0 ${ConvertorPixel2Rem(4)} ${ConvertorPixel2Rem(10)} ${ConvertorPixel2Rem(3)} rgba(0, 0, 0, 0.13);
    border-radius: ${ConvertorPixel2Rem(6)};
    width: ${ConvertorPixel2Rem(296)};
    height: ${ConvertorPixel2Rem(210)};

    div.Modal__Pane-Information {
      display: block;
      width: 100%;
      text-align: left;

      h1 {
        width: ${ConvertorPixel2Rem(230)};
        height: ${ConvertorPixel2Rem(24)};
        font-size: ${ConvertorPixel2Rem(18)};
        margin: 0 0 ${ConvertorPixel2Rem(13)} 0;
      }

      h2 {
        width: ${ConvertorPixel2Rem(250)};
        height: ${ConvertorPixel2Rem(40)};
        font-size: ${ConvertorPixel2Rem(14)};
        color: ${themeProvider.day.modalH2Color};
        opacity: 0.8;
      }
    }
    div.Modal__Pane-ActionButton {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 24px 0 0 0;
      width: 100%;

      button {
        width: ${ConvertorPixel2Rem(118)};
        height: ${ConvertorPixel2Rem(44)};
        border-radius: ${ConvertorPixel2Rem(6)};
        background: ${themeProvider.day.modalWhite};
        &:hover {
          cursor: pointer;
        }

        &.Modal__Pane-ActionButton-Delete {
          background: ${themeProvider.day.modalRed};
          color: ${themeProvider.day.modalWhite};
        }
        &.Modal__Pane-ActionButton-Cancel {
          background: ${themeProvider.day.modalWhite};
          color: ${themeProvider.day.modalGrey};
          border: ${ConvertorPixel2Rem(1)} solid ${themeProvider.day.modalGrey};
        }
      }
    }
  }
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
    width: ${ConvertorPixel2Rem(themeProvider.dimensions.childrenWidth)};
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

  div.PhoneDetails {
    width: ${ConvertorPixel2Rem(themeProvider.dimensions.ChildrenWidth)};
    height: ${ConvertorPixel2Rem(80)};
    margin: ${ConvertorPixel2Rem(31)} 0 0 0;
    padding: ${ConvertorPixel2Rem(17)} ${ConvertorPixel2Rem(16)} ${ConvertorPixel2Rem(15)} ${ConvertorPixel2Rem(16)};
    box-shadow: 0 ${ConvertorPixel2Rem(2)} ${ConvertorPixel2Rem(8)} 0 ${themeProvider.day.detailsShadow};
    border-radius: ${ConvertorPixel2Rem(6)};
    text-align: left;

    h3.PhoneDetails__Label {
      color: ${themeProvider.day.phoneNumberLabel};
      font-size: ${ConvertorPixel2Rem(12)};
      font-weight: bolder;
      width: 100%;
      margin: 0;
    }

    h2.PhoneDetails__UserPhone {
      font-size: ${ConvertorPixel2Rem(16)};
      font-weight: bolder;
      width: 100%;
      margin: ${ConvertorPixel2Rem(5)} 0 0 0;
    }
  }

  div.PersonalInformation {
    margin: ${ConvertorPixel2Rem(22)} 0 0 0;
    width: ${ConvertorPixel2Rem(themeProvider.dimensions.childrenWidth)};
    box-shadow: 0 ${ConvertorPixel2Rem(4)} ${ConvertorPixel2Rem(10)} ${ConvertorPixel2Rem(1)} ${themeProvider.day.detailsShadow};
    padding: ${ConvertorPixel2Rem(16)} ${ConvertorPixel2Rem(16)} ${ConvertorPixel2Rem(45)} ${ConvertorPixel2Rem(16)};
    border-radius: ${ConvertorPixel2Rem(6)};

    h3.PersonalInformation__Label {
      font-size: ${ConvertorPixel2Rem(13)};
      color: ${themeProvider.day.phoneNumberLabel};
      font-weight: bold;
      width: 100%;
    }

    div.PersonalInformation__UserDetails-Field {
      position: relative;
      display: inline-block;
      width: ${ConvertorPixel2Rem(300)};
      height: ${ConvertorPixel2Rem(49)};
      margin: ${ConvertorPixel2Rem(16)} 0 0 0;

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
            border: ${ConvertorPixel2Rem(1)} solid ${themeProvider.day.highlightColor}!important;
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
            color: ${(props) => (props.errorOnFirstName && themeProvider.day.errorColor)}!important;
          }

          &.lastName {
            color: ${(props) => (props.errorOnLastName && themeProvider.day.errorColor)}!important;
          }

          &.birthDate {
            color: ${(props) => (props.errorOnBirthDate && themeProvider.day.errorColor)}!important;
          }

          &.birthPlace {
            color: ${(props) => (props.errorOnBirthPlace && themeProvider.day.errorColor)}!important;
          }

          &.humanGender {
            color: ${(props) => (props.errorOnHumanGender && themeProvider.day.errorColor)}!important;
          }

          &.citizenNationality {
            color: ${(props) => (props.errorOnCitizenNationality && themeProvider.day.errorColor)}!important;
          }

          &.voterNumber {
            color: ${(props) => (props.errorOnVoterNumber && themeProvider.day.errorColor)}!important;
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
  }

  div.AttachedPhotos {
    width: ${ConvertorPixel2Rem(themeProvider.dimensions.childrenWidth)};
    margin: ${ConvertorPixel2Rem(20)} 0 ${ConvertorPixel2Rem(150)} 0;
    padding: ${ConvertorPixel2Rem(16)};
    box-shadow: 0 ${ConvertorPixel2Rem(4)} ${ConvertorPixel2Rem(10)} ${ConvertorPixel2Rem(1)} ${themeProvider.day.detailsShadow};
    border-radius: ${ConvertorPixel2Rem(6)};

    h3.AttachedPhotos__Label {
      font-size: ${ConvertorPixel2Rem(13)};
      color: ${themeProvider.day.phoneNumberLabel};
      font-weight: bold;
      width: 100%;
    }

    div.AttachedPhotos__Document-Front, div.AttachedPhotos__Document-Back {
      position: relative;
      display: inline-block;
      margin: ${ConvertorPixel2Rem(10)} ${ConvertorPixel2Rem(16)} ${ConvertorPixel2Rem(16)} 0;
      width: ${ConvertorPixel2Rem(94)};
      height: ${ConvertorPixel2Rem(94)};
      border-radius: ${ConvertorPixel2Rem(6)};
      border: ${ConvertorPixel2Rem(1)} solid ${themeProvider.day.lineColor};

      img {
        width: 100%;
        height: 100%;
        border-radius: ${ConvertorPixel2Rem(6)};
        overflow: hidden;
      }

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
      width: 100%;
      height: ${ConvertorPixel2Rem(280)};
      border-radius: ${ConvertorPixel2Rem(6)};
      border: ${ConvertorPixel2Rem(1)} solid ${themeProvider.day.lineColor};
      margin: 0 auto;

      img {
        width: 100%;
        height: 100%;
        border-radius: ${ConvertorPixel2Rem(6)};
        overflow: hidden;
      }

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
    left: 0;
    width: 100%;
    height: ${ConvertorPixel2Rem(84)};
    background-color: ${themeProvider.day.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: ${ConvertorPixel2Rem(themeProvider.dimensions.childrenWidth)};
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
