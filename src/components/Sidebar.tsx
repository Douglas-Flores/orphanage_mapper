import React from "react";
import mapMarker from '../images/logo-icon.png';
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const goBack = useNavigate();
    
    return (
        <aside>
        <img src={mapMarker} alt="Happy" />

        <footer>
          <button type="button" onClick={() => goBack(-1)}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    );
}