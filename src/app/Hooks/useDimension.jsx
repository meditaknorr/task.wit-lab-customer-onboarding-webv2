import { useEffect, useState } from 'react';

/**
 * React useDimension Custom Hooks
 * @returns { height, width }
 */
const useDimension = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
  }, [window]);

  return { height, width };
};

/**
 * React Pixel to Rem Convertor
 * @param pixel
 * @returns string
 * @constructor
 */
const Px2Rem = (pixel) => `${(pixel / 16)}rem`;

export { useDimension, Px2Rem };
