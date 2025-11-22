import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import { AllContext } from '../../Provider/AuthProvider'
import { GoogleAuthProvider } from 'firebase/auth'
import { getAuth, signInWithPopup } from 'firebase/auth'
import app from '../../Firebase/firebase.config'
import { FaGoogle } from 'react-icons/fa'

const Register = () => {

  const { createUser, updateUserProfile, setUser } = useContext(AllContext)
  const navigate = useNavigate()



  const handleRegister = (e) => {

    e.preventDefault()
    const email = e.target.email.value
    const pass = e.target.password.value
    const name = e.target.name.value
    const photo = e.target.photo.value

    createUser(email, pass)
      .then((res) => {
        console.log(res.user);

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...res.user, displayName: name, photoURL: photo })
          })
        navigate('/')

      })
  }


  return (

    <form onSubmit={handleRegister} className='flex justify-center min-h-screen items-center'>
      <div className=' rounded-2xl shadow-2xl p-10 space-y-2'>

        <p className='font-bold pb-4'> Register Now </p>

        <label className='label'>Name</label> <br />
        <input required name='name' type="text" className='input' placeholder='Name' />

        <label className="label">Photo URL</label> <br />
        <input required name='photo' type="text" className="input" placeholder="Photo URL" />

        <label className="label">Email</label> <br />
        <input required name='email' type="email" className="input" placeholder="Email" />

        <label className="label">Password</label> <br />
        <input required name='password' type="password" className="input" placeholder="Password" />

        <button type='submit' className="btn bg-amber-400 mt-4 w-full">Register</button>

        <p className='pt-2'> Already have an acount? <Link to={'/auth/login'}> <span className='underline text-blue-400'> Go to login </span> </Link> </p>

      </div>

    </form>


  )
}

export default Register