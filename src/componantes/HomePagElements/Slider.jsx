import React from 'react'

const Slider = () => {
    return (

        <div className='w-11/12 mx-auto pb-10 pt-10'>

            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">

                    <img className="rounded-xl w-full h-80 object-cover" src="https://i.ibb.co.com/pjwnDj3T/istockphoto-1041987488-612x612.jpg" />

                    <div className="absolute flex justify-center inset-0 items-cente top-12">
                        <p className="text-4xl text-amber-700 font-bold text-center">
                            Keep Your Furry Friend Warm This Winter with our services </p>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                </div>

                <div id="slide2" className="carousel-item relative w-full">

                    <img className="rounded-xl w-full h-80 object-cover" src="https://i.ibb.co/HD3Hmy2p/Man-with-dog-on-a-leash-walking-on-snowy-pine-forest-in-winter-vvvita-Shutterstock.jpg" />

                    <div className="absolute flex justify-center inset-0 items-cente top-12">
                        <p className="text-4xl text-amber-700 font-bold text-center"> Warm Paws, Happy Dogs
                            From grooming to snug winter outfits, we’ve got your furry friend covered. </p>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>

                </div>

                <div id="slide3" className="carousel-item relative w-full">

                    <img className="rounded-xl w-full h-80 object-cover" src="https://i.ibb.co.com/jP5qGGSy/kutta.jpg" />

                    <div className="absolute flex justify-center inset-0 items-cente top-12">
                        <p className="text-4xl text-amber-800 font-bold text-center">
                            Cozy Coats & Care for Your Winter Pup Protect, pamper, and keep tails wagging all season long </p>
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

