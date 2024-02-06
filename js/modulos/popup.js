export default class Popup{
    constructor(){

    }

    popGenerico(feature, layer){

        if (feature.properties) {

            let popupContent = '';
                
                for (let p in feature.properties) {

                    popupContent += `<tr><td><b>${p}: </b></td><td>${feature.properties[p]}</td></tr><br>`;

                }
    
            layer.bindPopup(popupContent);
        }
    }

    euaPopup(feature, layer){
        if (feature.properties) {

            let popupContent =
            `<table class="table table-striped table-hover">
                <tr><td><b>Estado:</b></td><td>${feature.properties.name}</td></tr>
                <tr><td><b>Densidad:</b></td><td>${feature.properties.density}</td></tr>
            </table>`;
                
            layer.bindPopup(popupContent);
        }
    }

}