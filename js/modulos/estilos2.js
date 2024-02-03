const estilo_eua = (feature) => {
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
  
  const estilo_mx = (feature) => {
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
  
  const estiloLocalidades = (feature, latlng) => {
    let smallIcon = new L.Icon({
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor:  [0.65, -24],
      iconUrl: 'img/red_marker.svg'
    });
    return L.marker(latlng, {icon: smallIcon});
  }
  
  const estiloCiudades = (feature, latlng) => {
    let smallIcon = new L.Icon({
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor:  [0.65, -24],
      iconUrl: 'img/city-life.png'
    });
    return L.marker(latlng, {icon: smallIcon});
  }
  
  const getColorEUA = (d) => {
    return d >= 100 ? '#FF0000' :// 100 o mas
    d >= 80 ? '#00FF00' ://80 a 99
    d >= 50 ? '#F8BFAA' ://50 a 79
    d >= 20 ? '#E96404' :// 20 a 49
    '#0000FF'//Default (0 a 19)
  }
  
  const st_eua_rango = (feature) => {
    return {
      fillColor: getColorEUA(feature.properties.density),
      weight: 1,
      opacity: 0.8,
      color: 'gray',
      dashArray: '1',
      fillOpacity: 0.8
    };
  }
  
  const st_mx_edo = (feature) => {
    switch (feature.properties.ESTADO) {
      case "Durango": return {fillColor: "#bb6338", weight:2, fillOpacity: 0.5, color: '#bb6338'};
      case "San Luis Potosí": return {fillColor: "#bb6338", weight:2, fillOpacity: 0.5, color: '#bb6338'};
      default: return {fillColor: "#00FF00", weight:2, fillOpacity: 0.5, color: '#bb6338'};
    }
  }
  
  export {
    estilo_eua,
    estilo_mx,
    estiloLocalidades,
    estiloCiudades,
    st_eua_rango,
    st_mx_edo
  }