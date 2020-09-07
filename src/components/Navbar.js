import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logInUsers } from '../redux/actions/loginActionCreator'

const styles = {
   menu: {
      textDecoration: 'none',
      color: 'black',
      display: 'flex',
      alignItems: 'center',
      height: '10vh',
   },
   menuIcon: {
      textDecoration: 'none',
      color: 'black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '10vh',
   },
   icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
   },
}

const Navbar = () => {
   const [user, setUser] = useState({})
   const [width, setWidth] = useState(window.innerWidth)
   useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
         // Set window width/height to state
         setWidth(window.innerWidth)
      }

      // Add event listener
      window.addEventListener('resize', handleResize)

      // Call handler right away so state gets updated with initial window size
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize)
   }, []) // Empty array ensures that effect is only run on mount

   const handleLogOut = () => {
      sessionStorage.removeItem('user')
      this.props.logInUsers()
   }

   const guest = `Not ready to register yet? Log in as a guest! ID:guest, PW:123`
   const userStored = JSON.parse(sessionStorage.getItem('user'))
   return (
      <Container>
         <div>
            <Link style={styles.menu} to='/'>
               <img src='images/home.svg' alt='home' />
               <p>Home</p>
            </Link>
         </div>
         <div>
            <Link style={styles.menu} to='/apps'>
               <img src='images/works.png' alt='works' />
               <p>Apps</p>
            </Link>
         </div>
         <div>
            <Link style={styles.menu} to='/youtube'>
               <img src='images/design.png' alt='youtube' />
               <p>Youtube</p>
            </Link>
         </div>
         <div>
            <Link style={styles.menu} to='/about'>
               <img src='images/user.png' alt='about' />
               <p>About</p>
            </Link>
         </div>
         {!userStored ? (
            width > 700 ? (
                  <div>
                     <Link style={styles.menu} to='/login'>
                        LogIn/SignUp
                     </Link>
                  </div>
                  // <div>
                  //    <Link to='/signup' data-tip={guest}>
                  //       <button>Register</button>
                  //    </Link>
                  // </div>
            ) : (
               <div>
                  <Link style={styles.menuIcon} to='/login'>
                     <i style={styles.icon} className='fas fa-bars'></i>
                  </Link>
               </div>
            )
         ) : (
            <div>
               <span style={styles.menu}>
                  {`Hello, ${user.first_name}!`}
                  <button onClick={this.handleLogOut}>LogOut</button>
               </span>
            </div>
         )}
      </Container>
   )
}

export default Navbar

const Container = styled.div`
          width: 100vw;
          height: 10vh;
          position: fixed;
          top: 0;
          left: auto;
          font-size: 1.85vh;
          font-weight: 900;
          background: rgba(232, 231, 231,0.45);
          color:rgb(3, 3, 3);
          z-index: 999 ;
          display: flex;
          flex-direction: row;
          justify-content: center;
        align-items: center;
       
        div{
            display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width:25vh;
        height: inherit;
        color: black;
        cursor: pointer;
        margin-top: 5px;
        border-bottom: 5px solid transparent;
&:hover{
        border-bottom: 5px solid darkgray;
        background: rgba(0, 0,0, 0.045)
        };
img{
        opacity: 1;
        height:3.0vh;
        z-index: 0 ;
        text-align: center;
        margin: 3px;
        };
        }
    button{
    height: 30px;
    /* width: 100px; */
    background: none;
    margin-right: 20px;
    border: none;
    z-index: 1 ;
    cursor: pointer;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    &:hover{
        background: rgba(0, 0,0, 0.045);
        color: 'white';
        };
}
@media (max-width: 700px) {
            p{
        display:none;
        }
        button{
         margin-right: 0px;
        }
  }
}
                `
