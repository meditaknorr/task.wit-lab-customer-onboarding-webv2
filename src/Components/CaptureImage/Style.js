import styled from 'styled-components';
import { ConvertorPixel2Rem } from '../../Hooks/useDimension';
import { themeProvider } from '../../Configs/Themes/themeProvider';

export const CaptureImageScreen = styled.div`
    display: grid;
    font-family: 'Inter', sans-serif;
    justify-content: center;
    grid-template-columns: 100%;
    align-content: space-between;
    grid-gap: ${ConvertorPixel2Rem(10)};
    overflow-x: hidden;
    text-align: center;
    color: ${themeProvider.day.backgroundColor};

    .video-background{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        overflow: hidden;
    }
    .video-background-wrapper{
        position: relative; 
        height: ${({ backgroundHeight }) => backgroundHeight};
    }

    .video-container{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        width: 100%;
    }

    .camera{
        width: ${({ overlayMode }) => overlayMode === 0 ? ConvertorPixel2Rem(276) : ConvertorPixel2Rem(210)};
        height: ${({ overlayMode }) => overlayMode === 0 ? ConvertorPixel2Rem(190) : ConvertorPixel2Rem(210)};
        border: 1px solid white;
        border-radius: ${({ overlayMode }) => overlayMode === 0 ? ConvertorPixel2Rem(6) : '50%'};
        margin: auto;
        position: relative;
        box-shadow: 0 0 ${ConvertorPixel2Rem(8)} ${ConvertorPixel2Rem(500)} rgba(0, 0, 0, .8);
        justify-content: center;
        text-align: center;
        display: grid;


        .camera--close-icon{
            position: fixed;
            text-align: center;
            z-index: 100;
            top: ${ConvertorPixel2Rem(20)};
            font-size: ${ConvertorPixel2Rem(13)};
            left: ${ConvertorPixel2Rem(22)};
            height: ${ConvertorPixel2Rem(20)};
            width: ${ConvertorPixel2Rem(20)};
        }

        .camera__title{
            position: fixed;
            text-align: center;
            z-index: 100;
            top: ${ConvertorPixel2Rem(20)};
            font-size: ${ConvertorPixel2Rem(13)};
            display: block;
            margin: auto;
        }

        .camera__photo-type{
            position: absolute;
            text-align: center;
            z-index: 10;
            top: -${ConvertorPixel2Rem(100)};
            font-size: ${ConvertorPixel2Rem(18)};
            font-weight: bold;
            margin: auto;
        }

        .camera__footer-note{
            margin: auto;
            display: block;
            position: absolute;
            text-align: center;
            z-index: 10;
            font-size: ${ConvertorPixel2Rem(12)};
            bottom: -${ConvertorPixel2Rem(30)};
        }
 
        .camera__shoot-button{
            width: ${ConvertorPixel2Rem(64)};
            background-color: transparent;
            height: ${ConvertorPixel2Rem(64)};
            border: ${ConvertorPixel2Rem(4)} solid ${themeProvider.day.backgroundColor};
            border-radius: 50%;
            display: block;
            z-index: 2000;
            margin: auto;
            position: fixed;
            bottom: ${ConvertorPixel2Rem(10)};
        }
    }

    .photo{
        display: none;
    }

    `
;