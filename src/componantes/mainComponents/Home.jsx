import React, { use, useContext } from 'react'
import { AllContext } from '../../Provider/AuthProvider'
import { useLoaderData } from 'react-router'
import ShowCards from './ShowCards'
import Slider from '../HomePagElements/Slider'
import PetProblems from '../HomePagElements/PetProblems'
import Doctors from '../HomePagElements/Doctors'
import Loading from '../Loading'


const doctorPromise = fetch("/doctors.json").then((res) => res.json())
console.log(doctorPromise);


const Home = () => {

  const { user, loading } = useContext(AllContext)
  const data = useLoaderData()
  const doctor = use(doctorPromise)

  return (
    <div>

      {
        loading && <Loading> </Loading> 
      } 

      <Slider> </Slider>

      <div className='grid grid-cols-4 gap-3 w-11/12 mx-auto pb-12'>
        {
          data.map(singleCards => <ShowCards key={singleCards.id} singleCards={singleCards}>
          </ShowCards>)
        }
      </div>

      <p className='text-amber-400 text-4xl font-bold text-center py-12'> Common pet Cares for daily life in this winter </p>

      <PetProblems> </PetProblems>

      <p className='text-amber-400 text-4xl font-bold text-center py-12'> Meet our expert vets  </p>

      {
        <div className='grid grid-cols-4 w-11/12 mx-auto gap-4 '>
          {
            doctor.map(singlDoctor => <Doctors key={singlDoctor.id} doctor={singlDoctor}> </Doctors> )
          }
        </div>
      }

    </div>
  )
}

export default Home
