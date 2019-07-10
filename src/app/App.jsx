import React from 'react';
import { useSelector } from 'react-redux';
import { hot, setConfig } from 'react-hot-loader';
import { ActiveTheme, ThemeList } from '../themes';
import { PromoTable } from './components/promo/table';
import { LoginForm } from './components/login';
import { Header } from './components/header';
import { RequestProviderWrapper} from "./store/RequestProviderWrapper";

import styles from './App.module.css';

setConfig({showReactDomPatchNotification: false});

const scenes = {
    THEMELIST: <ThemeList />,
    LOGIN: <LoginForm />,
    PROMOTABLE: <PromoTable />,
};


const App = () => {
    const location  = useSelector(state => state.location);
    const user      = useSelector(state => state.user);
    return <ActiveTheme>
        <div className={styles.app}>
            <Header user={user} loggedIn={user.email !== undefined}/>
            <RequestProviderWrapper name={location.type}>
                {scenes[location.type]}
            </RequestProviderWrapper>
        </div>
    </ActiveTheme>;
};

export default hot(module)(App);
