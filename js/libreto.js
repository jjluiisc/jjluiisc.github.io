var primer_domingo_001 = [{id:0,nombre:"TODOS"},{id:1,nombre:"NARRADOR"},{id:2,nombre:"MARÍA"},{id:3,nombre:"JESÚS"},{id:100,nombre:"SIRVIENTES"},{id:101,nombre:"MAYORDOMO"}];
var primer_domingo_002 = [{id:0,nombre:"TODOS"},{id:1,nombre:"NARRADOR"},{id:2,nombre:"MARÍA"},{id:3,nombre:"JESÚS"},{id:102,nombre:"MARÍA Y JESÚS"}];
var primer_domingo_003 = [{id:0,nombre:"TODOS"},{id:1,nombre:"NARRADOR"},{id:4,nombre:"JUAN"},{id:103,nombre:"JUDIO"},{id:5,nombre:"HERODÍAS"},{id:6,nombre:"HERODES"},{id:104,nombre:"SOLDADO"},{id:105,nombre:"MUJER"}];
var primer_domingo_004 = [{id:0,nombre:"TODOS"},{id:1,nombre:"NARRADOR"},{id:3,nombre:"JESÚS"},{id:4,nombre:"JUAN"},{id:107,nombre:"PADRE"},{id:106,nombre:"GENTE"},{id:103,nombre:"JUDIO"},{id:6,nombre:"HERODES"}];
var primer_domingo_005 = [{id:0,nombre:"TODOS"},{id:1,nombre:"NARRADOR"},{id:7,nombre:"SATANAS"},{id:3,nombre:"JESÚS"}];
var primer_domingo_006 = [{id:0,nombre:"TODOS"},{id:1,nombre:"NARRADOR"},{id:3,nombre:"JESÚS"},{id:8,nombre:"ANDRÉS"},{id:9,nombre:"FELIPE"}];
var primer_domingo_007 = [{id:0,nombre:"TODOS"},{id:1,nombre:"NARRADOR"},{id:8,nombre:"ANDRÉS"},{id:3,nombre:"JESÚS"},{id:10,nombre:"PEDRO"},{id:9,nombre:"FELIPE"},{id:11,nombre:"BARTOLOMÉ"},{id:12,nombre:"SIMÓN"},{id:13,nombre:"SANTIAGO A"},{id:14,nombre:"TADEO"},{id:15,nombre:"SANTIAGO M"},{id:16,nombre:"JUAN"}];
var primer_domingo_008 = [{id:0,nombre:"TODOS"},{id:1,nombre:"NARRADOR"},{id:17,nombre:"JAIRO"},{id:105,nombre:"MUJER"},{id:11,nombre:"BARTOLOMÉ"},{id:14,nombre:"TADEO"},{id:10,nombre:"PEDRO"},{id:15,nombre:"SANTIAGO M"},{id:12,nombre:"SIMÓN"},{id:13,nombre:"SANTIAGO A"},{id:8,nombre:"ANDRÉS"},{id:16,nombre:"JUAN"},{id:3,nombre:"JESÚS"},{id:108,nombre:"ESPOSA"},{id:109,nombre:"APÓSTOLES"},{id:110,nombre:"NIÑA"},{id:18,nombre:"TOMÁS"},{id:19,nombre:"JUDAS"}];
var primer_domingo_009 = [{id:0,nombre:"TODOS"},{id:1,nombre:"NARRADOR"},{id:3,nombre:"JESÚS"},{id:20,nombre:"SAMARITANA"},{id:12,nombre:"SIMÓN"},{id:15,nombre:"SANTIAGO M"}];
var primer_domingo_010 = [{id:0,nombre:"TODOS"},{id:1,nombre:"NARRADOR"},{id:3,nombre:"JESÚS"}];


var primer_domingo_escenas = 
[
	{id: "001", orden:1, nombre:"EL PRIMER MILAGRO, EN LA BODA DE CANÁ", dialogos:dialogos_escena_el_primer_milagro, personajes:primer_domingo_001},
	{id: "002", orden:2, nombre:"JESÚS SE DESPIDE DE SU MADRE EN NAZARET", dialogos:dialogos_escena_jesus_se_despide_de_su_madre, personajes:primer_domingo_002},
	{id: "003", orden:3, nombre:"PRESENTACIÓN DE JUAN A ISRAEL", dialogos:dialogos_escena_presentacion_de_juan_a_israel, personajes:primer_domingo_003},
	{id: "004", orden:4, nombre:"BAUTISMO DE JESÚS", dialogos:dialogos_escena_bautismo_de_jesus, personajes:primer_domingo_004},
	{id: "005", orden:5, nombre:"LA TENTACIÓN EN EL DESIERTO", dialogos:dialogos_escena_tentacion_en_el_decierto, personajes:primer_domingo_005},
	{id: "006", orden:6, nombre:"LOS PRIMEROS DISCIPULOS", dialogos:dialogos_escena_primeros_dicipulos, personajes:primer_domingo_006},
	{id: "007", orden:7, nombre:"LA PESCA MILAGROSA", dialogos:dialogos_escena_la_pesca_milagrosa, personajes:primer_domingo_007},
	{id: "008", orden:8, nombre:"LA HEMORROISA Y LA HIJA DE JAIRO (Mateo 9:18,25)", dialogos:dialogos_escena_la_emorroisa_y_la_hija_de_jairo, personajes:primer_domingo_008},
	{id: "009", orden:9, nombre:"JESÚS Y LA SAMARITANA", dialogos:dialogos_escena_jesus_y_la_samaritana, personajes:primer_domingo_009},
	{id: "010", orden:10, nombre:"LA ELECCIÓN DE LOS APÓSTOLES", dialogos:dialogos_escena_eleccion_de_los_apostoles, personajes:primer_domingo_010}
];

var segundo_domingo_escenas = 
[
	{id: "011", orden:1, nombre:"EL JARDIN DE LAS FLORES", dialogos:[], personajes:[]},
	{id: "012", orden:2, nombre:"JESÚS CURA A UN PARALITICO", dialogos:[], personajes:[]},
	{id: "013", orden:3, nombre:"MARTHA Y JESÚS", dialogos:[], personajes:[]},
	{id: "014", orden:4, nombre:"LAS BIENAVENTURANZAS", dialogos:[], personajes:[]},
	{id: "015", orden:5, nombre:"JESÚS ENSEÑA A ORAR EL PADRE NUESTRO", dialogos:[], personajes:[]},
	{id: "016", orden:6, nombre:"MULTIPLICACIÓN DE LOS PANES Y PECES", dialogos:[], personajes:[]},
	{id: "017", orden:7, nombre:"JESÚS Y EL CENTURIÓN ROMANO", dialogos:[], personajes:[]},
	{id: "018", orden:8, nombre:"PECADORA ARREPENTIDA", dialogos:[], personajes:[]},
	{id: "019", orden:9, nombre:"VUELTA A BETANIA", dialogos:[], personajes:[]},
	{id: "020", orden:10, nombre:"SALOME", dialogos:[], personajes:[]}
];

var domingo_de_ramos_escenas = 
[
	{id: "021", orden:1, nombre:"ENCUENTRO DE JESÚS CON SU MADRE", dialogos:[], personajes:[]},
	{id: "022", orden:2, nombre:"JESÚS LLORA FRENTE A LOS MUROS DE JERUSALÉN", dialogos:[], personajes:[]},
	{id: "023", orden:3, nombre:"CURACIÓN DEL CIEGO DE JERICÓ", dialogos:[], personajes:[]},
	{id: "024", orden:4, nombre:"JESÚS Y LOS NIÑOS", dialogos:[], personajes:[]},
	{id: "025", orden:5, nombre:"LA PURIFICACIÓN DEL TEMPLO", dialogos:[], personajes:[]},
	{id: "026", orden:6, nombre:"LA MUJER ADULTERA", dialogos:[], personajes:[]},
	{id: "027", orden:7, nombre:"TRIBUTO AL CESAR", dialogos:[], personajes:[]},
	{id: "028", orden:8, nombre:"LA UNCIÓN EN BETANIA", dialogos:[], personajes:[]},
	{id: "029", orden:9, nombre:"CONSEJO DE SANEDRÍN", dialogos:[], personajes:[]}
];

