import {
    st_eua_rango,
    st_mx_edo,
    estiloLocalidades,
    estiloCiudades,
} from './estilos.js';

import { 
    popup,
    euaPopup,
    agsPopup
} from './popup.js';

//Capas base
let osm = L.layerGroup();
let esri = L.layerGroup();

//Capas Json
let eua = L.layerGroup();
let mex_edos = L.layerGroup();
let mex_rios = L.layerGroup();
let mex_vial = L.layerGroup();

//Capas puntos
let ags_pts = L.markerClusterGroup();
let mex_cd_pts = L.markerClusterGroup();

//Layer Minimapa
let minimapa = L.layerGroup();

//Array de objetos
let capas = [
    {
        layer: 'eua',
        folder: 'USA',
        nombre_archivo: 'us-states_es6',
        estilo: st_eua_rango,
        pop: euaPopup
    },
    {
        layer: 'mex_edos',
        folder: 'MX',
        nombre_archivo: 'México_Estados',
        estilo: st_mx_edo,
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

//Array de objetos
let capas_pts = [
    {
        layer: 'ags_pts',
        folder: '',
        nombre_archivo: 'ags_puntos_es6',
        estilo: estiloLocalidades,
        pop: agsPopup
    },
    {
        layer: 'mex_cd_pts',
        folder: '',
        nombre_archivo: 'México_Ciudades',
        estilo: estiloCiudades,
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
    mex_cd_pts,
    minimapa,
    capas,
    capas_pts
}