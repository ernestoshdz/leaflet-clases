import {
    osm,
    osm2,
    esri_satelite
} from './modulos/basemaps.js';

import {
    getCapas,
    getCapaPts
} from './modulos/peticiones.js';

import * as layers from './modulos/layers.js';

import {
    control_lyrs
} from './modulos/overlaysTree.js';

import {
    control_minimap
} from './modulos/minimapa.js';

//variable mapa
const map = L.map('map').setView([38.548165, -98.833008], 3);

osm.addTo(layers.osm);
osm2.addTo(layers.minimapa);
esri_satelite.addTo(layers.esri);

layers.capas.forEach(capa => {
    getCapas(capa.layer, capa.folder, capa.nombre_archivo, capa.estilo, capa.pop)
});

layers.capas_pts.forEach(capa => {
    getCapaPts(capa.layer, capa.folder, capa.nombre_archivo, capa.estilo, capa.pop)
});

//se cargan al iniciar el mapa
layers.osm.addTo(map);
//layers.eua.addTo(map);
layers.mex_edos.addTo(map);
layers.ags_pts.addTo(map);

//Control de layers
control_lyrs.addTo(map);

//Control de mini mapa
control_minimap.addTo(map);