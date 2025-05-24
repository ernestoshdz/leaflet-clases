export default class Funciones {
    constructor(){

    }

    crearGrafico(div, tipo, etiquetas, valores, descripcion) {

        let barColors = ["red", "green", "blue", "orange", "brown"];
    
        let chartData = {
            type: tipo,
            data: {
                labels: etiquetas,
                datasets: [
                    {
                        backgroundColor: barColors,
                        label: 'Acquisitions by year',
                        data: valores,
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: descripcion
                }
            }
        }
    
        //sirve para actualizar el gráfico y evitar sobreponer gráficos
        if (typeof graph === "undefined") {
            window.graph = new Chart(document.getElementById(div), chartData);
        } else {
            window.graph.config = chartData;
            window.graph.update();
        }
    }
}

