//Clase de 16 de Diciembre

//variable mapa
const map = L.map('map', {
	contextmenu: true,
	contextmenuWidth: 160,
	attributionControl: false
}).setView([38.548165, -98.833008], 4);

//variable capa osm
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//capa base esri
const esri_satelite = new L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
	maxZoom: 18
});

//funcion estilo eua
function estilo_eua(feature) {
	return {
		weight: 2,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.3,
		//clickable: false,
		fillColor: getColorEua(feature.properties.density)
	};
}

//funcion estilo eua por estados
function estilo_euaEdos(feature) {
	return {
		weight: 2,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.3,
		//clickable: false,
		fillColor: getColorEuaEdos(feature.properties.name)
	};
}

function getColorEua(d) {
	return d >= 100 ? '#381608' :
    d >= 80 ? '#d63c41' :
	d >= 60 ? '#a35f07' :
	d >= 40 ? '#fec981' :
	'#00FF00';
}

function getColorEuaEdos(d) {
	return d == "Utah" ? '#ff0000' :
	//Valor por default
	'#00FF00';
}

// funcion popup
function popup(feature, layer) {
	if (feature.properties) {

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

function st_pts_ags(feature, latlng) {

	let icon = "";

	//console.log(feature.properties)

	switch (feature.properties.CVE_MUN) {
		case "010":
			icon = "red_marker.svg";
			break;

		case "011":
			icon = "green-marker-md.png";
			break;

		default:
			icon = "city-life.png";
	}
	let smallIcon = new L.Icon({
		iconSize: [32, 32],
		iconAnchor: [16, 16],
		popupAnchor: [0.65, -24],
		iconUrl: 'img/' + icon
	});
	return L.marker(latlng, { icon: smallIcon });

}

function st_EuxEdo (feature) {

}

let simbologia_elementos_A = [
	{
		name: 'Plaga A',
		color: '#FF0000',
		img: '█'
	},
	{
		name: 'Plaga B',
		color: '#FF00FF',
		img: '█'
	},
	{
		name: 'Plaga C',
		color: '#0000FF',
		img: '█'
	},
];

let simbologia_elementos_B = [
	{
		name: 'Plaga A',
		color: '#FFF000',
		img: '<img src="img/red_marker.svg" width="16" height="16">'
		
	},
	{
		name: 'Plaga B',
		color: '#00FF0',
		img: '<img src="img/green-marker-md.png" width="16" height="16">'
		
	}
];

function setSimbologia(elementos, label) {
	let symb = `<b>&nbsp${label}:</b><br>`;

	elementos.forEach(e => {
		symb += `&nbsp&nbsp&nbsp<font color= ${e.color} > ${e.img} </font> ${e.name}<br>`;
	});

	return { label: symb };
}

let l_clusters = L.markerClusterGroup();
let l_mex_cds = L.markerClusterGroup();

//Capa de Estados Unidos
const capa_eua = L.geoJson(statesData, {
	style: estilo_euaEdos,
	onEachFeature: popup
}).addTo(map);

const capa_puntos = L.geoJson(ags_data, {
	onEachFeature: popup,
	pointToLayer: st_pts_ags
}).addTo(l_clusters);

const capa_mex_cds = L.geoJson(mex_cds_data, {
	onEachFeature: popup,
	//pointToLayer: st_pts_ags
}).addTo(l_mex_cds);

l_clusters.addTo(map);
l_mex_cds.addTo(map);

const capas_base = [
	{
		label: 'Mapas Base',
		children: [
			{ label: 'OSM', layer: osm },
			{ label: 'Esri Wordl Map', layer: esri_satelite }
		]
	}
];

const capas_json = [
	{
		label: 'Capas',
		children: [
			{ label: 'Estados Unidos', layer: capa_eua },
			{ 
				label: "<b>Simbología Extendida</b>",
				collapsed: true,
				children: [
					setSimbologia(simbologia_elementos_A,"Nombre Plagas"),
				]
			},
			
			{ label: 'Ciudades de México', layer: l_mex_cds },
			setSimbologia(simbologia_elementos_B,"Especies"),
			{ label: 'Puntos', layer: l_clusters },
		]
	}
];

var layer_control = L.control.layers.tree(capas_base, capas_json, {
	namedbtn_draw: true,
	closedSymbol: '<img src="images/plus.png" width="16" height="16"> <img src="img/folder-svgrepo-com.svg" width="16" height="16">',
   openedSymbol: '<img src="images/minus.png" width="16" height="16"> <img src="img/open-file-folder-svgrepo-com.svg" width="16" height="16">',
	collapseAll: 'Colapsar todos',
	expandAll: 'Expandir todos',
	namedToggle: true,
	collapsed: false,

});

layer_control.addTo(map);