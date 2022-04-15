import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title,description,leftBtnTxt,rightBtnTxt,backgroundimg}) {
 
  return (
    <Wrap bgimg={backgroundimg}>
      <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      </Fade>
      <Button>
      <Fade bottom>
        <ButtonGroup>
          <Leftbutton>
            {leftBtnTxt}
          </Leftbutton>
          {rightBtnTxt&&<Rightbutton>
            {rightBtnTxt}
          </Rightbutton>}
        </ButtonGroup>
        </Fade>
        <DownArrow src="./images/down-arrow.svg"/>
      </Button>
    </Wrap>
  )
}

export default Section

const Wrap= styled.div`
    height: 100vh;
    width:100vw;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    //background-image:url("./images/model-s.jpg");
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image:${props=>`url("/images/${props.bgimg}")`};
    
`

const ItemText=styled.div`
    padding-top:15vh;
    text-align:center;
`

const ButtonGroup=styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:768px){
      flex-direction:column;
    }
`
const Leftbutton=styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;//horizontal
    align-items:center;//vertical
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;
    

`
const Rightbutton=styled(Leftbutton)`
    background:white;
    color:black;
    opacity:0.65;

`
const DownArrow=styled.img`
height:40px;
overflow-x:hidden;
animation:animatedDown infinite 1.5s
`

const Button=styled.div`

`