import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { storeSetter } from '../../Hooks/useStore';
import { useLocale } from '../../Hooks/useLocale';
import countryFlagHelper from '../../Helpers/countryFlagHelper';
import ProgressBar from '../ProgressBar/ProgressBar';
import Logo from '../Logo/Logo';
import { AppHeader } from './Style';

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
}) => {
  const dispatch = storeSetter();
  const [trigger, setTrigger] = useState(false);
  const { appLanguages } = useLocale(language);
  const languageSetter = (selectedLanguage) => {
    dispatch(
      {
        type: 'SET_APP',
        payload: {
          language: selectedLanguage,
        },
      },
    );
  };
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
        <div className="App-BackButton" onClick={() => window.history.back()} onKeyPress={() => window.history.back()} role="button" tabIndex="0"> </div>
        <div className="App-ScreenLabel">{screenLabel }</div>
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
          <ProgressBar />
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
};

export default Header;
