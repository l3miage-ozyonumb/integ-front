import React from 'react'
import '../css/parking.css'

export const Parking = ( { parking, onSelectParking } ) => {


  const handleDetailClick = () => {
    onSelectParking(parking);
  }

  return (
    <div className='parking-item'>
        <h2>{parking.name}</h2>
        <p>{parking.adresse}</p>
        <p>{parking.price}</p>
        <button className="detail-button" onClick={handleDetailClick}>Details</button>

    </div>
  )
}
