import Controles from "./controles.js";

export default class Popups {
    constructor() {
        //esto resuelve el problema del this, funcion anonima layer.on('click', function (e) { no deja usar this.myFunction

        this.popGenerico = this.popGenerico.bind(this);
        this.mxEdosPop = this.mxEdosPop.bind(this);
        this.oisaPop = this.oisaPop.bind(this);
        this.cultivosPop = this.cultivosPop.bind(this);

        this.newArray = [];
        this.namesArray = [];

        this.barColors = ["red", "green", "blue", "orange", "brown"];

        //funciona como diccionario de datos, muy útil para sustituir las claves por nombres
        this.misValores = [
            {
                cve: "a",
                name: "Acanthoscelides obtectus"
            },
            {
                cve: "b",
                name: "Acanthoscelides obtectus, Anastrepha obliqua, Drosophila melanogaster, Sitophilus granarius, Cadra cautella"
            },
            {
                cve: "c",
                name: "Acanthoscelides obtectus, Apion godmani"
            },
            {
                cve: "d",
                name: "Acanthoscelides obtectus, Callosobruchus maculatus, Lasioderma serricorne"
            },
            {
                cve: "e",
                name: "Acanthoscelides obtectus, Pagiocerus frontalis, Rhyzopertha dominica, Sitophilus zeamais"
            },
            {
                cve: "f",
                name: "Acanthoscelides obtectus, Rhyzopertha dominica"
            },
            {
                cve: "g",
                name: "Acanthoscelides obtectus, Sitophilus granarius"
            },
            {
                cve: "h",
                name: "Acanthoscelides obtectus, Sitophilus zeamais"
            },
            {
                cve: "i",
                name: "Acarus siro"
            },
            {
                cve: "j",
                name: "Acrobasis nuxvorella"
            },
            {
                cve: "k",
                name: "Agrotis sp."
            },
            {
                cve: "l",
                name: "Ahasverus advena, Sitophilus granarius"
            },
            {
                cve: "m",
                name: "Ahasverus rectus, Oryzaephilus surinamensis"
            },
            {
                cve: "n",
                name: "Amaranthus hybridus, Digitaria horizontalis, Digitaria sanguinalis, Ipomoea tiliacea"
            },
            {
                cve: "o",
                name: "Ambrosiodmus sp., Carpophilus dimidiatus, Necrobia rufipes"
            },
            {
                cve: "p",
                name: "Amyelois transitelia"
            },
            {
                cve: "q",
                name: "Amyelois transitelia, Lepidoptera (pupa)"
            },
            {
                cve: "r",
                name: "Anastrepha ludens"
            },
            {
                cve: "s",
                name: "Anastrepha obliqua"
            },
            {
                cve: "t",
                name: "Anastrepha obliqua, Sitophilus zeamais"
            },
            {
                cve: "u",
                name: "Anisopteromalus calandrae, Crapophilus hermipterus, Sitophilus granarius"
            },
            {
                cve: "v",
                name: "Anisopteromalus calandrae, Lasioderma serricorne"
            },
            {
                cve: "w",
                name: "Aphidoletes sp., Cadra sp., Curculio sp."
            },
            {
                cve: "x_1",
                name: "Aphis sp."
            },
            {
                cve: "y_1",
                name: "Apion godmani"
            },
            {
                cve: "z",
                name: "Apomyelois ceratoniae"
            },
            {
                cve: "aa",
                name: "Araptus dentifrons"
            },
            {
                cve: "ab",
                name: "Araptus schwarzi, Hypothenemus birmanus, Hypothenemus brunneus, Hypothenemus eruditus, Sepedophilus castaneus"
            },
            {
                cve: "ac",
                name: "Bactrocera dorsalis"
            },
            {
                cve: "ad",
                name: "Bactrocera oleae"
            },
            {
                cve: "ae",
                name: "Blattidae"
            },
            {
                cve: "af",
                name: "Cadra cautella"
            },
            {
                cve: "ag",
                name: "Cadra cautella, Carpophilus dimidiatus"
            },
            {
                cve: "ah",
                name: "Cadra cautella, Oryzaephilus surinamensis"
            },
            {
                cve: "ai",
                name: "Cadra sp., Cydia pomonella"
            },
            {
                cve: "aj",
                name: "Callosobruchus chinensis"
            },
            {
                cve: "ak",
                name: "Callosobruchus maculatus"
            },
            {
                cve: "al",
                name: "Carpophilus dimidiatus"
            },
            {
                cve: "am",
                name: "Carpophilus dimidiatus, Lasioderma serricorne, Oryzaephilus surinamensis, Plodia interpunctella"
            },
            {
                cve: "an",
                name: "Carpophilus humeralis, Diptera"
            },
            {
                cve: "ao",
                name: "Carpophilus ligneus, Euxesta stigmatias, Staphylinidae"
            },
            {
                cve: "ap",
                name: "Carpophilus lugubris, Cryptolestes ferrugineus, Tribolium castaneum"
            },
            {
                cve: "aq",
                name: "Ceratitis capitata"
            },
            {
                cve: "ar",
                name: "Chenopodium quinoa"
            },
            {
                cve: "as_",
                name: "Commelina sp., Cyanotis axillaris, Eleusine indica, Euphorbia heterophylla, Ipomoea lacunosa, Setaria glauca, Melochia corchorifolia, Sesbania exaltata, Pennisetum glaucum, Triticum aestivum, Echinochloa crus-galli"
            },
            {
                cve: "at",
                name: "Cryptolestes ferrugineus"
            },
            {
                cve: "au",
                name: "Cryptolestes pusillus"
            },
            {
                cve: "av",
                name: "Cryptolestes pusillus, Orius sp., Sitophilus zeamais, Tribolium castaneum"
            },
            {
                cve: "aw",
                name: "Curculio caryae"
            },
            {
                cve: "ax",
                name: "Curculio elephas"
            },
            {
                cve: "ay",
                name: "Curculio elephas, Cydia caryana"
            },
            {
                cve: "az",
                name: "Curculio elephas, Dermester frischii, Tribolium castaneum"
            },
            {
                cve: "ba",
                name: "Cuscuta spp., Asphodelus fistulosus, Anagallis arvensis, Chenopodium album, Eruca sativa, Melilotus indicus, Lepidium sativum"
            },
            {
                cve: "bc",
                name: "Cydia caryana"
            },
            {
                cve: "bd",
                name: "Cydia pomonella"
            },
            {
                cve: "be",
                name: "Cydia pomonella, Psocoptera, Tribolium castaneum"
            },
            {
                cve: "bf",
                name: "Diachasminorpha longicaudata"
            },
            {
                cve: "bg",
                name: "Diaphania nitidalis"
            },
            {
                cve: "bh",
                name: "Diptera"
            },
            {
                cve: "bi",
                name: "Drosophila melanogaster"
            },
            {
                cve: "bj",
                name: "Drosophila melanogaster, Anastrepha striata"
            },
            {
                cve: "bk",
                name: "Drosophila melanogaster, Carpophilus dimidiatus"
            },
            {
                cve: "bl",
                name: "Drosophila melanogaster, Carpophilus hemipterus"
            },
            {
                cve: "bm",
                name: "Drosophila melanogaster, Tribolium castaneum"
            },
            {
                cve: "bn",
                name: "Elachiptera sp."
            },
            {
                cve: "bo",
                name: "Ephestia elutella"
            },
            {
                cve: "bp",
                name: "Eurybia elvina, Rhizophagus sp."
            },
            {
                cve: "bq",
                name: "Eurysacca quinoae"
            },
            {
                cve: "br",
                name: "Euxesta stigmatias"
            },
            {
                cve: "bs",
                name: "Galeopsis tetrahit, Galium spurium, Polygonum convolvulus, Avena fatua, Avena sativa, Brassica napus, Echinochloa crus-galli, Linum usitatissimum, Malva parviflora, Polygonum lapathifolium"
            },
            {
                cve: "bt",
                name: "Galium spurium, Brassica napus, Polygonum lapathifolium, Vicia sp."
            },
            {
                cve: "bu",
                name: "Grapholita molesta"
            },
            {
                cve: "bw",
                name: "Habrobracon hebetor"
            },
            {
                cve: "bx",
                name: "Helicoverpa zea"
            },
            {
                cve: "by_",
                name: "Heliothis subflexa"
            },
            {
                cve: "bz",
                name: "Heliothis virescens"
            },
            {
                cve: "ca",
                name: "Hister sp."
            },
            {
                cve: "cb",
                name: "Hydrotaea sp."
            },
            {
                cve: "cc",
                name: "Larvas necrosadas"
            },
            {
                cve: "cd",
                name: "Lasioderma serricorne"
            },
            {
                cve: "ce",
                name: "Lasioderma serricorne, Orius sp., Oryzaephilus surinamensis"
            },
            {
                cve: "cf",
                name: "Lasioderma serricorne, Oryzaephilus surinamensis"
            },
            {
                cve: "cg",
                name: "Lasioderma serricorne, Oryzaephilus surinamensis, Psocoptera"
            },
            {
                cve: "ch",
                name: "Lasioderma serricorne, Rhyzopertha dominica"
            },
            {
                cve: "ci",
                name: "Lasioderma serricorne, Thanasimus sp."
            },
            {
                cve: "cj",
                name: "Lepidoptera"
            },
            {
                cve: "ck",
                name: "Lepidoptera (pupa)"
            },
            {
                cve: "cl",
                name: "Leptostylopsis viridicomus"
            },
            {
                cve: "cm",
                name: "Lithospermum arvense, Anagallis arvensis, Avena fatua, Brassica napus, Chenopodium album, Centaurea melitensis, Digitaria sanguinalis, Echinochloa crus-galli, Galium sp., Medicago lupulina, Polygonum aviculare, S. arvensis, S. spinosa, S. gallica, S. viridis, Nicandra physalodes"
            },
            {
                cve: "cn",
                name: "Lonchaea sp."
            },
            {
                cve: "co",
                name: "Lyctus planicollis"
            },
            {
                cve: "cp",
                name: "Megaselia scalaris"
            },
            {
                cve: "cq",
                name: "Monotoma picipes"
            },
            {
                cve: "cr",
                name: "Musca domestica"
            },
            {
                cve: "cs",
                name: "Necrobia rufipes"
            },
            {
                cve: "ct",
                name: "Neoleucinodes elegantalis"
            },
            {
                cve: "cu",
                name: "Orius sp."
            },
            {
                cve: "cv",
                name: "Orius sp., Psoccoptera"
            },
            {
                cve: "cw",
                name: "Oryzaephilus mercator"
            },
            {
                cve: "cx",
                name: "Oryzaephilus surinamensis"
            },
            {
                cve: "cy",
                name: "Oryzaephilus surinamensis, Necrobia rufipes"
            },
            {
                cve: "cz",
                name: "Oryzaephilus surinamensis, Psocoptera"
            },
            {
                cve: "da",
                name: "Oryzaephilus surinamensis, Sitophilus granarius"
            },
            {
                cve: "db",
                name: "Oryzaephilus surinamensis, Sitophilus granarius, Lasioderma serricorne"
            },
            {
                cve: "dc",
                name: "Oryzaephilus surinamensis, Sitophilus granarius, Tribolium castaneum"
            },
            {
                cve: "dd",
                name: "Oryzaephilus surinamensis, Sitophilus oryzae"
            },
            {
                cve: "de",
                name: "Oryzaephilus surinamensis, Sitophilus zeamais"
            },
            {
                cve: "df",
                name: "Oryzaephilus surinamensis, Tribolium castaneum"
            },
            {
                cve: "dg",
                name: "Pagiocerus frontalis"
            },
            {
                cve: "dh",
                name: "Pagiocerus frontalis, Sitophilus zeamais"
            },
            {
                cve: "di",
                name: "Pharaxonotha kirschii"
            },
            {
                cve: "dj",
                name: "Phormia regina"
            },
            {
                cve: "dk",
                name: "Platynota sp."
            },
            {
                cve: "dl",
                name: "Platynota stultana"
            },
            {
                cve: "dm",
                name: "Plodia interpunctella"
            },
            {
                cve: "dn",
                name: "Plutella xylostella"
            },
            {
                cve: "do",
                name: "Polygonum convolvulus, Amaranthus sp., Chenopodium album, Chenopodium murale, Echinochloa crus-galli, Anagallis arvensis, Melilotus indicus, Phalaris minor, Rumex crispus, Setaria pumilla, Setaria viridis"
            },
            {
                cve: "dp",
                name: "Polygonum convolvulus, Avena fatua, Avena sativa, Amaranthus blitoides, Brassica juncea, Centaurea solstitialis, Cichorium intybus, Chenopodium album, Lolium temulentum, Lolium perenne, Malva parviflora, Panicum miliaceum, Phalaris minor, Polygonum aviculare, Rumex crispus, Pimpinella anisum, Setaria viridis, Sorghum halepense"
            },
            {
                cve: "dq",
                name: "Pseudococcus sp."
            },
            {
                cve: "dr",
                name: "Psocoptera"
            },
            {
                cve: "ds",
                name: "Pyroderces rileyi"
            },
            {
                cve: "dt",
                name: "Rhagoletis pomonella"
            },
            {
                cve: "du",
                name: "Rhopalapion longirostre"
            },
            {
                cve: "dw",
                name: "Rhyzopertha dominica"
            },
            {
                cve: "dx",
                name: "Rhyzopertha dominica, Sitophilus zeamais"
            },
            {
                cve: "dy",
                name: "Scymnus sp."
            },
            {
                cve: "dz",
                name: "Silvanus sp., Sitophilus zeamais, Tribolium castaneum"
            },
            {
                cve: "ea",
                name: "Sitophilus granarius"
            },
            {
                cve: "ec",
                name: "Sitophilus zeamais"
            },
            {
                cve: "ed",
                name: "Spodoptera frugiperda"
            },
            {
                cve: "ee",
                name: "Stenoma catenifer"
            },
            {
                cve: "ef",
                name: "Stethorus sp."
            },
            {
                cve: "eg",
                name: "Strepsicrates smithiana"
            },
            {
                cve: "eh",
                name: "Talponia batesi"
            },
            {
                cve: "ei",
                name: "Tecia solanivora"
            },
            {
                cve: "ej",
                name: "Tetranychus sp."
            },
            {
                cve: "ek",
                name: "Tribolium castaneum"
            },
            {
                cve: "el",
                name: "Tribolium, Oryzaephilus surinamensis, Trogoderma inclusum"
            },
            {
                cve: "em",
                name: "Trogoderma glabrum"
            },
            {
                cve: "en",
                name: "Trogoderma iclusum"
            },
            {
                cve: "eo",
                name: "Vitula edmandsii"
            },
            {
                cve: "ep",
                name: "Zabrachia polita"
            },
            {
                cve: "eq",
                name: "Zabrotes subfasciatus"
            },
            {
                cve: "Total_gene",
                name: "Total de positivos"
            }
        ];

        this.array_img = [
            {
                plaga:"Maconellicoccus hirsutus",
                cve: 76,
                images: [
                    {
                        name:"Maconellicoccus hirsutus",
                        folder:"Maconellicoccus hirsutus",
                        ext: "jpg"
                    },
                    {
                        name:"test",
                        folder:"Maconellicoccus hirsutus",
                        ext: "jpg"
                    }
                ],
            },
            {
                plaga:"Thielaviopsis paradoxa",
                cve: 57,
                images: [
                    {
                        name:"OIP",
                        folder:"Thielaviopsis",
                        ext: "jpg"
                    },
                    {
                        name:"Figura",
                        folder:"Thielaviopsis",
                        ext: "png"
                    }
                ],
            },

        ];
    }

