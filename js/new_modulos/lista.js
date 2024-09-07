import Basemaps from "./basemaps.js";
import Estilos from "./estilos.js";
import Popups from "./popups.js";

export default class Lista{
    constructor(){
        this.basemaps = new Basemaps();
        this.estilos = new Estilos();
        this.popups = new Popups();
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
                pop: this.popups.popGenerico
            },
            {
                layer: this.createMarkerCluster("cdmx_cds"),
                folder: "MX/",
                name: "México Ciudades",
                ext: ".geojson",
                file: "México_Ciudades",
                pop: this.popups.mxEdosPop
            },
            {
                layer: this.createLayer("mex_edos"),
                folder: "MX/",
                name: "México Estados",
                ext: ".geojson",
                file: "México_Estados",
                style: this.estilos.estilo_mx,
                pop: this.popups.popGenerico
            },
            {
                layer: this.createMarkerCluster("oisa"),
                folder: "OISA/",
                name: "oisa",
                ext: ".geojson",
                file: "oisa",
                //style: this.estilos.estilo_mx,
                pop: this.popups.oisaPop
            }
        ];

        return capas;

    }
}