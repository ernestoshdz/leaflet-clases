//listado de imagenes
export default class Imagenes {

    constructor() {
        this.array_img = [
            {
                cve: 77,
                plaga: "Maconellicoccus Hirsutus",
                descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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