import Layers from "./layers.js";
import Estilos from "./estilos.js";

export default class Capas{
    constructor(){

        this.layers = new Layers();
        this.estilos = new Estilos();

        //Array de objetos
        this.capas = [
            {
                layer: this.layers.eua,
                folder: 'USA',
                nombre_archivo: 'us-states_es6',
                //estilo: this.estilos.estilo_eua(),
                //pop: euaPopup
            },
            {
                layer: this.layers.mx_edos,
                folder: 'MX',
                nombre_archivo: 'México_Estados',
                //estilo: this.estilos.estilo_mx(),
                //pop: popup
            }
        ];
    }
}