//listado de imagenes
export default class Imagenes {

    constructor() {
        this.array_img = [
            {
                cve: 77,
                plaga: "Maconellicoccus Hirsutus",
                descripcion: "Mi Descripción A",
                images: [
                    {
                        name_img: "Maconellicoccus hirsutus",
                        folder: "Maconellicoccus hirsutus",
                        ext: "jpg"
                    },
                    {
                        name_img: "test",
                        folder: "Maconellicoccus hirsutus",
                        ext: "jpg"
                    }
                ],
                
            },
            {
                cve: 127,
                plaga: "Thielaviopsis paradoxa",
                descripcion: "Mi Descripción B",
                images: [
                    {
                        name_img: "OIP",
                        folder: "Thielaviopsis",
                        ext: "jpg"
                    },
                    {
                        name_img: "Figura",
                        folder: "Thielaviopsis",
                        ext: "png"
                    }
                ]
            },

        ];
    }
}