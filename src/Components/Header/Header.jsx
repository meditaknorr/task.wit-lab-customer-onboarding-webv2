import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { storeSetter } from '../../Hooks/useStore';
import { useLocale } from '../../Hooks/useLocale';
import countryFlagHelper from '../../Helpers/countryFlagHelper';
import ProgressBar from '../ProgressBar/Progressbar';
import Logo from '../Logo/Logo';
import { AppHeader } from './Style';

/**
 * Returns a React Header Component, each parameter accepts [zero] or [one].
 * >> [0] means is not visible, closed.s
 * >> [1] means is visible, open.
 * >> Display selectable only languages that are not equal to the device's browser.
 * @param logo {0/1}
 * @param backButton {0/1}
 * @param backButtonFunctions {any}
 * @param backButtonURL {string}
 * @param screenLabel {string}
 * @param languageButton {0/1}
 * @param language {string}
 * @param languageSetter {setter}
 * @param greyBack {0/1}
 * @param ghostBlock {0/1}
 * @param progressBar {0/1}
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({
  logo = 0,
  backButton = 0,
  backButtonFunctions,
  backButtonURL,
  screenLabel = '',
  languageButton = 0,
  greyBack = 0,
  progressBar = 0,
  ghostBlock = 0,
  language,
}) => {
  const history = useHistory();
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
    ? languageSetter(`${e.target.id}`)
    : languageSetter(`${e.target.parentNode.id}`));

  const backButtonHandler = () => {
    if (backButtonURL !== '') {
      backButtonFunctions();
      history.push(backButtonURL);
    } else {
      history.goBack();
    }
  };

  return (
    <>
      <AppHeader
        logo={logo}
        backbutton={backButton}
        trigger={trigger}
        languagebutton={languageButton}
        greyback={greyBack}
        progressbar={progressBar}
        ghostblock={ghostBlock}
      >
        <div className="App-GhostBlock" />
        <div className="App-Logo"><Logo /></div>

        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <div
          className="App-BackButton"
          onClick={backButtonHandler}
          onKeyPress={backButtonHandler}
          role="button"
          tabIndex="0"
        />

        <div
          className="App-ScreenLabel"
        >
          {screenLabel}
        </div>

        <div
          className="App-LanguageSwitcher"
          onClick={languageSwitcher}
          onKeyPress={languageSwitcher}
          role="button"
          tabIndex="0"
        >

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
                      <img src={countryFlagHelper(string.code)} alt="flag icon" />
                    </div>
                    <span className="Pane-Name">{string.name}</span>
                    {
                      (language === string.code)
                        ? <div className="Pane-Check" />
                        : <div className="Pane-GhostCheck" />
                    }
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

Header.defaultProps = {
  logo: 0,
  backButton: 0,
  backButtonFunctions: () => null,
  backButtonURL: '',
  screenLabel: '',
  languageButton: 0,
  greyBack: 0,
  progressBar: 0,
  ghostBlock: 0,
  language: '',
};

Header.propTypes = {
  logo: PropTypes.number,
  backButton: PropTypes.number,
  backButtonFunctions: PropTypes.func,
  backButtonURL: PropTypes.string,
  screenLabel: PropTypes.string,
  languageButton: PropTypes.number,
  greyBack: PropTypes.number,
  progressBar: PropTypes.number,
  ghostBlock: PropTypes.number,
  language: PropTypes.string,
};

export default Header;
