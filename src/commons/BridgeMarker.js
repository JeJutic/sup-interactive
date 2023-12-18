import L from "leaflet";
import React, { Fragment, useState } from "react";
import { MapContainer, ImageOverlay, useMap } from "react-leaflet";
import { Marker } from "react-leaflet";
import { bridges } from "../js/bridges";
import QuestionModal from "../questions/QuestionModal";
import markerYellowIcon from "../img/yellow-marker.png";
import markerRedIcon from "../img/red-marker.png";

function BridgeMarker({ text, position, overlayComponent, upperOnQuestionSolved }) {
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
    if (localStorage.getItem("bridge" + position)) {
      return;
    }
    setShowModal(true);
  };

  const onQuestionSolved = () => {
    localStorage.setItem("bridge" + position, "true");
    icon = greenIcon;
    setShowModal(false);
    upperOnQuestionSolved();
  };
  const map = useMap();
  if (text != null) {
    let marker = getMarker(position, text);
    marker.addTo(map);
  }

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

function getMarker(position, text) {
  return L.marker([position[0] + 0.0001, position[1]], {
    icon: L.divIcon({
      html: `<span style="font-size: 9px; position: relative; z-index: 1000;">${text}</span>`,
      className: "leaflet-sight",
      iconSize: [120, 120],
    }),
  });
}


function BridgeMarkerList({ upperOnQuestionSolved }) {
  return (
    <ul>
      {bridges.map((bridge) => (
        <li key={bridge.position}>
          <BridgeMarker
            text={bridge.text}
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