var jueves_santo_escenas = 
[
	{id: "030", orden:1, nombre:"PREPARACIÓN DE LA ÚLTIMA CENA", dialogos:[], personajes:[]},
	{id: "031", orden:2, nombre:"ANUNCIO DE LAS PROFECIAS", dialogos:[], personajes:[]},
	{id: "032", orden:3, nombre:"EL GRAN SINEDRIO", dialogos:[], personajes:[]},
	{id: "033", orden:4, nombre:"CELEBRACIÓN DE LA ÚLTIMA CENA", dialogos:[], personajes:[]},
	{id: "034", orden:5, nombre:"VENTA DE JESÚS. (Yo soy)", dialogos:[], personajes:[]},
	{id: "035", orden:6, nombre:"JESÚS SE DESPIDE DE SU MADRE", dialogos:[], personajes:[]},
	{id: "036", orden:7, nombre:"CAMINO GETSEMANÍ", dialogos:[], personajes:[]},
	{id: "037", orden:8, nombre:"EL BESO DE JUDAS", dialogos:[], personajes:[]},
	{id: "038", orden:9, nombre:"PRIMER INTERROGATORIO ANTE EL SANEDRÍN", dialogos:[], personajes:[]},
	{id: "039", orden:10, nombre:"LAS NEGACIONES DE PEDRO", dialogos:[], personajes:[]}
];

var viernes_santo_escenas = 
[
	{id: "040", orden:1, nombre:"DIÁLOGO LOS LADRONES", dialogos:[], personajes:[]},
	{id: "041", orden:2, nombre:"PILATOS LLEGA AL PALACIO", dialogos:[], personajes:[]},
	{id: "042", orden:3, nombre:"JESÚS ES INTERROGADO POR PONCIO PILATOS", dialogos:[], personajes:[]},
	{id: "043", orden:4, nombre:"JESÚS ANTE HERODES", dialogos:[], personajes:[]},
	{id: "044", orden:5, nombre:"JESÚS ES PRESENTADO ANTE PILATOS POR SEGUNDA VEZ", dialogos:[], personajes:[]},
	{id: "045", orden:6, nombre:"JESÚS ES PRESENTADO AL PUEBLO DE JUDEA", dialogos:[], personajes:[]},
	{id: "046", orden:7, nombre:"JESUS ES SENTENCIADO A MUERTE", dialogos:[], personajes:[]},
	{id: "047", orden:8, nombre:"EL CASTIGO DE LOS LADRONES", dialogos:[], personajes:[]},
	{id: "048", orden:9, nombre:"JESUS ENCUENTRA A SU MADRE", dialogos:[], personajes:[]},
	{id: "049", orden:10, nombre:"LA VERÓNICA LIMPIA EL ROSTRO DE JESÚS", dialogos:[], personajes:[]},
	{id: "050", orden:11, nombre:"JESÚS CAE POR SEGUNDA VEZ", dialogos:[], personajes:[]},
	{id: "051", orden:12, nombre:"JESUS ENCUENTRA A LAS MUJERES DE JERUSALÉN", dialogos:[], personajes:[]},
	{id: "052", orden:13, nombre:"JOSE DE ARIMATEA CONFORTA A JESÚS", dialogos:[], personajes:[]},
	{id: "053", orden:14, nombre:"JESÚS CAE POR TERCERA VEZ", dialogos:[], personajes:[]},
	{id: "054", orden:15, nombre:"JESÚS ES CRUCIFICADO EN EL GÓLGOTA", dialogos:[], personajes:[]},
	{id: "055", orden:16, nombre:"LAS SIETE PALABRAS", dialogos:[], personajes:[]},
	{id: "056", orden:17, nombre:"SEPULTURA DE JESÚS", dialogos:[], personajes:[]},
	{id: "057", orden:18, nombre:"OTROS MILAGROS", dialogos:[], personajes:[]}
];


var dias_de_actos =
[
	{id:"001", orden:1, nombre:"PRIMER DOMINGO", escenas:primer_domingo_escenas},
	{id:"002", orden:2, nombre:"SEGUNDO DOMINGO", escenas:segundo_domingo_escenas},
	{id:"003", orden:3, nombre:"DOMINGO DE RAMOS", escenas:domingo_de_ramos_escenas},
	{id:"004", orden:4, nombre:"JUEVES SANTO", escenas:jueves_santo_escenas},
	{id:"005", orden:5, nombre:"VIERNES SANTO", escenas:viernes_santo_escenas}
];

