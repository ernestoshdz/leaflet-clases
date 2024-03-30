import Lista from ".//lista.js"
import Capas from "./capas.js";
import Peticiones from "./peticiones.js";
import Basemaps from "./basemaps.js";
import Estilos from "./estilos.js";

export default class Controles {
    constructor() {
        this.capas = new Capas();
        this.lista = new Lista();
        this.peticiones = new Peticiones();
        this.basemaps = new Basemaps();
        this.estilos = new Estilos();
    }

    crearBotonCapas(map) {
        L.easyButton({
            position: 'topright',
            states: [{
                stateName: 'add-markers',
                icon: '<img src="img/folder-svgrepo-com.svg" width="16" height="16">',
                title: 'Mostrar Capas',
                onClick: function (control) {
                    document.getElementsByClassName('leaflet-control-layers')[0].style.display = 'block';
                    control.state('remove-markers');
                }
            }, {
                stateName: 'remove-markers',
                icon: '<img src="img/open-file-folder-svgrepo-com.svg" width="16" height="16">',
                title: 'Salir',
                onClick: function (control) {
                    document.getElementsByClassName('leaflet-control-layers')[0].style.display = 'none';
                    control.state('add-markers');
                }
            }]
        }).addTo(map);
    }

    cargarArbol(map) {

        //crear variables base y json
        let capas_base = this.lista.getCapas().filter((i) => i.folder == "base");
        let capas_json = this.lista.getCapas().filter((i) => i.folder != "base");

        capas_base.forEach(i => {

            this.capas.agregarCapasBase(i.label,i.layer);

        });

        capas_json.forEach(capa => {

            this.capas.agregarCapasJson(capa.label,capa.layer);

            this.peticiones.setCapas(capa.layer,capa.folder,capa.file,capa.estilo,capa.pop,capa.ext);

        });

        capas_base[0].layer.addTo(map);

        capas_json[0].layer.addTo(map);

        console.log(capas_json)

        let overlaysTree = [
            {
                label: '2024',
                collapsed: false,
                children:[
                    {
                        label: 'Enero',
                        collapsed: false,
                        children:[
                            {label:"Estados Unidos",layer:capas_json[0].layer},
                            {label:"sjsjssj"}
                        ]
                    },
                    {
                        label: 'Febrero',
                        collapsed: false,
                        children:[
                            {label:"México Ciudades",layer:capas_json[1].layer}
                        ]
                    }
                    
                ]
            }
        ]

        let layer_control = L.control.layers.tree(capas_base, overlaysTree, {
            namedbtn_draw: true,
            closedSymbol: '<img src="img/plus.png" width="16" height="16"> <img src="img/folder-svgrepo-com.svg" width="16" height="16">',
         openedSymbol: '<img src="img/minus.png" width="16" height="16"> <img src="img/open-file-folder-svgrepo-com.svg" width="16" height="16">',
            collapseAll: 'Colapsar todos',
            expandAll: 'Expandir todos',
            namedToggle: true,
            collapsed: false,

        });


        layer_control.addTo(map)

    }

    cargarCoordenadas(map) {
        L.control.mouseCoordinate({
            gps: true,
            gpsLong: false,
            utm: true,
            utmref: false,
            position: 'bottomright'
        }).addTo(map);
    }

    cargarMiniMapa(map) {

        let lyr_mini = L.layerGroup();

        this.peticiones.setCapas(lyr_mini,"USA","us-states_es6",this.estilos.st_polEstudio,null,".geojson");

        this.basemaps.osm.addTo(lyr_mini);

        new L.Control.MiniMap(lyr_mini, {
            autoToggleDisplay: false,
            position: 'bottomleft',
            zoomLevelFixed: 2,
        }).addTo(map);
    }

}