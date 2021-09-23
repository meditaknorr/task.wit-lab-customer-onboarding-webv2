import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocale } from '../../Hooks/useLocale';
import Logo from '../Logo/Logo';
import ProgressBar from '../ProgressBar/ProgressBar';
import { AppHeader } from './Style';
import Eng from '../../Assets/Images/icons/ic_en_lang.svg';

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
  const { appLanguages, appString } = useLocale('pt');

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
        <div className="App-ScreenLabel">{appString[0].trans.header.phoneNumber}</div>

        <div className="App-LanguageSwitcher" onClick={languageSwitcher} onKeyPress={languageSwitcher} role="button" tabIndex="0">
          <span className="App-Language__Current">{language}</span>
          <div className="App-Language__ArrowDown" />
          <div className="App-Language__Trigger">
            <div className="Trigger-Pane">

              {
                appLanguages.map((string) => (
                  <div
                    key={string[0].key}
                    id={string[0].code}
                    className="Trigger-Pane__Option"
                    onClick={languageSelector}
                    onKeyPress={languageSelector}
                    role="button"
                    tabIndex="0"
                  >
                    <div className="Pane-IconFlag">
                      <img src={Eng} alt="img" />
                    </div>
                    <span className="Pane-Name">{string[0].name}</span>
                    <div className="Pane-Check" />
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
