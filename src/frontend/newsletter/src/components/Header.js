import React, { Component } from 'react';

class Header extends Component {

    handleRegister = () => {
        this.props.showRegisterForm(true);
        this.props.showLoginForm(false);
    }
    handleLogin = () => {
        this.props.showLoginForm(true);
        this.props.showRegisterForm(false);
    }
    handlelogout = () => {
        this.props.setUser(undefined);
    }
    render() {
        if (this.props.user) {
            return <div className="header">
                <h1>Superduper Newsletter</h1>
                <button onClick={this.handlelogout}>Logout</button>
            </div>
        }
        return <div className="header">
            <h1>Superduper Newsletter</h1>
            <button onClick={this.handleLogin}>Login</button>
            <button onClick={this.handleRegister}>Register</button>
        </div>
    }
}
export default Header;