export default class Popups {
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

}
