//var y let

    //ES5
    /* var saludar = "hey, hola";
    var tiempos = 4;

    if (tiempos > 3) {
        var saludar = "dice Hola tambien";
    }

    console.log(saludar) // "dice Hola tambien" */

    //ES6
    let saludar = "dice Hola";
    let tiempos = 4;

    if (tiempos > 3) {
        let hola = "dice Hola tambien";
        console.log(hola);// "dice Hola tambien"
    }
    console.log(hola) // hola is not defined
    


//Funciones ES5

    function estilo_eua(feature) {
        return {
            weight: 3,
            opacity: 1,
            color: 'black',
            dashArray: '1',
            fillOpacity: 0.3,
            //clickable: false
            fillColor: '#FFF799'
        };
    }

    //Funciones ES6

    const estilo_eua = (feature) => {
        return {
            weight: 3,
            opacity: 1,
            color: 'black',
            dashArray: '1',
            fillOpacity: 0.3,
            //clickable: false
            fillColor: '#FFF799'
        };
    }