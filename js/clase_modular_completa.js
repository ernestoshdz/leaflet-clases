import {
    osm,
    esri_satelite
} from './modulos/basemaps.js';

import {
    getCapaEUA,
    getAgsPts
} from './modulos/peticiones.js';

import *  as layers from './modulos/layers.js';

import {
    control_lyrs
} from './modulos/overlaysTree.js'

//variable mapa
const map = L.map('map').setView([38.548165, -98.833008], 3);

osm.addTo(layers.osm);

getCapaEUA(layers.eua);
getAgsPts(layers.ags_pts);

//se cargan al iniciar el mapa
layers.osm.addTo(map);
esri_satelite.addTo(layers.esri)

layers.eua.addTo(map);
layers.ags_pts.addTo(map);

control_lyrs.addTo(map);