import Diccionario from "./diccionario.js";
import Modal from "./modal.js";
import miGaleria from "./miGaleria.js";

export default class Popups {
    constructor() {
        //esto resuelve el problema del this, funcion anonima layer.on('click', function (e) { no deja usar this.myFunction

        this.popGenerico = this.popGenerico.bind(this);
        this.mxEdosPop = this.mxEdosPop.bind(this);
        this.oisaPop = this.oisaPop.bind(this);
        this.cultivosPop = this.cultivosPop.bind(this);
        this.poligonosCultivosPlagasPop = this.poligonosCultivosPlagasPop.bind(this);

        this.newArray = [];
        this.namesArray = [];

        this.barColors = ["red", "green", "blue", "orange", "brown"];

        //Diccionario de datos para Estados Cultivos, plagas, etc
        this.diccionario = new Diccionario();
        this.modal = new Modal();
        this.miGaleria = new miGaleria();
    }

    //mover funciones que no sean popups a otras clases

    filtrarArray(feature, newArray, namesArray) {

        //limpiar arrays antes de llenarlos
        newArray = [];
        namesArray = [];

        this.diccionario.misValoresOISA.map(row => {

            //para evitar graficar el total generado
            if (feature.properties[row.cve] > 0 && row.cve != "Total_gene") {
                newArray.push(feature.properties[row.cve])
                namesArray.push(row.name)
            }
        });

        this.crearGrafico('doughnut', newArray, namesArray);
    }

