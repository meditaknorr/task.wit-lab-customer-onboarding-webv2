import React from 'react';
import { useStore } from '../../Hooks/useStore';
import WebView from '../../Layouts/WebView/WebView';
import Header from '../../Components/Header/Header';
import { OnborardingScreen } from './Style';
import { languageProvider } from '../../Configs/Lang/languageProvider';

const Onboarding = () => {
  const { browserlanguage } = useStore();
  const localization = (browserlanguage === 'PT') ? languageProvider.PT : languageProvider.EN; // const localization = !!(browserlanguage);

  return (
    <WebView>
      <OnborardingScreen>
        <Header log={1} bac={0} lab={0} lan={1} pro={1} />
        Demo ::
        {localization.demo}
      </OnborardingScreen>
    </WebView>
  );
};

export default Onboarding;
