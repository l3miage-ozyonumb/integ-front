import React from 'react'
import '../css/parking.css'

export const Parking = ( { parking, onSelectParking } ) => {


  const handleDetailClick = () => {
    onSelectParking(parking);
  }

  return (
    <div className='parking-item'>
        <h3>Parking {parking.nom}</h3>
        <p>Tarif 1H : {parking.tarif1h} €</p>
        <button className="detail-button" onClick={handleDetailClick}>Voir plus +</button>

    </div>
  )
}
