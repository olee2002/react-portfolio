import React, { Component } from 'react';
import styled from 'styled-components';


export default class About extends Component {
    render() {
        return (
            <Container>
                <img src='images/olee.jpg'></img>
                <div><h3>Olee is a full-stack software developer with a strong design background. In her previous career as an architect, the process of designing skyscrapers trained her to break down complex problems into their constituent parts. No one could build the projects alone, it was always the result of collaborative effort. Due to that, she grew to be an excellent team player.</h3></div>
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
img{
    width: 25vw;
    border-radius: 10px;
    margin-bottom: 30px;
}
div{
    width: 55vw;
    text-align: left;
    }
`;
