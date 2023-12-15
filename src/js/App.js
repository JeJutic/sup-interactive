import "../css/App.css";
import myMap from "./map.webp";
import { MapContainer, CircleMarker, TileLayer, SVGOverlay, ImageOverlay, FeatureGroup, Marker, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import React, { useState, useRef } from "react";
import BridgeMarkerList from "../commons/BridgeMarker";
import WelcomeScreen from "../commons/WelcomeScreen";
import FinishScreen from "../commons/FinishScreen";
import { bridges } from "./bridges";

const center = [59.933, 30.314];
// const bounds = [[59.904209, 30.176695], [59.965838, 30.455914]];
const bounds = [[59.902412999999996, 30.17354], [59.964387, 30.45446]];
// const center = [2098, 4818];
// const bounds = [[0, 0], [4196, 9636]];

const smallLabels = [
    [59.917791, 30.336642, "Багратионовский сквер"],
    [59.920053, 30.333977, "Сад на Пионерской площади"],
    [59.919344, 30.352607, "Лиговский проспект", -73],
    [59.913063, 30.342078, "Боровая ул.", -71],
    [59.910374, 30.346813, "Лиговский проспект", -71],
    [59.910696, 30.334239, "Рыбинская ул.", 70],
    [59.907959, 30.342376, "Расстанная ул.", 30],
    [59.908157, 30.355525, "Днепропетровская ул.", -71],
    [59.905565, 30.317874, "Московский проспект", 88],
    [59.917602, 30.320163, "Загородный проспект", -37],
    [59.920807, 30.326300, "Введенский сад"],
    [59.922592, 30.312009, "Юсуповский сад"],
    [59.917215, 30.284414, "Садовая ул.", -26],
    [59.915924, 30.285573, "р. Фонтанка", 5],
    [59.917000, 30.268621, "Галерный о."],
    [59.903854, 30.261927, "Екатерингофский парк"],
    [59.910438, 30.260124, "р. Екатерингофка", -70],
    [59.905640, 30.253301, "наб. реки Екатерингофки", -55]
];

const defaultZoom = 14;
const minZoom = 14;

var ZoomShowHide = L.FeatureGroup.extend({
    initialize: function () {
        this.layers = []
        this._layerGroup = L.featureGroup();
    },

    onAdd: function (map) {
        this._layerGroup.addTo(map)
        var that = this; // I do not like this programing language.
        this.map = map
        this.map.on('zoom', function(e) {that.filter()});
        this.map.on('zoomstart', (e) => {console.log('zoom start', e.target)});
    },

    filter: function () {
        var current_zoom_level = this.map.getZoom();
        console.log(current_zoom_level, this)
        for (var i=0; i < this.layers.length; i++) {
            var layer = this.layers[i];
            if ((layer.min_zoom == null || current_zoom_level >= layer.min_zoom) &&
                (layer.max_zoom == null || current_zoom_level <= layer.max_zoom)){
                if (!this._layerGroup.hasLayer(layer)) {
                    layer.addTo(this._layerGroup);
                }
            } else {
                if (this._layerGroup.hasLayer(layer)) {
                    layer.removeFrom(this._layerGroup);
                }
            }
        }
    },

    addLayer: function (layer, min_zoom, max_zoom) {
        layer.min_zoom = min_zoom
        layer.max_zoom = max_zoom
        this.layers.push(layer)
        this.filter()
    },

    addLayers: function (layers) {
        this.layers = this.layers.concat(layers)
        this.filter()
    },

    _removeLayer: function(layer) {
        if (this._layerGroup.hasLayer(layer)){
            layer.removeFrom(this._layerGroup);
        }
    },

    removeLayer: function(layer) {
        this._removeLayer(layer);
        this.layers = this.layers.filter(function(e) { return e !== layer });
        this.filter();
    },

    clearLayers: function() {
        for (var i=0; i < this.layers.length; i++) {
            var layer = this.layers[i];
            this._removeLayer(layer);
        }
        this.layers = [];
    }
});

function App() {
  const mapRef = useRef();
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
    map.setMinZoom(minZoom);
    map.setMaxZoom(minZoom + 1);
    map.setMaxBounds(bounds);
    var zsh = new ZoomShowHide();
    zsh.addTo(map);
      for (const [lat, lon, text, rotate] of smallLabels) {
        let content = `<div class="leaflet-small-label-inner">${text}</div>`;
        if (rotate !== undefined) {
            content = `<div style="-webkit-transform: rotate(${rotate}deg); -moz-transform:rotate(${rotate}deg); transform-origin: top left;">${content}</div>`;
        }
        var marker = L.marker([lat, lon], {
            icon: L.divIcon({
                html: content,
                className: 'leaflet-small-label',
                iconSize: null,
            })
        })
        zsh.addLayer(marker, 14.5, null);
    }

    var popup = L.popup()

    map.on('click', (ev) => {
      popup
        .setLatLng(ev.latlng)
        .setContent("You clicked at " + ev.latlng.toString())
        .openOn(map)
    })
    return null;
  }

  return (
    <>
      <WelcomeScreen />
      {showFinishScreen && <FinishScreen />}
      <MapContainer
        className="map"
        style={{ height: "100vh", width: "100%" }}
        center={center}
        zoom={defaultZoom}
        bounds={bounds}
        ref={mapRef}
        scrollWheelZoom={true}
        zoomSnap={.1}
        wheelDebounceTime={100}
        attributionControl={false}
        maxBoundsViscosity={1.0}
      >
        <MapSettings />
        <Marker
          icon={new L.Icon({iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png", iconSize: [25, 41], iconAnchor: [25 / 2, 41]})}
          position={[59.933277, 30.314214]} />
        {/*<CircleMarker center={[59.933277, 30.314214]} radius={16} />*/}
        <ImageOverlay bounds={bounds} url={myMap}>
        </ImageOverlay>
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
