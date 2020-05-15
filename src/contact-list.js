import React, { Component } from 'react';

import DisplayContacts from './display-contacts';


class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
        this.loadData = this.loadData.bind(this);

    }



    loadData() {
        console.log('Loading data...');
        const mydata = [
            {
                name: "Ayush",
                phone: "0284050406",
                email: "myemail@gmail.com"
            },
            {
                name: "Eva",
                phone: "0201000108",
                email: "eva@gmail.com"
            },
            {
                name: "Adu",
                phone: "0213456789",
                email: "adu@mail.com",
            },

        ]
        this.setState({ data: mydata })
    }

    render() {
        if (this.state.data) {
            return (<div>
                <DisplayContacts data={this.state.data} />
                >
            </div>)
        }
        return (<button onClick={this.loadData}>Load Data</button>);
    }
}

export default ContactList;