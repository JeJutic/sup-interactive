import L from "leaflet";

// https://github.com/auto-mat/leaflet-zoom-show-hide/blob/2f7a8e24bd74cee0f05d08e786184853fd1b9875/dist/leaflet-zoom-show-hide.js
export default L.FeatureGroup.extend({
  initialize: function () {
    this.layers = [];
    this._layerGroup = L.featureGroup();
  },

  onAdd: function (map) {
    this._layerGroup.addTo(map);
    var that = this; // I do not like this programing language.
    this.map = map;
    this.map.on("zoom", () => that.filter());
  },

  filter: function () {
    var current_zoom_level = this.map.getZoom();
    for (var i = 0; i < this.layers.length; i++) {
      var layer = this.layers[i];
      if (
        (layer.min_zoom == null || current_zoom_level >= layer.min_zoom) &&
        (layer.max_zoom == null || current_zoom_level <= layer.max_zoom)
      ) {
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
    layer.min_zoom = min_zoom;
    layer.max_zoom = max_zoom;
    this.layers.push(layer);
    this.filter();
  },

  addLayers: function (layers) {
    this.layers = this.layers.concat(layers);
    this.filter();
  },

  _removeLayer: function (layer) {
    if (this._layerGroup.hasLayer(layer)) {
      layer.removeFrom(this._layerGroup);
    }
  },

  removeLayer: function (layer) {
    this._removeLayer(layer);
    this.layers = this.layers.filter(function (e) {
      return e !== layer;
    });
    this.filter();
  },

  clearLayers: function () {
    for (var i = 0; i < this.layers.length; i++) {
      var layer = this.layers[i];
      this._removeLayer(layer);
    }
    this.layers = [];
  },
});
