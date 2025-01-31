import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { auth } from '../firebase/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../components/useAdmin';
import { AdminReservation } from '../components/AdminReservation';
import '../css/AdminDashboard.css';

export const AdminDashboard = () => {
    const { isAdmin, loading } = useAdmin();
    const [reservations, setReservations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAdmin && !loading) {
            navigate('/'); // Yetkisi yoksa ana sayfaya yönlendir
        }
    }, [isAdmin, loading, navigate]);

    useEffect(() => {
        // fetchReservations(); // Veriyi fetch etmeyi şu anda yoruma aldık
        const staticReservations = [
          { id: 1, name: "John Doe", date: "2025-01-25", time: "14:00", duration: "2 Saat" },
          { id: 2, name: "Jane Smith", date: "2025-01-26", time: "10:30", duration: "1 Saat" },
          { id: 3, name: "Alice Johnson", date: "2025-01-27", time: "16:00", duration: "3 Saat" },
        ];
        setReservations(staticReservations); // Static veriyi state'e set ediyoruz
      }, []);

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/admin');
    };

    const handleChangePrice = () => {
        alert("Price change functionality will be implemented.");
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <button className="change-price-btn" onClick={handleChangePrice}>Change Price</button>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
            <h1>Admin Panel - Reservations</h1>
            <div className="reservation-list">
                {reservations.map((res) => (
                    <AdminReservation key={res.id} reservation={res} />
                ))}
            </div>
        </div>
    );
};
