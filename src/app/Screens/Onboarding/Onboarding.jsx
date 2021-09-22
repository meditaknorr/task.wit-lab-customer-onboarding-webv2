import React from 'react';
import { useStore } from '../../Hooks/useStore';
import WebView from '../../Layouts/WebView/WebView';
import Header from '../../Components/Header/Header';
import { OnborardingScreen } from './Style';

const Onboarding = () => {
  const { language, setLanguage } = useStore();
  return (
    <WebView>
      <OnborardingScreen>
        <Header
          logo={1}
          backbutton={0}
          screenlabel={0}
          languagebutton={1}
          language={language}
          languageSetter={setLanguage}
        />
        {language}
      </OnborardingScreen>
    </WebView>
  );
};

export default Onboarding;
