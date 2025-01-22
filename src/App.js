import './App.css';
import { Header } from './components/header';
import { ListParking } from './components/listParking';
import MapComponent from './components/mapComponent';
import { ParkingDetail } from './components/parkingDetail';
import { Search } from './components/search';
import { useState } from 'react';

function App() {

  const [selectedParking, setSelectedParking] = useState(null);
  const [parkings, setParkings] = useState([
    { name: "Park 1", address: "123 Rue A", latitude: 48.8566, longitude: 2.3522 },
    { name: "Park 2", address: "456 Rue B", latitude: 48.8666, longitude: 2.3622 },
    { name: "Park 3", address: "789 Rue C", latitude: 48.8766, longitude: 2.3722 },
  ]);
  

  const handleSelectParking = (parking) => {
    setSelectedParking(parking);
  }

  return (
    <div className="App">
      <Header />
      <Search />

    <div className='parkingDetails'>
      <ListParking onSelectParking={handleSelectParking} />
      <ParkingDetail parking={selectedParking}/>
      <MapComponent parkings={parkings}/>
        </div>
    </div>
  );
}

export default App;
