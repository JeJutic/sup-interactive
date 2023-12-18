import L from "leaflet";

import kunstkameraIcon from "../img/Kunstkamera.png";
import peterAndPaulFortressIcon from "../img/Peter-and-paul-fortress.png";
import hermitageIcon from "../img/Hermitage.png";
import saintIsaacsCathedralIcon from "../img/Saint-Isaacs-Cathedral.png";
import saintMichaelsCastleIcon from "../img/Saint-Michaels-Castle.png";

const sights = [
  [59.942718, 30.299306, kunstkameraIcon, "Кунтскамера"],
  [
    59.95024,
    30.313425,
    peterAndPaulFortressIcon,
    "Петропавловская крепость",
    90,
  ],
  [59.939282, 30.314927, hermitageIcon, "Государственный Эрмитаж", 90],
  [59.935107, 30.305958, saintIsaacsCathedralIcon, "Исаакиевский собор", 80],
  [59.938278, 30.336972, saintMichaelsCastleIcon, "Михайловский замок", 70],
];

function getMarker(lat, lon, icon, text, maxImgSize) {
  let imgStyle = "";
  if (maxImgSize !== undefined) {
    imgStyle = `max-width: ${maxImgSize}px !important`;
  }
  return L.marker([lat, lon], {
    icon: L.divIcon({
      html: `<img src=${icon} style="${imgStyle}"/><span>${text}</span>`,
      className: "leaflet-sight",
      iconSize: [120, 120],
    }),
  });
}

function addSights(map) {
  for (const sight of sights) {
    let marker = getMarker(...sight);
    marker.addTo(map);
  }
}

export default addSights;
