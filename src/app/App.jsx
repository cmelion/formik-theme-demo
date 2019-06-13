import React from 'react';
import styles from './App.module.css';
import { ActiveTheme, ThemeList } from '../themes';
import LoginForm from '../login';

const App = () => {
  return (
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
  );
};

export default App;
