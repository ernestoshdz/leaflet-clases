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

//boton switch
let btn_switch = L.easyButton({
	position: 'topleft',
	states: [{
		stateName: 'add-markers',
		icon: '<img clas="icon" src="img/folder.svg"> width="24" height="24"',
		title: 'Ocultar',
		onClick: function(control){
			map.removeControl(btn_easy);
			control.state('remove-markers');
		}
	},{
			stateName: 'remove-markers',
			icon: '<img clas="icon" src="img/open_folder.svg"> width="24" height="24"',
			title: 'Mostrar',
			onClick: function(control){
				btn_easy.addTo(map);
				control.state('add-markers');
			}
	}]
});

btn_switch.addTo(map)

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

