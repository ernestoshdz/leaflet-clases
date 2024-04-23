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

        this.elev_ne = 'Elevación de Nivel Estático';
        this.esp_fl = 'Espesor de Fase Libre';
        this.prof_ne = 'Profundidad de Nivel Estático';
        this.ce = 'Corriente Eléctrica';
        this.od = 'Oxígeno Disuelto';
        this.orp = 'Óxido Reducción'
        this.ph = 'PH';
        this.temp = 'Temperatura';
        this.std = 'Sólidos Disueltos Totales';
    }

    getCapasBase() {
        let capas_base = this.lista.getLista().filter((i) => i.tema == "basemaps");

        capas_base.forEach(i => {

            this.agregarCapasBase(i.name, i.layer);

        });
    }

    getCapasJson() {
        let capas_json = this.lista.getLista().filter((i) => i.tema != "basemaps");

        capas_json.forEach(i => {

            this.peticiones.getCapas(i.layer, i.folder, i.file, i.style, i.pop, i.ext, i.tema);
            this.agregarCapasJson(i.name, i.layer, i.tema, i.subtema, i.campaña, i.prof, i.tipo)

        });
    }

    agregarCapasBase(name, layer) {

        this.obj = {
            label: name,
            layer: layer
        }

        this.capasBase.push(this.obj);
    }

    agregarCapasJson(name, layer, tema, subtema, camp, prof, tipo) {

        this.obj = {
            label: name,
            layer: layer,
            tema: tema,
            subtema: subtema,
            campaña: camp,
            prof: prof,
            tipo: tipo
        }

        this.capasJson.push(this.obj);
    }

    consultarCapasBase() {

        return this.capasBase;
    }

    getUrlmapa(tema, subtema, camp, prof, tipo) {

        let ruta_mapa = "";

        if (tipo != "puntos") {
            switch (tema) {
                case "FL":
                    ruta_mapa = ` <a href="mapas/${subtema}/B-001 PLANO DE CUADRO DE CONSTR. REV.C - ${subtema} ${camp}.pdf" target=_blank">Ver</a>`;
                    break;
                case "PFQ":
                    ruta_mapa = ` <a href="mapas/${tema}/${subtema}/B-001 PLANO DE CUADRO DE CONSTR. REV.C - ${subtema} ${camp}.pdf" target=_blank">Ver</a>`;
                    break;
                case "BTX":
                    ruta_mapa = ` <a href="mapas/FDA/SUP/B-001 PLANO DE CUADRO DE CONSTR. REV.C - FDA_SUP_${subtema}.pdf" target=_blank">Ver</a>`;
                    break;
                case "Hidrocarburos":
                    ruta_mapa = ` <a href="mapas/FDA/P1/B-001 PLANO DE CUADRO DE CONSTR. REV.C - FDA_P1_${subtema}.pdf" target=_blank">Ver</a>`;
                    break;
                case "SUELO":
                    ruta_mapa = ` <a href="mapas/${tema}/${subtema}/B-001 PLANO DE CUADRO DE CONSTR. REV.C - ${subtema}_${prof}.pdf" target=_blank">Ver</a>`;
                    break;
            }
        }

        //let url_mapa = `<a href="mapas/${ruta_mapa}/B-001 PLANO DE CUADRO DE CONSTR. REV.C - ${ruta_mapa} ${camp}.pdf" target=_blank">Ver</a>`;
        return ruta_mapa;

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

            if (i.tema != "") {

                this.obj = {
                    label: i.label + this.getUrlmapa(i.tema, i.subtema, i.campaña, i.prof, i.tipo),
                    layer: i.layer
                }
            } else {
                this.obj = {
                    label: i.label,
                    layer: i.layer
                }
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
                        label: 'Febrero',
                        collapsed: true,
                        children: [
                            this.getLayer("México Ciudades"),
                            this.simbologia.getMexCdSymb()

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
            collapseAll: 'Colapsar todos',
            expandAll: 'Expandir todos',
            namedToggle: true,
            collapsed: false
        }).addTo(map);

        document.getElementsByClassName('leaflet-control-layers')[0].style.display = 'none';

        return layer_control;
    }

    load_capas(map) {
        this.getCapasBase();
        this.getCapasJson();

        this.getBaseLayer("Open Street Maps").layer.addTo(map);
        this.getLayer("Estados Unidos").layer.addTo(map);
    }



}