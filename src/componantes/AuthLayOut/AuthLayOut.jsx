import React from 'react'
import Navar from '../mainComponents/Navar'
import { Outlet } from 'react-router'
import Footer from '../mainComponents/Footer'

const AuthLayOut = () => {
  return (
    <div className='space-y-0'>
        <Navar> </Navar>
        <Outlet> </Outlet>
        <Footer> </Footer>
    </div>
  )
}

export default AuthLayOut