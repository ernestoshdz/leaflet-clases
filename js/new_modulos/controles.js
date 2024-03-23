import Lista from ".//lista.js"
import Capas from "./capas.js";
import Peticiones from "./peticiones.js";

export default class Controles {
    constructor() {
        this.capas = new Capas();
        this.lista = new Lista();
        this.peticiones = new Peticiones();
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

            this.peticiones.setCapas(capa.layer,capa.folder,capa.file,null,null,capa.ext);

        });

        capas_base[0].layer.addTo(map)

        capas_json[0].layer.addTo(map)

        let layer_control = L.control.layers.tree(capas_base, capas_json, {
            namedbtn_draw: true,
            closedSymbol: '+',
            openedSymbol: '-',
            collapseAll: 'Colapsar todos',
            expandAll: 'Expandir todos',
            namedToggle: true,
            collapsed: false,

        });


        layer_control.addTo(map)

    }

}