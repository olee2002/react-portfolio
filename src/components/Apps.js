import React, { Component } from 'react';
import styled from 'styled-components';


export default class Apps extends Component {
    render() {
        return (
            <Container>
                <div>
                    <a href='https://oleeshangmangame.netlify.com/'><img src='images/hangman.jpg'></img></a>
                    <a href='https://infinite-spire-33306.herokuapp.com/'><img src='images/upnext.jpg'></img></a>
                    <a href='https://my-architecture.herokuapp.com/'><img src='images/myarch.jpg'></img></a>
                    <a href='https://team-project.herokuapp.com/'><img src='images/citypoint.png'></img></a>
                    <a href='https://o-lingo.herokuapp.com/'><img src='images/olingo.png'></img></a>
                </div>
            </Container>
        )
    }
}

const Container = styled.a`
 width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
div{
  width: 60vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  z-index: 0 ;
}
img{
    z-index: 0 ;
  margin:3.5px;
  border: 1px solid darkgray;
  /* overflow: hidden; */
  height: 30vh;
  width: 30vh;
  opacity: 0.7;
  text-decoration: none;
  &:hover{
    opacity: 1;
    transform: translateY(2px);
  }
};
`;
