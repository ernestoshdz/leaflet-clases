//variable mapa
const map = L.map('map').setView([38.548165, -98.833008], 5);

//variable capa base
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var sidebar = L.control.sidebar('sidebar', {
    position: 'left'
});

map.addControl(sidebar);

function customActionToPrint(context, mode) {
	return function() {
		window.alert("We are printing the MAP. Let's do Custom print here!");

		context._printMode(mode);
	}
};

L.control.browserPrint({
	title: 'Just print me!',
	documentTitle: 'Map printed using leaflet.browser.print plugin',
	printLayer: L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
					attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
					subdomains: 'abcd',
					minZoom: 1,
					maxZoom: 16,
					ext: 'png'
				}),
	closePopupsOnPrint: false,
	printModes: [
            L.BrowserPrint.Mode.Landscape("Tabloid",{title: "Tabloid VIEW",action: customActionToPrint}),
            //L.browserPrint.Mode.Landscape("Alert",{title:"User specified print action",pageSize: "A6", action: customActionToPrint, invalidateBounds: false}),
            L.BrowserPrint.Mode.Landscape(),
            "Portrait",
            L.BrowserPrint.Mode.Auto("B4",{title: "Auto"}),
            L.BrowserPrint.Mode.Custom("B5",{title:"Select area"})
	],
	manualMode: false
}).addTo(map);