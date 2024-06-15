//variable mapa
const map = L.map('map',{
    zoomControl: false
}).setView([21.780180555185304, -102.3572947221724], 9);

//variable capa base
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var sidebar = L.control.sidebar('sidebar', {
    position: 'left'
});

map.addControl(sidebar);

//sidebar.setContent(test);

sidebar.show();