import React from 'react';

const Cloth = ({ cloth }) => {
    
    return (
        <div data-aos="fade-up" data-aos-offset="0" data-aos-anchor-placement="top-bottom" className="max-w-sm w-full mx-auto" >

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-3 border-amber-400 h-full flex flex-col p-3">

                <div className="w-full h-56 overflow-hidden rounded-xl mb-4">
                    <img
                        src={cloth.image}
                        alt="{doctor.name}"
                        className="w-full h-full object-cover"
                    />
                </div>

                <h2 className="text-xl font-semibold text-gray-800">{cloth.name}</h2>
                <p className="text-md text-emerald-600 font-medium">
                    Price: {cloth.price}
                </p>

                <p className="text-gray-700 mt-2">
                    <span className="font-semibold">Total Sold:</span> {cloth.total_sold} pice
                </p>

                <p className="text-gray-700">
                    <span className="font-semibold">Availabe Stock:</span> {cloth.available_stock}
                </p>

                <p className="text-gray-900 mt-3 font-semibold">
                    Call this num to buy: {cloth.number_to_buy}
                </p>

            </div>
        </div>
    )
}

export default Cloth;
