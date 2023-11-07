import React, { Component } from "react";
import "../LoginControl.css"

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
        isLoggedIn: false, // 초기 상태는 로그아웃 상태
        };
    }

    handleLoginClick = () => {
        this.setState({
        isLoggedIn: true,
        });
    };

    handleLogoutClick = () => {
        this.setState({
        isLoggedIn: false,
        });
    };

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let buttonText = isLoggedIn ? "로그아웃" : "로그인";
        let welcomeText = isLoggedIn ? "환영합니다!" : "로그인이 필요합니다.";

        return (
        <div className="login-box">
            <button className="login-btn" onClick={isLoggedIn ? this.handleLogoutClick : this.handleLoginClick}>
                {buttonText}
            </button>
            <p className="login-text">{welcomeText}</p>
        </div>
        );
    }
}

export default LoginControl;
