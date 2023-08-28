import React, { Component } from 'react';

class AddressDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url:'https://api64.ipify.org?format=json',
            ipAddress: null
        };
    }

    componentDidMount() {
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => this.setState({ ipAddress: data.ip }));
    }

    render() {
        return (
            <span className="AddressDisplay">
                {this.state.ipAddress}
            </span>
        );
    }
}

export default AddressDisplay;