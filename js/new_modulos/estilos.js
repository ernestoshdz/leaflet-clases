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
            fillColor: '#FFF799'
        };
    }


}