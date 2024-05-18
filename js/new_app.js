/* Clases modulares modernas */

import Capas from "./new_modulos/capas.js";
import Controles from "./new_modulos/controles.js";

export default class App {
    constructor() {
        this.capas = new Capas();
        this.controles = new Controles();
    }

    load() {
        console.log('La aplicación ha sido inicializada');

        const map = L.map('map').setView([22.548165, -100.833008], 5);

        this.capas.load_capas(map);
        this.controles.loadControles(map)
        this.capas.crearControl(map);

    }
}