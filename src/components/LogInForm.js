import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
const API_HOST_URL = process.env.REACT_APP_API_HOST_URL;

export default class LogInForm extends Component {

    state = {
        email: '',
        password: '',
        isClicked: false,
        passwordShown: false,
        errmsg: '',
        user: {}
    }

    handleChange = name => (e) => {
        this.setState({
            [name]: e.target.value.toLowerCase().toString()
        });
    }
    handlePassword = (e) => {
        e.preventDefault();
        this.setState({
            passwordShown: !this.state.passwordShown
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email: this.state.email,
            password: this.state.password
        }
        if (this.state.email === 'guest' && this.state.password === '123') {
            const user = {
                first_name: 'guest',
                password: this.state.password
            }
            sessionStorage.setItem("user", JSON.stringify(user));
            this.setState({ isClicked: true });
        } else {
            axios
                .post(`${API_HOST_URL}/api/login`, payload)
                .then((res) => {
                    sessionStorage.setItem("user", JSON.stringify(res.data));
                    this.setState({ isClicked: true, user: res.data });
                })
                .catch((err) => {
                    this.setState({ errmsg: JSON.stringify(err.response.data) });
                });
        }
    }


    render() {

        const user = JSON.parse(sessionStorage.getItem("user"));

        return (
            <Container>
                {!this.state.isClicked && !user ?
                    <form>
                        <div>
                            <label>Email</label>
                            <input type='text' onChange={this.handleChange('email')} />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type={!this.state.passwordShown ? 'password' : 'text'} onChange={this.handleChange('password')} />
                        </div>
                        <div>
                            <button style={{ width: '200px' }} onClick={this.handlePassword}>
                                {!this.state.passwordShown ? 'Show Password' : 'Hide Password'}
                            </button>
                            <button onClick={this.handleSubmit}>
                                LogIn
                            </button>
                        </div>
                        <p style={{ fontSize: '12px', color: 'red' }}>{this.state.errmsg ? `Error Message : ${this.state.errmsg}` : null}</p>
                    </form>
                    :
                    <div>{user ? `Welcome,  ${user.first_name}! Click the links above or play with bubbles.` : null}</div>
                }
            </Container>
        )
    }
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
form{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    z-index: 999 ;
    margin-right: 50px;
}
label{
    margin-left: 10px;
    margin-right: 10px;
    font-size: 14px;
};
input{
    height: 25px;
    width: 300px;
    margin: 3px;
    border: 1px solid lightgray;
    z-index: 999;
    font-size: 14px;
    background: #ffffff;
}
button{
    height: 30px;
    width: 100px;
    border: none;
    margin-top: 10px;
    margin-right: 5px;
    cursor: pointer;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    box-shadow:1.5px 1.5px 0px rgba(0,0,0,0.15);
}
@media only screen and (max-width: 600px) {
 width: 100vh;
 height: 100vh;
}

`;