import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default class LogInForm extends Component {

    state = {
        firstName: '',
        lastName: '',
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userId: this.state.userId,
            password: this.state.password
        }
        const res = axios.create({
            proxy: {
                host: `${process.env.REACT_APP_API_HOST_URL}`
            }
        }).post('/api/test', payload)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }


    render() {
        return (
            <Container>
                <h3>Please Sign Up!</h3>
                <form>
                    <div>
                        <label>Firstname</label>
                        <input type='text' onChange={this.handleChange('firstName')} />
                    </div>
                    <div>
                        <label>Lastname</label>
                        <input type='text' onChange={this.handleChange('lastName')} />
                    </div>
                    <div>
                        <label>ID</label>
                        <input type='text' onChange={this.handleChange('userId')} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='text' onChange={this.handleChange('password')} />
                    </div>
                    <div>
                        <button onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>

            </Container>
        )
    }
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 999 ;
form{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    z-index: 999 ;
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
`;