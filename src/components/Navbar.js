import React, { Component } from 'react';
import styled from 'styled-components';

class Navbar extends Component {
    render() {
        return (
            <Container>
                <div><img src='images/home.svg' />Home</div>
                <div><img src='images/user.png' />About</div>
                <div><img src='images/works.png' />Apps</div>
                <div><img src='images/design.png' />MyYoutube</div>
                <div><img src='images/resume.png' />Résumé</div>
            </Container>)
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
    border-bottom:5px solid darkgray;
    background: rgba(0, 0,0, 0.045)
};
img{
  opacity: 1;
  height:3.0vh;
  z-index: 0 ;
  text-align: center;
  margin: 3px;
}
  }
`;
