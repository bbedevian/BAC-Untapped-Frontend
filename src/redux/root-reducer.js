import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import dbBeersReducer from './db-beers/db-beers.reducer'

export default rootReducer = combineReducers({
    user: userReducer,
    dbBeers: dbBeersReducer
})

