import Basemaps from "./basemaps.js"

export default class Lista{
    constructor(){
        this.basemaps = new Basemaps
    }

    createLayer(layer){
        layer = L.layerGroup();

        return layer;
    }

    getCapas(){

        let capas = [
            {
                layer: this.basemaps.osm,
                name: "Open Street Maps (OSM)",
                file: "osm",
                folder: "base"
            },
            {
                layer: this.basemaps.esri_satelite,
                name: "ESRI World Imagery",
                file: "esri",
                folder: "base"   
            },
            {
                layer: this.createLayer("eua"),
                name: "Estados Unidos",
                file: "us-states_es6",
                folder: "USA",
                ext: ".geojson"
            }
        ];

        return capas;

    }
}