import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { ArrowLeft, ChevronDown, ChevronUp } from 'react-feather';
import { useStore } from '../../Hooks/useStore';
import { languageProvider } from '../../Configs/Lang/languageProvider';
import { Component } from './Style';
import Logo from '../Logo/Logo';
import Progressbar from '../Progressbar/Progressbar';

const Header = ({
  log,
  bac,
  lab,
  lan,
  pro,
}) => {
  const [switching, setSwitching] = useState(false);
  const { browserlanguage, setBrowserlanguage } = useStore();
  const localization = (browserlanguage === 'PT') ? languageProvider.PT : languageProvider.EN; // const localization = !!(browserlanguage);

  function languageSwitcher() {
    setSwitching(!switching);
  }

  function languageSelector(e) {
    setBrowserlanguage(e.target.id);
  }

  return (
    <>
      <Helmet htmlAttributes={{ lang: browserlanguage }} />
      <Component log={log} bac={bac} lab={lab} lan={lan} pro={pro} swi={switching}>
        <div className="logo">
          <Logo />
        </div>
        <div className="back">
          <ArrowLeft />
        </div>
        <div className="label">
          {localization.phonumber}
        </div>
        <div
          className="language"
          onClick={languageSwitcher}
          onKeyPress={languageSwitcher}
          role="button"
          tabIndex="0"
        >
          <span className="selected">{browserlanguage}</span>
          {(switching) ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          <div className="switcher">
            <div className="languages">
              <div
                id="PT"
                className="option"
                onClick={languageSelector}
                onKeyPress={languageSwitcher}
                role="button"
                tabIndex="0"
              >
                {localization.pt}
              </div>
              <div
                id="EN"
                className="option"
                onClick={languageSelector}
                onKeyPress={languageSwitcher}
                role="button"
                tabIndex="0"
              >
                {localization.en}
              </div>
            </div>
          </div>
        </div>
        <div className="progress">
          <Progressbar per={0} />
        </div>
      </Component>
    </>
  );
};

Header.propTypes = {
  log: PropTypes.number.isRequired,
  bac: PropTypes.number.isRequired,
  lab: PropTypes.number.isRequired,
  lan: PropTypes.number.isRequired,
  pro: PropTypes.number.isRequired,
};

export default Header;
