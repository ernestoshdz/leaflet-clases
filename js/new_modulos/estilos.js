export default class Estilos {
    constructor(){

    }

    st_pol = (feature) => {
        return {
            weight: 3,
            opacity: 1,
            color: 'red',
            dashArray: '1',
            fillOpacity: 0,
            clickable: false
            //fillColor: '#FFF799'
        };
    }

    estilo_mun = (feature) => {
        return {
            weight: 2,
            opacity: 1,
            color: 'black',
            dashArray: '1',
            fillOpacity: 0.3,
            clickable: true,
            fillColor: '#f5c842'
        };
    }

    estilo_eua = (feature) => {
        return {
            weight: 2,
            opacity: 1,
            color: 'black',
            dashArray: '1',
            fillOpacity: 0.3,
            clickable: true,
            fillColor: '#00ff7f'
        };
    }

    estilo_mx = (feature) => {

        switch (feature.properties.ESTADO){
            case "Durango": return {
                fillColor: "#bb6338", 
                weight:2, 
                fillOpacity: 0.5, 
                color: '#bb6338'
            };
            case "San Luis Potosí": return {
                fillColor: "gray", 
                weight:2, 
                fillOpacity: 0.5, 
                color: '#bb6338'
            };
            default: return {
                fillColor: "#00FF00", 
                weight:2, 
                fillOpacity: 0.5, 
                color: '#bb6338'
            };
        }
    }

    st_pts_mex_cd = (feature, latlng) => {
        let icon = "";

        switch (feature.properties.CAPITAL) {
            case "S":
                icon = "red_marker.svg";
            break;

            case "N":
                icon = "green-marker-md.png";
            break;

            default:
                icon = "city-life.png";
        }
        let smallIcon = new L.Icon({
            iconSize: [32, 32],
            iconAnchor: [16, 16],
            popupAnchor: [0.65, -24],
            iconUrl: `img/${icon}`
        });
        return L.marker(latlng, { icon: smallIcon });
    }

}