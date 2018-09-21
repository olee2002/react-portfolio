import React, { Component } from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

export default class Apps extends Component {
    render() {
        const hangman = "This is a simple word guessing game the basic idea of which is from the hangman game.  Technologies: JavaScript, DOM, jQuery, and HTML, CSS Click image to continue. Watch out for the sound!";
        const upnext = "This is a Full-stack application with 3 data models. This app has a built in timer for the each order that will help you monitor your food prep time so you don't need to wait in line. Technologies: MongoDB, Express, Node.js, and Handle-bar/CSS";
        const myarch = "This is a Full MERN stack application.This app allows users to log in their favorite buildings in the cities they visit. Technologies: MongoDB, Express, Node.js, and React Styled-Components ";
        const citypoint = "This is a Full-stack application with React on Rails with many to many relationships. This app allows user to write reviews for the cities they visited. Technologies: Ruby on Rails, React,Styled-Components ";
        const olingo = "This is a Full-stack application with React on Rails. This app allows users to choose the languages they want to learn. Technologies: Ruby on Rails, React, Styled-Components";

        return (
            <Container>
                <div>
                    <a href='https://oleeshangmangame.netlify.com/' data-tip={hangman} data-type='info'><img src='images/hangman.jpg'></img></a>
                    <a href='https://infinite-spire-33306.herokuapp.com/' data-tip={upnext} data-type='info'><img src='images/upnext.jpg'></img></a>
                    <a href='https://my-architecture.herokuapp.com/' data-tip={myarch} data-type='info'><img src='images/myarch.jpg'></img></a>
                    <a href='https://team-project.herokuapp.com/' data-tip={citypoint} data-type='info'><img src='images/citypoint.png'></img></a>
                    <a href='https://o-lingo.herokuapp.com/' data-tip={olingo} data-type='info'><img src='images/olingo.png'></img></a>
                    <ReactTooltip className='tooltip' />
                </div>
            </Container>
        )
    }
}


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
div{
  width: 60vw;
  height: 60vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: center; */
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
