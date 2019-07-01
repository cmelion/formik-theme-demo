import React from 'react';
import { useSelector } from 'react-redux';
import { hot, setConfig } from 'react-hot-loader';
import { ActiveTheme, ThemeList } from '../themes';
import { DataTable } from './components/data-table';
import { LoginForm } from './components/login';
import { Header } from './components/header';

import styles from './App.module.css';

setConfig({showReactDomPatchNotification: false});

const scenes = {
    THEMELIST: <ThemeList />,
    LOGIN: <LoginForm />,
    DATATABLE: <DataTable />,
};


const App = () => {
    const location  = useSelector(state => state.location);
    const user      = useSelector(state => state.user);
    return <ActiveTheme>
        <div className={styles.app}>
            <Header user={user} loggedIn={user.email !== undefined}/>
            {scenes[location.type]}
        </div>
    </ActiveTheme>;
};

export default hot(module)(App);
