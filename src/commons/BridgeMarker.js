import L from "leaflet";
import React, { Fragment, useState } from "react";
import { Marker } from "react-leaflet";
import { bridges } from "../js/bridges";
import QuestionModal from "../questions/QuestionModal";
import markerYellowIcon from "../img/yellow-marker.png";
import markerRedIcon from "../img/red-marker.png";

function BridgeMarker({ position, overlayComponent, upperOnQuestionSolved }) {
  const LeafIcon = L.Icon.extend({
    options: {
      iconSize: [33, 47],
      iconAnchor: [33 / 2, 47],
    },
  });

  const blueIcon = new LeafIcon({
      iconUrl: markerRedIcon,
    }),
    greenIcon = new LeafIcon({
      iconUrl: markerYellowIcon,
    });

  let icon = localStorage.getItem("bridge" + position) ? greenIcon : blueIcon;

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const onQuestionSolved = () => {
    localStorage.setItem("bridge" + position, "true");
    icon = greenIcon;
    setShowModal(true);
    setTimeout(() => upperOnQuestionSolved(), 2000);
  };

  return (
    <Fragment>
      <Marker
        className="marker"
        position={position}
        eventHandlers={{ click: handleClick }}
        icon={icon}
      ></Marker>
      <QuestionModal
        overlayComponent={overlayComponent}
        showModal={showModal}
        setShowModal={setShowModal}
        onQuestionSolved={onQuestionSolved}
      />
    </Fragment>
  );
}

function BridgeMarkerList({ upperOnQuestionSolved }) {
  return (
    <ul>
      {bridges.map((bridge) => (
        <li key={bridge.position}>
          <BridgeMarker
            position={bridge.position}
            overlayComponent={bridge.overlayComponent}
            upperOnQuestionSolved={upperOnQuestionSolved}
          />
        </li>
      ))}
    </ul>
  );
}

export default BridgeMarkerList;
