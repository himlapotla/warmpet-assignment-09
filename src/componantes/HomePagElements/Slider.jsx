import React from 'react'

const Slider = () => {
    return (

        <div className='w-11/12 mx-auto pb-10 pt-10'>

            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">

                    <div className="w-full">
                        <img
                            className="rounded-xl w-full h-80 object-cover"
                            src="https://i.ibb.co.com/bRJyC8QH/fit2.webp"
                            alt=""/>

                        <div className="flex justify-center mt-4">
                            <p className="text-3xl md:text-4xl font-bold text-amber-700 bg-amber-400 px-6 py-4 rounded-xl text-center leading-tight">
                                Make your pet warm this winter <br />
                                <span className="text-2xl md:text-3xl font-semibold">
                                    We got the huge collection with cozy outfit.
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">

                    <div className="w-full">
                        <img
                            className="rounded-xl w-full h-80 object-cover"
                            src="https://i.ibb.co.com/mVC8DVxY/fit2.webp"
                            alt=""
                        />

                        <div className="flex justify-center mt-4">
                            <p className="text-3xl md:text-4xl font-bold text-amber-700 bg-amber-400 px-6 py-4 rounded-xl text-center leading-tight">
                                Warm Paws, Happy Dogs <br />
                                <span className="text-2xl md:text-3xl font-semibold">
                                    From grooming to snug winter outfits, we’ve got your furry friend covered.
                                </span>
                            </p>
                        </div>
                    </div>


                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>

                </div>

                <div id="slide3" className="carousel-item relative w-full">

                    <div className="w-full">
                        <img
                            className="rounded-xl w-full h-80 object-cover"
                            src="https://i.ibb.co.com/9HXVyPwH/fit1.webp"
                            alt=""
                        />

                        <div className="flex justify-center mt-4">
                            <p className="text-3xl md:text-4xl font-bold text-amber-700 bg-amber-400 px-6 py-4 rounded-xl text-center leading-tight">
                                Warm Paws, Happy Dogs <br />
                                <span className="text-2xl md:text-3xl font-semibold">
                                    From grooming to snug winter outfits, we’ve got your furry friend covered.
                                </span>
                            </p>
                        </div>
                    </div>


                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>

                </div>

            </div>
        </div>


    )
}

export default Slider

// https://i.ibb.co.com/bRJyC8QH/fit2.webp
// https://i.ibb.co.com/9HXVyPwH/fit1.webp