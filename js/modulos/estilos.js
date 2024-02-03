export default class Estilos{
  constructor(){

  }

  estilo_eua = (feature) => {
    return {
      weight: 2,
      opacity: 1,
      color: 'black',
      dashArray: '1',
      fillOpacity: 0.3,
      //clickable: false,
      fillColor: '#FFF799'
    }
  }

  estilo_mx = (feature) => {
    return {
      weight: 2,
      opacity: 1,
      color: 'black',
      dashArray: '1',
      fillOpacity: 0.3,
      //clickable: false,
      fillColor: '#008631'
    }
  }

}