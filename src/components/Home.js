import React, { Component } from 'react';
import styled from 'styled-components';
import { Random } from 'react-animated-text';


export default class Home extends Component {


    render() {
        return (
            <Container>
                <div>
                    <Random
                        text="Welcome to Olee's Portfolio Site!"
                        effect="verticalFadeOut"
                        effectDirection="down"
                        effectDuration={4}
                        effectDelay={2}
                        iterations={1}
                        effectChange={10}
                    />
                </div>
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
z-index: 999 ;
div{
    margin-top: -100px; 
    font-size: 35px;
    font-weight: 800;
}
`;
