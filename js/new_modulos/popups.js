export default class Popups {
    constructor(){
        this.map;
    }

    popGenerico(feature, layer){

        if (feature.properties) {

            layer.on('click', function(e){

                document.getElementById("sidebarTitle").innerHTML = `
                <h1>
                    EUA
                </h1>
                `;
                
            });

            let popupContent = '<table class="table table-striped table-hover">';
                
                for (let p in feature.properties) {

                    popupContent += `<tr><td><b>${p}: </b></td><td>${feature.properties[p]}</td></tr>`;
                }

                popupContent += '</table>';
    
            layer.bindPopup(popupContent);
        }
    }

    mxEdosPop(feature, layer){

        if (feature.properties) {

            layer.on('click', function(e){
                
                //document.getElementById('sidebar').style.visibility = 'hidden';
                document.getElementById("sidebarTitle").innerHTML = `
                <h1>
                    Ciudades de México
                </h1>
                `;

                document.getElementById("sidebarContenido").innerHTML = `
                <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consec
                </p>
                `;

                document.getElementById('myChart').style.visibility = 'visible';

                //document.getElementById('sidebar').style.visibility = 'hidden';
                
            });

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
