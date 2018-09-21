import React, { Component } from 'react';
import styled from 'styled-components';


export default class Home extends Component {
    render() {
        return (
            <Container>
                <h1>Welcome to Olee's Portfolio Site!</h1>
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