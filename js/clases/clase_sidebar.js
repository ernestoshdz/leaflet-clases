//variable mapa
const map = L.map('map',{
    zoomControl: false
}).setView([38.548165, -98.833008], 3);

//variable capa base
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const popup = (feature,layer) => {
    if (feature.properties) {

        layer.on('click', function(e){
            sidebar.show();

            document.getElementById("sidebarTitle").innerHTML = `
            <h1>
                Estados Unidos
            </h1>
            `;

            document.getElementById("sidebarContenido").innerHTML = `
            <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consec
            </p>
            `;

            document.getElementById('myChart').style.visibility = 'visible';
        });

		//Ejemplo pop up generico
		let popupContent = '';

		for (let p in feature.properties) {
			popupContent += '<tr><td><b>' + p + ': </b></td><td>' + feature.properties[p] + '</td></tr><br>';
		}

		layer.bindPopup(popupContent);
	}
}

const popupAgs = (feature,layer) => {
    if (feature.properties) {

        layer.on('click', function(e){
            sidebar.show();

            document.getElementById("sidebarTitle").innerHTML = `
            <h1>
                Aguascalientes
            </h1>
            `;

            document.getElementById("sidebarContenido").innerHTML = `
            <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consec
            </p>
            `;

            document.getElementById('myChart').style.visibility = 'visible';
        });

		//Ejemplo pop up generico
		let popupContent = '';

		for (let p in feature.properties) {
			popupContent += '<tr><td><b>' + p + ': </b></td><td>' + feature.properties[p] + '</td></tr><br>';
		}

		layer.bindPopup(popupContent);
	}
}

const capa_eua = L.geoJson(statesData, {
	//style: estilo_eua,
	onEachFeature: popup
}).addTo(map);

let l_clusters = L.markerClusterGroup();

const capa_ags = L.geoJson(ags_data, {
	//style: estilo_eua,
	onEachFeature: popupAgs
}).addTo(l_clusters);

l_clusters.addTo(map)

var sidebar = L.control.sidebar('sidebar', {
    position: 'left',
    closeButton: false
});

map.addControl(sidebar);

sidebar.hide();

