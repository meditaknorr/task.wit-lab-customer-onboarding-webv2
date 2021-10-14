import styled from 'styled-components';
import { ConvertorPixel2Rem } from '../../Hooks/useDimension';
import { themeProvider } from '../../Configs/Themes/themeProvider';

export const BaseStatusScreen = styled.div`
    display: grid;
    height: 100%;
    justify-content: center;
    grid-template-columns: 100%;
    align-content: space-between;
    grid-gap: ${ConvertorPixel2Rem(10)};
    overflow-x: hidden;
    text-align: center;
    font-family: 'Inter', sans-serif;

    .submission-status-validating{
        margin-top: ${ConvertorPixel2Rem(147)};
    }

    .submission-status__title{
        margin-top: ${ConvertorPixel2Rem(32)};
        color: ${themeProvider.day.fontColor};
        font-size: ${ConvertorPixel2Rem(20)};
        font-weight: bold;
        font-family: Inter, sans-serif;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
    }

    .submission-status__description{
        width: ${ConvertorPixel2Rem(250)};
        margin: ${ConvertorPixel2Rem(18)} auto;
        color: ${themeProvider.day.secondaryTextColor};
        text-align: center;
        font-family: Inter, sans-serif;
        font-size: ${ConvertorPixel2Rem(16)};
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.44;
        letter-spacing: normal;
    }

    .submission-status__image-wrapper{
        justify-content:center;
        text-align:center;
    }

    .submission-status__button{
        width: 100%;
        padding: 0 ${ConvertorPixel2Rem(24)};
        margin: ${ConvertorPixel2Rem(165)} auto auto auto;
        justify-content:center;
        text-align:center;
        font-family: Inter, sans-serif;
        font-size: ${ConvertorPixel2Rem(16)};
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: ${ConvertorPixel2Rem(0.5)};
    }
`;
