import React, { Component } from 'react';
import Header from "./Header";
import Main from "./Main";

class NewsLetterSite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginForm: false,
            showRegisterForm: false,
            user: undefined
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
            showRegisterForm: false
        });
    };

    render() {
        return <div>
            <Header
                showLogin={this.LoginUser.bind(this)}
                showRegister={this.RegisterUser.bind(this)}
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
