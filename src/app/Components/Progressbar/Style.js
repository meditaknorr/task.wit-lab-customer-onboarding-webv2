import styled from 'styled-components';
import { Px2Rem } from '../../Hooks/useDimension';
import { themeProvider } from '../../Configs/Themes/themeProvider';

export const Progress = styled.div`
  position: relative;
  width: 100%;
  height: ${Px2Rem(2)};
  background-color: rgba(${themeProvider.day.lineColor}, 0.01);

  div.runner {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => `${props.per * 10}%`};
    height: ${Px2Rem(2)};
    background-color: rgba(${themeProvider.day.highlightColor}, 0.5);
  }
`;
