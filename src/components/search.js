import React, {useState} from 'react'
import '../css/search.css'
import axios from 'axios'

export const Search = ( { onCoordinatesChange }) => {

    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [stayDuration, setStayDuration] = useState('');
    const [pmr, setPmr] = useState(false);
    const [coordinates, setCoordinates] = useState(null);


    const handleSearch = async () => {
      try {
        const apiKey = '59f70d476de34c89b622098380ed5bbc'; // Replace with your OpenCage Data API key
        const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
          params: {
            q: place,
            key: apiKey,
          },
        });
        const data = response.data;
        if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry;
          onCoordinatesChange({ latitude: lat, longitude: lng });
          setCoordinates({ latitude: lat, longitude: lng });
          console.log({ place, date, time, stayDuration, pmr, latitude: lat, longitude: lng });
          fetchParkings(lat, lng);
        } else {
          console.error('No results found');
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };
  



    const fetchParkings = async (latitude, longitude) => {
      try {
        const response = await axios.get(`http://localhost:2200/parking/${longitude}/${latitude}`);
        const parkings = response.data;
        console.log('Parkings:', parkings);
      } catch (error) {
        console.error('Error fetching parkings:', error);
      }
    };


  return (
    <div className="search-bar-container">
    <div className="search-bar">
    <input
      type="text"
      placeholder="Enter place"
      value={place}
      onChange={(e) => setPlace(e.target.value)}
    />
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
    />
    <input
      type="time"
      value={time}
      onChange={(e) => setTime(e.target.value)}
    />
    <select
          value={stayDuration}
          onChange={(e) => setStayDuration(e.target.value)}
        >
          <option value="">Durée</option>
          <option value="1">1 Heure</option>
          <option value="2">2 Heure</option>
          <option value="3">3 Heure</option>
          <option value="4">4 Heure</option>
          <option value="24">24 Heure</option>
        </select>
    <button onClick={handleSearch}>Search</button>
    </div>
    <div className='checkbox-container'>
      <input type="checkbox"
      id = "pmr"
      checked = {pmr}
      onChange = {() => setPmr(!pmr)}
      />
      <label htmlFor="pmr">PMR</label>
    </div>
  </div>
  )
}
