import React, { useState} from 'react'
import '../css/parkingDetail.css'

export const ParkingDetail = ( {parking} ) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

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
        // API'ye POST isteği gönder
        const reservationData = {
          parkingId: parking.id,
          slot: selectedSlot,
        };
        console.log('Reservation data:', reservationData);
    
        // Modal'ı kapat
        handleCloseModal();
      };
    
      return (
        <div className="parking-details">
          <h2>{parking.name}</h2>
          <p><strong>Address:</strong> {parking.address}</p>
          <p><strong>Price:</strong> {parking.price}</p>
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
