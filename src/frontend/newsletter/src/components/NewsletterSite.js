import React, { Component } from 'react';
import Header from "./Header";
import Main from "./Main";

class NewsLetterSite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginForm: false,
            showRegisterForm: false,
            user: undefined,
            showLoggedInButtons: false
        }
        if (this.state.user) {
            
        }
    }
    RegisterUser = (register) => {
        this.setState({
            showRegisterForm: register
        });
    };
    LoginUser = (login) => {
        this.setState({
            showLoginForm: login
        });
    };
    SetUser = (user) => {
        this.setState({
            user: user,
            showLoginForm: false,
            showRegisterForm: false,
            showLoggedInButtons: true
        });
    };

    render() {
        return <div>
            <Header
                showLoginForm={this.LoginUser.bind(this)}
                showRegisterForm={this.RegisterUser.bind(this)}
                user={this.state.user}
                setUser={this.SetUser.bind(this)}
            />
            <Main
                showRegisterForm={this.state.showRegisterForm}
                showLoginForm={this.state.showLoginForm}
                setUser={this.SetUser.bind(this)}
                user={this.state.user}
            />
        </div>
    }
}
export default NewsLetterSite;
