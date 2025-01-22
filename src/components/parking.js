import React from 'react'
import '../css/parking.css'

export const Parking = ( { parking } ) => {
  return (
    <div className='parking-item'>
        <h2>{parking.name}</h2>
        <p>{parking.adresse}</p>
        <p>{parking.price}</p>

    </div>
  )
}
