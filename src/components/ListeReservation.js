import React, { useState, useEffect } from 'react';
import { Reservation } from './Reservation';
import { useAuth } from '../firebase/AuthContext'; // AuthContext'i kullan
import axios from 'axios';
import '../css/listeReservation.css';

export const ListeReservation = () => {
    const [reservations, setReservations] = useState([]);
    const { currentUser } = useAuth(); // Şu an giriş yapmış kullanıcıyı al

    useEffect(() => {
        const fetchReservations = async () => {
            if (!currentUser) return; // Eğer kullanıcı giriş yapmamışsa çağrı yapma

            try {
                const response = await axios.get(`http://localhost:2200/reservations/by-email/${currentUser.email}`);
                setReservations(response.data);
            } catch (error) {
                console.error('Error fetching reservations:', error);
            }
        };

        fetchReservations();
    }, [currentUser]); // currentUser değiştiğinde yeniden çağır

    return (
        <div className='liste-reservation'>
            <h1>My Reservations</h1>
            {reservations.length > 0 ? (
                reservations.map((reservation) => (
                    <Reservation key={reservation.id} reservation={reservation} />
                ))
            ) : (
                <p>No reservations found.</p>
            )}
        </div>
    );
};
