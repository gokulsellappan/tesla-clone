import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice'
import {useSelector} from 'react-redux';


function Header() {
    const [burgerStatus,setBurgerStatus]=useState(false);
    const cars=useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src='./images/logo.svg'/>
      </a>
      <Menu>
        {cars && cars.map((car,index)=>(
            <a href="#">{car}</a>
        ))}
        
        
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <ContextMenu onClick={()=>setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomeClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
        {cars&&cars.map((car,index)=>(
            <li>{car}</li>
        ))}
        <li> Existing Inventory</li>
        <li> Used Inventory</li>
        <li> Trade-In</li>
        <li> Cyber truck</li>
        <li> Roadaster</li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container=styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    padding:0 20px;
    align-items:center;
    justify-content:space-between;
    top:0;
    left:0;
    right:0;
    z-index:1;
`
const Menu=styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    flex:1;

    a{
      font-weight:600;
      text-transform:uppercase;
      padding:0 10px;
      flex-wrap:nowrap;
    }
    @media(max-width:768px){
      display:none;
    }

`

const RightMenu=styled.div`
    display:flex;
    align-items:center;
    a{
      font-weight:600;
      text-transform:uppercase;
      margin-right:10px;
    }

`
const ContextMenu=styled(MenuIcon)`
      cursor:pointer;
`

const BurgerNav=styled.div`
        top:0;
        bottom:0;
        right:0;
        position:fixed;
        display:flex;
        background:white;
        width:300px;
        z-index:16;
        list-style:none;
        flex-direction:column;
        text-align:start;
        padding:20px;
        li{
          padding:15px 0;
          border-bottom:1px solid rgba(0,0,0,.2);
          a{
            font-weight:600;
          }
        }
        transform:${props => props.show?`translateX(0)`:`translateX(100%)`};
        transition:transform 0.2s ease-in;
`
const CustomeClose=styled(CloseIcon)`
        cursor:pointer;

`
const CloseWrapper=styled.div`
        display:flex;
        justify-content:flex-end;
`