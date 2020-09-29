import {userBeersActions} from './user-beers.types';

export const getUserBeers = beers => ({
    type: userBeersActions.GET_USER_BEERS,
    payload: beers
})