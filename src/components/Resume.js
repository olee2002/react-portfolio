import React, { Component } from 'react';
import styled from 'styled-components';


export default class Resume extends Component {
    render() {
        return (
            <Container>
                <a href='https://github.com/olee2002/Portfolio/blob/master/images/olee-resume.pdf'>Click here to view my resume!</a>
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