    crearGrafico(tipo, newArray, namesArray) {

        let chartData = {
            type: tipo,
            data: {
                labels: namesArray,
                datasets: [
                    {
                        backgroundColor: this.barColors,
                        label: 'Acquisitions by year',
                        data: newArray,
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Positivos'
                }
            }
        }

        //sirve para actualizar el gráfico y evitar sobreponer gráficos
        if (typeof graph === "undefined") {
            window.graph = new Chart(document.getElementById('sidebarGraficos'), chartData);
        } else {
            window.graph.config = chartData;
            window.graph.update();
        }
    }

    actualizarDivs(titulo, contenido, ruta_img) {

        document.getElementById("sidebarTitle").innerHTML = titulo;

        document.getElementById("sidebarContenido").innerHTML = `<p>${contenido}</p>`;

        //document.getElementById("sidebarImagen").innerHTML = `<img src="img/${ruta_img}.jpg" width="200" height="150">`;
    }

    popGenerico(feature, layer) {

        if (feature.properties) {

            layer.on('click', function (e) {

                //this.sidebar.close()

                this.actualizarDivs("Detecciones por OISA", "Descripción", `Oisa/${feature.properties.No_}`)
                this.filtrarArray(feature, this.newArray, this.namesArray);

            }.bind(this));//se necesita para resolver el problema del this, funcion anonima layer.on('click', function (e) { no deja usar this.myFunction

            let popupContent = '<table id="myTable" class="table table-striped table-hover">';

            for (let p in feature.properties) {

                popupContent += `<tr><td><b>${p}: </b></td><td>${feature.properties[p]}</td></tr>`;
            }

            popupContent += '</table>';

            layer.bindPopup(popupContent);
        }
    }

    mxEdosPop(feature, layer) {

        if (feature.properties) {

            //console.log(feature.properties)

            layer.on('click', function (e) {

                this.actualizarDivs("Ciudades de México", `Ciudad: ${feature.properties.CIUDAD}, ${feature.properties.ESTADO}`, `Ciudades/${feature.properties.CIUDAD}`);

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
                `<table id="myTable" class="table table-striped table-hover">
                <tr><td><b>Ciudad:</b></td><td><i>${feature.properties.CIUDAD}</i>, ${feature.properties.ESTADO}</td></tr>
                <tr><td><b>Capital:</b></td><td>${feature.properties.CAPITAL}</td></tr>
                <tr><td><b>Estado:</b></td><td>${feature.properties.ESTADO}</td></tr>
            </table>`;

            {/* <tr><td><b>Imagen:</b></td><td><img src="img/Ciudades/${feature.properties.CIUDAD}.jpg" width="200" height="150"></td></tr> */ }

            layer.bindPopup(popupContent);
        }
    }

    cultivosPop(feature, layer) {

        let popupContent =
            `<table id="myTable" class="table table-striped table-hover">
                <tr><td><b>ID:</b></td><td>${feature.properties.GID}</td></tr>
                <tr><td><b>Cultivo:</b></td><td>${feature.properties.Cultivo}</td></tr>
                <tr><td><b>Nombre Científico:</b></td><td><i>
                    ${feature.properties.Cientifico}
                    ${feature.properties.Cient1}
                    ${feature.properties.Cient2}
                    ${feature.properties.Otros}
                    ${feature.properties.Otros1}
                    ${feature.properties.Otros2}
                    ${feature.properties.Otros3}
                </i></td></tr>
                <tr><td><b>Clave Plaga:</b></td><td>${feature.properties.cve_plaga}</td></tr>
                <tr><td><b>Plaga:</b></td><td><i>
                    ${feature.properties.Plaga} 
                    ${feature.properties.Plaga1} 
                    ${feature.properties.Plaga2}
                    ${feature.properties.Plaga3}
                </i></td></tr>
                <tr><td><b>Imagen:</b></td><td><button type="button" id="btn_verImg">Ver Plaga</button></td></tr>
                <tr><td><b>Estado:</b></td><td>${feature.properties.Estado}, ${feature.properties.NOMGEO}</td></tr>
                <tr><td><b>Cita:</b></td><td>${feature.properties.Cita} ${feature.properties.Cita1} ${feature.properties.Cita2}</td></tr>
                <tr><td><b>Latitud:</b></td><td>${feature.properties.Latitud}</td></tr>
                <tr><td><b>Longitud:</b></td><td>${feature.properties.Longitud}</td></tr>
            </table>`;

        layer.bindPopup(popupContent);

        layer.on('click', function (e) {
            let btn_verImg = document.getElementById('btn_verImg');

            btn_verImg.onclick = function () {

                this.miGaleria.crearGaleria(feature.properties.cve_plaga,true); 

            }.bind(this);
        }.bind(this));
    }

    oisaPop(feature, layer) {

        if (feature.properties) {

            layer.on('click', function (e) {

                this.actualizarDivs("Detecciones por OISA", "Descripción", `Oisa/${feature.properties.No_}`)
                this.filtrarArray(feature, this.newArray, this.namesArray);

            }.bind(this));

            let arry = [];

            this.diccionario.misValoresOISA.map(row => {

                if (feature.properties[row.cve] > 0) {

                    arry.push(this.obj = {
                        columna: row.name,
                        valor: feature.properties[row.cve],

                    });

                }
            });

            let popupContent = `
            <table id="myTable" class="table table-striped table-hover">
                <tr><td><b>Número:</b></td><td>${feature.properties.No_}</td></tr>
                <tr><td><b>Oisa:</b></td><td>${feature.properties.OISA}</td></tr>
                <tr><td><b>Tipo:</b></td><td>${feature.properties.TIPO_DE_}</td></tr>`;

            arry.forEach(i => {

                popupContent += `<tr><td><b>${i.columna}:</b></td><td>${i.valor}</td></tr>`;

            });

            popupContent += '</table>';

            layer.bindPopup(popupContent);
        }
    }

    poligonosCultivosPlagasPop(feature, layer) {
        if (feature.properties) {

            let array_cultivos = feature.properties.cve_cultiv.split(",");
            let array_plagas = feature.properties.cve_plaga.split(",");

            let names_cultivos = [];
            let names_plagas = [];

            //hacerlo como array_plagas
            array_cultivos.forEach((i) => {

                this.diccionario.misValoresCultivos.forEach((j) => {

                    if (i == j.cve_cultiv) {

                        let obj = {
                            cve_cultivo: j.cve_cultiv,
                            name: j.name,
                            cientifico: j.cientifico
                        }

                        names_cultivos.push(obj);
                    }
                });
            });

            array_plagas.forEach((i) => {

                this.diccionario.misValoresPlagas.forEach((j) => {

                    if (i == j.cve_plaga) {

                        let obj = {
                            cve_plaga: j.cve_plaga,
                            name: j.name,
                            autor: j.autor
                        }

                        names_plagas.push(obj);
                    }
                });
            });

            //quitar nombres test
            let test = '';
            let test2 = '';

            names_plagas.forEach((i) => {
                test += `<li><i>${i.name}</i> ${i.autor}</li>`;
            });

            names_cultivos.forEach((i) => {
                test2 += `<li><i>${i.name}</i> ${i.cientifico}</li>`;
            });

            //console.log(names_cultivos);
            //console.log(names_plagas);

            let gid = `<tr>
                <td>
                    <b>ID:</b>
                </td>
                <td>
                    ${feature.properties.GID} 
                </td>
            </tr>`;

            let popupContent = `<table id="myTableXL" class="table table-striped table-hover">
                ${feature.properties.GID != undefined ? gid : ""}
                <tr>
                    <td>
                        <b>Estado:</b>
                    </td>
                    <td>
                        ${feature.properties.Estado}, ${feature.properties.NOMGEO} 
                    </td>
                </tr>
                <tr>     
                    <td>
                        <b>Plagas:</b>
                    </td>
                    <td>
                        <ul>${test}</ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Cultivos:</b>
                    </td>
                    <td><ul>${test2}</ul>
                    </td>
                </tr>
            </table>`;

            layer.bindPopup(popupContent);
        }
    }
}
