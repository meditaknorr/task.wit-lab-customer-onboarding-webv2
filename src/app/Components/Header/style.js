import styled from 'styled-components';
import { Px2Rem } from '../../Hooks/useDimension';

export const Component = styled.header`
  grid-area: header;
  width: 100%;
  height: ${Px2Rem(56)};
  padding: 0 ${Px2Rem(24)};
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* image size scalled to try fit well on screen*/
  div.logo {
    display: ${(props) => (props.log ? 'inline-block' : 'none')};
    width: ${Px2Rem(40)};
    height: ${Px2Rem(30)};
  }

  div.back {
    display: ${(props) => (props.bac ? 'flex' : 'none')};
    width: ${Px2Rem(42)};
    height: ${Px2Rem(42)};
    align-items: center;
    justify-content: flex-start;
  }

  div.label {
    display: ${(props) => (props.lab ? 'flex' : 'none')};
    width: ${Px2Rem(200)};
    height: ${Px2Rem(42)};
    font-size: ${Px2Rem(16)};
    font-weight: 400;
    align-items: center;
    justify-content: center;
  }

  /* font size scalled up to try fit well on screens*/
  div.language {
    display: ${(props) => (props.lan ? 'flex' : 'none')};
    width: ${Px2Rem(60)};
    height: ${Px2Rem(42)};
    font-size: ${Px2Rem(15)};
    align-items: center;
    justify-content: center;
  }

  div.progress {
    display: ${(props) => (props.lan ? 'flex' : 'none')};
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${Px2Rem(2)};
  }
`;
