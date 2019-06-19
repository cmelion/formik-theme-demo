import React from 'react';

import { ActiveTheme, ThemeList } from '../themes';
import { LoginForm } from './components/formik';
import { Header } from './components/header';

import styles from './App.module.css';

const App = () => {
  return (
      <ActiveTheme>
          <div className={styles.app}>
              <Header />
              <ThemeList />
              <LoginForm />
          </div>
      </ActiveTheme>
  );
};

export default App;
