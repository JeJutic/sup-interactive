import L from "leaflet";
import React, { Fragment, useEffect, useState } from "react";
import { Marker } from "react-leaflet";
import markerRedIcon from "../img/red-marker.png";
import { bridges } from "../js/bridges";

// рисует позицию пользователя и ближайший нерешенный мост
function NearestMarker() {
  const LeafIcon = L.Icon.extend({
    options: {
      iconSize: [20, 20],
      iconAnchor: [33 / 2, 47],
    },
  });

  let nearestBridgeIcon = new LeafIcon({
    // поменять
    iconUrl: markerRedIcon,
  });

  let userIcon = new LeafIcon({
    // поменять
    iconUrl: markerRedIcon,
  });

  const [[latitude, longitude], setPosition] = useState([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
        },
        () => {
          setPosition([null, null]);
        },
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (latitude === null || longitude === null) {
    return null;
  }

  let dist = ([x, y]) => {
    return (latitude - x) ** 2 + (longitude - y) ** 2;
  };

  let actual = bridges.filter((bridge) => {
    return !localStorage.getItem("bridge" + bridge.position);
  });

  if (actual.length === 0) {
    return null;
  }

  let nearest = actual.reduce((nearestBridge, currentBridge) => {
    if (dist(nearestBridge.position) > dist(currentBridge.position)) {
      return currentBridge;
    } else {
      return nearestBridge;
    }
  });

  return (
    <Fragment>
      <Marker
        className="marker"
        position={nearest.position}
        icon={nearestBridgeIcon}
      ></Marker>

      <Marker
        className="marker"
        position={[latitude, longitude]} // если ты на вязьме то можно сделать latitude - 0.04 и метка будет на карте)
        icon={userIcon}
      ></Marker>
    </Fragment>
  );
}
export default NearestMarker;
