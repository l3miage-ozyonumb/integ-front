import React, {useState} from 'react'
import { Reservation } from './Reservation';
import '../css/listeReservation.css'

export const ListeReservation = () => {

    const [reservations, setReservations] = useState([
        {id: 1, parking: 'Parking A', date: '2021-12-01', time: '10:00 AM', duration: '2 hours',}
    ]);

  return (
    <div className='liste-reservation'>
        <h1>My Reservations</h1>
        {reservations.map((reservation) => (
            <Reservation key={reservation.id} reservation={reservation} />
        ))}
    </div>
  )
}
