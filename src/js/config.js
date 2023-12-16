const bounds = [[59.902412999999996, 30.17354], [59.964387, 30.45446]];

export default {
    mapContainer: {
        center: [50.933, 30.314],
        bounds: bounds,
        scrollWheelZoom: true,
        zoomSnap: .25,
        zoomDelta: .25,
        wheelDebounceTime: 100,
        attributionControl: false,
        maxBoundsViscosity: 1.0,
        bounceAtZoomLimits: false,
        minZoom: 14,
        maxZoom: 15,
        maxBounds: bounds
    },
    smallLabelZoomThreshold: 14.5,
}
