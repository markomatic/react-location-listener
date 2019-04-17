import { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'flux/utils';
import { withRouter } from 'react-router-dom';
import { setLocation } from '../state/actions';
import store from '../state/store';

class Provider extends Component {
    static getStores() {
        return [store];
    }

    static calculateState() {
        return { ...store.getState() };
    }

    componentDidMount() {
        setLocation(this.props.location);
    }

    componentDidUpdate() {
        setLocation(this.props.location);
    }

    render() {
        return this.props.children;
    }
}

Provider.propTypes = {
    location: PropTypes.shape({
        hash: PropTypes.string.isRequired,
        pathname: PropTypes.string.isRequired,
        search: PropTypes.string.isRequired,
        state: PropTypes.any
    }).isRequired,
};

export default withRouter(Container.create(Provider));
