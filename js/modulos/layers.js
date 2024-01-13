//Capas base
let osm = L.layerGroup();
let esri = L.layerGroup();

//Capas Json
let eua = L.layerGroup();
let ags_pts = L.markerClusterGroup();

//Layer Minimapa
let minimapa = L.layerGroup();

export {
    eua,
    ags_pts,
    osm,
    esri,
    minimapa
}