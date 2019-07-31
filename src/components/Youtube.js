import React, { Component } from 'react';
import styled from 'styled-components';


export default class Youtube extends Component {
    render() {
        return (
            <Container>
                <div><h3>Checkout my coding video on youtube!</h3></div><br />
                <div><a href='https://www.youtube.com/channel/UC8E39wGNPoEV6W-bj7lLpDA/featured?view_as=public'>Click here (Olee's Youtube Channel) for more videos!</a></div>
                <div>
                    <iframe src="https://www.youtube.com/embed/rqAlF2K0eVU" title='1' frameborder="10" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
z-index: 1 ;
a{
    text-decoration: none;
    margin-left: 10px;
    margin-bottom: 30px;
    z-index: 1 ;
}
div{ 
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
padding:10px;
iframe{
  z-index: 0 ;
  margin:10px;
  border: 1px solid white;
  box-shadow: 3px 3px lightgray;
  width: 50vh;
  height: 40vh;
  opacity: 0.7;
  text-decoration: none;
};
@media only screen and (max-width: 700px) {
   h3 {
      display: none;
   }
   a{font-size: 18px;}
   iframe{
      width: 90%;
   }
    div{ 
        padding: 10px;
        color: #181818;
    }
   }
`;
