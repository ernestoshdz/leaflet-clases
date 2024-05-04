//variable mapa
const map = L.map('map').setView([21.780180555185304, -102.3572947221724], 9);

//variable capa base
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([21.780180555185304, -102.3572947221724],{title:"Click to show window." }).addTo(map);

marker.on('click',function(){

    var win =  L.control.window(map,{title:'Hello world!',maxWidth:400,modal: true})
    .content('Esta es una prueba')
    //.prompt({callback:function(){alert('This is called after OK click!')}})
    //.show()
});