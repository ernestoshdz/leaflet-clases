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



    crearControlLayers(){
        let layer_control = L.control.layers.tree(this.consultarCapasBase(), this.consultarCapasJson(), {
            namedbtn_draw: true,
            closedSymbol: '+',
            openedSymbol: '-',
            collapseAll: 'Colapsar todos',
            expandAll: 'Expandir todos',
            namedToggle: true,
            collapsed: false,
        
        });
        
        return layer_control;
    }

}