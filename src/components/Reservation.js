import React from 'react'

export const Reservation = ( { reservation } ) => {
  return (
    <div>
        <h2> {reservation.parking } </h2>
        <p> {reservation.date } </p>
        <p> {reservation.time } </p>
        <button> Cancel </button>


    </div>
  )
}
