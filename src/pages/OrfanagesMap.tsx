import React from "react";
import MapMarker from '../images/logo-icon.png';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';

import '../styles/pages/orfanages-map.css'
import 'leaflet/dist/leaflet.css'

function OrfanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={MapMarker} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Gravataí</strong>
                    <span>Rio Grande do Sul</span>
                </footer>
            </aside>

            <MapContainer center={[-29.8857894,-51.1286724]} zoom={11} style={{ width: '100%', height: '100%' }} >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrfanagesMap;