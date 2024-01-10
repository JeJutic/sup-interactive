import "../css/App.css";
import myMap from "../img/map.webp";
import { ImageOverlay, MapContainer, useMap } from "react-leaflet";
import React, { useState } from "react";
import BridgeMarkerList from "../commons/BridgeMarker";
import NearestMarker from "../commons/NearestMarker";
// import L from "leaflet";
import WelcomeScreen from "../components/WelcomeScreen";
import FinishScreen from "../components/FinishScreen";
import { bridges } from "./bridges";
import config from "./config";
import ZoomShowHide from "./ZoomShowHide";
import addSmallLabels from "./smallLabels";
import addBigLabels from "./bigLabels";
import addSights from "./sights";

function App() {
  const [showFinishScreen, setShowFinishScreen] = useState(false);

  const checkFinish = () => {
    if (countFinishedBridges() === bridges.length && !isAlreadyFinished()) {
      // bridges.forEach((b) => {
      //   unsetBridgeFinished(b);
      // });
      markAsFinished();
      setShowFinishScreen(true);
    }
  };

  function MapSettings() {
    const map = useMap();
    // var popup = L.popup();

    // function onMapClick(e) {
    //   popup
    //     .setLatLng(e.latlng)
    //     .setContent("You clicked the map at " + e.latlng.toString())
    //     .openOn(map);
    // }

    // map.on('click', onMapClick);
    const zsh = new ZoomShowHide();
    zsh.addTo(map);

    addSmallLabels(zsh, config.smallLabelZoomThreshold, null);
    addBigLabels(map);
    addSights(map);

    return null;
  }

  return (
    <>
      <WelcomeScreen />
      {showFinishScreen && <FinishScreen />}
      <MapContainer
        className="map"
        style={{ height: "100vh", width: "100%" }}
        {...config.mapContainer}
      >
        <MapSettings />
        <ImageOverlay bounds={config.mapContainer.bounds} url={myMap} />
        <BridgeMarkerList checkFinish={checkFinish} />
        {/* <NearestMarker /> */}
      </MapContainer>
    </>
  );
}

function isBridgeFinished(bridge) {
  return localStorage.getItem(JSON.stringify(bridge.position));
}

function unsetBridgeFinished(bridge) {
  return localStorage.removeItem(JSON.stringify(bridge.position));
}

function countFinishedBridges() {
  return bridges.filter(isBridgeFinished).length;
}

function markAsFinished() {
  localStorage.setItem("finished", true);
}

function isAlreadyFinished() {
  return localStorage.getItem("finished");
}

export default App;
