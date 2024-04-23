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

    getLista(){

        let capas = [
            {
                layer: this.basemaps.osm,
                name: "Open Street Maps",
                file: "osm",
                tema: 'basemaps'
            },
            {
                layer: this.basemaps.esri_satelite,
                name: "ESRI World Imagery",
                file: "esri",
                tema: 'basemaps'   
            },
            {
                layer: this.createLayer("eua"),
                folder: "USA/",
                name: "Estados Unidos",
                ext: ".geojson",
                file: "us-states_es6",
                style: this.estilos.estilo_eua,
                
            },
            {
                layer: this.createMarkerCluster("cdmx_cds"),
                folder: "MX/",
                name: "México Ciudades",
                ext: ".geojson",
                file: "México_Ciudades",
            }
        ];

        return capas;

    }
}