import styled from 'styled-components';
import { Px2Rem } from '../../Hooks/useDimension';

export const OnborardingScreen = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-rows: minmax(${Px2Rem(56)}, ${Px2Rem(60)}) minmax(1fr, max-content) minmax(${Px2Rem(56)}, ${Px2Rem(60)});
  grid-template-columns: 1fr;
  grid-gap: 0;
  row-gap: 0;
`;
