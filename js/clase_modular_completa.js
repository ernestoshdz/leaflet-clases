import {
    osm,
    esri_satelite
} from './modulos/basemaps.js'

//variable mapa
const map = L.map('map').setView([38.548165, -98.833008], 5);

osm.addTo(map);