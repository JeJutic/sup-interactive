import L from "leaflet";
import React, { Fragment, useState } from "react";
import { Marker } from "react-leaflet";
import { bridges } from "../js/bridges";
import CardModal from "../lib/card/CardModal";
import markerYellowIcon from "../img/yellow-marker.png";
import markerRedIcon from "../img/red-marker.png";

function BridgeMarker({ position, children, checkFinish }) {
  const LeafIcon = L.Icon.extend({
    options: {
      iconSize: [33, 47],
      iconAnchor: [33 / 2, 47],
    },
  });

  const blueIcon = new LeafIcon({
    iconUrl: markerRedIcon,
  });

  const greenIcon = new LeafIcon({
    iconUrl: markerYellowIcon,
  });

  let icon = localStorage.getItem(JSON.stringify(position))
    ? greenIcon
    : blueIcon;

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const onQuestionSolved = () => {
    localStorage.setItem("bridge" + position, "true");
    icon = greenIcon;
    setShowModal(true);
  };

  return (
    <Fragment>
      <Marker
        className="marker"
        position={position}
        eventHandlers={{ click: handleClick }}
        icon={icon}
      ></Marker>
      <CardModal
        showModal={showModal}
        setShowModal={setShowModal}
        onQuestionSolved={onQuestionSolved}
        checkFinish={checkFinish}
      >
        {children}
      </CardModal>
    </Fragment>
  );
}

function BridgeMarkerList({ checkFinish }) {
  return (
    <ul>
      {bridges.map((bridge) => (
        <li key={bridge.position}>
          <BridgeMarker position={bridge.position} checkFinish={checkFinish}>
            {bridge.overlayComponent}
          </BridgeMarker>
        </li>
      ))}
    </ul>
  );
}

export default BridgeMarkerList;
