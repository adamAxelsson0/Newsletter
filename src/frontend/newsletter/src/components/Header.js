import React, { Component } from 'react';

class Header extends Component {
    
    handleRegister = event =>{
        event.preventDefault();
        this.props.showRegister(true);
        this.props.showLogin(false);
    }
    handleLogin = event =>{
        event.preventDefault();
        this.props.showLogin(true);
        this.props.showRegister(false);
    }
    render() {
        return <div className="header">
            <h1>Superduper Newsletter</h1>
            <button onClick={this.handleLogin}>Login</button>
            <button onClick={this.handleRegister}>Register</button>
        </div>
    }
}
export default Header;