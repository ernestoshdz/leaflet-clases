import * as layers from './layers.js';

const capas_base = [
	{
		label: 'Mapas Base',
		children: [
			{label: 'OSM', layer: layers.osm},
			{label: 'Esri Wordl Map', layer: layers.esri}
		]
	}
];

const capas_json = [
	{
		label: 'Capas',
		children: [
			{label: 'Estados Unidos', layer: layers.eua},
            {label: 'Puntos', layer: layers.ags_pts},
		]
	}
];

let control_lyrs = L.control.layers.tree(capas_base, capas_json, {
    //selectorBack: false,
    namedbtn_draw: true,
    closedSymbol: '<img src="images/plus.png" width="16" height="16"> <img src="images/folder-svgrepo-com.svg" width="16" height="16">',
    openedSymbol: '<img src="images/minus.png" width="16" height="16"> <img src="images/open-file-folder-svgrepo-com.svg" width="16" height="16">',
    collapseAll: 'Colapsar todos',
    expandAll: 'Expandir todos',
    namedToggle: true,
    collapsed: false,
 
});

export {
    control_lyrs
}