import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from './Style';

/**
 * Returns a React Progress Component
 * percent parameter accepts [zero] to [ten].
 * @param percent {0/10}
 * @returns {JSX.Element}
 * @constructor
 */
const ProgressBar = ({ percent }) => (
  <Loading percent={percent}>
    <div className="Loading-Signal" />
  </Loading>
);

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default ProgressBar;
