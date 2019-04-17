import dispatcher from './dispatcher';

export const SET_LOCATION = Symbol('Set location');

export const setLocation = (
    {
        hash,
        pathname,
        search,
        state
    }) => dispatcher.dispatch({
    type: SET_LOCATION,
    data: {
        hash,
        pathname,
        search,
        state
    }
});
