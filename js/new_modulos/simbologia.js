export default class Simbologia {
    constructor() {

    }

    setSymb(element, label) {
        let symb = `&nbsp&nbsp&nbsp&nbsp <b>${label}</b><br>`;

        element.forEach(e => {
            symb += `&nbsp&nbsp&nbsp&nbsp&nbsp <font color= ${e.color} >█ </font> ${e.name}<br>`;
        });

        return { label: symb };
    }

    setImg(element, label) {
        let symb = `&nbsp&nbsp&nbsp&nbsp <b>${label}</b><br>`;

        element.forEach(e => {
            symb += `&nbsp&nbsp&nbsp&nbsp&nbsp ${e.img} ${e.name}<br>`;
        });

        return { label: symb };
    }

    getEuaSymb(){
        let element = [
            {
                name: '0-100',
                color: '#FFF30F'
            },
            {
                name: '100-200',
                color: '#FF0000'
            },
        ];

        return this.setSymb(element, "Simbología")
    }

    getMexCdSymb(){
        let element = [
            {
                name: 'Rurales',
                color: '#FFF30F',
                img: '<img src="img/red_marker.svg" width="16" height="16">'
            },
            {
                name: 'Urbanas',
                color: '#FF0000',
                img: '<img src="img/green-marker-md.png" width="16" height="16">'
            },
        ];

        return this.setImg(element, "Tipos")
    }



}