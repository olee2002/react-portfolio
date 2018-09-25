import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import axios from 'axios';

export default class LogInForm extends Component {

    state = {
        email: '',
        password: '',
        isClicked: false
    }

    handleChange = name => (e) => {
        console.log(e.target.value)
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


        const API_HOST_URL = process.env.REACT_APP_API_HOST_URL
        axios.post(`${API_HOST_URL}/api/login`, payload)
            .then((res) => {
                sessionStorage.setItem("user", JSON.stringify(res.data))
            })
            .catch((err) => console.log(err));

        this.setState({ isClicked: true })
    }


    render() {

        const user = JSON.parse(sessionStorage.getItem("user"))

        const guest = `Not ready to register yet? Log in as a guest! ID:guest, PW:123`
        return (
            <Container>
                {!this.state.isClicked && !user ?
                    <form>
                        <label>Email</label>
                        <input type='text' onChange={this.handleChange('email')} />
                        <label>Password</label>
                        <input type='text' onChange={this.handleChange('password')} />
                        <button onClick={this.handleSubmit}>LogIn</button>
                        <Link to='signup'><button data-tip={guest}>Register</button></Link>
                        <ReactTooltip className='tooltip' />
                    </form>
                    :
                    <div>{user ? `Welcome,  ${user.first_name}!` : null}</div>
                }
            </Container>
        )
    }
}

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
/* flex-wrap: wrap; */
justify-content: center;
align-items: center;
label{
    margin-left: 10px;
    margin-right: 10px;
    font-size: 12px;
};
button{
    height: 20px;
    width: 70px;
    border: none;
    margin-left: 5px;
    cursor: pointer;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    box-shadow:1.5px 1.5px 0px rgba(0,0,0,0.15);
}
`;