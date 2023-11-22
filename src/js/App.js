import '../css/App.css';
import {MapContainer, TileLayer, useMap} from "react-leaflet";
import L from "leaflet";
import React from "react";
import BridgeMarkerList from "../commons/BridgeMarker";
import {WelcomeScreen} from "../commons/WelcomeScreen";

const center = [59.928, 30.314]
const defaultZoom = 14
const minZoom = 13

function App() {
    return (
        <>
            <WelcomeScreen />
            <MapContainer className="map" style={{ height: "100vh", width: "100%" }}
                          center={center}
                          zoom={defaultZoom} scrollWheelZoom={false}
                          attributionControl={false}
            >
                <MapSettings/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <BridgeMarkerList/>
            </MapContainer>
        </>
    );
}

function MapSettings() {
    const map = useMap()
    map.setMinZoom(minZoom)
    const bounds = L.latLng(center[0], center[1]).toBounds(12000)
    map.setMaxBounds(bounds)
    return null
}

export default App;
