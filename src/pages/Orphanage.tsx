import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useNavigate, useParams } from 'react-router-dom';
import L from 'leaflet';
import Sidebar from "../components/Sidebar";

import mapMarkerImg from '../images/logo-icon.png';

import '../styles/pages/orphanage.css';
import api from "../services/api";

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

interface Orphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface OrphanageParams {
  id: string;
}

export default function Orphanage() {
  const params = useParams<{id?: string}>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);
    })
  },[params.id]);

  if(!orphanage) {
    return <p>Carregando...</p>
  }

  return (
    <div id="page-orphanage">
      
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />

          <div className="images">
            { orphanage.images.map((image, index) => {
                return(
                  <button 
                    key={image.id}
                    className={activeImageIndex == index ? 'active' : ''}
                    type="button"
                    onClick={ () => { setActiveImageIndex(index) } }
                  >
                    <img src={image.url} alt={orphanage.name} />
                  </button>
                );
            })}
          </div>
          
          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <MapContainer 
                center={[-29.8856961,-51.1286724]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                />
                <Marker interactive={false} icon={happyMapIcon} position={[-29.8856961,-51.1286724]} />
              </MapContainer>

              <footer>
                <a href="">Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instru????es para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda ?? Sexta <br />
                {orphanage.opening_hours}
              </div>
              { orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" /> 
                    Atendemos <br /> fim de semana
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                <FiInfo size={32} color="#39CC83" /> 
                  N??o atendemos <br /> fim de semana
              </div>
              ) }
            </div>

            {/*<button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
              </button>*/}
          </div>
        </div>
      </main>
    </div>
  );
}