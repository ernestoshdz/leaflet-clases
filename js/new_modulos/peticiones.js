export default class Peticiones{
    
    constructor(){
        
    }

    setCapas = async(lyr, folder, nombre_archivo, estilo, pop, ext, req, res) => {
        const response = await fetch('geojson/'+ folder + '/' + nombre_archivo + ext);
        const data = await response.json();

        let geojsonLayer = L.geoJson(data,{
            style: estilo,
            onEachFeature: pop
        });

        lyr.addLayer(geojsonLayer);
    }    

}