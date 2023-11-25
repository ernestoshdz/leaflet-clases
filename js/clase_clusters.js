//variable mapa
const map = L.map('map').setView([21.780180555185304, -102.3572947221724], 9);

//variable capa base
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let l_clusters = L.markerClusterGroup();

const capa_puntos = L.geoJson(ags_data,{

}).addTo(l_clusters);

l_clusters.addTo(map);