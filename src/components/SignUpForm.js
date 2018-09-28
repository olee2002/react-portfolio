import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { registerUsers } from '../redux/actions/signupActionCreator';

class SignUpForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordShown: false,
        isRegistered: false,
        user: {}
    }

    handleChange = name => {
        return (e) => {
            this.setState({
                [name]: e.target.value
            });
        }
    }

    handleSubmit = (e) => {

        e.preventDefault();
        const payload = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
        this.props.registerUsers(payload);
    }
    handlePassword = (e) => {
        e.preventDefault();
        this.setState({ passwordShown: !this.state.passwordShown })
    }

    render() {
        const user = sessionStorage.getItem("user");
        const { passwordShown } = this.state;
        return (
            <Container>
                {!this.state.isRegistered && !user ?

                    <form>
                        <h3>Please Sign Up!</h3>
                        <div>
                            <label>Firstname</label>
                            <input type='text' onChange={this.handleChange('firstName')} />
                        </div>
                        <div>
                            <label>Lastname</label>
                            <input type='text' onChange={this.handleChange('lastName')} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type='text' onChange={this.handleChange('email')} />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type={!passwordShown ? 'password' : 'text'}
                                onChange={this.handleChange('password')} />
                        </div>
                        <div>
                            <button onClick={this.handlePassword}>
                                {passwordShown ? 'hide password' : 'show password'}
                            </button>
                            <button onClick={this.handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </form>
                    :
                    <Message>You are successfully Registered! Please log in to proceed!</Message>}
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    state: state,
    user: state.user,
    errmsg: state.errmsg,
    fetched: state.feched

});

const mapDispatchToProps = dispatch => ({
    registerUsers: (payload) => dispatch(registerUsers(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);


const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
z-index: 999 ;
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
}
button{
    height: 30px;
    width: 150px;
    border: none;
    margin-top: 10px;
    margin-right: 5px;
    cursor: pointer;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    box-shadow:1.5px 1.5px 0px rgba(0,0,0,0.15);
}
`;


const Message = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-right: 20px;
`;
