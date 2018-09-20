import React, { Component } from 'react';
import styled from 'styled-components';


export default class Resume extends Component {
    render() {
        return (
            <Container>
                Hello from Resume!
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
