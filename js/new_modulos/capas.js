import Peticiones from "./peticiones.js";
import Simbologia from "./simbologia.js";
import Lista from "./lista.js"

export default class Capas {
    constructor() {
        this.capasBase = [];
        this.capasJson = [];
        this.simbologia = new Simbologia();
        this.lista = new Lista();
        this.peticiones = new Peticiones();
    }

    getCapasBase() {
        let capas_base = this.lista.getLista().filter((i) => i.tema == "basemaps");

        /* console.log(capas_base) */

        capas_base.forEach(i => {

            this.agregarCapasBase(i.name, i.layer);

        });
    }

    getCapasJson() {
        let capas_json = this.lista.getLista().filter((i) => i.tema != "basemaps");

        /* console.log(capas_json) */

        capas_json.forEach(i => {

            /* atributos de la lista */
            this.peticiones.getCapas(i.layer, i.folder, i.file, i.style, i.pop, i.ext, i.estilo_pts, i.tema);

            this.agregarCapasJson(i.name, i.layer, i.tema);

        });
    }

    agregarCapasBase(name, layer) {

        this.obj = {
            label: name,
            layer: layer
        }

        this.capasBase.push(this.obj);
    }

    agregarCapasJson(name, layer, tema) {

        this.obj = {
            label: name,
            layer: layer,
            tema: tema
        }

        this.capasJson.push(this.obj);
    }

    consultarCapasBase() {

        let baseTree = {
            label: 'Capas Base',
            collapsed: true,
            children: this.capasBase
        };

        return baseTree;
    }

    getBaseLayer(label) {
        let capa = this.capasBase.filter((i) => i.label == label);

        capa.forEach(i => {

            this.obj = {
                label: i.name,
                layer: i.layer
            }

        });

        return this.obj;

    }

    getLayer(lbl) {

        let capa = this.capasJson.filter((i) => i.label == lbl);

        capa.forEach(i => {

            this.obj = {
                label: i.label,
                layer: i.layer
            }
        });

        return this.obj;

    }

    consultarCapasJson() {

        let overlaysTree = [
            {
                label: '2024',
                collapsed: false,
                children: [
                    {
                        label: 'Enero',
                        collapsed: false,
                        children: [
                            this.getLayer("Estados Unidos"),
                            this.simbologia.getEuaSymb()
                        ]
                    },
                    {
                        label: 'Capas de México',
                        collapsed: false,
                        children: [
                            { label: '<div class="leaflet-control-layers-separator"></div>' },
                            this.getLayer("México Ciudades"),
                            this.simbologia.getMexCdSymb(),
                            { label: '<div class="leaflet-control-layers-separator"></div>' },
                            this.getLayer("México Estados"),
                            this.simbologia.getEuaSymb(),
                            { label: '<div class="leaflet-control-layers-separator"></div>' },
                            this.getLayer("oisa"),
                        ]
                    }
                ]
            }
        ]

        return overlaysTree;
    }

    crearControl(map) {
        let layer_control = L.control.layers.tree(this.consultarCapasBase(), this.consultarCapasJson(), {
            //selectorBack: false,
            namedbtn_draw: true,
            closedSymbol: '<img src="img/plus.png" width="16" height="16"> <img src="img/folder-svgrepo-com.svg" width="16" height="16">',
            openedSymbol: '<img src="img/minus.png" width="16" height="16"> <img src="img/open-file-folder-svgrepo-com.svg" width="16" height="16">',
            collapseAll: '',
            expandAll: '',
            namedToggle: true,
            collapsed: false
        }).addTo(map);

        let oldLayerControl = layer_control.getContainer();
        let newLayerControl = document.getElementById("layercontrol");

        newLayerControl.appendChild(oldLayerControl);        

        //Ocultar layers tree al cargar control
        //document.getElementsByClassName('leaflet-control-layers')[0].style.display = 'none';
    }

    load_capas(map) {
        this.getCapasBase();
        this.getCapasJson();

        //capas que se cargan al inicio
        this.getBaseLayer("Open Street Maps").layer.addTo(map);
        /* this.getLayer("Estados Unidos").layer.addTo(map);
        this.getLayer("México Estados").layer.addTo(map);
        this.getLayer("México Ciudades").layer.addTo(map);
        this.getLayer("oisa").layer.addTo(map); */
    }

}