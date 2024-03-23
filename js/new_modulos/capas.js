export default class Capas{
    constructor(){
        this.capasBase = [];
        this.capasJson = [];
    }

    agregarCapasBase(name, layer){

        this.obj = {
            label: name,
            layer: layer
        }

        this.capasBase.push(this.obj);

    }

    agregarCapasJson(name, layer){

        this.obj = {
            label: name,
            layer: layer
        }

        this.capasJson.push(this.obj);

    }

    consultarCapasBase(){
        return this.capasBase;
    }

    consultarCapasJson(){
        return this.capasJson;
    }

}