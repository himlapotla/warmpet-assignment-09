import React from 'react'

const PetProblems = () => {
  return (
    <div>

        <div className="grid grid-cols-12 w-11/12 mx-auto gap-5">

        <div className="col-span-3 border-3 border-amber-400 p-3 rounded-xl">
          <img
            className="rounded-2xl w-full h-52 object-cover"
            src="https://i.ibb.co/whjgy1FM/images-1.jpg"
            alt="Hypothermia"
          />
          <div className="space-y-2 mt-3">
            <p className="font-bold text-xl">Hypothermia</p>
            <p className="font-semibold">Signs: Shivering, lethargy, cold ears/paws</p>
            <p className="font-semibold">
              Keep pets warm indoors, use pet sweaters, and limit outdoor exposure in extreme cold.
            </p>
          </div>
        </div>

        <div className="col-span-3 border-3 border-amber-400 p-3 rounded-xl">
          <img
            className="rounded-2xl w-full h-52 object-cover"
            src="https://i.ibb.co.com/yndP6DNn/dog-body-with-red-irritated-skin-due-to-allergy-1195895496-0d4372aa19254217b8c9218a3125a8c7.jpg"
            alt="Dry Skin"
          />
          <div className="space-y-2 mt-3">
            <p className="font-bold text-xl">Dry Skin</p>
            <p className="font-semibold">Signs: Itchy skin, flaky coat, redness</p>
            <p className="font-semibold">
              Moisturize with pet-safe oils, provide a humidifier, and avoid over-bathing.
            </p>
          </div>
        </div>

        <div className="col-span-3 border-3 border-amber-400 p-3 rounded-xl">
          <img
            className="rounded-2xl w-full h-52 object-cover"
            src="https://i.ibb.co/gckwZ26/images-2.jpg"
            alt="Paw Injuries"
          />
          <div className="space-y-2 mt-3">
            <p className="font-bold text-xl">Paw Injuries</p>
            <p className="font-semibold">Signs: Limping, redness, cracked paw pads</p>
            <p className="font-semibold">
              Use paw balms, clean paws after walks, and avoid salted sidewalks.
            </p>
          </div>
        </div>

        <div className="col-span-3 border-3 border-amber-400 p-3 rounded-xl">
          <img
            className="rounded-2xl w-full h-52 object-cover"
            src="https://i.ibb.co.com/TBKkCqLc/dd.jpg"
            alt="Dehydration"
          />
          <div className="space-y-2 mt-3">
            <p className="font-bold text-xl">Dehydration</p>
            <p className="font-semibold">Signs: Dry nose, lethargy, less urination</p>
            <p className="font-semibold">
              Ensure fresh water is always available, and limit snow ingestion.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PetProblems