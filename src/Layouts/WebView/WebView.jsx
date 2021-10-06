import React from 'react';
import PropTypes from 'prop-types';
import { WebActivity } from './Style';

/**
 * A react web view container.
 * Children = other views that will inherit this width and height
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const WebView = ({ children }) => (
  <WebActivity>
    {children}
  </WebActivity>
);

WebView.propTypes = {
  children: PropTypes.element.isRequired,
};

export default WebView;
