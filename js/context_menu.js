//variable mapa
const map = L.map('map',{
	contextmenu: true,
	contextmenuWidth: 160,
	contextmenuItems: [{
    text: 'Show coordinates',
    callback: hello
	}, '-', {
		text: '<img clas="icon" src="img/folder.svg" width="12" height="12">  Mostrar Google Maps',
		callback: getCoords
}]

}).setView([21.780180555185304, -102.3572947221724], 9);

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

function hello(){
	alert('Hello')
}

function getCoords(e){

	window.open("https://maps.google.com.mx/maps?q=&layer=c&cbll="+e.latlng.lat+","+e.latlng.lng+"", "_blank", "toolbar=no,scrollbars=yes,resizable=no,top=100,left=100,width=600,height=400,location=no")

}