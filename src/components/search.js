import React, {useState} from 'react'
import '../css/search.css'

export const Search = () => {

    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [stayDuration, setStayDuration] = useState('');
    const [pmr, setPmr] = useState(false);


    const handleSearch = () => {
        // Handle the search logic here
        console.log({ place, date, time, stayDuration, pmr });
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
    <div className='checkbox-container'>
      <input type="checkbox"
      id = "pmr"
      checked = {pmr}
      onChange = {() => setPmr(!pmr)}
      />
      <label htmlFor="pmr">PMR</label>
    </div>
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
    <input
      type="text"
      placeholder="Time of stay (e.g., 2 hours)"
      value={stayDuration}
      onChange={(e) => setStayDuration(e.target.value)}
    />
    <button onClick={handleSearch}>Search</button>
    </div>
  </div>
  )
}
