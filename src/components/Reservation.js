import React from 'react'

export const Reservation = ( { reservation } ) => {
  return (
    <div className='reservation'>
        <h2> id parking : {reservation.idparking } </h2>
        <p> duree : {reservation.dureereservation } </p>
        <p> numerodeplace : {reservation.numerodeplace } </p>
        <button> Cancel </button>


    </div>
  )
}
