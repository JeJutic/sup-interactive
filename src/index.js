import React from 'react';
import {createRoot} from 'react-dom/client';
import 'leaflet/dist/leaflet.css'
import './css/index.css';
// import L from "leaflet";
import App from './js/App';

// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';
//
// let DefaultIcon = L.icon({
//     iconUrl: icon,
//     shadowUrl: iconShadow
// });
//
// L.Marker.prototype.options.icon = DefaultIcon;

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />)
