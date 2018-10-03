import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { logInUsers } from '../redux/actions/loginActionCreator';


class LogInForm extends Component {

    state = {
        email: '',
        password: '',
        passwordShown: false,
        errmsg: '',
        user: {},
        fetched: false
    }

    componentWillReceiveProps = (nextProps) => {
        const { login } = nextProps.state;
        this.setState({
            user: login ? login.user : {},
            errmsg: login ? login.errmsg : '',
            fetched: login ? login.feched : false
        });
    }

    handleChange = name => (e) => {
        this.setState({
            [name]: e.target.value.toLowerCase().toString(), errmsg: ''
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
            this.props.logInUsers(payload)
            if (this.state.fetched) this.setState({ fetched: true });
        } else {
            this.props.logInUsers(payload)
            if (this.state.fetched) this.setState({ fetched: true });

        }
    }


    render() {
        const user = JSON.parse(sessionStorage.getItem("user"));
        return (
            <Container>
                {!this.state.fetched && !user ?
                    <form>
                        <p style={{ fontSize: '12px', color: 'red' }}>{this.state.errmsg ? `Error Message : ${this.state.errmsg.response.data}` : null}</p>
                        <div>
                            <label>Email</label>
                            <input type='text' onChange={this.handleChange('email')} />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type={!this.state.passwordShown ? 'password' : 'text'} onChange={this.handleChange('password')} />
                        </div>
                        <div>
                            <button onClick={this.handlePassword}>
                                {!this.state.passwordShown ? 'Show Password' : 'Hide Password'}
                            </button>
                            <button onClick={this.handleSubmit}>
                                LogIn
                            </button>
                        </div>
                    </form>
                    :
                    <div>{user ? `Welcome,  ${user.first_name}! Click the links above or play with bubbles.` : null}</div>
                }
            </Container>
        );
    }
}
const mapStateToProps = state => ({
    state: state,
    user: state.user,
    errmsg: state.errmsg,
    fetching: state.feching,
    fetched: state.feched

});

const mapDispatchToProps = dispatch => ({
    logInUsers: (payload) => dispatch(logInUsers(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    z-index: 1 ;
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
    z-index: 1;
    font-size: 14px;
    background: #ffffff;
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
@media only screen and (max-width: 600px) {
 width: 100vh;
 height: 100vh;
 
 form{
    margin-right:350px;
    input{
    width: 200px;
    }
}
}

`;