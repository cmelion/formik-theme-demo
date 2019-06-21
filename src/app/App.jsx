import React from 'react';
import { useSelector } from 'react-redux';
import { hot, setConfig } from 'react-hot-loader';
import { ActiveTheme, ThemeList } from '../themes';
import { LoginForm } from './components/formik';
import { Header } from './components/header';

import styles from './App.module.css';

setConfig({showReactDomPatchNotification: false});

const scenes = {
    THEMELIST: <ThemeList />,
    LOGIN: <LoginForm />
};


const App = () => {
    const location = useSelector(state => state.location);
    return (
      <ActiveTheme>
          <div className={styles.app}>
              <Header />
              {scenes[location.type]}
          </div>
      </ActiveTheme>
    );
};

export default hot(module)(App);
