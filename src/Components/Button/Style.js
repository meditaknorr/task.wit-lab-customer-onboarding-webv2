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
	letter-spacing: ${({ letterSpacing }) => letterSpacing || ConvertorPixel2Rem(0.5)};
	line-height: ${({ lineHeight }) => lineHeight || 'normal'};
	margin: ${({ margin }) => margin || 'initial'};
	text-align: ${({ textAlign }) => textAlign || 'center'};
	border: none;
	border-radius: ${ConvertorPixel2Rem(6)};
	outline: none;
	padding: ${ConvertorPixel2Rem(12)} auto;
	transition: 0.3s;
    color: ${({ mode }) => { return mode === 'flat' ? themeProvider.day.font : themeProvider.day.background }};
    background-color: ${({ mode }) => { return mode === 'flat' ? themeProvider.day.background : themeProvider.day.highlight }};
	cursor: pointer;
    margin-bottom: ${ConvertorPixel2Rem(16)};
         
`
    ;