import React from 'react';
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import styles from './App.module.css';
import { ActiveTheme, ThemeList } from '../themes';
import LoginForm from '../login';


// TODO:  determine why typescript errors occur
const jss = create({
    ...jssPreset(),
    // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
    insertionPoint: "jss-insertion-point"
});


const App = () => {
  return (
      <StylesProvider jss={jss}>
          <ActiveTheme>
              <div className={styles.app}>
                  <header className={styles.appHeader}>
                      <img src="logo.svg" className={styles.appLogo} alt="logo" />
                      <h1 className={styles.appTitle}>CSS Modules with CSS Custom Properties (variables)</h1>
                      <p>select a theme</p>
                  </header>
                  <ThemeList />
                  <LoginForm />
              </div>
          </ActiveTheme>
      </StylesProvider>
  );
};

export default App;
