import "../css/App.css";
import myMap from "../img/map.webp";
import { MapContainer, ImageOverlay, useMap } from "react-leaflet";
import React, { useState } from "react";
import BridgeMarkerList from "../commons/BridgeMarker";
import WelcomeScreen from "../commons/WelcomeScreen";
import FinishScreen from "../commons/FinishScreen";
import { bridges } from "./bridges";
import config from "./config";
import ZoomShowHide from "./ZoomShowHide";
import addSmallLabels from "./smallLabels";
import addBigLabels from "./bigLabels";
import addSights from "./sights";

function App() {
  const [showFinishScreen, setShowFinishScreen] = useState(false);

  const onQuestionSolved = () => {
    if (countFinishedBridges() === bridges.length) {
      setShowFinishScreen(true);
      bridges.forEach((b) => {
        unsetBridgeFinished(b);
      });
    }
  };

  function MapSettings() {
    const map = useMap();
    var zsh = new ZoomShowHide();
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
        <BridgeMarkerList upperOnQuestionSolved={onQuestionSolved} />
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
