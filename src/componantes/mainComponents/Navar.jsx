import React, { useContext } from 'react'
import usr from '../../assets/user.png'
import { Link, useNavigate } from 'react-router'
import { AllContext } from '../../Provider/AuthProvider'

const Navar = () => {

    const navigate = useNavigate()

    const links = <>
        <Link to={'/'}> <p className='font-semibold'>Home</p> </Link>
        <p className='font-semibold'>Services</p>
        <Link to={'/profile'}> <p className='font-semibold'>My Profile</p> </Link>
    </>

    const {user, logOutt} = useContext(AllContext)

    const handleOut = () => {
        logOutt()
        .then(() => {
            navigate('/')
        })
    }

    return (
        <div className=' bg-gradient-to-r from-amber-400 to-amber-500'>

            <div className="navbar w-15/16 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <div>
                                {links}
                            </div>
                        </ul>
                    </div>
                    <Link to={'/'} className=" text-xl font-bold text-amber-700"> WarmPaws </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-3">
                        <div className='flex gap-4'>
                            {links}
                        </div>
                    </ul>
                </div>
    
                <div className="navbar-end gap-3">
                    {
                        <img className='w-1/12 rounded-full cursor-pointer' title={user ? user.displayName : ' '} src={user ? user.photoURL : {usr}} alt="" />
                    }
                    
                    {
                        user ? <button onClick={handleOut} className="btn font-semibold bg-amber-400"> Sign out </button> : <Link to="/auth/login" className="btn font-semibold bg-amber-400"> Login </Link>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Navar
