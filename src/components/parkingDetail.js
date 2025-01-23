import React from 'react'
import '../css/parkingDetail.css'

export const ParkingDetail = ( {parking} ) => {

    if (!parking) {
        return <div className="parking-details">Select a parking to see details</div>;
      }
    
      return (
        <div className="parking-details">
          <h2>{parking.name}</h2>
          <p><strong>Address:</strong> {parking.address}</p>
          <p><strong>Price:</strong> {parking.price}</p>
          <button className='book-button'>Book Now</button>
          {/* Add more details as needed */}
        </div>
      );
}
