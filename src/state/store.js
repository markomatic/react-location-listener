import { ReduceStore } from 'flux/utils';
import dispatcher from './dispatcher';
import { SET_LOCATION } from './actions';

class Store extends ReduceStore {
    constructor() {
        super(dispatcher);
    }

    getInitialState() {
        return {
            hash: '',
            pathname: '',
            search: '',
            state: null
        };
    }

    reduce(state, {
        type,
        data: {
            hash = '',
            pathname = '',
            search = '',
            state: locationState = null
        } = {}
    }) {
        switch (type) {
            case SET_LOCATION:
                if (hash === state.hash &&
                    pathname === state.pathname &&
                    search === state.search &&
                    locationState === state.state) {
                    return state;
                }

                return Object.assign({}, {
                    hash,
                    pathname,
                    search,
                    state: locationState
                });
            default:
                return state;
        }
    }
}

export default new Store();
