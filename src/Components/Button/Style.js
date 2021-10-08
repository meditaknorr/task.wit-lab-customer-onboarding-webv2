import styled from 'styled-components';
import { ConvertorPixel2Rem } from '../../Hooks/useDimension';
import { themeProvider } from '../../Configs/Themes/themeProvider';

export const ButtonComponent = styled.button`
    width: ${({ width }) => width || '100%'};
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: ${({ fontSize }) => fontSize || ConvertorPixel2Rem(16)};
    font-weight: ${({ fontWeight }) => fontWeight || '500'};
    height: ${({ height }) => height || ConvertorPixel2Rem(44)};
    // eslint-disable-next-line no-tabs
    letter-spacing: ${({ letterSpacing }) => letterSpacing || ConvertorPixel2Rem(0.5)};
    // eslint-disable-next-line no-tabs
    line-height: ${({ lineHeight }) => lineHeight || 'normal'};
    // eslint-disable-next-line no-tabs
    margin: ${({ margin }) => margin || 'initial'};
    // eslint-disable-next-line no-tabs
    text-align: ${({ textAlign }) => textAlign || 'center'};
    // eslint-disable-next-line no-tabs
    border: none;
    // eslint-disable-next-line no-tabs
    border-radius: ${ConvertorPixel2Rem(6)};
    // eslint-disable-next-line no-tabs
    // eslint-disable-next-line no-tabs
    outline: none;
    // eslint-disable-next-line no-tabs
    padding: ${ConvertorPixel2Rem(12)} auto;
    // eslint-disable-next-line no-tabs
    // eslint-disable-next-line no-tabs
    transition: 0.3s;
    color: ${({ mode }) => (mode === 'flat' ? themeProvider.day.fontColor : themeProvider.day.backgroundColor)};
    background-color: ${({ mode }) => (mode === 'flat' ? themeProvider.day.backgroundColor : themeProvider.day.highlightColor)};
    // eslint-disable-next-line no-tabs
    cursor: pointer;
    margin-bottom: ${ConvertorPixel2Rem(16)};
`;
