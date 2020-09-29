import {userBeersActions} from './user-beers.types'

const INITIAL_STATE = {
    userBeers: []
}

const userBeersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userBeersActions.GET_USER_BEERS: 
            return {...state, userBeers: action.payload}
        default: 
        return state;
    }
}

export default userBeersReducer;