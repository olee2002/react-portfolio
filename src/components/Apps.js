import React, { Component } from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

export default class Apps extends Component {
    render() {
      const ecommerce = "A shopping cart app with built with React Hooks/Redux firebase Auth/ Stripe API"
      const wastepoint = "WastePoint Web Portal: A tailored door to door trash pick-up service web solutions for the admins, supervisors.  Technologies: React/Redux, Material UI and HTML, CSS, PHP/Laravel";
      const wastepointMobile = "WastePoint Mobile:This native app tracks porter locations, scans qrcode and take photos of jobsite and report them back to the admin site.  Technologies: React-Native/Expo, Native Base and PHP/Laravel";
      const syndeo = "Syndeo:  web platform that connects publishers to advertisers dedicated to the frontend.  Technologies: React/Redux, Material UI and HTML, CSS";
      const hangman = "Hangman: This is a simple word guessing game the basic idea of which is from the hangman game.  Technologies: JavaScript, DOM, jQuery, and HTML, CSS Click image to continue. Watch out for the sound!";
      const upnext = "UpNext: This app has a built in timer for the each order that will help you monitor your food prep time so you don't need to wait in line. Technologies: MongoDB, Express, Node.js, and Handle-bar/CSS";
      const myarch = "MyArchitecture: This app allows users to log in their favorite buildings in the cities they visit, a Full MERN stack application. Technologies: MongoDB, Express, Node.js, and React Styled-Components ";
      const citypoint = "CityPoint: A Full-stack application with React on Rails with many to many relationships. This app allows user to write reviews for the cities they visited. Technologies: Ruby on Rails, React,Styled-Components ";
      const olingo = "Olingo: A Full-stack React on Rails. This app allows users to choose the languages they want to learn. Technologies: Ruby on Rails, React, Styled-Components";

        return (
            <Container>
                <div>
                <a href='https://olee2002.github.io/e-commerce/' target="_blank" data-tip={ecommerce} data-type='info'><img src='images/e-commerce.png' alt="e-commerce"/></a>
                <a href='https://syndeo.netlify.com/' target="_blank" data-tip={syndeo} data-type='info'><img src='images/syndeo.png' alt="syndeo"/></a>
                <a href='https://wastepoint-qa.netlify.com/'  target="_blank" data-tip={wastepoint} data-type='info'><img src='images/wp.png' alt="wastepoint"/></a>
                <a href='#' data-tip={wastepointMobile} data-type='info'>
            
                     <img src='images/wp-1.png' alt="wastepoint"/>
                     <img src='images/wp-2.png' alt="wastepoint"/>
                     <img src='images/wp-3.png' alt="wastepoint"/>
                     <img src='images/wp-4.png' alt="wastepoint"/>
                     <img src='images/wp-5.png' alt="wastepoint"/>
                     <img src='images/wp-6.png' alt="wastepoint"/>
          
                   </a>
                   <a href='https://oleeshangmangame.netlify.com/'target="_blank" data-tip={hangman} data-type='info'><img src='images/hangman.jpg' alt="hangman"></img></a>
                    <a href='https://infinite-spire-33306.herokuapp.com/' target="_blank" data-tip={upnext} data-type='info'><img src='images/upnext.jpg' alt="upnext"></img></a>
 
                    <ReactTooltip className='tooltip'/> 
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
  z-index: 1 ; 
div{
  width: 75vw;
  height: auto;
  display: flex;
  padding: 20px;
  flex-direction: row;
  overflow: scroll;
  flex-wrap: wrap;
  align-items: center; 
  justify-content: flex-start;
  margin-top: 50px;
  margin-bottom: 50px;
  @media (max-width: 700px) {
   width: 85vw;
  justify-content: center;
  margin-bottom: 50px;
  }
}
img{
    z-index: 0 ;
  margin:3.5px;
  box-shadow:1.5px 1.5px #888888;
  overflow: hidden;
  height: 175px;
  max-width: 175px;
  opacity: 0.7;
  text-decoration: none;
  &:hover{
    opacity: 1;
    transform: translateY(2px);
  }
  
};
`;
