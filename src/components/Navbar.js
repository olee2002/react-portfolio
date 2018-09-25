import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

    render() {
        return (
            <Container>
                <div><Link style={styles.menu} to='/'><img src='images/home.svg' alt="home" /><p>Home</p></Link></div>
                <div><Link style={styles.menu} to='/apps'><img src='images/works.png' alt="works" />Apps</Link></div>
                <div><Link style={styles.menu} to='/youtube'><img src='images/design.png' alt="youtube" />Youtube</Link></div>
                <div><Link style={styles.menu} to='/about'><img src='images/user.png' alt="about" />About</Link></div>
                <div><a style={styles.menu} href='https://github.com/olee2002/Portfolio/blob/master/images/olee-resume.pdf' target=''><img src='images/resume.png' alt="resume" />Résumé</a></div>
                <Link style={styles.button} to='/login'><button>LogIn</button></Link>
                <Link style={styles.button} to='/signup'><button>Register</button></Link>
            </Container >)
    }
}

export default Navbar;


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
        width:20vh;
        color: black;
        cursor: pointer;
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
    cursor: pointer;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    &:hover{
        background: rgba(0, 0,0, 0.045);
        color: 'white';
        };
}
}
                `;


