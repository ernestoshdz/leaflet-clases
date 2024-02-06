export default class Estilos{
  constructor(){
    this.obj = {};
  }

  crearEstilo(grosor,opacidad,color,dash,opacidadRelleno,clic,colorRelleno){
    this.obj = {
      weight: grosor,
      opacity: opacidad,
      color: color,
      dashArray: dash,
      fillOpacity: opacidadRelleno,
      clickable: clic,
      fillColor: colorRelleno
    }

    return this.obj
  }

  estilo_eua = (feature) => {
    return this.crearEstilo(2,1,'black','1',0.3,true,'#FFF799')
  }

  estilo_mx = (feature) => {
    return this.crearEstilo(2,1,'black','1',0.3,true,'#008631')
  }

}