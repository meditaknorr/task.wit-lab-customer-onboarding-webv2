import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocale } from '../../Hooks/useLocale';
import Logo from '../Logo/Logo';
import ProgressBar from '../Progressbar/Progressbar';
import { AppHeader } from './Style';
import eng from '../../Assets/Images/icons/ic_en_lang.svg';

/**
 * Returns a React Header Component, each parameter accepts [zero] or [one].
 * >> [0] means is not visible, closed.
 * >> [1] means is visible, open.
 * >> Display selectable only languages that are not equal to the device's browser.
 * @param logo {0/1}
 * @param backbutton {0/1}
 * @param screenlabel {0/1}
 * @param languagebutton {0/1}
 * @param language {string}
 * @param languageSetter {setter}
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({
  logo,
  backbutton,
  screenlabel,
  languagebutton,
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
        backbutton={backbutton}
        screenlabel={screenlabel}
        trigger={trigger}
        languagebutton={languagebutton}
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
                      <img src={eng} alt="img" />
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
  backbutton: PropTypes.number.isRequired,
  screenlabel: PropTypes.number.isRequired,
  languagebutton: PropTypes.number.isRequired,
  language: PropTypes.string.isRequired,
  languageSetter: PropTypes.func.isRequired,
};

export default Header;
