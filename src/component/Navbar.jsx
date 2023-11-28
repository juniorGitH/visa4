import React, { useState } from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
export default function Navbar() {
  // state (état, données)
  const [listM, setListM] = useState([
    { id: 1, nom: "discussions", clanaM: "fas fa-comments" },
    { id: 2, nom: "Commandes", clanaM: "fas fa-shopping-cart" },
    { id: 3, nom: "Notifications", clanaM: "far fa-bell" },
    { id: 4, nom: "profil", clanaM: "far fa-user" }
  ]);
  const [listM1, setListM1] = useState([
    { id: 5, nom: "Services", clanaM: "fas fa-cogs" },
    { id: 6, nom: "Competeces", clanaM: "fa-solid fa-graduation-cap" },
    { id: 7, nom: "Inscription", clanaM: "fa-regular fa-user" },
    { id: 8, nom: "Connexion", clanaM: "fa-solid fa-user" },
    { id: 9, nom: "ContactDev", clanaM: "fa-solid fa-address-book" }
  ]);

  // État pour stocker l'index de l'élément cliqué
  const [clickedIndex, setClickedIndex] = useState(null);

  // Fonction pour ajouter la classe au clic
  const ajouterClasse = (index) => {
    // Utilisation de setClickedIndex pour mettre à jour l'index de l'élément cliqué
    setClickedIndex(index); 
  };
  
  const retrait = () => {
    // Utilisation de setClickedIndex pour mettre à jour l'index de l'élément cliqué
    setClickedIndex(""); 
  };
  // affichage (render)
  return (
    <div className="NavBarre">
      <Link to="/" onClick={() => retrait() }>
        <div className="logo" title="Accueil">
         <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="list">
        <ul>
          {listM1.map((item, index) => (
            <li
              key={item.id}
              className={index === clickedIndex ? 'ma-classe-ajout' : ''}
            >
              <Link to={`/${item.nom}`} onClick={() => ajouterClasse(index) }>
                <i className={item.clanaM}></i>
                {item.nom}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
