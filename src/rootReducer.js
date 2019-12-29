import { combineReducers } from 'redux';

import toggle from './toggle/reducer';
import movies from './toggle/reducer';

const rootReducer = combineReducers({
    toggle,
    movies
})

export default rootReducer;