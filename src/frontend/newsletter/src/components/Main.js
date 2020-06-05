import React, { Component } from "react";
import LoginWindow from "./LoginWindow";
import RegisterWindow from "./RegisterWindow";
import UserWindow from "./UserWindow";

class Main extends Component {

    SetUser = (user) => {
        this.props.setUser(user);
    };
    render() {
        if (this.props.showLoginForm) {
            return <div className="main">
                <LoginWindow
                    loginUser={this.SetUser.bind(this)}
                />
            </div>
        }
        else if (this.props.showRegisterForm) {
            return <div className="main">
                <RegisterWindow
                    registerUser={this.SetUser.bind(this)}
                />
            </div>
        }
        else if (this.props.user) {
            return <div className="main">
                <UserWindow
                user={this.props.user}
                subscription={this.SetUser.bind(this)}
                />
            </div>
        }
        return <div>

        </div>
    }
}
export default Main;

