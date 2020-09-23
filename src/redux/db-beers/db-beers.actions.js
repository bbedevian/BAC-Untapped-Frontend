import {dbBeersActions} from './db-beers.types';

export const getDbBeers = beers => ({
    type: dbBeersActions.GET_DB_BEERS,
    payload: beers
})