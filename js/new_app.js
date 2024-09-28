/* Clases modulares modernas, ./new_modulos */

import Capas from "./new_modulos/capas.js";
import Controles from "./new_modulos/controles.js";
import Sidebar from "./new_modulos/sidebar.js"; 

export default class App {
    constructor() {
        this.capas = new Capas();
        this.controles = new Controles();
        this.sidebar = new Sidebar();
    }

    load() {
        console.log('La aplicación ha sido inicializada');
        
        const map = L.map('map',{
            zoomControl: false,
            attributionControl: false
        }).setView([22.548165, -106.833008], 5);

        this.capas.load_capas(map);
        this.controles.loadControles(map)
        this.capas.crearControl(map);

        this.sidebar.crearSideBar(map);

        this.getEstados('MX/',"México_Estados",".geojson")

        //this.controles.crearModal(map);

    }

    getEstados = async (folder, nombre_archivo, ext, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        data.features.forEach((i)=>{
            //llenar selects de estados, no estan ordenados alfábeticamente
            document.getElementById('mx_edos').add(new Option(i.properties.ESTADO,i.properties.CODIGO))
        });

    }
}