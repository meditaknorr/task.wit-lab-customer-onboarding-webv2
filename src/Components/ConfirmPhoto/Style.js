import styled from 'styled-components';
import { ConvertorPixel2Rem } from '../../Hooks/useDimension';
import { themeProvider } from '../../Configs/Themes/themeProvider';

export const PhotoConfirmationScreen = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "header" "main";
  grid-template-rows: ${ConvertorPixel2Rem(56)} 1fr;
  grid-template-columns: 1fr;
  grid-gap: 0;
  row-gap: 0;
`;

export const Main = styled.div`
    grid-area: main;
    display: grid;
    height: auto;
    justify-content: center;
    grid-template-columns: 100%;
    align-content: space-between;
    grid-gap: ${ConvertorPixel2Rem(10)};
    overflow-x: hidden;
    text-align: center;
    font-family: 'Inter', sans-serif;

    .confirm-photo__description {
      width: 312px;
      text-align: center;
      padding: 0 ${ConvertorPixel2Rem(24)};
      margin: ${ConvertorPixel2Rem(58)} auto 0 auto;
      font-weight: bold;
      font-size: ${ConvertorPixel2Rem(18)};
      line-height: 1.3;
      color: ${themeProvider.day.fontColor};
    }

    .confirm-photo__image-wrapper {
      padding: ${({ overlayMode }) => (overlayMode === 0 ? ConvertorPixel2Rem(15) : ConvertorPixel2Rem(10))};
      ${({ overlayMode }) => (overlayMode === 0
    ? `height: ${ConvertorPixel2Rem(206)}; width: ${ConvertorPixel2Rem(298)};`
    : `height: ${ConvertorPixel2Rem(236)}; width: ${ConvertorPixel2Rem(236)};`)};
      margin: ${ConvertorPixel2Rem(41)} auto ${ConvertorPixel2Rem(120)} auto;
      overflow: hidden;
      position: relative;
    }

    .confirm-photo__image {
      width: 100%;
      height: 100%;
      padding: 0;
      border-radius: ${({ overlayMode }) => (overlayMode === 0 ? ConvertorPixel2Rem(6) : '50%')};
    }

    .footer {
      width: ${ConvertorPixel2Rem(312)};
      margin: 0 auto;
      bottom: 0;
      button {
        width: 100%;
        font-size: ${ConvertorPixel2Rem(16)};
        height: ${ConvertorPixel2Rem(44)};
        border-radius: ${ConvertorPixel2Rem(6)};
        border: 0;
    }
`;
