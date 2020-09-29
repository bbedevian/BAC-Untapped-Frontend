import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import dbBeersReducer from './db-beers/db-beers.reducer'
import userBeersReducer from './user-beers/user-beers.reducer';
import ngrokReducer from './ngrok/ngrok.reducer';

export default rootReducer = combineReducers({
    user: userReducer,
    dbBeers: dbBeersReducer,
    userBeers: userBeersReducer,
    ngrokURL: ngrokReducer
})

