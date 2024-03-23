import Basemaps from "./basemaps.js"

export default class Lista{
    constructor(){
        this.basemaps = new Basemaps
    }

    createLayer(layer){
        layer = L.layerGroup();

        return layer;
    }

    createMarkerCluster(layer) {
        layer = L.markerClusterGroup();

        return layer;
    }

    getCapas(){

        let capas = [
            {
                layer: this.basemaps.osm,
                label: "Open Street Maps (OSM)",
                file: "osm",
                folder: "base"
            },
            {
                layer: this.basemaps.esri_satelite,
                label: "ESRI World Imagery",
                file: "esri",
                folder: "base"   
            },
            {
                layer: this.createLayer("eua"),
                label: "Estados Unidos",
                file: "us-states_es6",
                folder: "USA",
                ext: ".geojson"
            },
            {
                layer: this.createMarkerCluster("cdmx_cds"),
                label: "México Ciudades",
                file: "México_Ciudades",
                folder: "",
                ext: ".geojson"
            }
        ];

        return capas;

    }
}