import React from 'react'
import Footer from '../mainComponents/Footer'
import Navar from '../mainComponents/Navar'
import { Outlet } from 'react-router'

const HomePageLayOut = () => {
  return (
    <div className=''>

        <main className='space-y-0 bg-base-300'>
            <Navar> </Navar>
            <Outlet> </Outlet>
            <Footer> </Footer>
        </main>
    </div>
  )
}

export default HomePageLayOut
