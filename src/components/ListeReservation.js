import React, { useState, useEffect } from 'react';
import { Reservation } from './Reservation';
import { useAuth } from '../firebase/AuthContext'; // AuthContext'i kullan
import axios from 'axios';
import '../css/listeReservation.css';

export const ListeReservation = () => {
    const [reservations, setReservations] = useState([]);
    const { user } = useAuth(); // Şu an giriş yapmış kullanıcıyı al

    useEffect(() => {
        const fetchReservations = async () => {
            if (!user){ 
                console.log('User not logged in');
                return;}
                 // Eğer kullanıcı giriş yapmamışsa çağrı yapma

            try {
                console.log('Current user:', user.email);
                const response = await axios.get(`http://localhost:2200/reservation/by-email/${user.email}`);
                setReservations(response.data);
                console.log('Reservations:', response.data);
            } catch (error) {
                console.error('Error fetching reservations:', error);
            }
        };

        fetchReservations();
    }, [user]); // currentUser değiştiğinde yeniden çağır

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
