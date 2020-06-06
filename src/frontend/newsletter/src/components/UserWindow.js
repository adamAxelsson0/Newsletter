import React, { Component } from "react";

class UserWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.user.id,
            username: this.props.user.username,
            password: this.props.user.password,
            email: this.props.user.email,
            newsletter: this.props.user.newsletter
        };
        this.ChangeSubscribtion = this.ChangeSubscribtion.bind(this);
    }
    async ChangeSubscribtion() {

        this.state.newsletter = !this.state.newsletter
        this.props.subscription(this.state);
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        await fetch('http://localhost:4000/api/users/', requestOptions);
    }
    render() {
        return <div>
            <h1>Hello {this.props.user.username}</h1>
            <h4>E-mail: {this.props.user.email}</h4>
            <h4>You are currently {this.props.user.newsletter ? 'subscribed' : "not subscribed"} to the Newsletter</h4>
            <button onClick={this.ChangeSubscribtion}>{this.props.user.newsletter ? 'Unsubscribe' : "Subscribe"}
            </button>
        </div>
    }
}
export default UserWindow;

