//import Sidebar from "./sidebar.js";

export default class Popups {
    constructor() {
        //esto resuelve el problema del this, funcion anonima layer.on('click', function (e) { no deja usar this.myFunction
        this.popGenerico = this.popGenerico.bind(this);
        this.mxEdosPop = this.mxEdosPop.bind(this);

        this.newArray = [];
        this.namesArray = [];
        this.arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x_1", "y_1", "z", "aa", "ab", "ac", "ad", "ae", "af", "ag", "ah", "ai", "aj", "ak", "al", "am", "an", "ao", "ap", "aq", "ar", "as_", "at", "au", "av", "aw", "ax", "ay", "az", "ba", "bc", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bk", "bl", "bm", "bn", "bo", "bp", "bq", "br", "bs", "bt", "bu", "bw", "bx", "by_", "bz", "ca", "cb", "cc", "cd", "ce", "cf", "cg", "ch", "ci", "cj", "ck", "cl", "cm", "cn", "co", "cp", "cq", "cr", "cs", "ct", "cu", "cv", "cw", "cx", "cy", "cz", "da", "db", "dc", "dd", "de", "df", "dg", "dh", "di", "dj", "dk", "dl", "dm", "dn", "do", "dp", "dq", "dr", "ds", "dt", "du", "dw", "dx", "dy", "dz", "ea", "ec", "ed", "ee", "ef", "eg", "eh", "ei", "ej", "ek", "el", "em", "en", "eo", "ep", "eq", "Total_gene"];
    }

    filtrarArray(feature,newArray,namesArray){
        this.arr.map(row => {
                    
            if(feature.properties[row] > 0){
                //console.log(`${row}: ${feature.properties[row]}`)
                newArray.push(feature.properties[row])
                namesArray.push(row)
            }
        })

        this.crearGrafico('doughnut',newArray,namesArray);
    }

    crearGrafico(tipo,newArray,namesArray){
        new Chart(
            document.getElementById('sidebarGraficos'),
            {
                type: tipo,
                data: {
                    labels: namesArray,
                    datasets: [
                        {
                            label: 'Acquisitions by year',
                            data: newArray,
                        }
                    ]
                },
                options: {
                    //animation: false
                }
            }
        );
    }

    actualizarDivs(titulo,contenido,ruta_img){

        document.getElementById("sidebarTitle").innerHTML = titulo;

        document.getElementById("sidebarContenido").innerHTML = `<p>${contenido}</p>`;

        document.getElementById("sidebarImagen").innerHTML = `<img src="img/${ruta_img}.jpg" width="200" height="150">`;
    }

    popGenerico(feature, layer) {

        if (feature.properties) {
            
            layer.on('click', function (e) {

                this.actualizarDivs("Detecciones por OISA","Descripción",`Oisa/${feature.properties.No_}`)
                this.filtrarArray(feature,this.newArray,this.namesArray);

            }.bind(this));//se necesita para resolver el problema del this, funcion anonima layer.on('click', function (e) { no deja usar this.myFunction

            let popupContent = '<table class="table table-striped table-hover">';

            for (let p in feature.properties) {

                popupContent += `<tr><td><b>${p}: </b></td><td>${feature.properties[p]}</td></tr>`;
            }

            popupContent += '</table>';

            layer.bindPopup(popupContent);
        }
    }

    mxEdosPop(feature, layer) {

        if (feature.properties) {

            layer.on('click', function (e) {

                this.actualizarDivs("Ciudades de México",`Ciudad: ${feature.properties.CIUDAD}, ${feature.properties.ESTADO}`,`Ciudades/${feature.properties.CIUDAD}`);

                let barColors = ["red", "green", "blue", "orange", "brown"];

                const data = [
                    { pais: "Italy", cantidad: 55 },
                    { pais: "France", cantidad: 49 },
                    { pais: "Spain", cantidad: 55 },
                    { pais: "USA", cantidad: 49 },
                    { pais: "Argentina", cantidad: 55 },
                ];

                new Chart(document.getElementById('sidebarGraficos'),
                    {
                        type: "bar",
                        data: {
                            labels: data.map(row => row.pais),
                            datasets: [{
                                backgroundColor: barColors,
                                data: data.map(row => row.cantidad)
                            }]
                        },
                        options: {
                            legend: { display: false },
                            title: {
                                display: true,
                                text: "World Wine Production 2018"
                            },
                            //animation: false
                        }
                    }
                );

            }.bind(this));

            let popupContent =
                `<table class="table table-striped table-hover">
                <tr><td><b>Ciudad:</b></td><td><i>${feature.properties.CIUDAD}</i>, ${feature.properties.ESTADO}</td></tr>
                <tr><td><b>Capital:</b></td><td>${feature.properties.CAPITAL}</td></tr>
                <tr><td><b>Estado:</b></td><td>${feature.properties.ESTADO}</td></tr>
            </table>`;

            {/* <tr><td><b>Imagen:</b></td><td><img src="img/Ciudades/${feature.properties.CIUDAD}.jpg" width="200" height="150"></td></tr> */}

            layer.bindPopup(popupContent);
        }
    }

    euaPop(feature,layer){
        
    }

}
