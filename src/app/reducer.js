import { combineReducers } from 'redux';

import { reducer as themes } from '../themes';
import { reducer as authorization } from './components/formik';

export default combineReducers({ themes, authorization });
