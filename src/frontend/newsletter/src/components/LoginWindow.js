import React, { Component } from 'react';


class LoginWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    async handleSubmit(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        try {
            const response = await fetch('http://localhost:4000/api/users/login', requestOptions);
            const user = await response.json();

            this.props.loginUser(user);
        } catch (error) {
            alert("Wrong login. Try again");
            this.setState({ username: "", password: "" });
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={this.state.username} id="username"
                        placeholder="Username..." onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={this.state.password}
                        id="password" placeholder="Password..." onChange={this.handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default LoginWindow;
