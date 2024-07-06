//import Sidebar from "./sidebar.js";

export default class Popups {
    constructor() {
        //this.sidebar = new Sidebar();
    }

    popGenerico(feature, layer) {

        if (feature.properties) {

            layer.on('click', function (e) {

                document.getElementById("sidebarTitle").innerHTML = `
                <h1>
                    EUA
                </h1>
                `;

                document.getElementById("sidebarContenido").innerHTML = `
                <p>
                Descripción de Estados Unidos                
                </p>
                `;

                const data = [
                    { year: 2010, count: 10 },
                    { year: 2011, count: 20 },
                    { year: 2012, count: 15 },
                    { year: 2013, count: 25 },
                    { year: 2014, count: 22 },
                    { year: 2015, count: 30 },
                    { year: 2016, count: 28 },
                ];

                new Chart(
                    document.getElementById('sidebarGraficos'),
                    {
                        type: 'bar',
                        data: {
                            labels: data.map(row => row.year),
                            datasets: [
                                {
                                    label: 'Acquisitions by year',
                                    data: data.map(row => row.count)
                                }
                            ]
                        }
                    }
                );

            });

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

                document.getElementById("sidebarTitle").innerHTML = `
                <h1>
                    Ciudades de México
                </h1>
                `;

                document.getElementById("sidebarContenido").innerHTML = `
                <p>
                    Descripción de Ciudades de México
                </p>
                `;

                var barColors = ["red", "green", "blue", "orange", "brown"];

                const data = [
                    { pais: "Italy", cantidad: 55 },
                    { pais: "France", cantidad: 49 },
                    { pais: "Spain", cantidad: 55 },
                    { pais: "USA", cantidad: 49 },
                    { pais: "Argentina", cantidad: 55 },
                ]

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
                            }
                        }
                    }
                );

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
