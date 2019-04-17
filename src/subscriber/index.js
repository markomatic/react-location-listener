import { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'flux/utils';
import store from '../state/store';

class Subscriber extends Component {
    static getStores() {
        return [store];
    }

    static calculateState() {
        return { ...store.getState() };
    }

    render() {
        return this.props.children({
            ...this.state
        });
    }
}

Subscriber.propTypes = {
    children: PropTypes.func.isRequired,
};

export default Container.create(Subscriber);
