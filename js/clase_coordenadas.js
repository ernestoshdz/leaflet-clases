//clase - 2 de Diciembre 2023
//variable mapa
const map = L.map('map').setView([21.780180555185304, -102.3572947221724], 9);

//variable capa base
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.control.mouseCoordinate({
	gps: true,
	gpsLong: true,
	utm: true,
	utmref: false,
	position: 'bottomright'
}).addTo(map);