import React from 'react'
import { DIFF_EASY } from '../../../config'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Game from '../components/Game/Game'

function EasyGamePage() {
  return (
    <>
    <Header />
    <Game difficulty={DIFF_EASY} />  
    <Footer />
    </>
    )
}

export default EasyGamePage