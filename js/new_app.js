import Lista from "./new_modulos/lista.js"
import Capas from "./new_modulos/capas.js";
import Peticiones from "./new_modulos/peticiones.js";

export default class App{
    constructor(){
        //Inicializar propiedades
        this.lista = new Lista();
        this.capas = new Capas();
        this.peticiones = new Peticiones();
    }

    load(){
        console.log('La aplicación ha sido inicializada');

        const map = L.map('map').setView([38.548165, -98.833008], 4);

        //crear variables base y json
        let capas_base = this.lista.getCapas().filter((i) => i.folder == "base");
        let capas_json = this.lista.getCapas().filter((i) => i.folder != "base");

        capas_base.forEach(i => {

            this.capas.agregarCapasBase(i.name,i.layer);

            if(i.file == 'osm'){
                i.layer.addTo(map);
            }
        });

        capas_json.forEach(capa => {

            this.capas.agregarCapasJson(capa.name,capa.layer);

            this.peticiones.setCapas(capa.layer,capa.folder,capa.file,null,null,capa.ext);

        });

        this.capas.crearControlLayers().addTo(map)
        
    }
}