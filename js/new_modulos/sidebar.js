export default class Sidebar {
    constructor(){
        this.sidebar = L.control.sidebar('sidebar', {
            position: 'left',
            closeButton: false

        });
    }

    crearSideBar() {
        return this.sidebar;
    }
}