export default class Sidebar {
    constructor(){
        this.sidebar = L.control.sidebar({ container: 'sidebar' });
    }

    cambiarTab(tab){
        this.sidebar.open(tab);
    }

    crearSideBar(map) {
        
        //this.sidebar.addTo(map).open('layerTree');
        //this.sidebar.addTo(map).open('home');
        this.sidebar.addTo(map).open('autopan');

        /* this.sidebar.addPanel({
            id: 'js-api',
            tab: '<i class="fa fa-gear"></i>',
            title: 'Messages',
            //button: function() { alert('open') },
            //disabled: true
            pane: `<p>The Javascript API allows to dynamically create or modify the panel state.<p/>
            <p>
                <button id ="test">enable mails panel</button>
            <p/>`
        });

        this.sidebar.addPanel({
            id:   'mail',
            tab:  '<i class="fa fa-envelope"></i>',
            title: 'Messages',
            button: function() { alert('opened via JS callback') },
            disabled: true
        }); */

        //document.getElementById("test").onclick = this.sidebar.close
        
    }

    /* close(){

        this.sidebar.close();
    } */
}