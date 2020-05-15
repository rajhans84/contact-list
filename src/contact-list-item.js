import React, { Component } from 'react';
import Proptype from 'prop-types';

class ContactListItem extends Component {
    static protType = {
        name: Proptype.string.isRequired,
        phone: Proptype.number.isRequired,
        email: Proptype.string.isRequired,
    }


    render() {
        return (<div>
            <div>{this.props.name}</div>
            <div>{this.props.phone}</div>
            <div>{this.props.email}</div>

        </div>);
    }
}

export default ContactListItem;