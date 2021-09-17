import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from './Style';

const Progressbar = ({ per }) => (
  <Progress per={per}>
    <div className="runner" />
  </Progress>
);

Progressbar.propTypes = {
  per: PropTypes.number.isRequired,
};

export default Progressbar;
