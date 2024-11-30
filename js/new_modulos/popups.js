import Controles from "./controles.js";

export default class Popups {
    constructor() {
        //esto resuelve el problema del this, funcion anonima layer.on('click', function (e) { no deja usar this.myFunction

        this.popGenerico = this.popGenerico.bind(this);
        this.mxEdosPop = this.mxEdosPop.bind(this);
        this.oisaPop = this.oisaPop.bind(this);
        this.cultivosPop = this.cultivosPop.bind(this);
        this.edosCultivosPop = this.edosCultivosPop.bind(this);

        this.newArray = [];
        this.namesArray = [];

        this.barColors = ["red", "green", "blue", "orange", "brown"];

        //Diccionario de datos para Estados Cultivos
        this.misValoresCultivos = [
            {
                cve_cultiv: 1,
                name: 'Agave',
				cintifico:'(Agave tequilana)'
            },
            {
                cve_cultiv: 2,
                name: 'Aguacate',
				cintifico:'(Persea americana)'
            },
            {
                cve_cultiv: 3,
                name: 'Ajo',
				cintifico:'(Allium sativum)'
            },
            {
                cve_cultiv: 4,
                name: 'Ajonjolí',
				cintifico:'(Sesamum indicum)'
            },
			{
                cve_cultiv: 5,
                name: 'Alfalfa',
				cintifico:'(Medicago sativa)'
            },
            {
                cve_cultiv: 6,
                name: 'Algarrobo',
				cintifico:'(Ceratonia siliqua)'
            },
            {
                cve_cultiv: 7,
                name: 'Algodón',
				cintifico:'(Gossypium hirsutum)'
            },
            {
                cve_cultiv: 8,
                name: 'Amaranto',
				cintifico:'(Amaranthus hypochondriacus)'
            },
			{
                cve_cultiv: 9,
                name: 'Anturio',
				cintifico:'(Anthurium andraeanum)'
            },
            {
                cve_cultiv: 10,
                name: 'Arroz',
				cintifico:'(Oryza sativa)'
            },
            {
                cve_cultiv: 11,
                name: 'Ave del paraíso',
				cintifico:'(Strelitzia reginae)'
            },
            {
                cve_cultiv: 12,
                name: 'Azucena',
				cintifico:'(Hippeastrum x hybridum)'
            },
			{
                cve_cultiv: 13,
                name: 'Berenjena',
				cintifico:'(Solanum melongena)'
            },
            {
                cve_cultiv: 14,
                name: 'Brócoli',
				cintifico:'(Brassica oleracea var. italica)'
            },
            {
                cve_cultiv: 15,
                name: 'Cacao',
				cintifico:'(Theobroma cacao)'
            },
            {
                cve_cultiv: 16,
                name: 'Café',
				cintifico:'(Coffea arabica)'
            },
			{
                cve_cultiv: 17,
                name: 'Calabacita',
				cintifico:'(Cucurbita pepo)'
				
            },
            {
                cve_cultiv: 18,
                name: 'Calabaza',
				cintifico:'(Cucurbita pepo)'
            },
            {
                cve_cultiv: 19,
                name: 'Calabaza kabocha',
				cintifico:'(Cucurbita maxima)'
            },
            {
                cve_cultiv: 20,
                name: 'Caña de azúcar',
				cintifico:'(Saccharum officinarum)'
            },
			{
                cve_cultiv: 21,
                name: 'Cártamo',
				cintifico:'(Carthamus tinctorius)'
            },
            {
                cve_cultiv: 22,
                name: 'Cebada',
				cintifico:'(Hordeum vulgare)'
            },
            {
                cve_cultiv: 23,
                name: 'Cebolla',
				cintifico:'(Allium cepa)'
            },
            {
                cve_cultiv: 24,
                name: 'Centeno',
				cintifico:'(Secale cereale)'
            },
			{
                cve_cultiv: 25,
                name: 'Chayote',
				cintifico:'(Sechium edule)'
            },
            {
                cve_cultiv: 26,
                name: 'Chícharo',
				cintifico:'(Pisum sativum)'
            },
            {
                cve_cultiv: 27,
                name: 'Chile',
				cintifico:'(Capsicum annuum)'
            },
            {
                cve_cultiv: 28,
                name: 'Chile costeño',
				cintifico:'(Capsicum annuum)'
            },
			{
                cve_cultiv: 29,
                name: 'Chile de agua',
				cintifico:'(Capsicum annuum)'
            },
            {
                cve_cultiv: 30,
                name: 'Chile dulce',
				cintifico:'(Capsicum annuum)'
            },
            {
                cve_cultiv: 31,
                name: 'Chile habanero',
				cintifico:'(Capsicum chinense)'
            },
            {
                cve_cultiv: 32,
                name: 'Chile jalapeño',
				cintifico:'(Capsicum annuum)'
            },
			{
                cve_cultiv: 33,
                name: 'Chile maax´ik',
				cintifico:'(Capsicum annuum var. glabriusculum)'
				
            },
            {
                cve_cultiv: 34,
                name: 'Chile poblano',
				cintifico:'(Capsicum annuum)'
            },
            {
                cve_cultiv: 35,
                name: 'Chile serrano',
				cintifico:'(Capsicum annuum var. accuminatum)'
            },
            {
                cve_cultiv: 36,
                name: 'Chile soledad',
				cintifico:'(Capsicum annuum)'
            },
			{
                cve_cultiv: 37,
                name: 'Chile xcatik',
				cintifico:'(Capsicum annuum)'
            },
            {
                cve_cultiv: 38,
                name: 'Cítricos',
				cintifico:'(Citrus spp.)'
            },
            {
                cve_cultiv: 39,
                name: 'Coco',
				cintifico:'(Cocos nucifera)'
            },
            {
                cve_cultiv: 40,
                name: 'Col',
				cintifico:'(Brassica oleracea var. capitata)'
            },
			{
                cve_cultiv: 41,
                name: 'Coliflor',
				cintifico:'(Brassica oleracea)'
				
            },
            {
                cve_cultiv: 42,
                name: 'Crisantemo',
				cintifico:'(Chrysanthemum indicum)'
            },
            {
                cve_cultiv: 43,
                name: 'Cucurbitáceas'
            },
            {
                cve_cultiv: 44,
                name: 'Durazno',
				cintifico:'(Prunus persica)'
            },
			{
                cve_cultiv: 45,
                name: 'Fresa',
				cintifico:'(Fragaria x ananassa)'
				
            },
            {
                cve_cultiv: 46,
                name: 'Fresa silvestre',
				cintifico:'(Fragaria mexicana)'
            },
            {
                cve_cultiv: 47,
                name: 'Frijol',
				cintifico:'(Phaseolus vulgaris)'
            },
            {
                cve_cultiv: 48,
                name: 'Frutales'
            },
			{
                cve_cultiv: 49,
                name: 'Garbanzo',
				cintifico:'(Cicer arietinum)'
				
            },
            {
                cve_cultiv: 50,
                name: 'Geranio',
				cintifico:'(Pelargonium hortorum )'
            },
            {
                cve_cultiv: 51,
                name: 'Girasol',
				cintifico:'(Helianthus annuus)'
            },
            {
                cve_cultiv: 52,
                name: 'Guanábana',
				cintifico:'(Annona muricata)'
            },
			{
                cve_cultiv: 53,
                name: 'Guayaba',
				cintifico:'(Psidium guajava)'
				
            },
            {
                cve_cultiv: 54,
                name: 'Huauzontle',
				cintifico:'(Chenopodium nuttalliae)'
            },
            {
                cve_cultiv: 55,
                name: 'Jamaica',
				cintifico:'(Hibiscus sabdariffa)'
            },
            {
                cve_cultiv: 56,
                name: 'Jícama',
				cintifico:'(Pachyrhizus erosus)'
            },
			{
                cve_cultiv: 57,
                name: 'Jitomate',
				cintifico:'(Solanum lycopersicum)'
            },
            {
                cve_cultiv: 58,
                name: 'Lima mexicana',
				cintifico:'(Citrus x limetta)'
            },
            {
                cve_cultiv: 59,
                name: 'Limón mandarino',
				cintifico:'(Citrus x limonia)'
            },
            {
                cve_cultiv: 60,
                name: 'Limón mexicano',
				cintifico:'(Citrus x aurantifolia)'
            },
			{
                cve_cultiv: 61,
                name: 'Limón persa',
				cintifico:'(Citrus x latifolia)'
				
            },
            {
                cve_cultiv: 62,
                name: 'Limón real',
				cintifico:'(Citrus x limon)'
            },
            {
                cve_cultiv: 63,
                name: 'Linaza',
				cintifico:'(Linum usitatissimum)'
            },
            {
                cve_cultiv: 64,
                name: 'Maíz',
				cintifico:'(Zea mays)'
            },
			{
                cve_cultiv: 65,
                name: 'Mandarina',
				cintifico:'(Citrus reticulata)'
				
            },
            {
                cve_cultiv: 66,
                name: 'Mandarino',
				cintifico:'(Citrus nobilis var. deliciosa)'
            },
            {
                cve_cultiv: 67,
                name: 'Mango',
				cintifico:'(Mangifera indica)'
            },
            {
                cve_cultiv: 68,
                name: 'Manzana',
				cintifico:'(Malus domestica)'
            },
			{
                cve_cultiv: 69,
                name: 'Melón',
				cintifico:'(Cucumis melo)'
				
            },
            {
                cve_cultiv: 70,
                name: 'Mora',
				cintifico:'(Rubus spp.)'
            },
            {
                cve_cultiv: 71,
                name: 'Nabo',
				cintifico:'(Brassica rapa  subsp. rapa)'
            },
            {
                cve_cultiv: 72,
                name: 'Nanche',
				cintifico:'(Byrsonima crassifolia)'
            },
			{
                cve_cultiv: 73,
                name: 'Naranja',
				cintifico:'(Citrus sinensis)'
				
            },
            {
                cve_cultiv: 74,
                name: 'Naranja agria',
				cintifico:'(Citrus x aurantium)'
            },
            {
                cve_cultiv: 75,
                name: 'No especificado',
				cintifico:''
            },
            {
                cve_cultiv: 76,
                name: 'Nopal',
				cintifico:'(Opuntia spp.)'
            },
			{
                cve_cultiv: 77,
                name: 'Nopal calvo',
				cintifico:'(Opuntia atrispina)'
				
            },
            {
                cve_cultiv: 78,
                name: 'Nogal pecanero',
				cintifico:'(Carya Illinoinensis)'
            },
            {
                cve_cultiv: 79,
                name: 'Ornamentales'
            },
            {
                cve_cultiv: 80,
                name: 'Otros'
            },
			{
                cve_cultiv: 81,
                name: 'Palma de aceite africana',
				cintifico:'(Elaeis guineensis)'
				
            },
            {
                cve_cultiv: 82,
                name: 'Papa',
				cintifico:'(Solanum tuberosum)'
            },
            {
                cve_cultiv: 83,
                name: 'Pápalo',
				cintifico:'(Porophyllum ruderale)'
            },
            {
                cve_cultiv: 84,
                name: 'Papaya',
				cintifico:'(Carica papaya)'
            },
			{
                cve_cultiv: 85,
                name: 'Pepino',
				cintifico:'(Cucumis sativus)'
            },
            {
                cve_cultiv: 86,
                name: 'Pera',
				cintifico:'(Pyrus communis)'
            },
            {
                cve_cultiv: 87,
                name: 'Pimiento',
				cintifico:'(Capsicum annuum)'
            },
            {
                cve_cultiv: 88,
                name: 'Piña',
				cintifico:'(Ananas comosus)'
            },
			{
                cve_cultiv: 89,
                name: 'Plátano',
				cintifico:'(Musa paradisiaca)'		
            },
            {
                cve_cultiv: 90,
                name: 'Rábano',
				cintifico:'(Raphanus sativus)'
            },
            {
                cve_cultiv: 91,
                name: 'Rambután',
				cintifico:'(Nephelium lappaceum)'
            },
            {
                cve_cultiv: 92,
                name: 'Rosa',
				cintifico:'(Rosa spp.)'
            },
			{
                cve_cultiv: 93,
                name: 'Sandía',
				cintifico:'(Citrullus lanatus)'
            },
            {
                cve_cultiv: 94,
                name: 'Solanáceas',
				cintifico:''
            },
            {
                cve_cultiv: 95,
                name: 'Sorgo',
				cintifico:'(Sorghum vulgare)'
            },
            {
                cve_cultiv: 96,
                name: 'Soya',
				cintifico:'(Glycine max)'
            },
			{
                cve_cultiv: 97,
                name: 'Tabaco',
				cintifico:'(Nicotiana tabacum)'
				
            },
            {
                cve_cultiv: 98,
                name: 'Tejocote',
				cintifico:'(Crataegus mexicana)'
            },
            {
                cve_cultiv: 99,
                name: 'Tomate',
				cintifico:'(Physalis ixocarpa)'
            },
            {
                cve_cultiv: 100,
                name: 'Tomatillo',
				cintifico:'(Physalis philadelphica)'
            },
			{
                cve_cultiv: 101,
                name: 'Toronja',
				cintifico:'(Citrus x paradisi)'
				
            },
            {
                cve_cultiv: 102,
                name: 'Trébol',
				cintifico:'(Trifolium pratense)'
            },
            {
                cve_cultiv: 103,
                name: 'Trigo',
				cintifico:'(Triticum aestivum)'
            },
            {
                cve_cultiv: 104,
                name: 'Tulipán',
				cintifico:'(Tulipa spp.)'
            },
			{
                cve_cultiv: 105,
                name: 'Vainilla',
				cintifico:'(Vanilla planifolia)'
				
            },
            {
                cve_cultiv: 106,
                name: 'Vid',
				cintifico:'(Vitis vinifera)'
            },
            {
                cve_cultiv: 107,
                name: 'Yaca',
				cintifico:'(Artocarpus heterophyllus)'
            },
            {
                cve_cultiv: 108,
                name: 'Azucena',
				cintifico:'(Hippeastrum sp.)'
            },
			{
                cve_cultiv: 109,
                name: 'Café',
				cintifico:'(Coffea canephora)'
				
            },
            {
                cve_cultiv: 110,
                name: 'Calabaza',
				cintifico:'(Cucurbita argyrosperma)'
            },
            {
                cve_cultiv: 111,
                name: 'Chile',
				cintifico:'(Capsicum spp.)'
            },
            {
                cve_cultiv: 112,
                name: 'Crisantemo',
				cintifico:'(Chrysanthemum x morifolium)'
            },
			{
                cve_cultiv: 113,
                name: 'Crisantemo',
				cintifico:'(Dendranthema grandiflora)'
				
            },
            {
                cve_cultiv: 114,
                name: 'Girasol',
				cintifico:'(Helianthus sp.)'
            },
            {
                cve_cultiv: 115,
                name: 'Manzana',
				cintifico:'(Malus pumila)'
            },
            {
                cve_cultiv: 116,
                name: 'Plátano',
				cintifico:'(Musa acuminata)'
            },
			{
                cve_cultiv: 117,
                name: 'Rosa',
				cintifico:'(Rosa centifolia)'
				
            },
            {
                cve_cultiv: 118,
                name: 'Rosa',
				cintifico:'(Rosa sp.)'
            },
            {
                cve_cultiv: 119,
                name: 'Trigo',
				cintifico:'(Triticum vulgare)'
            },
            {
                cve_cultiv: 120,
                name: 'Trigo',
				cintifico:'(Triticum spp.)'
            },
			{
                cve_cultiv: 121,
                name: 'Vainilla',
				cintifico:'(Vanilla sp.)'
				
            },
            {
                cve_cultiv: '80a',
                name: 'Acacia',
				cintifico:'(Acacia sp.)'
            },
            {
                cve_cultiv: '80b',
                name: 'Ahuejote',
				cintifico:'(Salix bonplandiana)'
            },
            {
                cve_cultiv: '80c',
                name: 'Álamo',
				cintifico:'(Populus alba)'
            },
			{
                cve_cultiv: '80d',
                name: 'Aralia',
				cintifico:'(Polyscias fruticosa)'
            },
            {
                cve_cultiv: '80e',
                name: 'Área de agostadero',
				cintifico:''
            },
            {
                cve_cultiv: '80f',
                name: 'Avenida',
				cintifico:''
            },
			{
                cve_cultiv: '80g',
                name: 'Bambú',
				cintifico:'(Bambusa vulgaris)'
            },
            {
                cve_cultiv: '80h',
                name: 'Banderilla Diana',
				cintifico:'(Bouteloua curtipendula)'
            },
            {
                cve_cultiv: '80i',
                name: 'Banqueta',
				cintifico:''
            },
			{
                cve_cultiv: '80j',
                name: 'Borde de camino',
				cintifico:''
            },
            {
                cve_cultiv: '80k',
                name: 'Bosque de coníferas',
				cintifico:''
            },
            {
                cve_cultiv: '80l',
                name: 'Bosque de encino',
				cintifico:''
            },
			{
                cve_cultiv: '80m',
                name: 'Bosque de oyamel, pino y encino',
				cintifico:''
            },
            {
                cve_cultiv: '80n',
                name: 'Bosque de pino',
				cintifico:''
            },
            {
                cve_cultiv: '80o',
                name: 'Bosque de pino perturbado',
				cintifico:''
            },
			{
                cve_cultiv: '80p',
                name: 'Bosque de pino-encino',
				cintifico:''
            },
            {
                cve_cultiv: '80q',
                name: 'Bosque de pinos',
				cintifico:'(Pinus patula)'
            },
            {
                cve_cultiv: '80r',
                name: 'Bosque mesófilo de montaña',
				cintifico:''
            },
			{
                cve_cultiv: '80s',
                name: 'Bosque tropical caducifolio',
				cintifico:''
            },
            {
                cve_cultiv: '80t',
                name: 'Bugambilia',
				cintifico:'(Bougainvillea glabra)'
            },
            {
                cve_cultiv: '80u',
                name: 'Camino a Campo Experimental Zoquiapan',
				cintifico:''
            },
			{
                cve_cultiv: '80v',
                name: 'Campo de futbol',
				cintifico:''
            },
            {
                cve_cultiv: '80w',
                name: 'Campos experimentales',
				cintifico:''
            },
            {
                cve_cultiv: '80x',
                name: 'Capote',
				cintifico:'(Xanthosoma robustum)'
            },
			{
                cve_cultiv: '80y',
                name: 'Carretera',
				cintifico:''
            },
            {
                cve_cultiv: '80z',
                name: 'Casuarina',
				cintifico:'(Casuarina equisetifolia)'
            },
            {
                cve_cultiv: '80aa',
                name: 'Cerca de laguna',
				cintifico:''
            },
			{
                cve_cultiv: '80ab',
                name: 'Césped',
				cintifico:'(Paspalum vaginatum )'
            },
            {
                cve_cultiv: '80ac',
                name: 'Cheflera',
				cintifico:'(Schefflera actinophylla )'
            },
            {
                cve_cultiv: '80ad',
                name: 'Colorín',
				cintifico:'(Erythrina coralloides)'
            },
			{
                cve_cultiv: '80ae',
                name: 'Copalillo',
				cintifico:'(Parthenium incanum)'
            },
            {
                cve_cultiv: '80af',
                name: 'Costilla de Adán',
				cintifico:'(Monstera deliciosa)'
            },
            {
                cve_cultiv: '80ag',
                name: 'Cresta rocosa con pinos y encinos',
				cintifico:''
            },
			{
                cve_cultiv: '80ah',
                name: 'Ecotono entre matorral xerófilo y bosque de encino',
				cintifico:''
            },
            {
                cve_cultiv: '80ai',
                name: 'Encino',
				cintifico:'(Quercus rugosa)'
            },
            {
                cve_cultiv: '80aj',
                name: 'Encino',
				cintifico:'(Quercus castanea)'
            },
			{
                cve_cultiv: '80ak',
                name: 'Encino',
				cintifico:'(Quercus deserticola)'
            },
            {
                cve_cultiv: '80al',
                name: 'Encino',
				cintifico:'(Quercus potosina)'
            },
            {
                cve_cultiv: '80am',
                name: 'Encino',
				cintifico:'(Quercus sp.)'
            },
			{
                cve_cultiv: '80an',
                name: 'Estafiate',
				cintifico:'(Ambrosia confertiflora)'
            },
            {
                cve_cultiv: '80ao',
                name: 'Estropajo',
				cintifico:'(Luffa cylindrica)'
            },
            {
                cve_cultiv: '80ap',
                name: 'Falso alcanfor',
				cintifico:'(Heterotheca latifolia)'
            },
			{
                cve_cultiv: '80aq',
                name: 'Ficus',
				cintifico:'(Ficus spp.)'
            },
            {
                cve_cultiv: '80ar',
                name: 'Ficus',
				cintifico:'(Ficus sp.)'
            },
            {
                cve_cultiv: '80as',
                name: 'Filodendro',
				cintifico:'(Philodendron hastatum)'
            },
			{
                cve_cultiv: '80at',
                name: 'Flor de bígaro',
				cintifico:'(Catharanthus roseus)'
            },
            {
                cve_cultiv: '80au',
                name: 'Fresno',
				cintifico:'(Fraxinus sp.)'
            },
            {
                cve_cultiv: '80av',
                name: 'Gramíneas',
				cintifico:''
            },
			{
                cve_cultiv: '80aw',
                name: 'Helecho',
				cintifico:'(Pteridium aquilinum)'
            },
            {
                cve_cultiv: '80ax',
                name: 'Hibisco',
				cintifico:'(Hibiscus sp.)'
            },
            {
                cve_cultiv: '80ay',
                name: 'Hierba amarilla',
				cintifico:'(Baileya multiradiata)'
            },
			{
                cve_cultiv: '80az',
                name: 'Huizache',
				cintifico:'(Acacia pennatula)'
            },
            {
                cve_cultiv: '80ba',
                name: 'Jardín',
				cintifico:''
            },
            {
                cve_cultiv: '80bb',
                name: 'Jonote',
				cintifico:'(Heliocarpus appendiculatus)'
            },,
			{
                cve_cultiv: '80bc',
                name: 'Laurel',
				cintifico:'(Laurus nobilis)'
            },
            {
                cve_cultiv: '80bd',
                name: 'Laurel',
				cintifico:'(Laurus sp.)'
            },
            {
                cve_cultiv: '80be',
                name: 'Limón mexicano ornato',
				cintifico:'(Citrus x aurantifolia)'
            },
			{
                cve_cultiv: '80bf',
                name: 'Liquidámbar',
				cintifico:'(Liquidambar macrophylla)'
            },
            {
                cve_cultiv: '80bg',
                name: 'Liquidámbar',
				cintifico:'(Liquidambar sp.)'
            },
            {
                cve_cultiv: '80bh',
                name: 'Lote baldio',
				cintifico:''
            },
			{
                cve_cultiv: '80bi',
                name: 'Maleza',
				cintifico:''
            },
            {
                cve_cultiv: '80bj',
                name: 'Maleza botón de cadete',
				cintifico:'(Leonotis nepetaefolia)'
            },
            {
                cve_cultiv: '80bk',
                name: 'Matorral alto espinoso',
				cintifico:''
            },
			{
                cve_cultiv: '80bl',
                name: 'Matorral crasicaule',
				cintifico:''
            },
            {
                cve_cultiv: '80bm',
                name: 'Matorral xerófilo',
				cintifico:'(Salix bonplandiana)'
            },
            {
                cve_cultiv: '80bn',
                name: 'Mezquite',
				cintifico:'(Prosopis laevigata)'
            },
			{
                cve_cultiv: '80bo',
                name: 'Mezquite',
				cintifico:'(Prosopis glandulosa)'
            },
            {
                cve_cultiv: '80bp',
                name: 'Mostacilla',
				cintifico:'(Sisymbrium irio)'
            },
            {
                cve_cultiv: '80bq',
                name: 'Mostaza silvestre',
				cintifico:'(Brassica campestris)'
            },
			{
                cve_cultiv: '80br',
                name: 'Naranja agria ornato',
				cintifico:'(Citrus x aurantium)'
            },
            {
                cve_cultiv: '80bs',
                name: 'Obelisco',
				cintifico:'(Hibiscus spp.)'
            },
            {
                cve_cultiv: '80bt',
                name: 'Oceloxóchitl',
				cintifico:'(Tigridia pavonia)'
            },
			{
                cve_cultiv: '80bu',
                name: 'Olmo',
				cintifico:'(Ulmus sp.)'
            },
            {
                cve_cultiv: '80bv',
                name: 'Orilla de camino, junto a campo deportivo',
				cintifico:''
            },
            {
                cve_cultiv: '80bw',
                name: 'Orilla de laguna',
				cintifico:''
            },
			{
                cve_cultiv: '80bx',
                name: 'Orillas de arroyo',
				cintifico:''
            },
            {
                cve_cultiv: '80by',
                name: 'Orillas del Río Tlamincas',
				cintifico:''
            },
            {
                cve_cultiv: '80bz',
                name: 'Palma canaria',
				cintifico:'(Phoenix canariensis)'
            },
			{
                cve_cultiv: '80ca',
                name: 'Parcelas experimentales',
				cintifico:''
            },
            {
                cve_cultiv: '80cb',
                name: 'Parque recreativo',
				cintifico:''
            },
            {
                cve_cultiv: '80cc',
                name: 'Pastizal',
				cintifico:''
            },
			,
            {
                cve_cultiv: '80bp',
                name: 'Mostacilla',
				cintifico:'(Sisymbrium irio)'
            },
            {
                cve_cultiv: '80bq',
                name: 'Mostaza silvestre',
				cintifico:'(Brassica campestris)'
            },
			{
                cve_cultiv: '80br',
                name: 'Naranja agria ornato',
				cintifico:'(Citrus x aurantium)'
            },
            {
                cve_cultiv: '80bs',
                name: 'Obelisco',
				cintifico:'(Hibiscus spp.)'
            },
            {
                cve_cultiv: '80bt',
                name: 'Oceloxóchitl',
				cintifico:'(Tigridia pavonia)'
            },
			{
                cve_cultiv: '80bu',
                name: 'Olmo',
				cintifico:'(Ulmus sp.)'
            },
            {
                cve_cultiv: '80bv',
                name: 'Orilla de camino, junto a campo deportivo',
				cintifico:''
            },
            {
                cve_cultiv: '80bw',
                name: 'Orilla de laguna',
				cintifico:''
            },
			{
                cve_cultiv: '80bx',
                name: 'Orillas de arroyo',
				cintifico:''
            },
            {
                cve_cultiv: '80by',
                name: 'Orillas del Río Tlamincas',
				cintifico:''
            },
            {
                cve_cultiv: '80bz',
                name: 'Palma canaria',
				cintifico:'(Phoenix canariensis)'
            },
			{
                cve_cultiv: '80ca',
                name: 'Parcelas experimentales',
				cintifico:''
            },
            {
                cve_cultiv: '80cb',
                name: 'Parque recreativo',
				cintifico:''
            },
            {
                cve_cultiv: '80cc',
                name: 'Pastizal',
				cintifico:''
            },
            {
                cve_cultiv: '80cd',
                name: 'Pastizal inducido',
				cintifico:''
            },
            {
                cve_cultiv: '80ce',
                name: 'Pastizal mediano arborescente',
				cintifico:''
            },
			{
                cve_cultiv: '80cf',
                name: 'Pasto guineo',
				cintifico:'(Panicum maximun)'
            },
            {
                cve_cultiv: '80cg',
                name: 'Pasto rayado',
				cintifico:'(Echinochloa crus galli)'
            },
            {
                cve_cultiv: '80ch',
                name: 'Pata de gallina',
				cintifico:'(Digitaria horizontalis)'
            },
			{
                cve_cultiv: '80ci',
                name: 'Petunia',
				cintifico:'(Petunia sp.)'
            },
            {
                cve_cultiv: '80cj',
                name: 'Pimentero',
				cintifico:'(Schinus terebinthifolius)'
            },
            {
                cve_cultiv: '80ck',
                name: 'Pino',
				cintifico:'(Araucaria araucana)'
            },
			{
                cve_cultiv: '80cl',
                name: 'Pino',
				cintifico:'(Pinus sp.)'
            },
            {
                cve_cultiv: '80cm',
                name: 'Pirúl',
				cintifico:'(Schinus molle)'
            },
            {
                cve_cultiv: '80cn',
                name: 'Población',
				cintifico:''
            },
			{
                cve_cultiv: '80co',
                name: 'Rabanillo',
				cintifico:'(Raphanus raphanistrum)'
            },
            {
                cve_cultiv: '80cp',
                name: 'Roble de duelas',
				cintifico:'(Quercus xalapensis)'
            },
            {
                cve_cultiv: '80cq',
                name: 'Roble real',
				cintifico:'(Quercus germana)'
            },
            {
                cve_cultiv: '80cr',
                name: 'Sauce',
				cintifico:'(Salix sp.)'
            },
            {
                cve_cultiv: '80cs',
                name: 'Sauce blanco',
				cintifico:'(Salix alba)'
            },
			{
                cve_cultiv: '80ct',
                name: 'Secuoya roja',
				cintifico:'(Sequoia sempervirens)'
            },
            {
                cve_cultiv: '80cu',
                name: 'Selva baja caducifolia',
				cintifico:''
            },
            {
                cve_cultiv: '80cv',
                name: 'Selva mediana caducifolia',
				cintifico:''
            },
			{
                cve_cultiv: '80cw',
                name: 'Singonio',
				cintifico:'(Syngonium podophyllum)'
            },
            {
                cve_cultiv: '80cx',
                name: 'Suelo (arena)',
				cintifico:''
            },
            {
                cve_cultiv: '80cy',
                name: 'Suelo de finca cafetalera',
				cintifico:''
            },
			{
                cve_cultiv: '80cz',
                name: 'Teca',
				cintifico:'(Tectona grandis)'
            },
            {
                cve_cultiv: '80da',
                name: 'Trompetilla',
				cintifico:'(Bouvardia ternifolia)'
            },
            {
                cve_cultiv: '80db',
                name: 'Trueno',
				cintifico:'(Ligustrum lucidum)'
            },
			{
                cve_cultiv: '80dc',
                name: 'Tulillo',
				cintifico:'(Aster spinosus)'
            },
            {
                cve_cultiv: '80de',
                name: 'Violeta africana',
				cintifico:'(Saintpaulia ionantha)'
            },
            {
                cve_cultiv: '80dg',
                name: 'Zacate bahía',
				cintifico:'(Paspalum notatum)'
            },
			 {
                cve_cultiv: '80dh',
                name: 'Zacate banderilla',
				cintifico:'(Cenchrus echinatus)'
            },
            {
                cve_cultiv: '80di',
                name: 'Zacate blanco',
				cintifico:'(Ixophorus unisetus)'
            },
			{
                cve_cultiv: '80dj',
                name: 'Zacate Johnson',
				cintifico:'(Sorgum halepense)'
            },
            {
                cve_cultiv: '80dk',
                name: 'Zapote de monte',
				cintifico:'(Pouteria neglecta)'
            },
            {
                cve_cultiv: '80dl',
                name: 'Otros',
				cintifico:'(Erythrina spp.)'
            },
			{
                cve_cultiv: '80dm',
                name: 'Otros',
				cintifico:'(Trichilia spp.)'
            },
            {
                cve_cultiv: '80dn',
                name: 'Otros',
				cintifico:'(Cynodon dactylon)'
            },
            {
                cve_cultiv: '80do',
                name: 'Otros',
				cintifico:'(Gutierrezia sarothrae)'
            }
        ];

        //funciona como diccionario de datos, muy útil para sustituir las claves por nombres
        this.misValoresOISA = [
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

        this.misValoresPlagas = [
            {
                cve_plaga: 1,
                name: 'Aceria sheldoni',
				autor:'Ewing, 1937 (Prostigmata: Eriophyidae)'
            },
            {
                cve_plaga: 2,
                name: 'Aceria tulipae',
				autor:'Keifer, 1938 (Prostigmata: Eriophyidae)'
            },
            {
                cve_plaga: 3,
                name: 'Aculus fockeui',
				autor:'Nalepa y Trouessart, 1891 (Prostigmata: Eriophyidae)'
            },
            {
                cve_plaga: 4,
                name: 'Aleurocanthus woglumi',
				autor:'Ashby, 1915 (Hemiptera: Aleyrodidae)'
            },
			{
                cve_plaga: 5,
                name: 'Aleurothrixus floccosus',
				autor:'Maskell, 1895 (Hemiptera: Aleyrodidae)'
            },
            {
                cve_plaga: 6,
                name: 'Alfalfa mosaic virus (AMV)',
				autor:'[Martellivirales: Bromoviridae]'
            },
            {
                cve_plaga: 7,
                name: 'Alopecurus myosuroides',
				autor:'Hudson, 1762'
            },
            {
                cve_plaga: 8,
                name: 'Alternaria tenuissima',
				autor:'(Kunze, 1818) Wiltshire, 1933 (Pleosporales: Pleosporaceae)'
            },
			{
                cve_plaga: 9,
                name: 'Amaranthus blitum',
				name1:'(=',
				name2: 'Amaranthus lividus)',
				autor:'Linnaeus, 1753 (Caryophyllales: Amaranthaceae)'
            },
            {
                cve_plaga: 10,
                name: 'Anarsia lineatella',
				autor:'Zeller, 1839 (Lepidoptera: Gelechiidae)'
            },
            {
                cve_plaga: 11,
                name: 'Anthoxanthum odoratum',
				autor:'Linnaeus, 1753 (Poales: Gramineae)'
            },
            {
                cve_plaga: 12,
                name: 'Aphis (Toxoptera) citricidus',
				name1: 'Toxoptera citricida)',
				autor:'Kirkaldy, 1907 (Hemiptera: Aphididae)'
            },
			{
                cve_plaga: 13,
                name: 'Aulacorthum solani',
				autor:'Kaltenbach, 1843 (Hemiptera: Aphididae)'
            },
            {
                cve_plaga: 14,
                name: 'Bactericera cockerelli',
				autor:'Sulc, 1909 (Hemiptera: Triozidae)'
            },
            {
                cve_plaga: 15,
                name: 'Bemisia tabaci',
				autor:'Gennadius, 1889 (Hemiptera: Aleyrodidae)'
            },
            {
                cve_plaga: 16,
                name: 'Bemisia tabaci biotipo',
				name1: 'B (=',
				autor:'Gennadius, 1889 (Hemiptera: Aleyrodidae)'
            },
			{
                cve_plaga: 17,
                name: 'Boerhavia diffusa',
				autor:'Linnaeus, 1753 (Caryophyllales: Nyctaginaceae)'
				
            },
            {
                cve_plaga: 18,
                name: 'Brachycaudus helichrysi',
				autor:'Kaltenbach 1843 (Hemiptera: Aphididae)'
            },
            {
                cve_plaga: 19,
                name: 'Brachystola eiseni',
				autor:'Bruner, 1906 (Orthoptera: Romaleidae)'
            },
            {
                cve_plaga: 20,
                name: 'Brachystola magna',
				autor:'Girard, 1854 (Orthoptera: Romaleidae)'
            },
			{
                cve_plaga: 21,
                name: 'Brachystola mexicana',
				autor:'Bruner, 1904 (Orthoptera: Romaleidae)'
            },
            {
                cve_plaga: 22,
                name: 'Brachystola ponderosa',
				autor:'Bruner, 1906 (Orthoptera: Romaleidae)'
            },
            {
                cve_plaga: 23,
                name: 'Brevipalpus papayensis',
				autor:'Baker, 1949 (Prostigmata: Tenuipalpidae)'
            },
            {
                cve_plaga: 24,
                name: 'Brevipalpus phoenicis sensu lato',
				autor:'(Prostigmata: Tenuipalpidae)'
            },
			{
                cve_plaga: 25,
                name: 'Brevipalpus yothersi',
				autor:'Baker, 1949 (Prostigmata: Tenuipalpidae)'
            },
            {
                cve_plaga: 26,
                name: 'Calystegia sepium',
				autor:'(Linnaeus) Brown, 1810 (Solanales: Convolvulaceae)'
            },
            {
                cve_plaga: 27,
                name: 'Candidatus Phytoplasma asteris',
				autor:''
            },
            {
                cve_plaga: 28,
                name: 'Chaetanaphothrips orchidii',
				autor:'Multon, 1907 (Thysanoptera: Thripidae)'
            },
			{
                cve_plaga: 29,
                name: 'Choristoneura rosaceana',
				autor:'Harris,1841 (Lepidoptera: Tortricidae)'
            },
            {
                cve_plaga: 30,
                name: 'Clavibacter michiganensis',
				name1:'subsp.',
				name2:'michiganensis',
				autor:'(Smith, 1910) Davis',
				autor1:'et al',
				autor2: '., 1984 (Micrococcales: Microbacteriaceae)'
            },
            {
                cve_plaga: 31,
                name: 'Claviceps africana',
				autor:'Frederickson',
				autor1:'et al',
				autor2:'., 1991 (Hypocreales: Clavicipitaceae)'
            },
            {
                cve_plaga: 32,
                name: 'Cleome viscosa',
				name1:'(=',
				name2: 'Polanisia viscosa)',
				autor:'Linneaus, 1753 (Brassicales: Cleomaceae)'
            },
			{
                cve_plaga: 33,
                name: 'Coccus viridis',
				autor:'Green, 1889 (Hemiptera: Coccidae)'
				
            },
            {
                cve_plaga: 34,
                name: 'Corynespora cassiicola',
				autor:'(Berkeley y Curtis, 1868) Wei, 1950 (Pleosporales: Corynesporascaceae)'
            },
            {
                cve_plaga: 35,
                name: 'Cucumber mosaic virus',
				name1: '(CMV)',
				autor:'[Bromoviridae: Cucumovirus]'
            },
            {
                cve_plaga: 36,
                name: 'Curvularia pallescens',
				autor:'Boedijn, 1933 (Pleosporales: Pleosporaceae)'
            },
			{
                cve_plaga: 37,
                name: 'Cuscuta corymbosa',
				autor:'Jussieu y Yuncker, 1932 (Solanales: Convolvulaceae)'
            },
            {
                cve_plaga: 38,
                name: 'Cuscuta corymbosa',
				name1: 'var.',
				name2: 'grandiflora',
				autor:'Engelmann, 1859 (Solanales: Convolvulaceae)'
            },
            {
                cve_plaga: 39,
                name: 'Cuscuta corymbosa',
				name1: ' var.',
				name2: ' stylosa',
				autor:'(Choisy) Engelmann, 1859 (Solanales: Convolvulaceae)'
            },
            {
                cve_plaga: 40,
                name: 'Cuscuta squamata',
				autor:'Engelmann, 1859 (Solanales: Convolvulaceae)'
            },
			{
                cve_plaga: 41,
                name: 'Cuscuta umbellata',
				name1:'var.',
				name2: 'reflexa',
				autor:'(Coulter) Yuncker, 1921 (Solanales: Convolvulaceae)'	
            },
            {
                cve_plaga: 42,
                name: 'Cuscuta umbellata',
				name1:'var.',
				name2:'umbellata',
				autor:'Kunth, 1819 (Solanales: Convolvulaceae)'
            },
            {
                cve_plaga: 43,
                name: 'Cuscuta potosina',
				name1: 'var.',
				name2:'globifera',
				autor: 'Yuncker, 1921 (Solanales:  Convolvulaceae)'
            },
            {
                cve_plaga: 44,
                name: 'Cynthia cardui',
				autor:'Linnaeus, 1758 (Lepidoptera: Nymphalidae)'
            },
			{
                cve_plaga: 45,
                name: 'Delia platura',
				autor:'Meigen, 1826 (Diptera: Anthomyiidae)'
            },
            {
                cve_plaga: 46,
                name: 'Desarmillaria tabescens',
				autor:'(Scopoli, 1772) Koch y Aime, 2017 (Agaricales: Physalacriaceae)'
            },
            {
                cve_plaga: 47,
                name: 'Dickeya chrysanthemi',
				name1:'bv.',
				name2:'chrysanthemi',
				autor:'(Burkholder',
				autor1:'et al',
				autor2:'., 1953) Samson',
				autor3:'et al',
				autor4:'., 2005 (Enterobacterales: Pectobacteriaceae)'
            },
            {
                cve_plaga: 48,
                name: 'Dickeya zeae',
				autor:'Samson',
				autor1:'et al',
				autor2:'., 2005 (Enterobacterales: Pectobacteriaceae)'
            },
			{
                cve_plaga: 49,
                name: 'Digitaria velutina ',
				autor:'(Forsskål) Beauvois, 1812 (Poales: Poaceae)'
            },
            {
                cve_plaga: 50,
                name: 'Emex australis',
				autor:'Steinheil , 1838 (Caryophyllales: Polygonaceae)'
            },
            {
                cve_plaga: 51,
                name: 'Euplatypus segnis',
				autor:'Chapuis, 1865 (Coleoptera: Curculionidae)'
            },
            {
                cve_plaga: 52,
                name: 'Euwallacea',
				name1:'sp.',
				autor:'(Coleoptera: Curculionidae)'
            },
			{
                cve_plaga: 53,
                name: 'Frankliniella occidentalis',
				autor:'Pergande, 1895 (Thysanoptera: Tripidae)'
            },
            {
                cve_plaga: 54,
                name: 'Frankliniella schultzei',
				autor:'Trybom, 1910 (Thysanoptera: Thripidae)'
            },
            {
                cve_plaga: 55,
                name: 'Ganoderma lucidum',
				autor:'(Curtis, 1781) Karsten, 1881 (Polyporales: Ganodermataceae)'
            },
            {
                cve_plaga: 56,
                name: 'Grapholita prunivora',
				autor:'Walsh, 1868 (Lepidoptera: Tortricidae)'
            },
			{
                cve_plaga: 57,
                name: 'Helicoverpa zea',
				autor:'Boddie, 1850 (Lepidoptera: Tortricidae)'
            },
            {
                cve_plaga: 58,
                name: 'Heliothis virescens',
				autor:'Fabricius, 1777 (Lepidoptera: Noctuidae)'
            },
            {
                cve_plaga: 59,
                name: 'Heliothrips haemorrhoidalis',
				autor:'Bouché, 1833 (Thysanoptera: Thripidae)'
            },
            {
                cve_plaga: 60,
                name: 'Hemiberlesia rapax',
				autor:'Comstock, 1881 (Hemiptera: Diaspididae)'
            },
			{
                cve_plaga: 61,
                name: 'Hemileia vastatrix',
				autor:'Berkeley y Broome, 1869  (Pucciniales:  Zaghouaniaceae)'
            },
            {
                cve_plaga: 62,
                name: 'Hercinothrips femoralis',
				autor:'Reuter, 1891 (Thysanoptera: Thripidae)'
            },
            {
                cve_plaga: 63,
                name: 'Hibiscus trionum',
				autor:'Linnaeus, 1753 (Malvales: Malvaceae)'
            },
            {
                cve_plaga: 64,
                name: 'Homalodisca vitripennis ',
				autor:'Germar, 1821 (Hemiptera: Cicadellidae)'
            },
			{
                cve_plaga: 65,
                name: 'Hypothenemus hampei',
				autor:'(Ferrari, 1867) Browne, 1963 (Coleoptera: Curculionidae)'
            },
            {
                cve_plaga: 66,
                name: 'Ischaemum rugosum',
				autor:'Salisbury, 1791 (Poales: Poaceae)'
            },
            {
                cve_plaga: 67,
                name: 'Lasiodiplodia theobromae',
				autor:'(Patoullard, 1892) Griffon y Maublanc, 1909 (Botryosphaeriales: Botryosphaeriaceae)'
            },
            {
                cve_plaga: 68,
                name: '',
				name1: 'Leprosis de los cítricos ',
				name2:'Cilevirus leprosis (=Citrus leprosis virus',
				name3:'C)',
				autor:'(Martellivirales: Kitaviridae)'
            },
			{
                cve_plaga: 69,
                name: '',
				name1:'Leprosis de los cítricos ',
				name2:'Dichorhavirus orchidaceae (=Orchid fleck virus)',
				autor:'(Martellivirales: Kitaviridae)'
            },
            {
                cve_plaga: 70,
                name: '',
				name1:'Leprosis de los cítricos ',
				name2:'Dichorhavirus orchidaceae',
				name3:'(variante',
				name4:'Citrus leprosis virus',
				name5:'tipo nuclear)',
				autor:'(Martellivirales: Kitaviridae)'
            },
            {
                cve_plaga: 71,
                name: '',
				name1:'Leprosis de los cítricos ',
				name2:'Dichorhavirus orchidaceae',
				name3:'(variante',
				name4:'Citrus necrotic spot virus)',
				autor:'(Martellivirales: Kitaviridae)'
            },
            {
                cve_plaga: 72,
                name: 'Leptinotarsa decemlineata',
				autor:'(Say, 1824) Kraatze, 1874 (Coleoptera: Chrysomelidae)'
            },
			{
                cve_plaga: 73,
                name: 'Ligyrus ebenus',
				autor:'De Geer, 1774 (Coleoptera: Scarabaeidae)'
            },
            {
                cve_plaga: 74,
                name: 'Liriomyza huidobrensis',
				autor:'Blanchard, 1926 (Diptera: Agromyzidae)'
            },
            {
                cve_plaga: 75,
                name: 'Liriomyza sativae',
				autor:'Blanchard, 1938 (Diptera: Agromyzidae)'
            },
            {
                cve_plaga: 76,
                name: 'Liriomyza trifolii',
				autor:'Burgess, 1880 (Diptera: Agromyzidae)'
            },
			{
                cve_plaga: 77,
                name: 'Maconellicoccus hirsutus',
				autor:'(Green, 1908) Ezzat, 1958 (Hemiptera: Pseudococcidae)'	
            },
            {
                cve_plaga: 78,
                name: 'Macrosiphum euphorbiae',
				autor:'Thomas, 1878 (Hemiptera: Aphididae)'
            },
            {
                cve_plaga: 79,
                name: 'Meloidogyne javanica',
				autor:'(Treub, 1885) Chitwood, 1949 (Rhabditida: Meloidogynidae)'
            },
            {
                cve_plaga: 80,
                name: 'Microcephalothrips abdominalis',
				autor:'Crawford, 1910 (Thysanoptera: Thripidae)'
            },
			{
                cve_plaga: 81,
                name: 'Mikania micrantha',
				autor:'Kunth, 1818 (Asterales: Asteraceae)'
            },
            {
                cve_plaga: 82,
                name: 'Myndus crudus',
				autor:'Van Duzee, 1907 (Hemiptera: Cixiidae)'
            },
            {
                cve_plaga: 83,
                name: 'Mythimna unipuncta',
				autor:'Haworth, 1809 (Lepidoptera:  Noctuidae)'
            },
            {
                cve_plaga: 84,
                name: 'Myzaphis rosarum',
				autor:'(Kaltenbach, 1843) van der Goot, 1913 (Hemiptera: Aphididae)'
            },
			{
                cve_plaga: 85,
                name: 'Neomyzus circumflexum',
				autor:'(Buckton, 1876) van der Goot, 1915 (Hemiptera: Aphididae)'
            },
            {
                cve_plaga: 86,
                name: 'Nepovirus nicotianae',
				name1:'(=',
				name2:'Tobacco ringspot virus)',
				autor:' (Picornavirales: Secoviridae)'
            },
            {
                cve_plaga: 87,
                name: 'Orobanche ramosa',
				autor:'Linnaeus, 1753 (Lamiales: Orobanchaceae)'
            },
            {
                cve_plaga: 88,
                name: 'Orthotospovirus tomatomaculae',
				name1:'(=',
				name2:'Tomato spotted wilt virus)',
				autor:' (Elliovirales: Orthotospovirus)'
            },
			{
                cve_plaga: 89,
                name: 'Pantomorus cervinus',
				autor:'Boheman, 1840 (Coleoptera: Curculionidae)'		
            },
            {
                cve_plaga: 90,
                name: 'Papaya meleira virus',
				autor:''
            },
            {
                cve_plaga: 91,
                name: 'Paramyrothecium roridum',
				name1:'(=',
				name2:'Myrothecium roridum)',
				autor:'(Tode) L. Lombard y Crous, 2016 (Hypocreales: Stachybotryaceae)'
            },
            {
                cve_plaga: 92,
                name: 'Pelamoviroid latenspruni',
				name1:'(=',
				name2:'Peach latent mosaic viroid)',
				autor:'(Avsunviroidae: Pelamoviroid)'
            },
			{
                cve_plaga: 93,
                name: 'Peridroma saucia',
				autor:'Hübner, 1808 (Lepidoptera:Noctuidae)'
            },
            {
                cve_plaga: 94,
                name: 'Pestalotiopsis palmarum',
				autor:'(Cooke) Steyaert, 1949 (Amphisphaeriales: Pestalotiopsidaceae)'
            },
            {
                cve_plaga: 95,
                name: 'Petrobia latens',
				autor:'Müller, 1776 (Prostigmata: Tetranychidae)'
            },
            {
                cve_plaga: 96,
                name: 'Phakopsora sojae',
				name1:'(=',
				name2:'Phakopsora pachyrhizi)',
				autor:'(Hennings) Sawada, 1933 (Pucciniales: Phakopsoraceae)'
            },
			{
                cve_plaga: 97,
                name: 'Phyllocnistis citrella',
				autor:'Stainton, 1856 (Lepidoptera: Gracillariidae)'
            },
            {
                cve_plaga: 98,
                name: 'Phymatotrichopsis omnivora',
				autor:'(Shear) Hennebert, 1973 (Pezizales: Rhizinaceae)'
            },
            {
                cve_plaga: 99,
                name: 'Phytonemus pallidus',
				name1:'(=',
				name2:'Steneotarsonemus pallidus)',
				autor:'(Banks, 1899) Lindquist, 1986 (Prostigmata: Tarsonemidae)'
            },
            {
                cve_plaga: 100,
                name: 'Phytophthora capsici',
				autor:'Leonian, 1922 (Peronosporales: Peronosporaceae)'
            },
			{
                cve_plaga: 101,
                name: 'Planococcus citri',
				autor:'Risso, 1813 (Hemiptera: Pseudococcidae)'	
            },
            {
                cve_plaga: 102,
                name: 'Planococcus minor',
				autor:'(Maskell, 1897) Cox, 1989 (Hemiptera: Pseudococcidae)'
            },
            {
                cve_plaga: 103,
                name: 'Plutella xylostella',
				autor:'Linnaeus, 1758 (Lepidoptera: Plutellidae)'
            },
            {
                cve_plaga: 104,
                name: 'Polygonum convolvulus',
				autor:'Linnaeus, 1753 (Caryophyllales: Polygonaceae)'
            },
			{
                cve_plaga: 105,
                name: 'Polygonum lapathifolium',
				autor:'Linnaeus, 1753 (Caryophyllales: Polygonaceae)'
            },
            {
                cve_plaga: 106,
                name: 'Polyphagotarsonemus latus',
				autor:'(Banks, 1904) Beer y Nucifera, 1965 (Prostigmata: Tarsonemidae)'
            },
            {
                cve_plaga: 107,
                name: 'Potyvirus yituberosi',
				name1:'(=',
				name2:'Potato virus',
				name3:'YN)',
				autor:'(Patatavirales: Potyvirus)'
            },
            {
                cve_plaga: 108,
                name: 'Potyvirus yituberosi',
				name1:'(=',
				name2:'Potato virus',
				name3:'YNTN)',
				autor:'(Patatavirales: Potyvirus)'
            },
			{
                cve_plaga: 109,
                name: 'Pratylenchus penetrans',
				autor:'(Cobb, 1917) Filipjev y Stekhoven, 1941 (Rhabditida: Pratylenchidae)'
            },
            {
                cve_plaga: 110,
                name: 'Pratylenchus zeae',
				autor:'Graham, 1951 (Rhabditida: Pratylenchidae))'
            },
            {
                cve_plaga: 111,
                name: 'Pseudococcus longispinus',
				autor:'Targioni Tozzetti, 1867 (Hemiptera: Pseudococcidae)'
            },
            {
                cve_plaga: 112,
                name: 'Pseudomonas fluorescens',
				autor:'Migula, 1895 (Pseudomonadales: Pseudomonadaceae)'
            },
			{
                cve_plaga: 113,
                name: 'Puccinia horiana',
				autor:'Hennings, 1901 (Pucciniales: Pucciniaceae)'
            },
            {
                cve_plaga: 114,
                name: 'Radopholus similis',
				autor:'(Cobb, 1893) Thorne, 1949 (Rhabditida: Pratylenchidae)'
            },
            {
                cve_plaga: 115,
                name: 'Rottboellia cochinchinensis',
				name1:'(=',
				name2:'Stegosia cochinchinensis, Rottboellia exaltata)',
				autor:'(Loureiro) Clayton, 1981 (Poales: Poaceae)'
            },
            {
                cve_plaga: 116,
                name: 'Senecio vulgaris',
				autor:'Linnaeus, 1753 (Asterales: Asteraceae)'
            },
			{
                cve_plaga: 117,
                name: 'Setaria pumila',
				autor:'(Poiret) Roemer y Schultes, 1817 (Poales: Poaceae)'	
            },
            {
                cve_plaga: 118,
                name: 'Sigmodon hispidus',
				autor:'Say y Ord, 1825 (Rodentia: Cricetidae)'
            },
            {
                cve_plaga: 119,
                name: 'Silene noctiflora',
				autor:'Linnaeus, 1753 (Caryophyllales: Caryophyllaceae)'
            },
            {
                cve_plaga: 120,
                name: 'Silybum marianum',
				autor:'(Linnaeus) Gaertner, 1791 (Asterales: Asteraceae)'
            },
			{
                cve_plaga: 121,
                name: 'Sinapis arvensis',
				autor:'Linnaeus, 1753 (Brassicales: Brassicaceae)'	
            },
			{
                cve_plaga: 122,
                name: 'Sphenoclea zeylanica',
				autor:'Gaertner, 1788 (Solanales: Sphenocleaceae)'	
            },
			{
                cve_plaga: 123,
                name: 'Sphenophorus venatus vestitus',
				autor:'Chittenden, 1904 (Coleoptera: Curculionidae)'	
            },
			{
                cve_plaga: 124,
                name: 'Spilosoma virginica',
				autor:'(Fabricius, 1798) Curtis, 1825 (Lepidoptera: Erebidae)'	
            },
			{
                cve_plaga: 125,
                name: 'Spodoptera exigua',
				autor:'Hübner, 1808 (Lepidoptera:  Noctuidae)'	
            },
			{
                cve_plaga: 126,
                name: 'Spoladea recurvalis',
				autor:'(Fabricius, 1775) Guenée, 1854 (Lepidoptera: Crambidae)'	
            },
			{
                cve_plaga: 127,
                name: 'Thielaviopsis paradoxa',
				autor:'(De Seynes) Höhnel, 1904 (=Ceratocystis paradoxa) [Microascales: Ceratocystidaceae]'	
            },
			{
                cve_plaga: 128,
                name: 'Tobamovirus tabaci',
				name1:'(=',
				name2:'Tobacco mosaic virus)',
				autor:'(Martellivirales: Virgaviridae)'	
            },
			{
                cve_plaga: 129,
                name: 'Trialeurodes vaporariorum',
				autor:'Westwood, 1856 (Hemiptera: Aleyrodidae)'	
            },
			{
                cve_plaga: 130,
                name: 'Trichothecium roseum',
				autor:'(Persoon) Link, 1809 (Hypocreales: Myrotheciomycetaceae)'	
            },
			{
                cve_plaga: 131,
                name: 'Unaspis citri',
				autor:'Comstock, 1883 (Hemiptera: Diaspididae)'	
            },
			{
                cve_plaga: 132,
                name: 'Urochloa panicoides',
				autor:'Palisot de Beauvois, 1812 (Poales: Poaceae)'	
            },
			{
                cve_plaga: 133,
                name: 'Viteus vitifoliae',
				name1:'(=',
				name2:'Daktulosphaira vitifoliae)',
				autor:'Fitch, 1855 (Hemiptera: Phylloxeridae)'	
            },
			{
                cve_plaga: 134,
                name: 'Xanthomonas axonopodis',
				name1:'pv.',
				name2:'vasculorum',
				autor:'(Cobb, 1894) Vauterin ',
				autor1:'et al',
				autor2:'., 1995 (Lysobacterales: Lysobacteraceae)'
            },
			{
                cve_plaga: 135,
                name: 'Xanthomonas campestris',
				name1:'pv.',
				name2:'sesami',
				autor:'(Sabet y Dowson, 1960) Dye, 1978 (Lysobacterales: Lysobacteraceae)'	
            },
			{
                cve_plaga: 136,
                name: 'Sigmodon hispidus',
				autor:'Say y Ord, 2024 (Rodentia: Cricetidae)'	
            }
		];

        this.array_img = [
            {
                plaga: "Maconellicoccus hirsutus",
                cve: 76,
                images: [
                    {
                        name: "Maconellicoccus hirsutus",
                        folder: "Maconellicoccus hirsutus",
                        ext: "jpg"
                    },
                    {
                        name: "test",
                        folder: "Maconellicoccus hirsutus",
                        ext: "jpg"
                    }
                ],
            },
            {
                plaga: "Thielaviopsis paradoxa",
                cve: 57,
                images: [
                    {
                        name: "OIP",
                        folder: "Thielaviopsis",
                        ext: "jpg"
                    },
                    {
                        name: "Figura",
                        folder: "Thielaviopsis",
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

        this.misValoresOISA.map(row => {

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
            },
            options: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Positivos'
                }
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

            let popupContent = '<table id="myTable" class="table table-striped table-hover">';

            for (let p in feature.properties) {

                popupContent += `<tr><td><b>${p}: </b></td><td>${feature.properties[p]}</td></tr>`;
            }

            popupContent += '</table>';

            layer.bindPopup(popupContent);
        }
    }

    mxEdosPop(feature, layer) {

        if (feature.properties) {

            //console.log(feature.properties)

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
                `<table id="myTable" class="table table-striped table-hover">
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
            maxWidth: 700,
            maxheight: 100,
            modal: true,
            content: this.crearGaleria(cve_plaga),
            position: "top",
            //visible: false
        });

        win.show();
    }

    crearGaleria(cve_plaga) {

        let galeria = `
        
        <div id="galeria" class="container-fluid">`;

        let filtro_array_img = this.array_img.filter((i) => i.cve == cve_plaga);

        filtro_array_img.forEach((i) => {

            galeria += `<div class="row gallery">`

            i.images.forEach((i) => {

                galeria += `
                        <div class="col-sm-6 col-md-5 col-lg-6">
                            <a href="img/Plagas/${i.folder}/${i.name}.${i.ext}" target="_blank">
                                <img class="img-fluid" src="img/Plagas/${i.folder}/${i.name}.${i.ext}">
                            </a>
                        </div>`;
            });

            galeria += `</div>`;

        });

        galeria += `</div>`;

        return galeria;
    }

    cultivosPop(feature, layer) {

        let popupContent =
            `<table id="myTable" class="table table-striped table-hover">
                <tr><td><b>Cultivo:</b></td><td>${feature.properties.Cultivo}</td></tr>
                <tr><td><b>Nombre Científico:</b></td><td><i>
                    ${feature.properties.Cientifico}
                    ${feature.properties.Cient1}
                    ${feature.properties.Cient2}
                    ${feature.properties.Otros}
                    ${feature.properties.Otros1}
                    ${feature.properties.Otros2}
                    ${feature.properties.Otros3}
                </i></td></tr>
                <tr><td><b>Clave Plaga:</b></td><td>${feature.properties.cve_plaga}</td></tr>
                <tr><td><b>Plaga:</b></td><td><i>
                    ${feature.properties.Plaga} 
                    ${feature.properties.Plaga1} 
                    ${feature.properties.Plaga2}
                    ${feature.properties.Plaga3}
                </i></td></tr>
                <tr><td></td><td><button type="button" id="btn_verImg">Ver Plaga</button></td></tr>
                <tr><td><b>Estado:</b></td><td>${feature.properties.Estado}, ${feature.properties.NOMGEO}</td></tr>
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

            this.misValoresOISA.map(row => {

                if (feature.properties[row.cve] > 0) {

                    arry.push(this.obj = {
                        columna: row.name,
                        valor: feature.properties[row.cve],

                    });

                }
            });

            let popupContent = `
            <table id="myTable" class="table table-striped table-hover">
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

    edosCultivosPop(feature, layer) {
        if (feature.properties) {

            let array_cultivos = feature.properties.cve_cultiv.split(",");
            let array_plagas = feature.properties.cve_plaga.split(",");

            let names_cultivos = [];
            let names_plagas = [];

            //hacerlo como array_plagas
            array_cultivos.forEach((i) => {

                this.misValoresCultivos.forEach((j) => {

                    if (i == j.cve_cultiv) {
                        names_cultivos.push(j.name)
                    }
                });
            });

            array_plagas.forEach((i) => {

                this.misValoresPlagas.forEach((j) => {

                    if (i == j.cve_plaga) {
                        //names_plagas.push(j.name)
                        //console.log(j)

                        let obj = {
                            cve_plaga: j.cve_plaga,
                            name: j.name,
                            autor: j.autor
                        }

                        //console.log(obj)
                
                        names_plagas.push(obj);
                    }
                });
            });

            let test = '';

            names_plagas.forEach((i) => {
                test += `<li><i>${i.name}</i> ${i.autor}</li>`;
            });

            console.log(names_cultivos);
            console.log(names_plagas);

            let popupContent =
                `<table id="myTable" class="table table-striped table-hover">
                <tr><td><b>Plaga:</b></td><td>${test}</td></tr>
                <tr><td><b>Cultivos:</b></td><td>${names_cultivos}</td></tr>
            </table>`;

            {/* <tr><td><b>Imagen:</b></td><td><img src="img/Ciudades/${feature.properties.CIUDAD}.jpg" width="200" height="150"></td></tr> */ }

            layer.bindPopup(popupContent);
        }
    }
}
