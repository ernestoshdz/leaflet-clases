const popup = (feature, layer) => {
    if (feature.properties) {

        let popupContent = '';
			
			for (let p in feature.properties) {
				popupContent += '<tr><td><b>' + p + ': </b></td><td>'+ feature.properties[p] + '</td></tr><br>';
			}

		layer.bindPopup(popupContent);
    }
}

const euaPopup = (feature, layer) => {
    if (feature.properties) {

        let popupContent =
        '<table class="table table-striped table-hover">'+
            '<tr><td><b>Estado:</b></td><td> '+feature.properties.name+'</td></tr>'+
            '<tr><td><b>Densidad:</b></td><td> '+feature.properties.density+'</td></tr>'+
        '</table>';
			
		layer.bindPopup(popupContent);
    }
}

const agsPopup = (feature, layer) => {
    if (feature.properties) {

        let popupContent =
        '<table class="table table-striped table-hover">'+
            '<tr><td><b>Clave Geográfica:</b></td><td> '+feature.properties.CVEGEO+'</td></tr>'+
            '<tr><td><b>Estado:</b></td><td> '+feature.properties.CVE_ENT+'</td></tr>'+
            '<tr><td><b>Municipio:</b></td><td> '+feature.properties.CVE_MUN+'</td></tr>'+
            '<tr><td><b>Localidad:</b></td><td> '+feature.properties.CVE_LOC+'</td></tr>'+
            '<tr><td><b>AGEB:</b></td><td> '+feature.properties.CVE_AGEB+'</td></tr>'+
            '<tr><td><b>Manzana:</b></td><td> '+feature.properties.CVE_MZA+'</td></tr>'+
            //'<tr><td><b>Estado:</b></td><td> '+feature.properties.NOMGEO+'</td></tr>'+
            '<tr><td><b>Tiene Plano:</b></td><td> '+feature.properties.PLANO+'</td></tr>'+
        '</table>';
			
		layer.bindPopup(popupContent);
    }
}

export {
    popup,
    euaPopup,
    agsPopup
}