    filtrarArray(feature, newArray, namesArray) {

        //limpiar arrays antes de llenarlos
        newArray = [];
        namesArray = [];

        this.misValores.map(row => {

            //para evitar graficar el total generado
            if (feature.properties[row.cve] > 0 && row.cve != "Total_gene") {
                newArray.push(feature.properties[row.cve])
                namesArray.push(row.name)
            }
        });

        this.crearGrafico('doughnut', newArray, namesArray);
    }

    crearGrafico(tipo, newArray, namesArray) {

        let chartData = {
            type: tipo,
            data: {
                labels: namesArray,
                datasets: [
                    {
                        backgroundColor: this.barColors,
                        label: 'Acquisitions by year',
                        data: newArray,
                    }
                ]
            }
        }

        //sirve para actualizar el gráfico y evitar sobreponer gráficos
        if (typeof graph === "undefined") {
            window.graph = new Chart(document.getElementById('sidebarGraficos'), chartData);
        } else {
            window.graph.config = chartData;
            window.graph.update();
        }
    }

    actualizarDivs(titulo, contenido, ruta_img) {

        document.getElementById("sidebarTitle").innerHTML = titulo;

        document.getElementById("sidebarContenido").innerHTML = `<p>${contenido}</p>`;

        //document.getElementById("sidebarImagen").innerHTML = `<img src="img/${ruta_img}.jpg" width="200" height="150">`;
    }

