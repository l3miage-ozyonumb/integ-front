import React from 'react';
import '../css/AdminReservation.css';

export const AdminReservation = ({ reservation }) => {
    return (
        <div className="admin-reservation-card">
            <div className="reservation-info">
                <p><strong>User:</strong> {reservation.name}</p>
                <p><strong>Date:</strong> {reservation.date}</p>
                <p><strong>Time:</strong> {reservation.time}</p>
            </div>
        </div>
    );
};
