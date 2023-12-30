//Clase de 16 de Diciembre

//variable mapa
const map = L.map('map',{
    contextmenu: true,
	contextmenuWidth: 160,
	attributionControl: false,
	contextmenuItems: [{
        text: 'Show coordinates',
        //callback: hello
        }, '-', 
        {
            text: '<img clas="icon" src="img/folder.svg" width="12" height="12">  Mostrar Google Maps',
            callback: getCoords
        },{
            text: '<img clas="icon" src="img/red_marker.svg" width="12" height="12">  Mostrar Coordenadas',
            callback: mostrarCoords
        }
    ]
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

let lyr_mini = L.layerGroup();

const osm_minimapa = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(lyr_mini);

//funcion estilo eua
function estilo_eua(feature) {
	return {
	  weight: 2,
	  opacity: 1,
	  color: 'black',
	  dashArray: '1',
	  fillOpacity: 0.3,
	  //clickable: false,
	  fillColor: '#FFF799'
	};
}

// funcion popup
function popup(feature, layer) {
	if(feature.properties) {
		
        // popup por propiedades especificas
		//let popupContent = '<b>Estado:</b> ' + feature.properties.name + '<br>' + '<b>Densidad: </b>' + feature.properties.density;

		//Ejemplo pop up generico
			let popupContent = '';
			
			for (let p in feature.properties) {
				popupContent += '<tr><td><b>' + p + ': </b></td><td>'+ feature.properties[p] + '</td></tr><br>';
			}

		layer.bindPopup(popupContent);
	}
}

function getCoords(e){

	window.open("https://maps.google.com.mx/maps?q=&layer=c&cbll="+e.latlng.lat+","+e.latlng.lng+"", "_blank", "toolbar=no,scrollbars=yes,resizable=no,top=100,left=100,width=600,height=400,location=no")

}

function mostrarCoords(e){
	alert('Hola las cooordenadas son: ' +e.latlng.lat+","+e.latlng.lng);
}

//Capa de Estados Unidos
const capa_eua = L.geoJson(statesData,{
	style: estilo_eua,
	onEachFeature: popup
}).addTo(map);

let l_clusters = L.markerClusterGroup();

const capa_puntos = L.geoJson(ags_data,{
	onEachFeature: popup
}).addTo(l_clusters);

l_clusters.addTo(map);

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
			{label: 'Estados Unidos', layer: capa_eua},
            {label: 'Puntos', layer: l_clusters},
		]
	}
];

//boton switch
let btn_switch = L.easyButton({
	position: 'topright',
	states: [{
		stateName: 'add-markers',
		icon: '<img clas="icon" src="img/open_folder.svg"> width="24" height="24"',
		title: 'Ocultar',
		onClick: function(control){
			layer_control.addTo(map);
			control.state('remove-markers');
		}
	},{
			stateName: 'remove-markers',
			icon: '<img clas="icon" src="img/open_folder.svg"> width="24" height="24"',
			title: 'Mostrar',
			onClick: function(control){			
				map.removeControl(layer_control);
				control.state('add-markers');
			}
	}]
});

btn_switch.addTo(map)

var layer_control = L.control.layers.tree(capas_base, capas_json, {
	namedbtn_draw: true,
	closedSymbol: '+',
	openedSymbol: '-',
	collapseAll: 'Colapsar todos',
	expandAll: 'Expandir todos',
	namedToggle: true,
	collapsed: false,

});

//layer_control.addTo(map);

const miniMapa = new L.Control.MiniMap(lyr_mini,{
	autoToggleDisplay: false,
 	position: 'bottomleft',// posición en el mapa
 	centerFixed: [22.780180555185304, -103.3572947221724],//centro del minimapa
 	zoomLevelFixed: 3,
 	width: 200,	// ancho
 	height: 200, // alto
 	minimized: false,
 	strings: {hideText: 'Ocultar mapa', showText: 'Mostrar mapa'},
 	aimingRectOptions: {color: '#ff0000', weight: 1, clickable: false, fillOpacity: 0},
	shadowRectOptions: {color: '#000000', weight: 1, clickable: false, opacity: 0, fillOpacity: 0},
}).addTo(map);

L.control.mouseCoordinate({
	gps: true,
	gpsLong: false,
	utm: true,
	utmref: false,
	position: 'bottomleft'
}).addTo(map);

//boton sencillo
let btn_easy = L.easyButton({
	position: 'topleft',
	states: [{
		stateName: 'add-markers',
		icon: '<img clas="icon" src="img/red_marker.svg"> width="24" height="24"',
		title: 'Boton Easy Button',
		onClick: function(control){
			window.open("pdf/libro_pdf.pdf", "_blank", "toolbar=no,scrollbars=yes,resizable=no,top=100,left=100,width=600,height=400,location=no")
		}
	}]

});

btn_easy.addTo(map);