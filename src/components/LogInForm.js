import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

export default class LogInForm extends Component {

    state = {
        userId: '',
        password: ''
    }

    handleChange = name => (e) => {
        console.log(e.target.value)
        this.setState({
            [name]: e.target.value
        })
    }

    componentDidMount() {
        this.handleSubmit
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            userId: this.state.userId,
            password: this.state.password
        }

        const API_HOST_URL = process.env.REACT_APP_API_HOST_URL
        const res = axios.post(`${API_HOST_URL}/api/test`, payload)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }


    render() {
        return (
            <Container>
                <form>
                    <label>ID</label>
                    <input type='text' onChange={this.handleChange('userId')} />
                    <label>Password</label>
                    <input type='text' onChange={this.handleChange('password')} />
                    <button onClick={this.handleSubmit}>LogIn</button>
                </form>

                <Link to='signup'><button>Register</button></Link>
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