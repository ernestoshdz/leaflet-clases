//variable mapa
const map = L.map('map').setView([38.548165, -98.833008], 5);

//variable capa base
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var sidebar = L.control.sidebar('sidebar', {
    position: 'left'
});

map.addControl(sidebar);


/* function popup(feature,layer,map){
    layer.on('click', function(e){
        console.log('test')
        sidebar.toggle();
        
    });

    
} */

const popup = (feature,layer) => {
    if (feature.properties) {

        layer.on('click', function(e){
            console.log('test')
            sidebar.toggle();
        });

		// popup por propiedades especificas
		//let popupContent = '<b>Estado:</b> ' + feature.properties.name + '<br>' + '<b>Densidad: </b>' + feature.properties.density;

		//Ejemplo pop up generico
		let popupContent = '';

		for (let p in feature.properties) {
			popupContent += '<tr><td><b>' + p + ': </b></td><td>' + feature.properties[p] + '</td></tr><br>';
		}

		layer.bindPopup(popupContent);
	}
}

const capa_eua = L.geoJson(statesData, {
	//style: estilo_eua,
	onEachFeature: popup
}).addTo(map);