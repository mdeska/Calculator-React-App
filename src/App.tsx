import React from 'react';
import { default as bemCssModules } from 'bem-css-modules'
import { default as AppStyles } from './App.module.scss';
import { Display } from './components/Display/Display';
import { Button } from './components/Button/Button';
import { Provider } from 'mobx-react';
import { MainKeyboard } from './components/MainKeyboard/MainKeyboard';
import { MemoryContainer } from './containers/MemoryContainer';
import { getRootStores } from './stores/getRootStores';

bemCssModules.setSettings({
  modifierDelimiter: '--'
})

const style = bemCssModules(AppStyles);

function App() {
  return (
    <Provider {...getRootStores()}>
      <div className={style()}>
        <Display />
        <MemoryContainer />
        <MainKeyboard />
      </div>
    </Provider>
  );
}

export default App;
