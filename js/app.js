import Basemaps from "./modulos/basemaps.js";
import Layers from "./modulos/layers.js";
import Peticiones from "./modulos/peticiones.js";

export default class App{
    constructor(){

        //Inicializar propiedades
        this.basemaps = new Basemaps();
        this.layers = new Layers();
        this.peticiones = new Peticiones();
    }

    load(){
        console.log('La aplicación ha sido inicilizada');

        //Variable mapa
        const map = L.map('map').setView([38.548165, -98.833008], 4);

        this.layers.setLayers();

        this.layers.getLayers().forEach(item => {
            this.peticiones.getCapas(item.layer,item.folder,item.nombre_archivo,item.estilo,item.pop);
        });

        this.basemaps.osm.addTo(map);
        this.layers.eua.addTo(map);
        this.layers.mx_edos.addTo(map);

        const capas_base = [
            {
                label: 'Mapas Base',
                children: [
                    {label: 'OSM', layer: this.basemaps.osm},
                    {label: 'Esri Wordl Map', layer: this.basemaps.esri_satelite}
                ]
            }
        ];

        this.layers.getLayers().forEach(i => {
            this.layers.ingresarArbol(this.layers.crearArbol(i.layer,i.folder));
        });
        
        const capas_json = [
            {
                label: 'Capas',
                children: this.layers.consultarArbolBase()
            }
        ];

        var layer_control = L.control.layers.tree(capas_base, capas_json, {
            namedbtn_draw: true,
            closedSymbol: '+',
            openedSymbol: '-',
            collapseAll: 'Colapsar todos',
            expandAll: 'Expandir todos',
            namedToggle: true,
            collapsed: false,
        
        });
        
        layer_control.addTo(map);
    }
}