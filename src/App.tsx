import React from 'react';
import { default as bemCssModules } from 'bem-css-modules'
import { default as AppStyles } from './App.module.scss';
import { Display } from './components/Display/Display';
import { Button } from './components/Button/Button';

const style = bemCssModules(AppStyles);

function App() {
  return (
    <div className={style()}>
      <Display />
      <Button content='T' onClick={() => console.log("hello")} />
    </div>
  );
}

export default App;
