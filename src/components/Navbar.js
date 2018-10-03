import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';

import { logInUsers } from '../redux/actions/loginActionCreator'

const styles = {
    menu: {
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        height: '10vh'
    },
    button: {
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        height: '10vh'
    }
}

class Navbar extends Component {

    state = {
        user: {}
    }

    handleLogOut = () => {
        sessionStorage.removeItem("user");
        this.props.logInUsers();
    }

    componentWillReceiveProps = (nextProps) => {
        console.log('nav', nextProps)
    }

    render() {
        const guest = `Not ready to register yet? Log in as a guest! ID:guest, PW:123`;
        const user = JSON.parse(sessionStorage.getItem("user"));
        return (
            <Container>
                <div><Link style={styles.menu} to='/'><img src='images/home.svg' alt="home" /><p>Home</p></Link></div>
                <div><Link style={styles.menu} to='/apps'><img src='images/works.png' alt="works" /><p>Apps</p></Link></div>
                <div><Link style={styles.menu} to='/youtube'><img src='images/design.png' alt="youtube" /><p>Youtube</p></Link></div>
                <div><Link style={styles.menu} to='/about'><img src='images/user.png' alt="about" /><p>About</p></Link></div>
                <div><a style={styles.menu} href='https://github.com/olee2002/react-portfolio/blob/master/public/images/olee-resume.pdf' target=''><img src='images/resume.png' alt="resume" /><p>Résumé</p></a></div>

                {!user ?
                    <span style={styles.button}>
                        <Link style={styles.button} to='/login'><button>LogIn</button></Link>
                        <Link style={styles.button} to='/signup' data-tip={guest}><button>Register</button></Link>
                    </span>
                    :
                    <span style={styles.button}>
                        {`Hello, ${user.first_name}!`}
                        <button onClick={this.handleLogOut}>
                            LogOut
                    </button>
                    </span>
                }
                <ReactTooltip className='tooltip' />
            </Container >)
    }
}

const mapStateToProps = state => ({
    state
});

const mapDispatchToProps = dispatch => ({
    logInUsers: (payload) => dispatch(logInUsers(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

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
    width: 100px;
    background: none;
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
  }
}
                `;


