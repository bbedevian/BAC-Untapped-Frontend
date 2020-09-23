import {dbBeersActions} from './db-beers.types'

const INITIAL_STATE = {
    dbBeers: []
}

const dbBeersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case dbBeersActions.GET_DB_BEERS: 
            return {...state, dbBeers: action.payload}
        default: 
        return state;
    }
}

export default dbBeersReducer;