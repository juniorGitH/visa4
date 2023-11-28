import React from 'react';
import gmail from '../img/gmail.png';
import General from './General';
import { Link } from 'react-router-dom';
import ajouterClasse from './Navbar';
import index from './Navbar';
export default function Inscription() {
  return (
    <>

    <div className="pI">
      <div className="auth-container">
        <h2>Inscription</h2>
        <br /> <br />
        <form className="auth-form">
          <input type="text" placeholder="Nom d'utilisateur" required />
          <input type="password" placeholder="Mot de passe" required />
          <input type="password" placeholder="Confirmer mot de passe" required />
          <button className="auth-button" type="submit">
            S'inscrire
          </button>
        </form>
        <div className="or-divider">OU</div>
        <button className="google-button">
          <img className="google-icon" src={gmail} alt="Gmail Logo" />
          Utiliser Gmail
        </button>
        <br />
        

        <Link to="/Connexion" className="or-divider" onClick={() => ajouterClasse(index)}>
          Vous avez déjà compte ?
        </Link>
      </div>
    </div>
    
    <General/>
    </>
  );
}
