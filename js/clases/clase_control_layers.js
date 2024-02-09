//variable mapa
const map = L.map('map').setView([21.780180555185304, -102.3572947221724], 9);

//variable capa base osm
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//capa base esri
const esri_satelite = new L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  maxZoom: 18
});

//Clase Clusters

	let l_clusters = L.markerClusterGroup();

	const capa_puntos = L.geoJson(ags_data,{

	}).addTo(l_clusters);

	l_clusters.addTo(map);

///////////////////////////////////////////////////

//Capa de Estados Unidos
const capa_eua = L.geoJson(statesData,{
	//style: estilo_eua,
	//onEachFeature: popup
});

const capas_base = [
	{
		label: 'Mapas Base',
		children: [
			{label: 'OSM', layer: osm},
			{label: 'Esri Wordl Map', layer: esri_satelite}
		]
	}
];

const capas_json = [
	{
		label: 'Capas',
		children: [
			{label: 'Puntos', layer: l_clusters},
			{label: 'Estados Unidos', layer: capa_eua},
		]
	}
];

var layer_control = L.control.layers.tree(capas_base, capas_json, {
	namedbtn_draw: true,
	closedSymbol: '+',
	openedSymbol: '-',
	collapseAll: 'Colapsar todos',
	expandAll: 'Expandir todos',
	namedToggle: true,
	collapsed: false,

});

layer_control.addTo(map);