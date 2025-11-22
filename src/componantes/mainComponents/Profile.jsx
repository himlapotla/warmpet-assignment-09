import React, { useContext, useState } from 'react'
import { AllContext } from '../../Provider/AuthProvider'
import { Navigate } from 'react-router'

const Profile = () => {

    const { user, loading, updateUserProfile } = useContext(AllContext)

    const handleUpdateProfile = (e) => {

        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value

        updateUserProfile( {displayName: name, photoURL: photo} )
        .then(() => {
        })
    }

    if (loading) {
        return <p>LOADDING</p>
    }

    else if (user == null) {
        return <Navigate to={'/auth/login'}> </Navigate>
    }

    else {
        return (

            <div>

                <form onSubmit={handleUpdateProfile} className='flex justify-center items-center pt-10'>

                    <div className=' rounded-2xl shadow-2xl p-10 space-y-2'>

                        <p className='font-bold pb-4'> Your Profile Data </p>

                        <label className="label"> Your Name </label> <br />
                        <input name='name' type="text" className="input" defaultValue={user.displayName}/>

                        <label className="label"> Your Email </label> <br />
                        <input name='email' type="email" className="input" defaultValue={user.email} readOnly/>

                        <label className="label"> Your Image </label> <br />
                        <input name='photo' type="text" className="input" defaultValue={user.photoURL} />

                        <button type='submit' className="btn bg-amber-400 mt-4 border-none"> Update Profile </button>

                    </div>

                </form>
            </div>
        )
    }

}

export default Profile

