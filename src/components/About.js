import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';


export default class About extends Component {

    state = {
        user: {}
    }


    componentDidMount = () => {
        const API_HOST_URL = process.env.REACT_APP_API_HOST_URL
        axios.get(`${API_HOST_URL}/api/users`)
            .then((res) => {
                this.setState({ user: res.data })
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <Container>
                <img src='images/olee.jpg' alt=""></img>
                <div>
                   <h3>Olee is a full-stack software developer with a strong design background. In her previous career as an architect, the process of designing skyscrapers trained her to break down complex problems into their constituent parts. No one could build the projects alone, it was always the result of collaborative effort. Due to that, she grew to be an excellent team player. You can reach her at babylee2002@gmail.com.
                     </h3>
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
z-index: 999 ;
img{
    width: 25vw;
    border-radius: 10px;
}
form{
    z-index: 999 ; 
}
div{
    width: 55vw;
    text-align: left;
    z-index: 999 ;
    margin-top: 11vh;
    margin-bottom: 10.25vh;
    }
    @media (max-width: 700px) {
       font-size: 15px;
           img{
            width: 50vw;
            margin-top: 30px;
        }
        div{
    width: 85vw;
    }
  }
`;
