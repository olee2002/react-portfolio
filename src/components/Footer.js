import React, { Component } from 'react';
import styled from 'styled-components';

const styles = {
    textDecoration: 'none',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    height: '10vh'
}

const Footer = () =>
    <Container>
        <div><a style={styles} href='https://github.com/olee2002' title="GitHub"><img src='images/github.png' /></a></div>
        |
        <div><a style={styles} href='https://www.linkedin.com/in/ok-hyun-lee-8467877' title="LinkedIn"><img src='images/linked.png' /></a></div>
        |
        <div><a style={styles} href="mailto:babylee2002@gmail.com" target="" title="Email"><img src='images/mail.png' /></a></div>
    </Container >


export default Footer;


const Container = styled.div`
          width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: auto; 
  font-size: 2vh;
  font-weight: 900;
  background: rgba(232, 231, 231,0.75);
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
                    border-top: 5px solid darkgray;
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
