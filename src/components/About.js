import React, { Component } from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import axios from 'axios';
export default class About extends Component {

    state = {
        user: {}
    }

    componentDidMount = () => {
        // axios.get('/api/test')
        //     .then((res) => {
        //         console.log(res.data)
        //         this.setState({ user: res.data })
        //         console.log(this.state.user)
        //     })
    }

    render() {
        return (
            <Container>
                <img src='images/olee.jpg' data-type="info" data-tip="yo whats up?"></img>
                <ReactTooltip />
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
z-index: 999 ;
img{
    width: 25vw;
    border-radius: 10px;
    margin-bottom: 30px;
}
div{
    width: 55vw;
    text-align: left;
    z-index: 999 ;
    }
`;
