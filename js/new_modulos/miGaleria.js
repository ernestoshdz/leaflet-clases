import Imagenes from "./imagenes.js";
import Modal from "./modal.js";

export default class miGaleria {
    constructor() {
        this.imagenes = new Imagenes();
        this.modal = new Modal();
    }

    crearGaleria(cve_plaga,modalActivo) {

        let filtro_array_img = this.imagenes.array_img.filter((i) => i.cve == cve_plaga);

        let galeria = `<div id="galeria" class="container-fluid">
        
            <div class="jumbotron">
                <h3>${filtro_array_img[0].plaga}</h3>
            </div>`;
            
            filtro_array_img.forEach((i) => {

            galeria += `<div class="row gallery">`

                i.images.forEach((i) => {

                    galeria += `
                        <div class="col-sm-6 col-md-5 col-lg-6">
                            <a href="img/Plagas/${i.folder}/${i.name_img}.${i.ext}" target="_blank">
                                <img class="img-fluid" src="img/Plagas/${i.folder}/${i.name_img}.${i.ext}" alt="${i.name_img}">
                            </a>
                        </div>`;
                });

            galeria += `<p>${filtro_array_img[0].descripcion}</p></div></div>`;

        });

        document.getElementById("miGaleria").innerHTML = galeria;

        if(modalActivo == true){
            this.modal.crearModal(map, {
                titulo: "",
                contenido: galeria,
                width: 600,
                height:400,
                position: "top",
                modal: true,
            });
        }
        
        baguetteBox.run(".gallery", {
            animation: "slideIn",
            //noScrollbars:true,
            //fullScreen: true,
            buttons: true,
            captions: function(element) {
                return element.getElementsByTagName('img')[0].alt;
            }
        });

        return galeria;
        
    }
}