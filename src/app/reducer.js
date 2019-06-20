import { combineReducers } from 'redux';

import { reducer as themes } from '../themes';
import { location } from './routes';

export default combineReducers({ location, themes });
