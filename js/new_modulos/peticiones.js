export default class Peticiones {

    constructor() {
        this.lyr_filtro = L.markerClusterGroup();
        //this.lyr_filtro = L.layerGroup();

        this.modal_window = L.control.window(map, {
            title: 'Advertencia <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>',
            maxWidth: 400,
            maxheight: 80,
            modal: true,
            content: 'La búsqueda no generó resultados',
            position: "top",
            closeButton: true,
            //visible: false
        });

        //Diccionario de datos para Estados Cultivos
        this.misValoresCultivos = [
            {
                cve_cultiv: 1,
                name: 'Agave',
				cientifico:'(Agave tequilana)'
            },
            {
                cve_cultiv: 2,
                name: 'Aguacate',
				cientifico:'(Persea americana)'
            },
            {
                cve_cultiv: 3,
                name: 'Ajo',
				cientifico:'(Allium sativum)'
            },
            {
                cve_cultiv: 4,
                name: 'Ajonjolí',
				cientifico:'(Sesamum indicum)'
            },
			{
                cve_cultiv: 5,
                name: 'Alfalfa',
				cientifico:'(Medicago sativa)'
            },
            {
                cve_cultiv: 6,
                name: 'Algarrobo',
				cientifico:'(Ceratonia siliqua)'
            },
            {
                cve_cultiv: 7,
                name: 'Algodón',
				cientifico:'(Gossypium hirsutum)'
            },
            {
                cve_cultiv: 8,
                name: 'Amaranto',
				cientifico:'(Amaranthus hypochondriacus)'
            },
			{
                cve_cultiv: 9,
                name: 'Anturio',
				cientifico:'(Anthurium andraeanum)'
            },
            {
                cve_cultiv: 10,
                name: 'Arroz',
				cientifico:'(Oryza sativa)'
            },
            {
                cve_cultiv: 11,
                name: 'Ave del paraíso',
				cientifico:'(Strelitzia reginae)'
            },
            {
                cve_cultiv: 12,
                name: 'Azucena',
				cientifico:'(Hippeastrum x hybridum)'
            },
			{
                cve_cultiv: 13,
                name: 'Berenjena',
				cientifico:'(Solanum melongena)'
            },
            {
                cve_cultiv: 14,
                name: 'Brócoli',
				cientifico:'(Brassica oleracea var. italica)'
            },
            {
                cve_cultiv: 15,
                name: 'Cacao',
				cientifico:'(Theobroma cacao)'
            },
            {
                cve_cultiv: 16,
                name: 'Café',
				cientifico:'(Coffea arabica)'
            },
			{
                cve_cultiv: 17,
                name: 'Calabacita',
				cientifico:'(Cucurbita pepo)'
				
            },
            {
                cve_cultiv: 18,
                name: 'Calabaza',
				cientifico:'(Cucurbita pepo)'
            },
            {
                cve_cultiv: 19,
                name: 'Calabaza kabocha',
				cientifico:'(Cucurbita maxima)'
            },
            {
                cve_cultiv: 20,
                name: 'Caña de azúcar',
				cientifico:'(Saccharum officinarum)'
            },
			{
                cve_cultiv: 21,
                name: 'Cártamo',
				cientifico:'(Carthamus tinctorius)'
            },
            {
                cve_cultiv: 22,
                name: 'Cebada',
				cientifico:'(Hordeum vulgare)'
            },
            {
                cve_cultiv: 23,
                name: 'Cebolla',
				cientifico:'(Allium cepa)'
            },
            {
                cve_cultiv: 24,
                name: 'Centeno',
				cientifico:'(Secale cereale)'
            },
			{
                cve_cultiv: 25,
                name: 'Chayote',
				cientifico:'(Sechium edule)'
            },
            {
                cve_cultiv: 26,
                name: 'Chícharo',
				cientifico:'(Pisum sativum)'
            },
            {
                cve_cultiv: 27,
                name: 'Chile',
				cientifico:'(Capsicum annuum)'
            },
            {
                cve_cultiv: 28,
                name: 'Chile costeño',
				cientifico:'(Capsicum annuum)'
            },
			{
                cve_cultiv: 29,
                name: 'Chile de agua',
				cientifico:'(Capsicum annuum)'
            },
            {
                cve_cultiv: 30,
                name: 'Chile dulce',
				cientifico:'(Capsicum annuum)'
            },
            {
                cve_cultiv: 31,
                name: 'Chile habanero',
				cientifico:'(Capsicum chinense)'
            },
            {
                cve_cultiv: 32,
                name: 'Chile jalapeño',
				cientifico:'(Capsicum annuum)'
            },
			{
                cve_cultiv: 33,
                name: 'Chile maax´ik',
				cientifico:'(Capsicum annuum var. glabriusculum)'
				
            },
            {
                cve_cultiv: 34,
                name: 'Chile poblano',
				cientifico:'(Capsicum annuum)'
            },
            {
                cve_cultiv: 35,
                name: 'Chile serrano',
				cientifico:'(Capsicum annuum var. accuminatum)'
            },
            {
                cve_cultiv: 36,
                name: 'Chile soledad',
				cientifico:'(Capsicum annuum)'
            },
			{
                cve_cultiv: 37,
                name: 'Chile xcatik',
				cientifico:'(Capsicum annuum)'
            },
            {
                cve_cultiv: 38,
                name: 'Cítricos',
				cientifico:'(Citrus spp.)'
            },
            {
                cve_cultiv: 39,
                name: 'Coco',
				cientifico:'(Cocos nucifera)'
            },
            {
                cve_cultiv: 40,
                name: 'Col',
				cientifico:'(Brassica oleracea var. capitata)'
            },
			{
                cve_cultiv: 41,
                name: 'Coliflor',
				cientifico:'(Brassica oleracea)'
				
            },
            {
                cve_cultiv: 42,
                name: 'Crisantemo',
				cientifico:'(Chrysanthemum indicum)'
            },
            {
                cve_cultiv: 43,
                name: 'Cucurbitáceas',
                cientifico:''
            },
            {
                cve_cultiv: 44,
                name: 'Durazno',
				cientifico:'(Prunus persica)'
            },
			{
                cve_cultiv: 45,
                name: 'Fresa',
				cientifico:'(Fragaria x ananassa)'
				
            },
            {
                cve_cultiv: 46,
                name: 'Fresa silvestre',
				cientifico:'(Fragaria mexicana)'
            },
            {
                cve_cultiv: 47,
                name: 'Frijol',
				cientifico:'(Phaseolus vulgaris)'
            },
            {
                cve_cultiv: 48,
                name: 'Frutales',
                cientifico:''
            },
			{
                cve_cultiv: 49,
                name: 'Garbanzo',
				cientifico:'(Cicer arietinum)'
				
            },
            {
                cve_cultiv: 50,
                name: 'Geranio',
				cientifico:'(Pelargonium hortorum )'
            },
            {
                cve_cultiv: 51,
                name: 'Girasol',
				cientifico:'(Helianthus annuus)'
            },
            {
                cve_cultiv: 52,
                name: 'Guanábana',
				cientifico:'(Annona muricata)'
            },
			{
                cve_cultiv: 53,
                name: 'Guayaba',
				cientifico:'(Psidium guajava)'
				
            },
            {
                cve_cultiv: 54,
                name: 'Huauzontle',
				cientifico:'(Chenopodium nuttalliae)'
            },
            {
                cve_cultiv: 55,
                name: 'Jamaica',
				cientifico:'(Hibiscus sabdariffa)'
            },
            {
                cve_cultiv: 56,
                name: 'Jícama',
				cientifico:'(Pachyrhizus erosus)'
            },
			{
                cve_cultiv: 57,
                name: 'Jitomate',
				cientifico:'(Solanum lycopersicum)'
            },
            {
                cve_cultiv: 58,
                name: 'Lima mexicana',
				cientifico:'(Citrus x limetta)'
            },
            {
                cve_cultiv: 59,
                name: 'Limón mandarino',
				cientifico:'(Citrus x limonia)'
            },
            {
                cve_cultiv: 60,
                name: 'Limón mexicano',
				cientifico:'(Citrus x aurantifolia)'
            },
			{
                cve_cultiv: 61,
                name: 'Limón persa',
				cientifico:'(Citrus x latifolia)'
				
            },
            {
                cve_cultiv: 62,
                name: 'Limón real',
				cientifico:'(Citrus x limon)'
            },
            {
                cve_cultiv: 63,
                name: 'Linaza',
				cientifico:'(Linum usitatissimum)'
            },
            {
                cve_cultiv: 64,
                name: 'Maíz',
				cientifico:'(Zea mays)'
            },
			{
                cve_cultiv: 65,
                name: 'Mandarina',
				cientifico:'(Citrus reticulata)'
				
            },
            {
                cve_cultiv: 66,
                name: 'Mandarino',
				cientifico:'(Citrus nobilis var. deliciosa)'
            },
            {
                cve_cultiv: 67,
                name: 'Mango',
				cientifico:'(Mangifera indica)'
            },
            {
                cve_cultiv: 68,
                name: 'Manzana',
				cientifico:'(Malus domestica)'
            },
			{
                cve_cultiv: 69,
                name: 'Melón',
				cientifico:'(Cucumis melo)'
				
            },
            {
                cve_cultiv: 70,
                name: 'Mora',
				cientifico:'(Rubus spp.)'
            },
            {
                cve_cultiv: 71,
                name: 'Nabo',
				cientifico:'(Brassica rapa  subsp. rapa)'
            },
            {
                cve_cultiv: 72,
                name: 'Nanche',
				cientifico:'(Byrsonima crassifolia)'
            },
			{
                cve_cultiv: 73,
                name: 'Naranja',
				cientifico:'(Citrus sinensis)'
				
            },
            {
                cve_cultiv: 74,
                name: 'Naranja agria',
				cientifico:'(Citrus x aurantium)'
            },
            {
                cve_cultiv: 75,
                name: 'No especificado',
				cientifico:''
            },
            {
                cve_cultiv: 76,
                name: 'Nopal',
				cientifico:'(Opuntia spp.)'
            },
			{
                cve_cultiv: 77,
                name: 'Nopal calvo',
				cientifico:'(Opuntia atrispina)'
				
            },
            {
                cve_cultiv: 78,
                name: 'Nogal pecanero',
				cientifico:'(Carya Illinoinensis)'
            },
            {
                cve_cultiv: 79,
                name: 'Ornamentales',
                cientifico:''
            },
            {
                cve_cultiv: 80,
                name: 'Otros'
            },
			{
                cve_cultiv: 81,
                name: 'Palma de aceite africana',
				cientifico:'(Elaeis guineensis)'
				
            },
            {
                cve_cultiv: 82,
                name: 'Papa',
				cientifico:'(Solanum tuberosum)'
            },
            {
                cve_cultiv: 83,
                name: 'Pápalo',
				cientifico:'(Porophyllum ruderale)'
            },
            {
                cve_cultiv: 84,
                name: 'Papaya',
				cientifico:'(Carica papaya)'
            },
			{
                cve_cultiv: 85,
                name: 'Pepino',
				cientifico:'(Cucumis sativus)'
            },
            {
                cve_cultiv: 86,
                name: 'Pera',
				cientifico:'(Pyrus communis)'
            },
            {
                cve_cultiv: 87,
                name: 'Pimiento',
				cientifico:'(Capsicum annuum)'
            },
            {
                cve_cultiv: 88,
                name: 'Piña',
				cientifico:'(Ananas comosus)'
            },
			{
                cve_cultiv: 89,
                name: 'Plátano',
				cientifico:'(Musa paradisiaca)'		
            },
            {
                cve_cultiv: 90,
                name: 'Rábano',
				cientifico:'(Raphanus sativus)'
            },
            {
                cve_cultiv: 91,
                name: 'Rambután',
				cientifico:'(Nephelium lappaceum)'
            },
            {
                cve_cultiv: 92,
                name: 'Rosa',
				cientifico:'(Rosa spp.)'
            },
			{
                cve_cultiv: 93,
                name: 'Sandía',
				cientifico:'(Citrullus lanatus)'
            },
            {
                cve_cultiv: 94,
                name: 'Solanáceas',
				cientifico:''
            },
            {
                cve_cultiv: 95,
                name: 'Sorgo',
				cientifico:'(Sorghum vulgare)'
            },
            {
                cve_cultiv: 96,
                name: 'Soya',
				cientifico:'(Glycine max)'
            },
			{
                cve_cultiv: 97,
                name: 'Tabaco',
				cientifico:'(Nicotiana tabacum)'
				
            },
            {
                cve_cultiv: 98,
                name: 'Tejocote',
				cientifico:'(Crataegus mexicana)'
            },
            {
                cve_cultiv: 99,
                name: 'Tomate',
				cientifico:'(Physalis ixocarpa)'
            },
            {
                cve_cultiv: 100,
                name: 'Tomatillo',
				cientifico:'(Physalis philadelphica)'
            },
			{
                cve_cultiv: 101,
                name: 'Toronja',
				cientifico:'(Citrus x paradisi)'
				
            },
            {
                cve_cultiv: 102,
                name: 'Trébol',
				cientifico:'(Trifolium pratense)'
            },
            {
                cve_cultiv: 103,
                name: 'Trigo',
				cientifico:'(Triticum aestivum)'
            },
            {
                cve_cultiv: 104,
                name: 'Tulipán',
				cientifico:'(Tulipa spp.)'
            },
			{
                cve_cultiv: 105,
                name: 'Vainilla',
				cientifico:'(Vanilla planifolia)'
				
            },
            {
                cve_cultiv: 106,
                name: 'Vid',
				cientifico:'(Vitis vinifera)'
            },
            {
                cve_cultiv: 107,
                name: 'Yaca',
				cientifico:'(Artocarpus heterophyllus)'
            },
            {
                cve_cultiv: 108,
                name: 'Azucena',
				cientifico:'(Hippeastrum sp.)'
            },
			{
                cve_cultiv: 109,
                name: 'Café',
				cientifico:'(Coffea canephora)'
				
            },
            {
                cve_cultiv: 110,
                name: 'Calabaza',
				cientifico:'(Cucurbita argyrosperma)'
            },
            {
                cve_cultiv: 111,
                name: 'Chile',
				cientifico:'(Capsicum spp.)'
            },
            {
                cve_cultiv: 112,
                name: 'Crisantemo',
				cientifico:'(Chrysanthemum x morifolium)'
            },
			{
                cve_cultiv: 113,
                name: 'Crisantemo',
				cientifico:'(Dendranthema grandiflora)'
				
            },
            {
                cve_cultiv: 114,
                name: 'Girasol',
				cientifico:'(Helianthus sp.)'
            },
            {
                cve_cultiv: 115,
                name: 'Manzana',
				cientifico:'(Malus pumila)'
            },
            {
                cve_cultiv: 116,
                name: 'Plátano',
				cientifico:'(Musa acuminata)'
            },
			{
                cve_cultiv: 117,
                name: 'Rosa',
				cientifico:'(Rosa centifolia)'
				
            },
            {
                cve_cultiv: 118,
                name: 'Rosa',
				cientifico:'(Rosa sp.)'
            },
            {
                cve_cultiv: 119,
                name: 'Trigo',
				cientifico:'(Triticum vulgare)'
            },
            {
                cve_cultiv: 120,
                name: 'Trigo',
				cientifico:'(Triticum spp.)'
            },
			{
                cve_cultiv: 121,
                name: 'Vainilla',
				cientifico:'(Vanilla sp.)'
				
            },
            {
                cve_cultiv: '80a',
                name: 'Acacia',
				cientifico:'(Acacia sp.)'
            },
            {
                cve_cultiv: '80b',
                name: 'Ahuejote',
				cientifico:'(Salix bonplandiana)'
            },
            {
                cve_cultiv: '80c',
                name: 'Álamo',
				cientifico:'(Populus alba)'
            },
			{
                cve_cultiv: '80d',
                name: 'Aralia',
				cientifico:'(Polyscias fruticosa)'
            },
            {
                cve_cultiv: '80e',
                name: 'Área de agostadero',
				cientifico:''
            },
            {
                cve_cultiv: '80f',
                name: 'Avenida',
				cientifico:''
            },
			{
                cve_cultiv: '80g',
                name: 'Bambú',
				cientifico:'(Bambusa vulgaris)'
            },
            {
                cve_cultiv: '80h',
                name: 'Banderilla Diana',
				cientifico:'(Bouteloua curtipendula)'
            },
            {
                cve_cultiv: '80i',
                name: 'Banqueta',
				cientifico:''
            },
			{
                cve_cultiv: '80j',
                name: 'Borde de camino',
				cientifico:''
            },
            {
                cve_cultiv: '80k',
                name: 'Bosque de coníferas',
				cientifico:''
            },
            {
                cve_cultiv: '80l',
                name: 'Bosque de encino',
				cientifico:''
            },
			{
                cve_cultiv: '80m',
                name: 'Bosque de oyamel, pino y encino',
				cientifico:''
            },
            {
                cve_cultiv: '80n',
                name: 'Bosque de pino',
				cientifico:''
            },
            {
                cve_cultiv: '80o',
                name: 'Bosque de pino perturbado',
				cientifico:''
            },
			{
                cve_cultiv: '80p',
                name: 'Bosque de pino-encino',
				cientifico:''
            },
            {
                cve_cultiv: '80q',
                name: 'Bosque de pinos',
				cientifico:'(Pinus patula)'
            },
            {
                cve_cultiv: '80r',
                name: 'Bosque mesófilo de montaña',
				cientifico:''
            },
			{
                cve_cultiv: '80s',
                name: 'Bosque tropical caducifolio',
				cientifico:''
            },
            {
                cve_cultiv: '80t',
                name: 'Bugambilia',
				cientifico:'(Bougainvillea glabra)'
            },
            {
                cve_cultiv: '80u',
                name: 'Camino a Campo Experimental Zoquiapan',
				cientifico:''
            },
			{
                cve_cultiv: '80v',
                name: 'Campo de futbol',
				cientifico:''
            },
            {
                cve_cultiv: '80w',
                name: 'Campos experimentales',
				cientifico:''
            },
            {
                cve_cultiv: '80x',
                name: 'Capote',
				cientifico:'(Xanthosoma robustum)'
            },
			{
                cve_cultiv: '80y',
                name: 'Carretera',
				cientifico:''
            },
            {
                cve_cultiv: '80z',
                name: 'Casuarina',
				cientifico:'(Casuarina equisetifolia)'
            },
            {
                cve_cultiv: '80aa',
                name: 'Cerca de laguna',
				cientifico:''
            },
			{
                cve_cultiv: '80ab',
                name: 'Césped',
				cientifico:'(Paspalum vaginatum )'
            },
            {
                cve_cultiv: '80ac',
                name: 'Cheflera',
				cientifico:'(Schefflera actinophylla )'
            },
            {
                cve_cultiv: '80ad',
                name: 'Colorín',
				cientifico:'(Erythrina coralloides)'
            },
			{
                cve_cultiv: '80ae',
                name: 'Copalillo',
				cientifico:'(Parthenium incanum)'
            },
            {
                cve_cultiv: '80af',
                name: 'Costilla de Adán',
				cientifico:'(Monstera deliciosa)'
            },
            {
                cve_cultiv: '80ag',
                name: 'Cresta rocosa con pinos y encinos',
				cientifico:''
            },
			{
                cve_cultiv: '80ah',
                name: 'Ecotono entre matorral xerófilo y bosque de encino',
				cientifico:''
            },
            {
                cve_cultiv: '80ai',
                name: 'Encino',
				cientifico:'(Quercus rugosa)'
            },
            {
                cve_cultiv: '80aj',
                name: 'Encino',
				cientifico:'(Quercus castanea)'
            },
			{
                cve_cultiv: '80ak',
                name: 'Encino',
				cientifico:'(Quercus deserticola)'
            },
            {
                cve_cultiv: '80al',
                name: 'Encino',
				cientifico:'(Quercus potosina)'
            },
            {
                cve_cultiv: '80am',
                name: 'Encino',
				cientifico:'(Quercus sp.)'
            },
			{
                cve_cultiv: '80an',
                name: 'Estafiate',
				cientifico:'(Ambrosia confertiflora)'
            },
            {
                cve_cultiv: '80ao',
                name: 'Estropajo',
				cientifico:'(Luffa cylindrica)'
            },
            {
                cve_cultiv: '80ap',
                name: 'Falso alcanfor',
				cientifico:'(Heterotheca latifolia)'
            },
			{
                cve_cultiv: '80aq',
                name: 'Ficus',
				cientifico:'(Ficus spp.)'
            },
            {
                cve_cultiv: '80ar',
                name: 'Ficus',
				cientifico:'(Ficus sp.)'
            },
            {
                cve_cultiv: '80as',
                name: 'Filodendro',
				cientifico:'(Philodendron hastatum)'
            },
			{
                cve_cultiv: '80at',
                name: 'Flor de bígaro',
				cientifico:'(Catharanthus roseus)'
            },
            {
                cve_cultiv: '80au',
                name: 'Fresno',
				cientifico:'(Fraxinus sp.)'
            },
            {
                cve_cultiv: '80av',
                name: 'Gramíneas',
				cientifico:''
            },
			{
                cve_cultiv: '80aw',
                name: 'Helecho',
				cientifico:'(Pteridium aquilinum)'
            },
            {
                cve_cultiv: '80ax',
                name: 'Hibisco',
				cientifico:'(Hibiscus sp.)'
            },
            {
                cve_cultiv: '80ay',
                name: 'Hierba amarilla',
				cientifico:'(Baileya multiradiata)'
            },
			{
                cve_cultiv: '80az',
                name: 'Huizache',
				cientifico:'(Acacia pennatula)'
            },
            {
                cve_cultiv: '80ba',
                name: 'Jardín',
				cientifico:''
            },
            {
                cve_cultiv: '80bb',
                name: 'Jonote',
				cientifico:'(Heliocarpus appendiculatus)'
            },,
			{
                cve_cultiv: '80bc',
                name: 'Laurel',
				cientifico:'(Laurus nobilis)'
            },
            {
                cve_cultiv: '80bd',
                name: 'Laurel',
				cientifico:'(Laurus sp.)'
            },
            {
                cve_cultiv: '80be',
                name: 'Limón mexicano ornato',
				cientifico:'(Citrus x aurantifolia)'
            },
			{
                cve_cultiv: '80bf',
                name: 'Liquidámbar',
				cientifico:'(Liquidambar macrophylla)'
            },
            {
                cve_cultiv: '80bg',
                name: 'Liquidámbar',
				cientifico:'(Liquidambar sp.)'
            },
            {
                cve_cultiv: '80bh',
                name: 'Lote baldio',
				cientifico:''
            },
			{
                cve_cultiv: '80bi',
                name: 'Maleza',
				cientifico:''
            },
            {
                cve_cultiv: '80bj',
                name: 'Maleza botón de cadete',
				cientifico:'(Leonotis nepetaefolia)'
            },
            {
                cve_cultiv: '80bk',
                name: 'Matorral alto espinoso',
				cientifico:''
            },
			{
                cve_cultiv: '80bl',
                name: 'Matorral crasicaule',
				cientifico:''
            },
            {
                cve_cultiv: '80bm',
                name: 'Matorral xerófilo',
				cientifico:'(Salix bonplandiana)'
            },
            {
                cve_cultiv: '80bn',
                name: 'Mezquite',
				cientifico:'(Prosopis laevigata)'
            },
			{
                cve_cultiv: '80bo',
                name: 'Mezquite',
				cientifico:'(Prosopis glandulosa)'
            },
            {
                cve_cultiv: '80bp',
                name: 'Mostacilla',
				cientifico:'(Sisymbrium irio)'
            },
            {
                cve_cultiv: '80bq',
                name: 'Mostaza silvestre',
				cientifico:'(Brassica campestris)'
            },
			{
                cve_cultiv: '80br',
                name: 'Naranja agria ornato',
				cientifico:'(Citrus x aurantium)'
            },
            {
                cve_cultiv: '80bs',
                name: 'Obelisco',
				cientifico:'(Hibiscus spp.)'
            },
            {
                cve_cultiv: '80bt',
                name: 'Oceloxóchitl',
				cientifico:'(Tigridia pavonia)'
            },
			{
                cve_cultiv: '80bu',
                name: 'Olmo',
				cientifico:'(Ulmus sp.)'
            },
            {
                cve_cultiv: '80bv',
                name: 'Orilla de camino, junto a campo deportivo',
				cientifico:''
            },
            {
                cve_cultiv: '80bw',
                name: 'Orilla de laguna',
				cientifico:''
            },
			{
                cve_cultiv: '80bx',
                name: 'Orillas de arroyo',
				cientifico:''
            },
            {
                cve_cultiv: '80by',
                name: 'Orillas del Río Tlamincas',
				cientifico:''
            },
            {
                cve_cultiv: '80bz',
                name: 'Palma canaria',
				cientifico:'(Phoenix canariensis)'
            },
			{
                cve_cultiv: '80ca',
                name: 'Parcelas experimentales',
				cientifico:''
            },
            {
                cve_cultiv: '80cb',
                name: 'Parque recreativo',
				cientifico:''
            },
            {
                cve_cultiv: '80cc',
                name: 'Pastizal',
				cientifico:''
            },
			,
            {
                cve_cultiv: '80bp',
                name: 'Mostacilla',
				cientifico:'(Sisymbrium irio)'
            },
            {
                cve_cultiv: '80bq',
                name: 'Mostaza silvestre',
				cientifico:'(Brassica campestris)'
            },
			{
                cve_cultiv: '80br',
                name: 'Naranja agria ornato',
				cientifico:'(Citrus x aurantium)'
            },
            {
                cve_cultiv: '80bs',
                name: 'Obelisco',
				cientifico:'(Hibiscus spp.)'
            },
            {
                cve_cultiv: '80bt',
                name: 'Oceloxóchitl',
				cientifico:'(Tigridia pavonia)'
            },
			{
                cve_cultiv: '80bu',
                name: 'Olmo',
				cientifico:'(Ulmus sp.)'
            },
            {
                cve_cultiv: '80bv',
                name: 'Orilla de camino, junto a campo deportivo',
				cientifico:''
            },
            {
                cve_cultiv: '80bw',
                name: 'Orilla de laguna',
				cientifico:''
            },
			{
                cve_cultiv: '80bx',
                name: 'Orillas de arroyo',
				cientifico:''
            },
            {
                cve_cultiv: '80by',
                name: 'Orillas del Río Tlamincas',
				cientifico:''
            },
            {
                cve_cultiv: '80bz',
                name: 'Palma canaria',
				cientifico:'(Phoenix canariensis)'
            },
			{
                cve_cultiv: '80ca',
                name: 'Parcelas experimentales',
				cientifico:''
            },
            {
                cve_cultiv: '80cb',
                name: 'Parque recreativo',
				cientifico:''
            },
            {
                cve_cultiv: '80cc',
                name: 'Pastizal',
				cientifico:''
            },
            {
                cve_cultiv: '80cd',
                name: 'Pastizal inducido',
				cientifico:''
            },
            {
                cve_cultiv: '80ce',
                name: 'Pastizal mediano arborescente',
				cientifico:''
            },
			{
                cve_cultiv: '80cf',
                name: 'Pasto guineo',
				cientifico:'(Panicum maximun)'
            },
            {
                cve_cultiv: '80cg',
                name: 'Pasto rayado',
				cientifico:'(Echinochloa crus galli)'
            },
            {
                cve_cultiv: '80ch',
                name: 'Pata de gallina',
				cientifico:'(Digitaria horizontalis)'
            },
			{
                cve_cultiv: '80ci',
                name: 'Petunia',
				cientifico:'(Petunia sp.)'
            },
            {
                cve_cultiv: '80cj',
                name: 'Pimentero',
				cientifico:'(Schinus terebinthifolius)'
            },
            {
                cve_cultiv: '80ck',
                name: 'Pino',
				cientifico:'(Araucaria araucana)'
            },
			{
                cve_cultiv: '80cl',
                name: 'Pino',
				cientifico:'(Pinus sp.)'
            },
            {
                cve_cultiv: '80cm',
                name: 'Pirúl',
				cientifico:'(Schinus molle)'
            },
            {
                cve_cultiv: '80cn',
                name: 'Población',
				cientifico:''
            },
			{
                cve_cultiv: '80co',
                name: 'Rabanillo',
				cientifico:'(Raphanus raphanistrum)'
            },
            {
                cve_cultiv: '80cp',
                name: 'Roble de duelas',
				cientifico:'(Quercus xalapensis)'
            },
            {
                cve_cultiv: '80cq',
                name: 'Roble real',
				cientifico:'(Quercus germana)'
            },
            {
                cve_cultiv: '80cr',
                name: 'Sauce',
				cientifico:'(Salix sp.)'
            },
            {
                cve_cultiv: '80cs',
                name: 'Sauce blanco',
				cientifico:'(Salix alba)'
            },
			{
                cve_cultiv: '80ct',
                name: 'Secuoya roja',
				cientifico:'(Sequoia sempervirens)'
            },
            {
                cve_cultiv: '80cu',
                name: 'Selva baja caducifolia',
				cientifico:''
            },
            {
                cve_cultiv: '80cv',
                name: 'Selva mediana caducifolia',
				cientifico:''
            },
			{
                cve_cultiv: '80cw',
                name: 'Singonio',
				cientifico:'(Syngonium podophyllum)'
            },
            {
                cve_cultiv: '80cx',
                name: 'Suelo (arena)',
				cientifico:''
            },
            {
                cve_cultiv: '80cy',
                name: 'Suelo de finca cafetalera',
				cientifico:''
            },
			{
                cve_cultiv: '80cz',
                name: 'Teca',
				cientifico:'(Tectona grandis)'
            },
            {
                cve_cultiv: '80da',
                name: 'Trompetilla',
				cientifico:'(Bouvardia ternifolia)'
            },
            {
                cve_cultiv: '80db',
                name: 'Trueno',
				cientifico:'(Ligustrum lucidum)'
            },
			{
                cve_cultiv: '80dc',
                name: 'Tulillo',
				cientifico:'(Aster spinosus)'
            },
            {
                cve_cultiv: '80de',
                name: 'Violeta africana',
				cientifico:'(Saintpaulia ionantha)'
            },
            {
                cve_cultiv: '80dg',
                name: 'Zacate bahía',
				cientifico:'(Paspalum notatum)'
            },
			 {
                cve_cultiv: '80dh',
                name: 'Zacate banderilla',
				cientifico:'(Cenchrus echinatus)'
            },
            {
                cve_cultiv: '80di',
                name: 'Zacate blanco',
				cientifico:'(Ixophorus unisetus)'
            },
			{
                cve_cultiv: '80dj',
                name: 'Zacate Johnson',
				cientifico:'(Sorgum halepense)'
            },
            {
                cve_cultiv: '80dk',
                name: 'Zapote de monte',
				cientifico:'(Pouteria neglecta)'
            },
            {
                cve_cultiv: '80dl',
                name: 'Otros',
				cientifico:'(Erythrina spp.)'
            },
			{
                cve_cultiv: '80dm',
                name: 'Otros',
				cientifico:'(Trichilia spp.)'
            },
            {
                cve_cultiv: '80dn',
                name: 'Otros',
				cientifico:'(Cynodon dactylon)'
            },
            {
                cve_cultiv: '80do',
                name: 'Otros',
				cientifico:'(Gutierrezia sarothrae)'
            }
        ];
    }

    getCapas = async (lyr, folder, nombre_archivo, estilo, pop, ext, estilo_pts, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        let geojsonLayer = L.geoJson(data, {
            style: estilo,
            onEachFeature: pop,
            pointToLayer: estilo_pts    //Estilo para puntos
        });

        lyr.addLayer(geojsonLayer);
    }

    getMunicipiosFiltrados = async (folder, nombre_archivo, ext, filtro, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        let mun_filtrados = [];

        document.getElementById("misResultados").innerHTML = `
        <tr>
            <th>Estado</th>
            <th>Municipio</th>
            <th>Clave Cultivo</th>
            <th>Cultivo</th>
        </tr>
        `;

        data.features.map(row => {
            if (row.properties.CVE_ENT == filtro.edo) {

                let array_cultivos = row.properties.cve_cultiv.split(",");
                let names_cultivos = [];

                array_cultivos.forEach((i) => {

                    this.misValoresCultivos.forEach((j) => {

                        if (i == j.cve_cultiv) {

                            let obj = {
                                cve_cultivo: j.cve_cultiv,
                                name: j.name,
                                cientifico: j.cientifico
                            }

                            names_cultivos.push(obj);

                            console.log(names_cultivos)
                        }
                    });
                });

                let test2 = '';

                names_cultivos.forEach((i) => {
                    test2 += `<li><i>${i.name}</i> ${i.cientifico}</li>`;
                });

                mun_filtrados.push(row.properties.NOMGEO);

                document.getElementById("misResultados").innerHTML += `
                <tr>
                    <td>${row.properties.Estado}</td>
                    <td>${row.properties.NOMGEO}</td>
                    <td>${row.properties.cve_cultiv}</td>
                    <td>${test2}</td>
                </tr>`;
            }
        });

        console.log(mun_filtrados)

    }

    getCapaFiltrada = async (folder, nombre_archivo, estilo, pop, ext, filtro, map, req, res) => {
        const response = await fetch('geojson/' + folder + nombre_archivo + ext);
        const data = await response.json();

        //console.log(data)

        //otra forma de filtrar capa
        let filter_data = [];

        this.getMunicipiosFiltrados("MX/", "municipios_cul_plagas", ".geojson", filtro);

        data.features.map(row => {

            //Municipios solo para 2 casos muy especificos (cuando edo y mun estan llenos y cultivo esta o no vacio )
            if (filtro.edo != "") {

                if (filtro.mun != "") {
                    if (filtro.cultivo != "") {
                        if (row.properties.CVE_ENT == filtro.edo && row.properties.CVEGEO == filtro.mun && row.properties.cve_cultiv == filtro.cultivo) {
                            filter_data.push(row);
                        }
                    } else {

                        if (row.properties.CVE_ENT == filtro.edo && row.properties.CVEGEO == filtro.mun) {
                            filter_data.push(row);
                        }
                    }
                } else {

                    if (filtro.cultivo == "") {
                        if (row.properties.CVE_ENT == filtro.edo) {
                            filter_data.push(row);
                        }
                    } else {
                        let names = row.properties.cve_cultiv.split(",");

                        if (row.properties.CVE_ENT == filtro.edo && (names.includes(filtro.cultivo))) {
                            filter_data.push(row);
                        }
                    }
                }

            } else {
                if (filtro.mun == "") {
                    if (filtro.cultivo == "") {
                        filter_data.push(row);
                    } else {
                        if (filtro.geom == "1") {
                            if (row.properties.cve_cultiv == filtro.cultivo) {
                                filter_data.push(row);
                            }
                        } else {
 
                            let names = row.properties.cve_cultiv.split(",")

                            if (names.includes(filtro.cultivo)) {
                                filter_data.push(row);
                            }
                        }
                    }
                } else {
                    if (filtro.cultivo == "") {
                        if (row.properties.CVEGEO == filtro.mun) {
                            filter_data.push(row);
                        }
                    } else {
                        if(row.properties.CVEGEO == filtro.mun && row.properties.cve_cultiv == filtro.cultivo){
                            filter_data.push(row);
                        }
                    }
                }
            }
        });

        //console.log(filter_data)

        if (filter_data.length == 0) {

            this.modal_window.show();

            //solo funciona una vez
            /* this.modal_window.prompt({
                callback:function(){},
                buttonOK: "Aceptar",
            }).show(); */
        }

        //esta línea limpiar el layergroup antes de llenarlo
        this.lyr_filtro.clearLayers();

        let geojsonLayer = L.geoJson(filter_data, {
            style: estilo,
            onEachFeature: pop
        });

        //zoom a los limites (bounds) del geojsonLayer
        map.fitBounds(geojsonLayer.getBounds());

        this.lyr_filtro.addLayer(geojsonLayer);

        this.lyr_filtro.addTo(map);
    }

}