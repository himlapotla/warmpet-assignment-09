import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AllContext } from '../../Provider/AuthProvider'
import { FaGoogle } from 'react-icons/fa'
import Loading from '../Loading'
import { toast } from 'react-toastify'

const Login = () => {

  const { logIn, loading, setUser, setMail, googleRegister } = useContext(AllContext)
  const navigate = useNavigate()
  const [err, setErr] = useState(null)

  const location = useLocation()
  console.log(location);

  const handleGoogleRegister = () => {

    googleRegister()
      .then((result) =>
      {
        setUser(result.user)
        navigate(`${location.state ? location.state : '/'}`)
      })
  }

  if(loading) {
    return <Loading> </Loading>
  }

  const handleLogin = (e) => {

    e.preventDefault()
    const email = e.target.email.value
    const pass = e.target.password.value

    setMail(email)

    logIn(email, pass)
      .then((res) => {
        setUser(res.user)
        navigate(`${location.state ? location.state : '/'}`)
        toast.success("You are logged in")
      })
      .catch((err) => {
        setErr(err)
      })
  }

  return (

    <form onSubmit={handleLogin} className='flex justify-center min-h-screen items-center'>


      <div className=' rounded-2xl shadow-2xl p-10 space-y-2'>
        <p className='font-bold pb-4'> Login Now </p>


        <label className="label">Email</label> <br />
        <input name='email' type="email" className="input" placeholder="Email" />

        <label className="label">Password</label> <br />
        <input name='password' type="password" className="input" placeholder="Password" />

        <p> <Link className="link link-hover" to={'/forget-passwrd'}> Forgot password?</Link> </p>
        
        <button type='submit' className="btn bg-amber-400 mt-4 border-none w-full">Login</button>

        {
          err && <p className='text-red-600'> Please Provide Your Email/Password Correctly </p>
        }

        <button type='button'  onClick={handleGoogleRegister} className='cursor-pointer mt-2 p-3 flex gap-2 items-center justify-center rounded-sm w-full bg-amber-400' > <FaGoogle></FaGoogle> Regiter with Google </button>

        <p className='pt-2'> Don't have an acount? <Link to={'/auth/register'}> <span className='underline text-blue-400'> Register </span>  </Link> </p>

      </div>

    </form>
  )
}

export default Login