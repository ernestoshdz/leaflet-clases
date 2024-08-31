export default class Sidebar {
    constructor(){
        this.sidebar = L.control.sidebar({ container: 'sidebar' });
    }

    crearSideBar(map) {
        
        this.sidebar.addTo(map).open('layerTree');
    }

    close(){

        return this.sidebar.close();
    }
}