    popGenerico(feature, layer) {

        if (feature.properties) {

            layer.on('click', function (e) {

                //this.sidebar.close()

                this.actualizarDivs("Detecciones por OISA", "Descripción", `Oisa/${feature.properties.No_}`)
                this.filtrarArray(feature, this.newArray, this.namesArray);

            }.bind(this));//se necesita para resolver el problema del this, funcion anonima layer.on('click', function (e) { no deja usar this.myFunction

            let popupContent = '<table class="table table-striped table-hover">';

            for (let p in feature.properties) {

                popupContent += `<tr><td><b>${p}: </b></td><td>${feature.properties[p]}</td></tr>`;
            }

            popupContent += '</table>';

            layer.bindPopup(popupContent);
        }
    }

    mxEdosPop(feature, layer) {

        if (feature.properties) {

            layer.on('click', function (e) {

                this.actualizarDivs("Ciudades de México", `Ciudad: ${feature.properties.CIUDAD}, ${feature.properties.ESTADO}`, `Ciudades/${feature.properties.CIUDAD}`);

                let barColors = ["red", "green", "blue", "orange", "brown"];

                const data = [
                    { pais: "Italy", cantidad: 55 },
                    { pais: "France", cantidad: 49 },
                    { pais: "Spain", cantidad: 55 },
                    { pais: "USA", cantidad: 49 },
                    { pais: "Argentina", cantidad: 55 },
                ];

                new Chart(document.getElementById('sidebarGraficos'),
                    {
                        type: "bar",
                        data: {
                            labels: data.map(row => row.pais),
                            datasets: [{
                                backgroundColor: barColors,
                                data: data.map(row => row.cantidad)
                            }]
                        },
                        options: {
                            legend: { display: false },
                            title: {
                                display: true,
                                text: "World Wine Production 2018"
                            },
                            //animation: false
                        }
                    }
                );

            }.bind(this));

            let popupContent =
                `<table class="table table-striped table-hover">
                <tr><td><b>Ciudad:</b></td><td><i>${feature.properties.CIUDAD}</i>, ${feature.properties.ESTADO}</td></tr>
                <tr><td><b>Capital:</b></td><td>${feature.properties.CAPITAL}</td></tr>
                <tr><td><b>Estado:</b></td><td>${feature.properties.ESTADO}</td></tr>
            </table>`;

            {/* <tr><td><b>Imagen:</b></td><td><img src="img/Ciudades/${feature.properties.CIUDAD}.jpg" width="200" height="150"></td></tr> */ }

            layer.bindPopup(popupContent);
        }
    }

