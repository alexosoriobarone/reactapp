import React,{Component} from 'react';
import PropTypes from 'prop-types';
export class Loading extends Component {
    constructor(props) {//fetch
        super(props);
    }
    render() {
    return (<div className='loading'>{this.props.message || 'Cargando...'}</div>);
    }
}
Loading.propTypes = {
    message:PropTypes.string.isRequired
}