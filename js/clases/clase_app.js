//variable mapa
const map = L.map('map').setView([38.548165, -98.833008], 5);

//variable capa base
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//funcion estilo eua
function estilo_eua(feature) {
	return {
	  weight: 3,
	  opacity: 1,
	  color: 'black',
	  dashArray: '1',
	  fillOpacity: 0.3,
	  //clickable: false
	  fillColor: '#FFF799'
	};
}

// funcion popup
function popup(feature, layer) {
	if(feature.properties) {
		//let popupContent = '';
		let popupContent = '<b>Estado:</b> ' + feature.properties.name + '<br>' + '<b>Densidad: </b>' + feature.properties.density;

		/*
		for (let p in feature.properties) {
			popupContent += '<tr><td><b>' + p + ': </b></td><td>'+ feature.properties[p] + '</td></tr><br>';
		}*/

		layer.bindPopup(popupContent);
	}
}

//Capa de Estados Unidos
const capa_eua = L.geoJson(statesData,{
	style: estilo_eua,
	onEachFeature: popup
}).addTo(map);

const capa_pol = L.geoJson(pol_data,{

}).addTo(map);