import React, { use, useContext } from 'react'
import { AllContext } from '../../Provider/AuthProvider'
import { useLoaderData } from 'react-router'
import ShowCards from './ShowCards'
import Slider from '../HomePagElements/Slider'
import PetProblems from '../HomePagElements/PetProblems'
import Doctors from '../HomePagElements/Doctors'
import Loading from '../Loading'
import Cloth from '../HomePagElements/Cloth'


const doctorPromise = fetch("/doctors.json").then((res) => res.json())
const clothPromise = fetch("/cloth.json").then((res) => res.json())


const Home = () => {

  const { user, loading } = useContext(AllContext)
  const data = useLoaderData()
  const doctor = use(doctorPromise)
  const cloth = use(clothPromise)

  return (
    <div>

      {
        loading && <Loading> </Loading> 
      } 

      <Slider> </Slider>

      <p className='text-amber-400 text-4xl font-bold text-center pb-12'> Popular Winter Care Services </p>

      <div className='grid grid-cols-4 gap-3 w-11/12 mx-auto pb-12' data-aos="fade-up" data-aos-offset="0" data-aos-anchor-placement="top-bottom">
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

      <p className='text-amber-400 text-4xl font-bold text-center py-12'> Buy our best winter cloths for your littel friend  </p>

      {
        <div className='grid grid-cols-4 w-11/12 mx-auto gap-4 '>
          {
            cloth.map(cloth => <Cloth key={cloth.id} cloth={cloth}>  </Cloth>)
          }
        </div>
      }
    </div>
  )
}

export default Home
