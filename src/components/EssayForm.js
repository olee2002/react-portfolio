import React, { Component } from 'react';
import styled from 'styled-components';


export default class EssayForm extends Component {

    render() {
        return (
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <h4>Please Submit Your Comment!</h4>
                    <textarea
                    // value={this.state.value}
                    // onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </Container>
        )
    }
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
form{
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
textarea{
    margin-top: 0px;
    margin-bottom: 5px;
    width: 30vw;
    height: 18vh;
    border-radius: 5px;
    font-size: 14px;
    border: 1px solid lightgray;
}
}
`;