import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { registerUsers } from '../redux/actions/signupActionCreator'

class SignUpForm extends Component {
   state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordShown: false,
      isRegistered: false,
      errmsg: '',
      user: {},
   }

   componentWillReceiveProps = (nextProps) => {
      const { signup } = nextProps.state
      this.setState({
         user: signup ? signup.user : {},
         errmsg: signup ? signup.errmsg : '',
         fetched: signup ? signup.fetched : false,
      })
   }

   handleChange = (name) => {
      return (e) => {
         this.setState({
            [name]: e.target.value,
            errmsg: '',
         })
      }
   }

   handleSubmit = (e) => {
      const { firstName, lastName, email, password, passwordShown } = this.state
      e.preventDefault()
      const payload = { firstName, lastName, email, password }
      if (firstName && lastName && email && password) {
         this.props.registerUsers(payload)
      } else {
         this.setState({ errmsg: 'All Fields Required!' })
      }
   }
   handlePassword = (e) => {
      e.preventDefault()
      this.setState({ passwordShown: !this.state.passwordShown })
   }

   render() {
      const user = sessionStorage.getItem('user')
      const { passwordShown } = this.state
      const { errmsg } = this.state
      return (
         <Container>
            {!this.state.isRegistered && !user ? (
               <form>
                  <h3>Please Sign Up!</h3>
                  <div>
                     <label>Firstname</label>
                     <input
                        type='text'
                        onChange={this.handleChange('firstName')}
                     />
                  </div>
                  <div>
                     <label>Lastname</label>
                     <input
                        type='text'
                        onChange={this.handleChange('lastName')}
                     />
                  </div>
                  <div>
                     <label>Email</label>
                     <input type='text' onChange={this.handleChange('email')} />
                  </div>
                  <div>
                     <label>Password</label>
                     <input
                        required={true}
                        type={!passwordShown ? 'password' : 'text'}
                        onChange={this.handleChange('password')}
                     />
                     <small
                        onClick={this.handlePassword}
                        style={{
                           position: 'absolute',
                           marginLeft: -30,
                           marginTop: 15,
                           cursor: 'pointer',
                        }}>
                        {' '}
                        {!this.state.passwordShown ? (
                           <i class='fa fa-eye' aria-hidden='true'></i>
                        ) : (
                           <i class='fa fa-eye-slash' aria-hidden='true'></i>
                        )}
                     </small>
                  </div>
                  <div>
                     <Link to='login'>
                        <button>Log In</button>
                     </Link>
                     <button onClick={this.handleSubmit}>Register</button>
                     <div style={{ fontSize: '12px', color: 'red' }}>
                        {errmsg ? errmsg : null}
                     </div>
                  </div>
               </form>
            ) : (
               <Message>
                  You are successfully Registered! Please log in to proceed!
               </Message>
            )}
         </Container>
      )
   }
}

const mapStateToProps = (state) => ({
   state: state,
   user: state.user,
   errmsg: state.errmsg,
   fetched: state.feched,
})

const mapDispatchToProps = (dispatch) => ({
   registerUsers: (payload) => dispatch(registerUsers(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)

const Container = styled.div`
 width: 100vw;
   height: 100vh;
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 1;
form{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 1 ;
    width: 500px;
    height: 300px;
}
label{
    margin-left: 10px;
    margin-right: 10px;
    font-size: 14px;
};
input {
      height: 25px;
      width: 300px;
      margin: 5px;
      padding: 5px;
      border: 1px solid lightgray;
      border-radius: 5px;
      z-index: 1;
      font-size: 14px;
      background: #ffffff;
   }
   button {
      height: 30px;
      width: 150px;
      border: none;
      margin: 6px;
      cursor: pointer;
      z-index: 1;
      font-size: 14px;
      font-family: 'Montserrat', sans-serif;
      box-shadow: 1.5px 1.5px 0px rgba(0, 0, 0, 0.15);
   }
@media only screen and (max-width: 600px) {
    position: fixed;
    form{
      margin-right: 20px;
    }
    div{
        font-size: 20px;  
    }
    input{
    width: 200px;
    }
    button{
        width: 97.5px; 
        font-size: 10px;
    }
`

const Message = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   margin-right: 20px;
`
