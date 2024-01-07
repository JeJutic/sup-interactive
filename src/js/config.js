const bounds = [
  [59.902412999999996, 30.17354],
  [59.964387, 30.45446],
];

const config = {
  mapContainer: {
    center: [50.933, 30.314],
    bounds: bounds,
    scrollWheelZoom: true,
    zoomSnap: 0.25,
    zoomDelta: 0.25,
    wheelDebounceTime: 100,
    attributionControl: false,
    maxBoundsViscosity: 1.0,
    bounceAtZoomLimits: false,
    minZoom: 13.5,
    maxZoom: 15,
    maxBounds: bounds,
  },
  smallLabelZoomThreshold: 14,
};

export default config;
