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
        return {
            weight: 2,
            opacity: 1,
            color: 'blue',
            dashArray: '3',
            fillOpacity: 0.3,
            clickable: true,
            fillColor: '#FF00FF'
        };
    }


}