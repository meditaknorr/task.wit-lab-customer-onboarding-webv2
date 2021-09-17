import React from 'react';
import PropTypes from 'prop-types';
import { useDimension } from '../../Hooks/useDimension';
import { WebActivity } from './Style';

const WebView = ({ children }) => {
  const { width, height, PxRem } = useDimension();
  return (
    <WebActivity w={width} h={height} p={PxRem}>
      {children}
    </WebActivity>
  );
};

WebView.propTypes = {
  children: PropTypes.element.isRequired,
};

export default WebView;
