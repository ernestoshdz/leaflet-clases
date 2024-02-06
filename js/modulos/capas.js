export default class Capas{
    constructor(){
        this.listaCapas = [];
    }

    ingresar(capa){
        this.listaCapas.push(capa);
    }

    consultar(){
        return this.listaCapas;
    }

}