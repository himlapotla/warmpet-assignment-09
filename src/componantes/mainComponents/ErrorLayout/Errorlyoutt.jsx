import React from 'react'
import Navar from '../Navar'
import { Outlet } from 'react-router'
import Footer from '../Footer'

const Errorlyoutt = () => {
  return (
    <div>
        <Navar> </Navar>
        <Outlet> </Outlet>
        <Footer> </Footer>
    </div>
  )
}

export default Errorlyoutt