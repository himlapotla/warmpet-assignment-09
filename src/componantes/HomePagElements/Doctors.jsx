import React, { useEffect } from 'react'

const Doctors = ({ doctor }) => {

    return (

        <div
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-anchor-placement="top-bottom"
        >

            <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-3 mx-auto h-full border-3 border-amber-400">

                {/* Doctor Image */}
                <div className="w-full h-56 overflow-hidden rounded-xl mb-4">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Name & Specialization */}
                <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
                <p className="text-sm text-emerald-600 font-medium">
                    {doctor.specialization}
                </p>

                {/* Experience */}
                <p className="text-gray-700 mt-2">
                    <span className="font-semibold">Experience:</span> {doctor.experience} years
                </p>

                {/* Education */}
                <p className="text-gray-700">
                    <span className="font-semibold">Education:</span> {doctor.education}
                </p>

                {/* Phone Number */}
                <p className="text-gray-900 mt-3 font-semibold">
                    Number: {doctor.phone}
                </p>
            </div>
        </div>
    )
}

export default Doctors


