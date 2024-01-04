import "../css/App.css";
import myMap from "../img/map.webp";
import { ImageOverlay, MapContainer, useMap } from "react-leaflet";
import React, { useState } from "react";
import BridgeMarkerList from "../commons/BridgeMarker";
import NearestMarker from "../commons/NearestMarker";
import WelcomeScreen from "../components/WelcomeScreen";
import FinishScreen from "../commons/FinishScreen";
import { bridges } from "./bridges";
import config from "./config";
import ZoomShowHide from "./ZoomShowHide";
import addSmallLabels from "./smallLabels";
import addBigLabels from "./bigLabels";
import addSights from "./sights";

function App() {
  const [showFinishScreen, setShowFinishScreen] = useState(false);

  const checkFinish = () => {
    if (countFinishedBridges() === bridges.length) {
      bridges.forEach((b) => {
        unsetBridgeFinished(b);
      });
      setShowFinishScreen(true);
    }
  };

  function MapSettings() {
    const map = useMap();
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
  return localStorage.getItem("bridge" + bridge.position);
}

function unsetBridgeFinished(bridge) {
  return localStorage.removeItem("bridge" + bridge.position);
}

function countFinishedBridges() {
  return bridges.filter(isBridgeFinished).length;
}

export default App;
