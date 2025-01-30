import React, {useState} from 'react'
import { Parking } from './parking';
import '../css/listParking.css';

export const ListParking = ( {parkings, onSelectParking}) => {

  return (
    <div className='list-parking'>
      {parkings.length === 0 ? (
        <p>Veuillez saisir un lieu pour afficher la liste des parkings.</p>
      ) : (
        parkings.map((parking) => (
          <div key={parking.id}>
            <Parking key={parking.id} parking={parking} onSelectParking={onSelectParking} />
          </div>
        ))
      )}
    </div>
  )
}
