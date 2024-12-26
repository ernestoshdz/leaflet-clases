//funciona como diccionario de datos, muy útil para sustituir las claves por nombres
export default class Diccionario {
    
    constructor() {
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
                cve_cultiv: '80BY',
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
    }
}