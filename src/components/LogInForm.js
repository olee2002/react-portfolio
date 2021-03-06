import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { logInUsers } from '../redux/actions/loginActionCreator'

class LogInForm extends Component {
   state = {
      email: '',
      password: '',
      passwordShown: false,
      errmsg: '',
      user: {},
      fetched: false,
   }

   componentWillReceiveProps = (nextProps) => {
      const { login } = nextProps.state
      this.setState({
         user: login ? login.user : {},
         errmsg: login ? login.errmsg : '',
         fetched: login ? login.feched : false,
      })
   }

   handleChange = (name) => (e) => {
      this.setState({
         [name]: e.target.value.toLowerCase().toString(),
         errmsg: '',
      })
   }
   handlePassword = (e) => {
      e.preventDefault()
      this.setState({
         passwordShown: !this.state.passwordShown,
      })
   }

   handleSubmit = (e) => {
      e.preventDefault()
      const payload = {
         email: this.state.email,
         password: this.state.password,
      }
      if (this.state.email === 'guest' && this.state.password === '123') {
         const user = {
            first_name: 'guest',
            password: this.state.password,
         }
         sessionStorage.setItem('user', JSON.stringify(user))
         this.props.logInUsers(payload)
         if (this.state.fetched) this.setState({ fetched: true })
      } else if (this.state.email && this.state.password) {
         this.props.logInUsers(payload)
         if (this.state.fetched) this.setState({ fetched: true })
      } else {
         this.setState({ errmsg: 'All Fields Required!' })
      }
   }

   render() {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const { email, password } = this.state
      return (
         <Container>
            {!this.state.fetched && !user ? (
               <form>
                  <h3>Please Log In!</h3>
                  <div>
                     <label>Email</label>
                     <input type='text' onChange={this.handleChange('email')} />
                  </div>
                  <div>
                     <label>Password</label>
                     <input
                        type={!this.state.passwordShown ? 'password' : 'text'}
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
                     <Link to='/signup'>
                        <button>Sign Up Page</button>
                     </Link>
                     <button onClick={this.handleSubmit}>Log In</button>
                  </div>
                  <p style={{ fontSize: '12px', color: 'red' }}>
                     {this.state.errmsg
                        ? `Error Message : ${
                             this.state.errmsg
                                ? 'Invalid Email or Password'
                                : 'User Not Found!'
                          }`
                        : null}
                  </p>
               </form>
            ) : (
               <div>
                  {user
                     ? `Welcome,  ${user.first_name}! Click the links above or play with bubbles.`
                     : null}
               </div>
            )}
         </Container>
      )
   }
}
const mapStateToProps = (state) => ({
   state: state,
   user: state.user,
   errmsg: state.errmsg,
   fetching: state.feching,
   fetched: state.feched,
})

const mapDispatchToProps = (dispatch) => ({
   logInUsers: (payload) => dispatch(logInUsers(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm)

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 1;
   form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      z-index: 1;
      width: 500px;
      height: 300px;
   }
   label {
      margin-left: 10px;
      margin-right: 10px;
      font-size: 14px;
   }
   input {
      height: 25px;
      width: 300px;
      margin: 5px;
      padding: 5px;
      border: 1px solid lightgray;
      border-radius: 5px;
      z-index: 1;
      font-size: 14px;
      font-family: 'Montserrat', sans-serif;
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
      width: 100vh;
      height: 100vh;
      form {
         input {
            width: 200px;
         }
         button {
            width: 97.5px;
            font-size: 12px;
         }
      }
   }
`
