import React from 'react';
import PropTypes from 'prop-types';
import { useDimension } from '../../Hooks/useDimension';
import { WebActivity } from './Style';

const WebView = ({ children }) => {
  const { width, height } = useDimension();
  return (
    <WebActivity width={width} height={height}>
      {children}
    </WebActivity>
  );
};

WebView.propTypes = {
  children: PropTypes.element.isRequired,
};

export default WebView;
