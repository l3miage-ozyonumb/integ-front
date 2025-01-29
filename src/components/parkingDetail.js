import React, { useState} from 'react'
import '../css/parkingDetail.css'
import { useAuth } from '../firebase/AuthContext';

export const ParkingDetail = ( {parking, reservationData} ) => {

  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  console.log('Parking:', parking);

    if (!parking) {
        return <div className="parking-details">Select a parking to see details</div>;
      }

      const handleBook = () => {
        // Add booking logic here
        setIsModalOpen(true);
      };

      const handleCloseModal = () => {
        setIsModalOpen(false); // Modal'ı kapat
        setSelectedSlot(null); // Seçimi sıfırla
      };

      const handleConfirm = () => {
        if (!user) {
          alert('Vous devez vous connecter pour réserver.');
          return;
        }
        // API'ye POST isteği gönder
        // const reservationData = {
        //   parkingId: parking.id,
        //   slot: selectedSlot,
        // };
        console.log('Reservation data:', reservationData);
    
        // Modal'ı kapat
        handleCloseModal();
      };
    
      return (
        <div className="parking-details">
          <h2>{parking.nom}</h2>
          <div className='parking-info'>
          <p><strong>Address:</strong> {parking.adresse}</p>
          <p><strong>Tarif 1H:</strong> {parking.tarif1h}</p>
          {parking.tarif2h !== 0 && (
            <p><strong>Tarif 2H:</strong> {parking.tarif2h}</p>
          )}
          {parking.tarif3h !== 0 && (
            <p><strong>Tarif 3H:</strong> {parking.tarif3h}</p>
          )}
          {parking.tarif4h !== 0 && (
            <p><strong>Tarif 4H:</strong> {parking.tarif4h}</p>
          )}
          {parking.tarif24h !== 0 && (
            <p><strong>Tarif 24H:</strong> {parking.tarif24h}</p>
          )}
          <p><strong>Type de Parking:</strong> {parking.typeparking}</p>
          <p><strong>Hauteur Max:</strong> {parking.hauteurmax} cm</p>
          </div>

          <button className="book-button" onClick={handleBook}>
            Book Now
          </button>
    
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <h3>Validation</h3>
                <select
              value={selectedSlot || ''}
              onChange={(e) => setSelectedSlot(e.target.value)}
            >
              <option value="">Voulez vous selectionner une place +2.95$</option>
              <option value="1A">1A</option>
              <option value="1B">1B</option>
              <option value="1C">1C</option>
            </select>
                <div className="modal-buttons">
                  <button onClick={handleConfirm}>Valider</button>
                  <button onClick={handleCloseModal}>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
}
