import React, { useState } from 'react';
import { Header } from '../components/header';
import { Search } from '../components/search';
import { ListParking } from '../components/listParking';
import { ParkingDetail } from '../components/parkingDetail';
import  MapComponent from '../components/MapComponent';

function HomePage() {
  const [selectedParking, setSelectedParking] = useState(null);
  const [center, setCenter] = useState({ lat: 48.8566, lng: 2.3522 });
  const [parkings, setParkings] = useState([
    { name: "Park 1", address: "123 Rue A", latitude: 48.8566, longitude: 2.3522 },
    { name: "Park 2", address: "456 Rue B", latitude: 48.8666, longitude: 2.3622 },
    { name: "Park 3", address: "789 Rue C", latitude: 48.8766, longitude: 2.3722 },
  ]);

  const handleSelectParking = (parking) => {
    setSelectedParking(parking);
  };

  const handleChange = (newCoordinates) => {
    if (newCoordinates.lat && newCoordinates.lng) {
      setCenter(newCoordinates);  // Yalnızca geçerli koordinatları alıyoruz
    }
  };


  return (
    <div className="HomePage">
      <Header />
      <Search onCoordinatesChange={handleChange}/>
      <div className="parkingDetails">
        <ListParking onSelectParking={handleSelectParking} />
        {selectedParking && <ParkingDetail parking={selectedParking} />}
        <MapComponent parkings={parkings} center={center}/>
      </div>
    </div>
  );
}

export default HomePage;
