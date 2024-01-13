import {
    osm,
    osm2,
    esri_satelite
} from './modulos/basemaps.js';

import {
    getCapaEUA,
    getAgsPts
} from './modulos/peticiones.js';

import * as layers from './modulos/layers.js';

import {
    control_lyrs
} from './modulos/overlaysTree.js'

import {
    control_minimap
} from './modulos/minimapa.js'

//variable mapa
const map = L.map('map').setView([38.548165, -98.833008], 3);

osm.addTo(layers.osm);
osm2.addTo(layers.minimapa);
esri_satelite.addTo(layers.esri);

getCapaEUA(layers.eua);
getAgsPts(layers.ags_pts);

//se cargan al iniciar el mapa
layers.osm.addTo(map);
layers.eua.addTo(map);
layers.ags_pts.addTo(map);

//Control de layers
control_lyrs.addTo(map);

//Control de mini mapa
control_minimap.addTo(map);