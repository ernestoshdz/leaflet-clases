//clase - 2 de Diciembre 2023
//variable mapa
const map = L.map('map').setView([21.780180555185304, -102.3572947221724], 9);
let lyr_mini = L.layerGroup();

//variable capa base
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const osm_minimapa = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(lyr_mini);

/*const esri_minimapa = new L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  maxZoom: 18
});*/

//Capa de Estados Unidos
const capa_eua = L.geoJson(statesData,{
	//style: estilo_eua,
	//onEachFeature: popup
});

capa_eua.addTo(lyr_mini);

const miniMapa = new L.Control.MiniMap(lyr_mini,{
	autoToggleDisplay: false,
 	position: 'bottomleft',
 	centerFixed: [22.780180555185304, -103.3572947221724],//centro del minimapa
 	zoomLevelFixed: 3,
 	width: 200,	// ancho
 	height: 200, // alto
 	minimized: false,
 	strings: {hideText: 'Ocultar mapa', showText: 'Mostrar mapa'},
 	aimingRectOptions: {color: '#ff0000', weight: 1, clickable: false, fillOpacity: 0},
	shadowRectOptions: {color: '#000000', weight: 1, clickable: false, opacity: 0, fillOpacity: 0},
}).addTo(map);

