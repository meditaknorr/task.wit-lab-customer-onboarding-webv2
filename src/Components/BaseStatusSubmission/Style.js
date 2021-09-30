import styled from 'styled-components';
import { ConvertorPixel2Rem } from '../../Hooks/useDimension';
import { themeProvider } from '../../Configs/Themes/themeProvider';


export const BaseStatusScreen = styled.div`
    display: grid;
    height: auto;
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
        font-family: Inter;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
    }

    .submission-status__description{
        width: ${ConvertorPixel2Rem(200)};
        margin: ${ConvertorPixel2Rem(18)} auto;
        color: ${themeProvider.day.secondaryTextColor};
        text-align: center;
        font-family: Inter;
        font-size: 16px;
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
        position: fixed;
        margin: auto;
        bottom: 20px;
        justify-content:center;
        text-align:center;
        display: grid;
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.5px;        
    }
`;

