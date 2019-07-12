import { combineReducers } from 'redux';

import { reducer as themes } from '../themes';
import { reducer as location } from './routes';
import { reducer as user} from './components/login';
import { reducer as hamburgerMenu } from './components/header';
import { reducer as promosListCached } from './components/promo';

export default combineReducers({ location, themes, user, hamburgerMenu, promosListCached });
