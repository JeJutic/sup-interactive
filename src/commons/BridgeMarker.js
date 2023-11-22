import L from "leaflet";
import React, {Fragment, useState} from "react";
import {Marker} from "react-leaflet";
import {bridges} from "../js/bridges";
import QuestionModal from "./QuestionModal";

function BridgeMarker({ position, overlayComponent }) {
    const LeafIcon = L.Icon.extend({
        options: {}
    });

    const blueIcon = new LeafIcon({
            iconUrl:
                "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
        }),
        greenIcon = new LeafIcon({
            iconUrl:
                "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
        });

    const [icon, setIcon] = useState(blueIcon);

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setIcon(greenIcon)
        setShowModal(true)
    }

    return (
        <Fragment>
            <Marker className="marker" position={position}
                    eventHandlers={{click: handleClick}} icon={icon}>
            </Marker>
            <QuestionModal overlayComponent={overlayComponent}
                           showModal={showModal}
                           setShowModal={setShowModal}
            />
        </Fragment>
    )
}

function BridgeMarkerList() {
    return (
        <ul>
            {bridges.map(bridge =>
                <li key={bridge.position}>
                    <BridgeMarker
                        position={bridge.position} overlayComponent={bridge.overlayComponent}
                    />
                </li>
            )}
        </ul>
    )
}

export default BridgeMarkerList;