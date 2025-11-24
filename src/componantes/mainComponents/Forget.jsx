import React, { useContext } from 'react'
import { AllContext } from '../../Provider/AuthProvider'
import { useNavigate } from 'react-router'

const Forget = () => {

    const { mail, changePassword } = useContext(AllContext)
    const navigate = useNavigate()

    const changePass = (e) => {

        e.preventDefault()
        const email = e.target.email.value

        changePassword(email)
        .then(() => {
            window.open(" https://mail.google.com/mail/u/0/#inbox ")
        })
        .catch((err) => {
            
        })
    }

    return (
        <div>

            <form onSubmit={changePass} className='flex justify-center pt-10 items-center'>

                <div className='rounded-2xl shadow-2xl p-10 space-y-2'>

                    <p className='font-bold pb-4'> Change Your Password </p>

                    <label className="label">Email</label> <br />
                    <input name='email' type="email" className="input" value={mail} />

                    <button type='submit' className="btn bg-amber-400 mt-4 border-none">Reset Password</button>

                </div>

            </form>
        </div>
    )
}

export default Forget