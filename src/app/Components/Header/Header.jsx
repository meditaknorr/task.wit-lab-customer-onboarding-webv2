import React from 'react';
import PropTypes from 'prop-types';
import { ArrowLeft } from 'react-feather';
import { Component } from './Style';
import Logo from '../Logo/Logo';
import Progressbar from '../Progressbar/Progressbar';

const Header = ({
  log,
  bac,
  lab,
  lan,
  pro,
}) => (
  <Component log={log} bac={bac} lab={lab} lan={lan} pro={pro}>
    <div className="logo">
      <Logo />
    </div>
    <div className="back">
      <ArrowLeft />
    </div>
    <div className="label">
      Phone number
    </div>
    <div className="language">
      EN
    </div>
    <div className="progress">
      <Progressbar per={0} />
    </div>
  </Component>
);

Header.propTypes = {
  log: PropTypes.number.isRequired,
  bac: PropTypes.number.isRequired,
  lab: PropTypes.number.isRequired,
  lan: PropTypes.number.isRequired,
  pro: PropTypes.number.isRequired,
};

export default Header;
