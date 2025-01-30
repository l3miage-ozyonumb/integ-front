import React from 'react';
import '../css/reservation.css';
import axios from 'axios';
import { useAuth } from '../firebase/AuthContext';


export const Reservation = ( { reservation } ) => {

  const [parkingName, setParkingName] = React.useState('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { user } = useAuth(); // Get the current user from the AuthContext

    React.useEffect(() => {
      const fetchParkingName = async () => {
        try {
          console.log('Fetching parking name for reservation:', reservation.idparking);
          const response = await axios.get(`http://localhost:2200/parking/${reservation.idparking}`);
          setParkingName(response.data.nom); // Adjust the response data structure as needed
        } catch (error) {
          console.error('Error fetching parking name:', error);
        }
      };
  
      fetchParkingName();
    }, [reservation.idparking]);


  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); 
  };

  const handleCancel = () => {
    setIsModalOpen(true);
  };

  const handleConfirmCancel = async () => {
    try {
      await axios.delete(`http://localhost:2200/reservation/delete/by-numerodeplace/${reservation.numerodeplace}/by-email/${user.email}/by-idparking/${reservation.idparking}`);
      // Optionally, you can add logic to remove the reservation from the UI
      setIsModalOpen(false);
      // You can also add a callback or state update to refresh the list of reservations
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isCancelDisabled = () => {
    const now = new Date();
    const reservationStart = new Date(reservation.datedebutprevue);
    const diffInHours = (reservationStart - now) / (1000 * 60 * 60);
    return diffInHours < 48;
  };

  return (
    <div className='reservation-card'>
      <div className='reservation-info'>
        <h2>Parking: {parkingName}</h2>
        <p>Date: {formatDate(reservation.datedebutprevue)}</p>
        <p>Durée: {reservation.dureereservation} Heures</p>
        <p>No Place: {reservation.numerodeplace}</p>
        <p> Etat de la reservation : {reservation.etat}</p>
      </div>
      <button 
  className={`reservation-button ${isCancelDisabled() ? 'disabled' : ''}`} 
  onClick={handleCancel} 
  disabled={isCancelDisabled()}
>
  Annulation
</button>

      {isModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>Valider Annulation</h2>
            <p>Voulez-vous annuler la reservation</p>
            <div className='modal-buttons'>
              <button onClick={handleConfirmCancel}>Oui</button>
              <button onClick={handleCloseModal}>Non</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
};
