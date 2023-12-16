import L from "leaflet";

const bigLabels = [
    [59.957610, 30.288491, "Петроградский район"],
    [59.938117, 30.250082, "Василеостровский район"],
    [59.907404, 30.242271, "Кировский район"],
    [59.906156, 30.325154, "Московский район"],
    [59.911062, 30.350761, "Фрунзенский район"],
    [59.914122, 30.423632, "Невский район"],
    [59.941686, 30.427151, "Красногвардейский район"],
    [59.941299, 30.367211, "Центральный район"],
    [59.961026, 30.371704, "Калининский район"],
    [59.960940, 30.343865, "Выборгский район"]
];

function getMarker(lat, lon, text) {
    const innerContent = text.split(' ').map(w => `<div>${w}</div>`).join('');
    let content = `<div class="leaflet-big-label-inner">${innerContent}</div>`;
    return L.marker([lat, lon], {
        icon: L.divIcon({
            html: content,
            className: 'leaflet-big-label',
            iconSize: null,
        })
    });
}

function addBigLabels(map) {
    for (const label of bigLabels) {
        let marker = getMarker(...label);
        marker.addTo(map);
    }
}

export default addBigLabels;