    crearModal(map, titulo, cve_plaga) {
        let win = L.control.window(map, {
            title: titulo,
            maxWidth: 400,
            maxheight: 100,
            modal: true,
            content: this.crearGaleria(cve_plaga),
            position: "top",
            //visible: false
        });

        win.show();
    }

    crearGaleria(cve_plaga) { 
        
        let gallery = `
        
        <div id="galeria" class="container-fluid">
            <div class="jumbotron">
                <p>Monks spent most of their time praying, meditating, teaching, reading, etc.The first clocks created in medieval England were the work of monks.</p>
            </div>`;

            let filtro_array_img = this.array_img.filter((i) => i.cve == cve_plaga);

            filtro_array_img.forEach((i) => {

                gallery += `<div class="row gallery">`

                    i.images.forEach((i) => {

                        gallery += `
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <a href="img/Plagas/${i.folder}/${i.name}.${i.ext}">
                                <img class="img-fluid"src="img/Plagas/${i.folder}/${i.name}.${i.ext}">
                            </a>
                        </div>`;
                    });
                        
                gallery +=`</div>`;

            });

        gallery += `</div>`;

        window.onload = function() {
            baguetteBox.run(".gallery", {
                animation: "slideIn"
            });
        }

        return gallery;
    }

    cultivosPop(feature, layer) {

        let popupContent =
            `<table class="table table-striped table-hover">
                <tr><td><b>Cultivo:</b></td><td>${feature.properties.Cultivo}</td></tr>
                <tr><td><b>Nombre Científico:</b></td><td><i>
                    ${feature.properties.Cientifico}
                    ${feature.properties.Cientifi_1}
                    ${feature.properties.Cientifi_2}
                </i></td></tr>
                <tr><td><b>Clave Plaga:</b></td><td>${feature.properties.c_plaga}</td></tr>
                <tr><td><b>Plaga:</b></td><td><i>
                    ${feature.properties.Plaga} 
                    ${feature.properties.Plaga1} 
                    ${feature.properties.Plaga2}
                    ${feature.properties.Plaga3}
                </i></td></tr>
                <tr><td></td><td><button type="button" id="btn_verImg">Ver Plaga</button></td></tr>
                <tr><td><b>Estado:</b></td><td>${feature.properties.Estado}, ${feature.properties.Municipio}</td></tr>
                <tr><td><b>Cita:</b></td><td>${feature.properties.Cita} ${feature.properties.Cita1} ${feature.properties.Cita2}</td></tr>
                <tr><td><b>Latitud:</b></td><td>${feature.properties.Latitud}</td></tr>
                <tr><td><b>Longitud:</b></td><td>${feature.properties.Longitud}</td></tr>
            </table>`;

        layer.bindPopup(popupContent);

        layer.on('click', function (e) {
            let btn_verImg = document.getElementById('btn_verImg');

            //console.log(feature.properties.Plaga)

            btn_verImg.onclick = function () { this.crearModal(map, feature.properties.Plaga, feature.properties.c_plaga) }.bind(this);
        }.bind(this));
    }

    oisaPop(feature, layer) {

        if (feature.properties) {

            layer.on('click', function (e) {

                this.actualizarDivs("Detecciones por OISA", "Descripción", `Oisa/${feature.properties.No_}`)
                this.filtrarArray(feature, this.newArray, this.namesArray);

            }.bind(this));

            let arry = [];

            this.misValores.map(row => {

                if (feature.properties[row.cve] > 0) {

                    arry.push(this.obj = {
                        columna: row.name,
                        valor: feature.properties[row.cve],

                    });

                }
            });

            let popupContent = `
            <table class="table table-striped table-hover">
                <tr><td><b>Número:</b></td><td>${feature.properties.No_}</td></tr>
                <tr><td><b>Oisa:</b></td><td>${feature.properties.OISA}</td></tr>
                <tr><td><b>Tipo:</b></td><td>${feature.properties.TIPO_DE_}</td></tr>`;

            arry.forEach(i => {

                popupContent += `<tr><td><b>${i.columna}:</b></td><td>${i.valor}</td></tr>`;

            });

            popupContent += '</table>';

            layer.bindPopup(popupContent);
        }
    }
}
