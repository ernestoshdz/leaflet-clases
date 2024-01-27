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
			{label: 'Estados Unidos de Norteamerica', layer: layers.eua},
			{label: 'México Estados', layer: layers.mex_edos},
			{label: 'México Hidrografia', layer: layers.mex_rios},
			{label: 'México Vialidades', layer: layers.mex_vial},
            {label: 'Aguascalientes Puntos', layer: layers.ags_pts},
			{label: 'México Ciudades', layer: layers.mex_cd_pts},
		]
	}
];

let control_lyrs = L.control.layers.tree(capas_base, capas_json, {
    //selectorBack: false,
    namedbtn_draw: true,
    closedSymbol: '<img src="img/plus.png" width="16" height="16"> <img src="img/folder-svgrepo-com.svg" width="16" height="16">',
    openedSymbol: '<img src="img/minus.png" width="16" height="16"> <img src="img/open-file-folder-svgrepo-com.svg" width="16" height="16">',
    collapseAll: 'Colapsar todos',
    expandAll: 'Expandir todos',
    namedToggle: true,
    collapsed: false,
 
});

export {
    control_lyrs
}