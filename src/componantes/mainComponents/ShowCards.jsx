import React from 'react'
import { Link } from 'react-router';

const ShowCards = ({ singleCards }) => {

    return (

        <div className=''>

            <div className="shadow-2xl rounded-xl p-3 h-full bg-base-100">
                <img
                    src={singleCards.image}
                    alt={singleCards.serviceName}
                    className="w-full h-48 object-cover rounded-lg"
                />

                <h2 className="text-xl font-semibold mt-3">{singleCards.serviceName}</h2>

                <p className="text-gray-600 mt-1">
                    ⭐ Rating: <span className="font-medium">{singleCards.rating}</span>
                </p>

                <p className="text-gray-800 font-semibold mt-1">
                    💰 Price: ${singleCards.price}
                </p>

                <Link to={`detail/${singleCards.serviceId}`}>
                    <button className="btn rounded-lg bg-amber-400 mt-4 w-full hover:bg-amber-600">
                        View Details
                    </button> 
                </Link>
            </div>
        </div>
    )
}

export default ShowCards