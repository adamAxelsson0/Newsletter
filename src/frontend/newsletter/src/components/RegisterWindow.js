import React, { Component } from 'react';


class RegisterWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: "",
            password: "",
            newsletter: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    async handleSubmit(event) {
        event.preventDefault();
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state)
            };
            const response = await fetch('http://localhost:4000/api/users', requestOptions);
            const user = await response.json();
            if (user) {
                this.props.registerUser(user);
            }
        } catch (error) {
            alert("Something went banana")
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={this.state.value} id="username"
                        placeholder="Username..." onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={this.state.value}
                        id="password" placeholder="Password..." onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    E-mail:
                    <input type="email" name="email" value={this.state.value} id="email"
                        placeholder="E-mail..." onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Subscribe to Newsletter:
                    <input type="checkbox" name="newsletter" value={true} id="newsletter"
                        onChange={this.handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default RegisterWindow;
