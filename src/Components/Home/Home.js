import React from 'react'
import Navbar from './Navbar'
import Container1 from './Container1'
import Container2 from './Container2'
import StickeyAudio from '../../CommonComponents/StickeyAudio'

const Home = () => {
  return (
    <div style={{position:"relative"}}>
      <StickeyAudio/>   
        <Navbar/>
        <Container1/>
        <Container2/>
    </div>
  )
}

export default Home