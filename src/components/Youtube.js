import React, { Component } from 'react';
import styled from 'styled-components';


export default class Youtube extends Component {
    render() {
        return (
            <Container>
                <div><h4>Checkout my coding video on youtube!</h4></div><br />
                <div><a href='https://www.youtube.com/channel/UC8E39wGNPoEV6W-bj7lLpDA/featured?view_as=public'>Click here for more videos!</a></div>
                <div>
                    <iframe src="https://www.youtube.com/embed/tn3Pug4P0uI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <iframe src="https://www.youtube.com/embed/e5eFE0x5EhI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </Container>
        )
    }
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
a{
    text-decoration: none;
    margin-bottom: 30px;
}
div{ 
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
iframe{
  z-index: 0 ;
  margin:3.5px;
  border: 1px solid darkgray;
  width: 50vh;
  height: 40vh;
  opacity: 0.7;
  text-decoration: none;
  &:hover{
    opacity: 1;
    transform: translateY(2px);
  }
};
`;