var _personajes =
[
    {id:0,nombre:"TODOS"},	
	{id:1,nombre:"NARRADOR"},	
	{id:2,nombre:"MARÍA"},
	{id:3,nombre:"JESÚS"},
	{id:4,nombre:"JUAN"},
	{id:5,nombre:"HERODÍAS"},
	{id:6,nombre:"HERODES"},
	{id:7,nombre:"SATANAS"},
	{id:8,nombre:"ANDRÉS"},
	{id:9,nombre:"FELIPE"},
	{id:10,nombre:"PEDRO"},
	
	{id:11,nombre:"BARTOLOMÉ"},	
	{id:12,nombre:"SIMÓN"},
	{id:13,nombre:"SANTIAGO A"},
	{id:14,nombre:"TADEO"},
	{id:15,nombre:"SANTIAGO M"},
	{id:16,nombre:"JUAN"},
	{id:17,nombre:"JAIRO"},
	{id:18,nombre:"TOMÁS"},
	{id:19,nombre:"JUDAS"},
	{id:20,nombre:"SAMARITANA"},
	
	{id:21,nombre:""},	
	{id:22,nombre:""},
	{id:23,nombre:""},
	{id:24,nombre:""},
	{id:25,nombre:""},
	{id:26,nombre:""},
	{id:27,nombre:""},
	{id:28,nombre:""},
	{id:29,nombre:""},
	{id:30,nombre:""},
	
	{id:31,nombre:""},	
	{id:32,nombre:""},
	{id:33,nombre:""},
	{id:34,nombre:""},
	{id:35,nombre:""},
	{id:36,nombre:""},
	{id:37,nombre:""},
	{id:38,nombre:""},
	{id:39,nombre:""},
	{id:40,nombre:""},
	
	{id:41,nombre:""},	
	{id:42,nombre:""},
	{id:43,nombre:""},
	{id:44,nombre:""},
	{id:45,nombre:""},
	{id:46,nombre:""},
	{id:47,nombre:""},
	{id:48,nombre:""},
	{id:49,nombre:""},
	{id:50,nombre:""},
	
	{id:51,nombre:""},	
	{id:52,nombre:""},
	{id:53,nombre:""},
	{id:54,nombre:""},
	{id:55,nombre:""},
	{id:56,nombre:""},
	{id:57,nombre:""},
	{id:58,nombre:""},
	{id:59,nombre:""},
	{id:60,nombre:""},
	
	{id:61,nombre:""},	
	{id:62,nombre:""},
	{id:63,nombre:""},
	{id:64,nombre:""},
	{id:65,nombre:""},
	{id:66,nombre:""},
	{id:67,nombre:""},
	{id:68,nombre:""},
	{id:69,nombre:""},
	{id:70,nombre:""},
	
	{id:71,nombre:""},	
	{id:72,nombre:""},
	{id:73,nombre:""},
	{id:74,nombre:""},
	{id:75,nombre:""},
	{id:76,nombre:""},
	{id:77,nombre:""},
	{id:78,nombre:""},
	{id:79,nombre:""},
	{id:80,nombre:""},
	
	{id:81,nombre:""},	
	{id:82,nombre:""},
	{id:83,nombre:""},
	{id:84,nombre:""},
	{id:85,nombre:""},
	{id:86,nombre:""},
	{id:87,nombre:""},
	{id:88,nombre:""},
	{id:89,nombre:""},
	{id:90,nombre:""},
	
	{id:91,nombre:""},	
	{id:92,nombre:""},
	{id:93,nombre:""},
	{id:94,nombre:""},
	{id:95,nombre:""},
	{id:96,nombre:""},
	{id:97,nombre:""},
	{id:98,nombre:""},
	{id:99,nombre:""},
	{id:100,nombre:"SIRVIENTES"},
	
	{id:101,nombre:"MAYORDOMO"},
	{id:102,nombre:"MARÍA Y JESÚS"},
	{id:103,nombre:"JUDIO"},
	{id:104,nombre:"SOLDADO"},
	{id:105,nombre:"MUJER"},
	{id:106,nombre:"GENTE"},
	{id:107,nombre:"PADRE"},
	{id:108,nombre:"ESPOSA"},
	{id:109,nombre:"APÓSTOLES"},
	{id:110,nombre:"NIÑA"},
	
	{id:111,nombre:""},
	{id:112,nombre:""},
	{id:113,nombre:""},
	
];

