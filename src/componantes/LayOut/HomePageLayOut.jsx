import React, { useEffect } from 'react'
import Footer from '../mainComponents/Footer'
import Navar from '../mainComponents/Navar'
import { Outlet } from 'react-router'
import AOS from "aos"
import "aos/dist/aos.css"

const HomePageLayOut = () => {

  useEffect(() => {
    AOS.init({
      duration: 1100,
      offset: 100,
      once: true
    })

    AOS.refresh();
  }, [])

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
