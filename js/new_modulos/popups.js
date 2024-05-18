export default class Popups {
    constructor(){

    }

    popGenerico(feature, layer){

        if (feature.properties) {

            let popupContent = '<table class="table table-striped table-hover">';
                
                for (let p in feature.properties) {

                    popupContent += `<tr><td><b>${p}: </b></td><td>${feature.properties[p]}</td></tr>`;
                }

                popupContent += '</table>';
    
            layer.bindPopup(popupContent);
        }
    }

    crearModal(){
        let win =  L.control.window(map,{
            title:'Hello world!',
            maxWidth:400,
            maxheight: 100,
            modal: true,
            content: "contenido",
            position: "top",
            //visible: false
        });

        win.show()
    }

    mxEdosPop(feature, layer){

        

        if (feature.properties) {

            let popupContent =
            `<table class="table table-striped table-hover">
                <tr><td><b>Ciudad:</b></td><td>${feature.properties.CIUDAD}</td></tr>
                <tr><td><b>Capital:</b></td><td>${feature.properties.CAPITAL}</td></tr>
                <tr><td><b>Estado:</b></td><td>${feature.properties.ESTADO}</td></tr>
                <tr><td><b>Imagen:</b></td><td><img src="img/Ciudades/${feature.properties.CIUDAD}.jpg" width="200" height="150"></td></tr>
            </table>`;
                
            layer.bindPopup(popupContent);
        }
    }

}
