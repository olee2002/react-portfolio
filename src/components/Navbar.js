import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

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
                <div><Link style={styles} to='/'><img src='images/home.svg' />Home</Link></div>
                <div><Link style={styles} to='/apps'><img src='images/works.png' />Apps</Link></div>
                <div><Link style={styles} to='/youtube'><img src='images/design.png' />MyYoutube</Link></div>
                <div><Link style={styles} to='/about'><img src='images/user.png' />About</Link></div>
                <div><a style={styles} href='https://github.com/olee2002/Portfolio/blob/master/images/olee-resume.pdf'><img src='images/resume.png' />Résumé</a></div>
            </Container >)
    }
}

export default Navbar;


const Container = styled.div`
          width: 100vw;
          height: 10vh;
          display: flex;
          justify-content: center;
          position: fixed;
        
          top: 0;
          left: auto;
          font-size: 1.85vh;
          font-weight: 900;
          background: rgba(232, 231, 231,0.45);
          color:rgb(3, 3, 3);
          z-index: 999 ;
  div{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    width:15vh;
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
                  }
                `;
