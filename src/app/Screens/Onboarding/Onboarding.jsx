import React from 'react';
// import { useStore } from '../../Hooks/useStore';
import WebView from '../../Layouts/WebView/WebView';
import Header from '../../Components/Header/Header';
import { OnborardingScreen } from './Style';

const Onboarding = () => (
  <WebView>
    <OnborardingScreen>
      <Header log={1} bac={0} lab={0} lan={1} pro={1} />
      Abaixo
    </OnborardingScreen>
  </WebView>
);

export default Onboarding;
