import React, { useState, useEffect } from 'react';
import { useAuth } from '../firebase/AuthContext';
import '../css/profil.css';
import axios from 'axios';

const Profil = () => {
  const { user } = useAuth(); // Récupère l'utilisateur du contexte d'authentification
  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    phoneNumber: '',
    email: '',
    rib: '',
    bankName: ''
  });
  const [isEditing, setIsEditing] = useState(false); // Etat pour savoir si l'utilisateur est en mode édition

  // useEffect(() => {
  //   if (user) {
  //     // Séparer le nom complet s'il est présent
  //     const [firstName, lastName] = user.displayName ? user.displayName.split(' ') : ['', ''];

  //     // Récupérer les informations de l'utilisateur depuis Firestore ou autre source (ajoutez ici si nécessaire)
  //     setUserData({
  //       name: firstName || '', // Prénom
  //       surname: lastName || '', // Nom
  //       email: user.email,
  //       phoneNumber: '', // Vous pouvez ajouter la logique pour récupérer le téléphone depuis Firestore
  //       rib: '', // Ajoutez le RIB si nécessaire
  //       bankName: '' // Ajoutez le nom de la banque si nécessaire
  //     });
  //   }
  // }, [user]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const response = await axios.get(`http://localhost:2200/conducteur/${user.email}`);
          const { nom, prenom, telephone } = response.data; // Adjust the response data structure as needed
          setUserData((prevData) => ({
            ...prevData,
            name: prenom || '', // Prénom
            surname: nom || '', // Nom
            phoneNumber: telephone || '', // Numéro de téléphone
            email: user.email
          }));
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleSave = () => {
    // Logique de sauvegarde des informations modifiées
    // Vous pouvez les mettre à jour dans Firestore ici
    setIsEditing(false); // Arrête l'édition après la sauvegarde
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="profil-container">
      {user ? (
        <div className="profil-box">
          <h1>Profil  {userData.name} {userData.surname}</h1>

          <div className="profile-info">
            <label>Nom</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                required
              />
            ) : (
              <p>{userData.name}</p>
            )}
          </div>

          <div className="profile-info">
            <label>Prénom</label>
            {isEditing ? (
              <input
                type="text"
                name="surname"
                value={userData.surname}
                onChange={handleChange}
                required
              />
            ) : (
              <p>{userData.surname}</p>
            )}
          </div>

          <div className="profile-info">
            <label>Numéro de téléphone</label>
            {isEditing ? (
              <input
                type="text"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={handleChange}
                required
              />
            ) : (
              <p>{userData.phoneNumber}</p>
            )}
          </div>

          <div className="profile-info">
            <label>Email</label>
            <p>{userData.email}</p>
          </div>

          <div className="profile-info">
            <label>Mot de passe</label>
            <p>********</p>
          
          </div>

          {/* Section des informations bancaires */}
          <div className="bank-info">
            <h2>Informations bancaires</h2>
            <div className="profile-info">
              <label>RIB</label>
              {isEditing ? (
                <input
                  type="text"
                  name="rib"
                  value={userData.rib}
                  onChange={handleChange}
                  required
                />
              ) : (
                <p>{userData.rib}</p>
              )}
            </div>

            <div className="profile-info">
              <label>Nom de la banque</label>
              {isEditing ? (
                <input
                  type="text"
                  name="bankName"
                  value={userData.bankName}
                  onChange={handleChange}
                  required
                />
              ) : (
                <p>{userData.bankName}</p>
              )}
            </div>
          </div>

          <div className="edit-btn">
            {isEditing ? (
              <button onClick={handleSave}>Enregistrer</button>
            ) : (
              <button onClick={() => setIsEditing(true)}>Modifier</button>
            )}
          </div>
        </div>
      ) : (
        <div>Vous devez être connecté pour voir cette page.</div>
      )}
    </div>
  );
};

export default Profil;