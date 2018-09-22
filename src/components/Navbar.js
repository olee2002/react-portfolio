import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogInForm from './LogInForm';

const styles = {
    textDecoration: 'none',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    height: '10vh'
}


class Navbar extends Component {

    render() {
        return (

            <Container>
                <div>
                    <NavLink><Link style={styles} to='/'><img src='images/home.svg' />Home</Link></NavLink>
                    <NavLink><Link style={styles} to='/apps'><img src='images/works.png' />Apps</Link></NavLink>
                    <NavLink><Link style={styles} to='/youtube'><img src='images/design.png' />Youtube</Link></NavLink>
                    <NavLink><Link style={styles} to='/about'><img src='images/user.png' />About</Link></NavLink>
                    <NavLink><a style={styles} href='https://github.com/olee2002/Portfolio/blob/master/images/olee-resume.pdf' target=''><img src='images/resume.png' />Résumé</a></NavLink>
                    <LogInForm />
                </div>
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
          div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
          }
                `;

const NavLink = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width:30vh;
        color: black;
        cursor: pointer;
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
    `;
