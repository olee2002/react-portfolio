import React, { Component } from 'react';
import styled from 'styled-components';

export default class SignUpForm extends Component {
    render() {
        return (
            <Container>
                <form>
                    <label>
                        ID
            </label>
                    <input>
                    </input>
                    <label>
                        Password
            </label>
                    <input>
                    </input>
                    <button>Submit</button>
                    <button>Register</button>
                </form>
            </Container>
        )
    }
}

const Container = styled.div`
margin-left: 50px;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
label{
    margin-left: 10px;
    margin-right: 10px;
};
button{
    height: 20px;
    width: 70px;
    border: none;
    margin-left: 5px;
    cursor: pointer;
    box-shadow:1.5px 1.5px 0px rgba(0,0,0,0.15);
}
`;