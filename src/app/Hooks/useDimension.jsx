import { useEffect, useState } from 'react';

const useDimension = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  /**
   * Convertor: Pixel to Rem
   * @param pixel
   * @returns {`${number}rem`}
   * @constructor
   */
  const PxRem = (pixel) => `${(pixel / 16)}rem`;

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
  });

  return { height, width, PxRem };
};

export { useDimension };
