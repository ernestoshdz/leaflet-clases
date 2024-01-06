//Capas base
let osm = L.layerGroup();
let esri = L.layerGroup();

//Capas Json
let eua = L.layerGroup();
let ags_pts = L.markerClusterGroup();

export {
    eua,
    ags_pts,
    osm,
    esri
}