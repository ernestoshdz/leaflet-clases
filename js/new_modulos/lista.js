import Basemaps from "./basemaps.js";
import Estilos from "./estilos.js";

export default class Lista{
    constructor(){
        this.basemaps = new Basemaps();
        this.estilos = new Estilos();
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
                estilo: this.estilos.estilo_eua, 
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