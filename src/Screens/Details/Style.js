import styled from 'styled-components';
import { themeProvider } from '../../Configs/Themes/themeProvider';
import { ConvertorPixel2Rem } from '../../Hooks/useDimension';

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
  height: 100vh;
  overflow-y: auto;
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

  div.PhoneDetails {
    overflow: hidden;
    width: ${ConvertorPixel2Rem(312)};
    height: ${ConvertorPixel2Rem(74)};
    margin: ${ConvertorPixel2Rem(31)} 0 ${ConvertorPixel2Rem(22)} 0;
    padding: ${ConvertorPixel2Rem(17)} ${ConvertorPixel2Rem(16)};
    box-shadow: 0 ${ConvertorPixel2Rem(4)} ${ConvertorPixel2Rem(10)} 1px ${themeProvider.day.lineColor};
    border-radius: ${ConvertorPixel2Rem(6)};
    text-align: left;
    h3.PhoneDetails__Label {
      opacity: 0.6;
      font-size: ${ConvertorPixel2Rem(12)};
      height: ${ConvertorPixel2Rem(12)};
      font-weight: bolder;
      width: 100%;
    }
    h2.PhoneDetails__UserPhone {
      font-size: ${ConvertorPixel2Rem(16)};
      height: ${ConvertorPixel2Rem(16)};
      font-weight: bolder;
      width: 100%;
    }
  }

  div.PersonalInformation {
    width: ${ConvertorPixel2Rem(312)};
    min-height: ${ConvertorPixel2Rem(212)};
    box-shadow: 0 ${ConvertorPixel2Rem(4)} ${ConvertorPixel2Rem(10)} 1px ${themeProvider.day.lineColor};
    padding: ${ConvertorPixel2Rem(17)} ${ConvertorPixel2Rem(16)};
    border-radius: ${ConvertorPixel2Rem(6)};

    h3.PersonalInformation__Label {
      opacity: 0.8;
      margin: 0 0 ${ConvertorPixel2Rem(16)} 0;
      font-size: ${ConvertorPixel2Rem(12)};
      height: ${ConvertorPixel2Rem(12)};
      font-weight: bolder;
      width: 100%;
    }

    div.PersonalInformation__UserDetails {
      margin: ${ConvertorPixel2Rem(40)} 0 0 0;

      div.PersonalInformation__UserDetails-Field {
        position: relative;
        display: inline-block;
        width: ${ConvertorPixel2Rem(277)};
        height: ${ConvertorPixel2Rem(49)};
        margin: 0 ${ConvertorPixel2Rem(2)} ${ConvertorPixel2Rem(24)} ${ConvertorPixel2Rem(2)};
        form {
          width: 100%;
          div.Field {
            position: relative;
            width: 100%;
            height: ${ConvertorPixel2Rem(49)};
            margin: 0 0 ${ConvertorPixel2Rem(24)} 0;

            input {
              width: 100%;
              height: 100%;
              padding: 0 ${ConvertorPixel2Rem(15)};
              border-radius: ${ConvertorPixel2Rem(6)};
              border: ${ConvertorPixel2Rem(1)} solid ${themeProvider.day.fontColor};

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

            label {
              padding: ${ConvertorPixel2Rem(3)};
              background-color: ${themeProvider.day.backgroundColor};
              font-size: ${ConvertorPixel2Rem(12)};
              position: absolute;
              left: ${ConvertorPixel2Rem(10)};
              top: ${ConvertorPixel2Rem(-15)};
            }
          }
        }
      }
    }
  }

  div.ActionButton {
    display: none;
    position: relative;
    width: ${ConvertorPixel2Rem(312)};
    margin: 0 auto;
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
