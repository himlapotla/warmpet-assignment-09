import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { toast } from 'react-toastify'

const Details = () => {

    const handlsubmit = () => {
        toast.success("You Boooked this service, we will call you letter.")
    }

    const { id } = useParams()
    const data = useLoaderData()
    const [singlCade, setSingleCard] = useState(null)

    useEffect(() => {
        const viewOneFullCard = data.find(item => item.serviceId == id)
        setSingleCard(viewOneFullCard)
    }, [id, data])

    const prvnt = (e) => {
        e.preventDefault()
        e.target.reset()
    }

    return (

        <div className="pt-11 px-4">
            {singlCade ? (
                <div className="w-8/12 mx-auto flex gap-6 items-center">

                    {/* Left: Service Card */}
                    <div className="bg-white rounded-2xl shadow-xl flex-1">
                        <div className="h-56">
                            <img
                                src={singlCade.image}
                                alt={singlCade.serviceName}
                                className="object-cover w-full h-full rounded-lg"
                            />
                        </div>

                        <div className="p-5 space-y-3">
                            <h2 className="text-2xl font-bold">{singlCade.serviceName}</h2>
                            <p className="text-gray-500 text-sm">Category: {singlCade.category}</p>
                            <p className="text-gray-700">{singlCade.description}</p>

                            <div className="flex justify-between text-sm font-medium">
                                <span>Trainer: {singlCade.providerName}</span>
                                <span>Rating: ⭐ {singlCade.rating}</span>
                            </div>

                            <div className="flex justify-between text-sm font-medium">
                                <span>Slots Available: {singlCade.slotsAvailable}</span>
                                <span className="text-lg font-semibold">${singlCade.price}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Booking Form */}
                    <div className="flex-1 bg-white max-h-70 rounded-2xl shadow-xl p-6">

                        <form onSubmit={prvnt} className="space-y-4">

                            <label className='label'>Name</label> <br />
                            <input required name='name' type="text" className='input' placeholder='Name' /> <br />

                            <label className="label">Email</label> <br />
                            <input required name='email' type="email" className="input" placeholder="Email" />

                            <button className="w-full cursor-pointer mt-3 bg-amber-400 text-white py-2 rounded-xl" onClick={handlsubmit}>
                                Book Now
                            </button>
                        </form>
                    </div>

                </div>
            ) : (
                <p className="text-center mt-10 text-gray-500">Loading...</p>
            )
            }
        </div >

    );

}

export default Details
