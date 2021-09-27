import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppHeader } from './Style';
import { useLocale } from '../../Hooks/useLocale';
import ProgressBar from '../ProgressBar/ProgressBar';
import Logo from '../Logo/Logo';
import countryFlagHelper from '../../Helpers/countryFlagHelper';

/**
 * Returns a React Header Component, each parameter accepts [zero] or [one].
 * >> [0] means is not visible, closed.
 * >> [1] means is visible, open.
 * >> Display selectable only languages that are not equal to the device's browser.
 * @param logo {0/1}
 * @param backButton {0/1}
 * @param screenLabel {0/1}
 * @param languageButton {0/1}
 * @param language {string}
 * @param languageSetter {setter}
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({
  logo,
  backButton,
  screenLabel,
  languageButton,
  language,
  languageSetter,
}) => {
  const [trigger, setTrigger] = useState(false);
  const { appLanguages, appString } = useLocale(language);

  const languageSwitcher = () => setTrigger(!trigger);
  const languageSelector = (e) => ((e.target.className === 'Trigger-Pane__Option')
    ? languageSetter(`${e.target.id}`) : languageSetter(`${e.target.parentNode.id}`));

  return (
    <>
      <AppHeader
        logo={logo}
        backbutton={backButton}
        screenlabel={screenLabel}
        trigger={trigger}
        languagebutton={languageButton}
      >
        <div className="App-logo"><Logo /></div>
        <div className="App-BackButton" />
        <div className="App-ScreenLabel">{appString.translations.header.phoneNumber}</div>
        <div className="App-LanguageSwitcher" onClick={languageSwitcher} onKeyPress={languageSwitcher} role="button" tabIndex="0">
          <span className="App-Language__Current">{language}</span>
          <div className="App-Language__ArrowDown" />
          <div className="App-Language__Trigger">
            <div className="Trigger-Pane">

              {
                (appLanguages.translatedAvailableLanguages).map((string) => (
                  <div
                    key={string.id}
                    id={string.code}
                    className="Trigger-Pane__Option"
                    onClick={languageSelector}
                    onKeyPress={languageSelector}
                    role="button"
                    tabIndex="0"
                  >
                    <div className="Pane-IconFlag">
                      <img src={countryFlagHelper(string.code)} alt="img" />
                    </div>
                    <span className="Pane-Name">{string.name}</span>
                    {(language === string.code) ? <div className="Pane-Check" /> : <div className="Pane-GhostCheck" />}
                  </div>
                ))
              }

            </div>
          </div>
        </div>
        <div className="App-ProgressBar">
          <ProgressBar percent={0} />
        </div>
      </AppHeader>
    </>
  );
};

Header.propTypes = {
  logo: PropTypes.number.isRequired,
  backButton: PropTypes.number.isRequired,
  screenLabel: PropTypes.number.isRequired,
  languageButton: PropTypes.number.isRequired,
  language: PropTypes.string.isRequired,
  languageSetter: PropTypes.func.isRequired,
};

export default Header;
