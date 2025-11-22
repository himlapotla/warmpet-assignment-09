import React, { useContext } from 'react'
import { AllContext } from '../../Provider/AuthProvider'
import { useLoaderData } from 'react-router'
import ShowCards from './ShowCards'
import Slider from '../HomePagElements/Slider'
import PetProblems from '../HomePagElements/PetProblems'

const Home = () => {

  const { user, loading } = useContext(AllContext)
  const data = useLoaderData()

  return (
    <div>

      {
        loading ? 'LOADING' :
          (user ? user.displayName : 'nai')
      } 

      <Slider> </Slider>

      <div className='grid grid-cols-4 gap-3 w-11/12 mx-auto pb-12'>
        {
          data.map(singleCards => <ShowCards key={singleCards.id} singleCards={singleCards}>
          </ShowCards>)
        }
      </div>


      <p className='text-amber-400 text-4xl font-bold text-center py-12'> Common pet Cates for daily life </p>

      <PetProblems> </PetProblems>


    </div>
  )
}

export default Home