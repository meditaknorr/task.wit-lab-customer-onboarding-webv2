import styled from 'styled-components';
import { Px2Rem } from '../../Hooks/useDimension';
import { themeProvider } from '../../Configs/Themes/themeProvider';

export const Component = styled.header`
  grid-area: header;
  width: 100%;
  height: ${Px2Rem(56)};
  padding: 0 ${Px2Rem(24)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* image size scalled to try fit well on screen*/
  div.logo {
    display: ${(props) => (props.log ? 'inline-block' : 'none')};
    width: ${Px2Rem(35)};
    height: ${Px2Rem(25)};
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
    position: relative;
    display: ${(props) => (props.lan ? 'flex' : 'none')};
    width: ${Px2Rem(50)};
    height: ${Px2Rem(42)};
    font-size: ${Px2Rem(14)};
    padding: 0 0 0 ${Px2Rem(12)}!important;
    align-items: center;
    justify-content: space-between;

    div.switcher {
      position: absolute;
      top: ${Px2Rem(38)};
      right: ${Px2Rem(-10)};
      display: ${(props) => (props.swi ? 'inline-block' : 'none')};
      box-shadow: 0 ${Px2Rem(4)} ${Px2Rem(10)} 0 rgba(${themeProvider.day.fontColor}, 0.32);
      border-radius: ${Px2Rem(7)};
      width: ${Px2Rem(180)};
      z-index: 100;
      overflow: hidden;

      div.languages {
        background: ${themeProvider.day.backgroundColor};
        list-style: none;
        width: 100%;
        margin: 0;
        padding: 0;
        border: 0;
        div.option {
          padding: 0 ${Px2Rem(10)};
          width: 100%;
          height: ${Px2Rem(47)};
          border: ${Px2Rem(1)} solid rgba(${themeProvider.day.fontColor}, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
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
