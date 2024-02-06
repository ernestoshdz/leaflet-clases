export default class Capas{
    constructor(){
        this.listaCapas = [];
        this.obj = {};
    }

    ingresar(capa){
        this.listaCapas.push(capa);
    }

    consultar(){
        return this.listaCapas;
    }

    crearObjeto(lyr,carpeta,nombre,est,pop){
        this.obj = {
            layer: lyr,
            folder: carpeta,
            nombre_archivo: nombre,
            estilo: est,
            pop: pop
        }

        return this.obj
    }

}