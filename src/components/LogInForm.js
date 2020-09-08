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
         errmsg: '',
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
      } else {
         this.props.logInUsers(payload)
         if (this.state.fetched) this.setState({ fetched: true })
      }
   }

   render() {
      const user = JSON.parse(sessionStorage.getItem('user'))
      return (
         <Container>
            {!this.state.fetched && !user ? (
               <form>
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
                     <small onClick={this.handlePassword} style={{ position:'absolute', marginLeft: -30, marginTop:8, cursor:'pointer' }}>
                        {' '}
                        {!this.state.passwordShown
                           ? <i class="fa fa-eye" aria-hidden="true"></i>
                           : <i class="fa fa-eye-slash" aria-hidden="true"></i>}
                     </small>
                  </div>
                  <div>
                     <button onClick={this.handleSubmit}>LogIn</button>
                     <Link to='/signup'>
                        <button>Sign Up</button>
                     </Link>
                  </div>
                  <p style={{ fontSize: '12px', color: 'red' }}>
                     {this.state.errmsg
                        ? `Error Message : ${
                             this.state.errmsg.response
                                ? this.state.errmsg.response.data
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
      justify-content: center;
      align-items: flex-end;
      z-index: 1;
   }
   label {
      margin-left: 10px;
      margin-right: 10px;
      font-size: 14px;
   }
   input {
      height: 25px;
      width: 300px;
      margin: 3px;
      border: 1px solid lightgray;
      z-index: 1;
      font-size: 14px;
      background: #ffffff;
   }
   button {
      height: 30px;
      width: 150px;
      border: none;
      margin-top: 10px;
      margin-right: 5px;
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
         margin-right: 300px;
         input {
            width: 200px;
         }
         button {
            width: 97.5px;
            font-size: 10px;
         }
      }
   }
`
