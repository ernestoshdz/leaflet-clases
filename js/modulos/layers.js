import {
    estilo_eua,
    estilo_mx
} from './estilos.js';

import { 
    popup,
    euaPopup
} from './popup.js';

//Capas base
let osm = L.layerGroup();
let esri = L.layerGroup();

//Capas Json
let eua = L.layerGroup();
let mex_edos = L.layerGroup();
let mex_rios = L.layerGroup();
let mex_vial = L.layerGroup();

let ags_pts = L.markerClusterGroup();

//Layer Minimapa
let minimapa = L.layerGroup();


//Array de objetos
let capas = [
    {
        layer: 'eua',
        folder: 'USA',
        nombre_archivo: 'us-states_es6',
        estilo: estilo_eua,
        pop: euaPopup
    },
    {
        layer: 'mex_edos',
        folder: 'MX',
        nombre_archivo: 'México_Estados',
        estilo: estilo_mx,
        pop: popup
    },
    {
        layer: 'mex_rios',
        folder: 'MX',
        nombre_archivo: 'México_Hidrografia',
        estilo: '',
        pop: popup
    },
    {
        layer: 'mex_vial',
        folder: 'MX',
        nombre_archivo: 'México_Vialidad',
        estilo: '',
        pop: popup
    }
];

export {
    osm,
    esri,
    eua,
    mex_edos,
    mex_rios,
    mex_vial,
    ags_pts,
    minimapa,
    capas
}