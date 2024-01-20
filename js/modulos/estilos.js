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

  export {
    estilo_eua,
    estilo_mx,
    estiloLocalidades
  }