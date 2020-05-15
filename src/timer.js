import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div>
            <h1> Timer Test</h1>
            {this.state.toLocalTimeString}


        </div>
        );
    }
}







export default Timer;