import Capas from "./capas.js";
import Estilos from "./estilos.js";
import Popup from "./popup.js"

export default class Layers{
    constructor(){
        this.eua = L.layerGroup();
        this.mx_edos = L.layerGroup();
        this.capas = new Capas();
        this.estilos = new Estilos();
        this.popup = new Popup();
    }

    setLayers(){

        let usa = new Capas();
        let mx = new Capas();

        this.capas.ingresar(
            usa.crearObjeto(this.eua,"USA","us-states_es6",this.estilos.estilo_eua(),this.popup.pop())
        );

        this.capas.ingresar(
            mx.crearObjeto(this.mx_edos,"MX","México_Estados",this.estilos.estilo_mx(),this.popup.pop())
        );

    }

    getLayers(){
        return this.capas.consultar();
    }

}