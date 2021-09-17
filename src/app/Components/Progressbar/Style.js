import styled from 'styled-components';
import { Px2Rem } from '../../Hooks/useDimension';

export const Progress = styled.div`
  position: relative;
  width: 100%;
  height: ${Px2Rem(2)};
  background-color: rgba(235, 235, 235, 1.0);

  div.runner {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => `${props.per * 10}%`};
    height: ${Px2Rem(2)};
    background-color: rgba(42, 82, 229, 0.5);
  }
`;
