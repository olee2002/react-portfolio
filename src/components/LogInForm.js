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
        errmsg: '',
        user: {}
    }

    handleChange = name => (e) => {
        this.setState({
            [name]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email: this.state.email,
            password: this.state.password
        }
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


    render() {

        const user = JSON.parse(sessionStorage.getItem("user"));
        // console.log(JSON.stringify(this.state.user));
        console.log(this.state.errmsg);
        return (
            <Container>

                {!this.state.isClicked && !user ?
                    <form>
                        <label>Email</label>
                        <input type='text' onChange={this.handleChange('email')} />
                        <label>Password</label>
                        <input type='text' onChange={this.handleChange('password')} />
                        <div>
                            <button onClick={this.handleSubmit}>LogIn</button>
                            <Link to='signup'><button>Register</button></Link>
                        </div>
                        <p style={{ fontSize: '14px', color: 'red' }}>{this.state.errmsg ? `Error Message : ${this.state.errmsg}` : null}</p>
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
/* flex-wrap: wrap; */
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
    border-radius: 5px;
    border: 1px solid lightgray;
    z-index: 999;
    font-size: 14px;
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