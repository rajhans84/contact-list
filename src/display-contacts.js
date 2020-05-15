import React, { Component } from 'react';
import Proptype from 'prop-types';
import ContactListItem from './contact-list-item';
import Timer from './timer';

class DisplayContacts extends Component {
    static protType = {
        data: Proptype.arrayOf(Proptype.object).isRequired,
    }
    render() {
        const contacts = this.props.data.map(function (element) {
            return (<ContactListItem name={element.name} phone={element.phone} email={element.email} />)
        });
        return contacts;
    }
}


export default DisplayContacts;


