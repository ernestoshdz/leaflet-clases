export default class Modal {
    constructor() {   
    }

    crearModal(map,config){
        this.modal_window = L.control.window(map, {
            title: `${config.titulo}<i class="${config.icon}" aria-hidden="true"></i>`,
            maxWidth: config.width,
            maxheight: config.height,
            modal: config.modal,
            content: config.contenido,
            position: config.position,
            closeButton: true,
            //visible: false
        }).show();
    }
}