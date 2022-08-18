import React from 'react'
import { DIFF_HARD } from '../../../config'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Game from '../components/Game/Game'

function HardGamePage() {
  return (
    <>
    <Header />
    <Game difficulty={DIFF_HARD} />  
    <Footer />
    </>  )
}

export default HardGamePage