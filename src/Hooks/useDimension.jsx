import { useEffect, useState } from 'react';

/**
 * React Custom Hooks For Dynamically set Height and Width on WebView and others
 * High Order Components
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
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { height, width };
};

/**
 * React Pixel to Rem Convertor
 * @param pixel
 * @returns string
 * @constructor
 */
const ConvertorPixel2Rem = (pixel) => `${(pixel / 16)}rem`;

export { useDimension, ConvertorPixel2Rem };
