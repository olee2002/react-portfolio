import React, { Component } from 'react'
import styled from 'styled-components'
import { Random } from 'react-animated-text'

export default class Home extends Component {

   state = {
      showText: false,
   }

   render() {
      const { showText } = this.state;
      return (
         <Container>
            <div>
               <span>
                 <Random
                     text="Welcome to Olee's Portfolio Site!"
                     effect='verticalFadeOut'
                     effectDirection='down'
                     effectDuration={7}
                     effectDelay={3}
                     iterations={1}
                     effectChange={10}
                  />
               </span>
               <span>
                  <Random
                        text="Welcome to Olee's Portfolio Site!"
                        effect='verticalFadeIn'
                        effectDirection='up'
                        effectDuration={7}
                        effectDelay={13}
                        iterations={5}
                        effectChange={10}
                     />
                  
               </span>
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
z-index: 0 ;
div{
    margin-top: -50px; 
    font-size: 35px;
    font-weight: 800;
    span{
       position: relative;

    }
}
@media only screen and (max-width: 700px) {
    position: fixed;
    div{
        font-size: 32px;  
        padding: 20px;
        color: #181818;
    }
`
