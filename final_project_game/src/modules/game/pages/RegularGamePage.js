import React from 'react'
import { DIFF_REGULAR } from '../../../config'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Game from '../components/Game/Game'

function RegularGamePage() {
  return (
    <>
    <Header />
    <Game difficulty={DIFF_REGULAR} />  
    <Footer />
    </>    )
}

export default RegularGamePage