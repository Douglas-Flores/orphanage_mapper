import React, { useEffect, useState } from "react";
import MapMarker from '../images/logo-icon.png';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';

import '../styles/pages/orfanages-map.css'
import 'leaflet/dist/leaflet.css'
import api from "../services/api";
import Orphanage from "./Orphanage";

const mapIcon = Leaflet.icon({
    iconUrl: MapMarker,
    iconSize: [58, 68],
    iconAnchor: [29, 68],

    popupAnchor: [190, 2],
});

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrfanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        })
    },[]);

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

            <MapContainer center={[-29.8856961,-51.1286724]} zoom={12} style={{ width: '100%', height: '100%' }} id="map" >
                
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {orphanages.map((orphanage) => {
                    return (
                        <Marker
                            key={orphanage.id} 
                            position = {[orphanage.latitude, orphanage.longitude]}
                            icon = {mapIcon}
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240}>
                                {orphanage.name}
                                <Link to={`/detail/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#FFF"/>
                                </Link>
                            </Popup>
                        </Marker>
                    );
                })}

            </MapContainer>

            <Link to="/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrfanagesMap;