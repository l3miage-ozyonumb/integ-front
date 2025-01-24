import React, {useState} from 'react'
import { Parking } from './parking';
import '../css/listParking.css';

export const ListParking = ( {onSelectParking}) => {

    const [parkings, setParkings] = useState([
    { id: 1, name: 'Parking A', address: '123 Main St', price: '$10/hr' },
    { id: 2, name: 'Parking B', address: '456 Elm St', price: '$8/hr' },
    { id: 3, name: 'Parking C', address: '789 Oak St', price: '$12/hr' },
    { id: 4, name: 'Parking D', address: '123 Main St', price: '$10/hr' },
    { id: 5, name: 'Parking E', address: '456 Elm St', price: '$8/hr' },
    { id: 6, name: 'Parking F', address: '789 Oak St', price: '$12/hr' },
    ]);

  return (
    <div className='list-parking'>
            {parkings.map((parking) => (
                <div key={parking.id}>
                    <Parking key={parking.id} parking={parking} onSelectParking={onSelectParking} />
                </div>
            ))}
        </div>
  )
}
