import L from "leaflet";
import React, { Fragment, useState } from "react";
import { Marker } from "react-leaflet";
import { bridges } from "../js/bridges";
import QuestionModal from "../questions/QuestionModal";

function BridgeMarker({ position, overlayComponent, upperOnQuestionSolved }) {
  const LeafIcon = L.Icon.extend({
    options: {},
  });

  const blueIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
    }),
    greenIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",
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

  return (
    <Fragment>
      <Marker
        className="marker"
        position={position}
        eventHandlers={{ click: handleClick }}
        icon={icon}
        iconSize={[21, 34]}
        iconAnchor={[10, 34]}
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
