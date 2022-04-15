import React from 'react'
import styled from "styled-components"
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
      title="Model S"
      description="Order Online for Touchless Delivery"
      leftBtnTxt="Custom Order"
      rightBtnTxt="Existing Inventory"
      backgroundimg="model-s.jpg"
      />
      <Section
      title="Model Y"
      description="Order Online for Touchless Delivery"
      leftBtnTxt="Custom Order"
      rightBtnTxt="Existing Inventory"
      backgroundimg="model-y.jpg"
      />
      <Section
      title="Model 3"
      description="Order Online for Touchless Delivery"
      leftBtnTxt="Custom Order"
      rightBtnTxt="Existing Inventory"
      backgroundimg="model-3.jpg"
      />
      <Section
      title="Model X"
      description="Order Online for Touchless Delivery"
      leftBtnTxt="Custom Order"
      rightBtnTxt="Existing Inventory"
      backgroundimg="model-x.jpg"
      />
      <Section
      title="Low cost solar panel in America"
      description="Money back guarantee"
      leftBtnTxt="order now"
      rightBtnTxt="learn more"
      backgroundimg="solar-panel.jpg"
      />
      <Section
      title="solar for new roofs"
      description="Solar Roofs cost less than new roof"
      leftBtnTxt="order now"
      rightBtnTxt="learn more"
      backgroundimg="solar-roof.jpg"
      />
       <Section
      title="Accessories"
      description=""
      leftBtnTxt="Shop Now"
      backgroundimg="accessories.jpg"
      />
      
     

      </Container>
  )
}

export default Home

const Container = styled.div`
height:100vh;
`
