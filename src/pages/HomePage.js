import React, { useState } from 'react';
import { Header } from '../components/header';
import { Search } from '../components/search';
import { ListParking } from '../components/listParking';
import { ParkingDetail } from '../components/parkingDetail';
import  MapComponent from '../components/MapComponent';
import axios from 'axios';

function HomePage() {
  const [selectedParking, setSelectedParking] = useState(null);
  const [center, setCenter] = useState({ lat: 48.8566, lng: 2.3522 });
  const [parkings, setParkings] = useState([]);
  const [reservationData, setReservationData] = useState(null);

  const handleSelectParking = (parking) => {
    setSelectedParking(parking);
  };

  const handleCoordinatesChange = async (newCoordinates) => {
      setCenter(newCoordinates);
      console.log('New coordinates:', newCoordinates);
      try {
        const response = await axios.get(`http://localhost:2200/parking/${newCoordinates.longitude}/${newCoordinates.latitude}`);
        setParkings(response.data); // API'den gelen park yerlerini kaydet
        console.log('Parkings:', response.data);
      } catch (error) {
        console.error('Error fetching parkings:', error);
      }
    };

    const handleReservation = (reservation) => {
      setReservationData(reservation); // Reservation bilgilerini state'e aktar
    };


  return (
    <div className="HomePage">
      <Header />
      <Search onCoordinatesChange={handleCoordinatesChange} onReservation={handleReservation}/>
      <div className="parkingDetails">
        <ListParking parkings={parkings} onSelectParking={handleSelectParking} />
        {selectedParking && <ParkingDetail parking={selectedParking} reservationData={reservationData} />}
        <MapComponent parkings={parkings} center={center}/>
      </div>
    </div>
  );
}

export default HomePage;
