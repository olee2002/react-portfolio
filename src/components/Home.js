import React, { Component } from 'react';
import styled from 'styled-components';


export default class Home extends Component {
    render() {
        return (
            <Container>
                Hello from Home!
            </Container>
        )
    }
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;
