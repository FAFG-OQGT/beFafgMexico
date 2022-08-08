const bcrypt = require("bcrypt");
const estados = [
  {
    descripcion: "Activo",
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Inactivo",
    fechaHoraIngreso: Date.now()
  }
];

const generos = [
  {descripcion: "Masculino", estadoId: 1, fechaHoraIngreso: Date.now()},
  {descripcion: "Femenino", estadoId: 1, fechaHoraIngreso: Date.now()},
  {descripcion: "No definido", estadoId: 1, fechaHoraIngreso: Date.now()}
];

const modulos = [
  {descripcion: "Identificados", estadoId: 1, fechaHoraIngreso: Date.now()},
  {descripcion: "Laboratorio", estadoId: 1, fechaHoraIngreso: Date.now()}
];

const paises = [
  {
    descripcion: "Guatemala",
    nacionalidad: "Guatemalteco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Mexico",
    nacionalidad: "Mexicano",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const departamentos = [
  {
    departamentoId: 1,
    paisId: 2,
    descripcion: "Aguascalientes",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 2,
    paisId: 2,
    descripcion: "Baja California",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 3,
    paisId: 2,
    descripcion: "Baja California Sur",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 4,
    paisId: 2,
    descripcion: "Campeche",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 5,
    paisId: 2,
    descripcion: "Coahuila de Zaragoza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 6,
    paisId: 2,
    descripcion: "Colima",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 7,
    paisId: 2,
    descripcion: "Chiapas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 8,
    paisId: 2,
    descripcion: "Chihuahua",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 9,
    paisId: 2,
    descripcion: "Distrito Federal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 10,
    paisId: 2,
    descripcion: "Durango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 11,
    paisId: 2,
    descripcion: "Guanajuato",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 12,
    paisId: 2,
    descripcion: "Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 13,
    paisId: 2,
    descripcion: "Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 14,
    paisId: 2,
    descripcion: "Jalisco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 15,
    paisId: 2,
    descripcion: "México",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 16,
    paisId: 2,
    descripcion: "Michoacán de Ocampo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 17,
    paisId: 2,
    descripcion: "Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 18,
    paisId: 2,
    descripcion: "Nayarit",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 19,
    paisId: 2,
    descripcion: "Nuevo León",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 20,
    paisId: 2,
    descripcion: "Oaxaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 21,
    paisId: 2,
    descripcion: "Puebla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },

  {
    departamentoId: 22,
    paisId: 2,
    descripcion: "Querétaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 23,
    paisId: 2,
    descripcion: "Quintana Roo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 24,
    paisId: 2,
    descripcion: "San Luis Potosí",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 25,
    paisId: 2,
    descripcion: "Sinaloa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 26,
    paisId: 2,
    descripcion: "Sonora",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 27,
    paisId: 2,
    descripcion: "Tabasco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 28,
    paisId: 2,
    descripcion: "Tamaulipas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 29,
    paisId: 2,
    descripcion: "Tlaxcala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 30,
    paisId: 2,
    descripcion: "Veracruz de Ignacio de la Llave",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 31,
    paisId: 2,
    descripcion: "Yucatán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    departamentoId: 32,
    paisId: 2,
    descripcion: "Zacatecas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const municipios = [
  {
    municipioId_depto: 1,
    departamentoId: 1,
    descripcion: "Aguascalientes",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2,
    departamentoId: 1,
    descripcion: "Asientos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 3,
    departamentoId: 1,
    descripcion: "Calvillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 4,
    departamentoId: 1,
    descripcion: "Cosío",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 5,
    departamentoId: 1,
    descripcion: "Jesús María",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 6,
    departamentoId: 1,
    descripcion: "Pabellón de Arteaga",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 7,
    departamentoId: 1,
    descripcion: "Rincón de Romos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 8,
    departamentoId: 1,
    descripcion: "San José de Gracia",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 9,
    departamentoId: 1,
    descripcion: "Tepezalá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 10,
    departamentoId: 1,
    descripcion: "El Llano",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 11,
    departamentoId: 1,
    descripcion: "San Francisco de los Romo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 12,
    departamentoId: 2,
    descripcion: "Ensenada",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 13,
    departamentoId: 2,
    descripcion: "Mexicali",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 14,
    departamentoId: 2,
    descripcion: "Tecate",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 15,
    departamentoId: 2,
    descripcion: "Tijuana",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 16,
    departamentoId: 2,
    descripcion: "Playas de Rosarito",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 17,
    departamentoId: 3,
    descripcion: "Comondú",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 18,
    departamentoId: 3,
    descripcion: "Mulegé",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 19,
    departamentoId: 3,
    descripcion: "La Paz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 20,
    departamentoId: 3,
    descripcion: "Los Cabos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 21,
    departamentoId: 3,
    descripcion: "Loreto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 22,
    departamentoId: 4,
    descripcion: "Calkiní",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 23,
    departamentoId: 4,
    descripcion: "Campeche",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 24,
    departamentoId: 4,
    descripcion: "Carmen",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 25,
    departamentoId: 4,
    descripcion: "Champotón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 26,
    departamentoId: 4,
    descripcion: "Hecelchakán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 27,
    departamentoId: 4,
    descripcion: "Hopelchén",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 28,
    departamentoId: 4,
    descripcion: "Palizada",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 29,
    departamentoId: 4,
    descripcion: "Tenabo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 30,
    departamentoId: 4,
    descripcion: "Escárcega",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 31,
    departamentoId: 4,
    descripcion: "Calakmul",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 32,
    departamentoId: 4,
    descripcion: "Candelaria",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 33,
    departamentoId: 5,
    descripcion: "Abasolo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 34,
    departamentoId: 5,
    descripcion: "Acuña",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 35,
    departamentoId: 5,
    descripcion: "Allende",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 36,
    departamentoId: 5,
    descripcion: "Arteaga",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 37,
    departamentoId: 5,
    descripcion: "Candela",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 38,
    departamentoId: 5,
    descripcion: "Castaños",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 39,
    departamentoId: 5,
    descripcion: "Cuatro Ciénegas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 40,
    departamentoId: 5,
    descripcion: "Escobedo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 41,
    departamentoId: 5,
    descripcion: "Francisco I. Madero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 42,
    departamentoId: 5,
    descripcion: "Frontera",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 43,
    departamentoId: 5,
    descripcion: "General Cepeda",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 44,
    departamentoId: 5,
    descripcion: "Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 45,
    departamentoId: 5,
    descripcion: "Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 46,
    departamentoId: 5,
    descripcion: "Jiménez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 47,
    departamentoId: 5,
    descripcion: "Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 48,
    departamentoId: 5,
    descripcion: "Lamadrid",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 49,
    departamentoId: 5,
    descripcion: "Matamoros",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 50,
    departamentoId: 5,
    descripcion: "Monclova",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 51,
    departamentoId: 5,
    descripcion: "Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 52,
    departamentoId: 5,
    descripcion: "Múzquiz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 53,
    departamentoId: 5,
    descripcion: "Nadadores",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 54,
    departamentoId: 5,
    descripcion: "Nava",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 55,
    departamentoId: 5,
    descripcion: "Ocampo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 56,
    departamentoId: 5,
    descripcion: "Parras",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 57,
    departamentoId: 5,
    descripcion: "Piedras Negras",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 58,
    departamentoId: 5,
    descripcion: "Progreso",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 59,
    departamentoId: 5,
    descripcion: "Ramos Arizpe",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 60,
    departamentoId: 5,
    descripcion: "Sabinas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 61,
    departamentoId: 5,
    descripcion: "Sacramento",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 62,
    departamentoId: 5,
    descripcion: "Saltillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 63,
    departamentoId: 5,
    descripcion: "San Buenaventura",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 64,
    departamentoId: 5,
    descripcion: "San Juan de Sabinas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 65,
    departamentoId: 5,
    descripcion: "San Pedro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 66,
    departamentoId: 5,
    descripcion: "Sierra Mojada",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 67,
    departamentoId: 5,
    descripcion: "Torreón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 68,
    departamentoId: 5,
    descripcion: "Viesca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 69,
    departamentoId: 5,
    descripcion: "Villa Unión",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 70,
    departamentoId: 5,
    descripcion: "Zaragoza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 71,
    departamentoId: 6,
    descripcion: "Armería",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 72,
    departamentoId: 6,
    descripcion: "Colima",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 73,
    departamentoId: 6,
    descripcion: "Comala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 74,
    departamentoId: 6,
    descripcion: "Coquimatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 75,
    departamentoId: 6,
    descripcion: "Cuauhtémoc",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 76,
    departamentoId: 6,
    descripcion: "Ixtlahuacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 77,
    departamentoId: 6,
    descripcion: "Manzanillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 78,
    departamentoId: 6,
    descripcion: "Minatitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 79,
    departamentoId: 6,
    descripcion: "Tecomán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 80,
    departamentoId: 6,
    descripcion: "Villa de Álvarez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 81,
    departamentoId: 7,
    descripcion: "Acacoyagua",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 82,
    departamentoId: 7,
    descripcion: "Acala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 83,
    departamentoId: 7,
    descripcion: "Acapetahua",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 84,
    departamentoId: 7,
    descripcion: "Altamirano",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 85,
    departamentoId: 7,
    descripcion: "Amatán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 86,
    departamentoId: 7,
    descripcion: "Amatenango de la Frontera",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 87,
    departamentoId: 7,
    descripcion: "Amatenango del Valle",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 88,
    departamentoId: 7,
    descripcion: "Angel Albino Corzo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 89,
    departamentoId: 7,
    descripcion: "Arriaga",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 90,
    departamentoId: 7,
    descripcion: "Bejucal de Ocampo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 91,
    departamentoId: 7,
    descripcion: "Bella Vista",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 92,
    departamentoId: 7,
    descripcion: "Berriozábal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 93,
    departamentoId: 7,
    descripcion: "Bochil",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 94,
    departamentoId: 7,
    descripcion: "El Bosque",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 95,
    departamentoId: 7,
    descripcion: "Cacahoatán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 96,
    departamentoId: 7,
    descripcion: "Catazajá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 97,
    departamentoId: 7,
    descripcion: "Cintalapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 98,
    departamentoId: 7,
    descripcion: "Coapilla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 99,
    departamentoId: 7,
    descripcion: "Comitán de Domínguez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 100,
    departamentoId: 7,
    descripcion: "La Concordia",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 101,
    departamentoId: 7,
    descripcion: "Copainalá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 102,
    departamentoId: 7,
    descripcion: "Chalchihuitán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 103,
    departamentoId: 7,
    descripcion: "Chamula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 104,
    departamentoId: 7,
    descripcion: "Chanal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 105,
    departamentoId: 7,
    descripcion: "Chapultenango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 106,
    departamentoId: 7,
    descripcion: "Chenalhó",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 107,
    departamentoId: 7,
    descripcion: "Chiapa de Corzo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 108,
    departamentoId: 7,
    descripcion: "Chiapilla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 109,
    departamentoId: 7,
    descripcion: "Chicoasén",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 110,
    departamentoId: 7,
    descripcion: "Chicomuselo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 111,
    departamentoId: 7,
    descripcion: "Chilón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 112,
    departamentoId: 7,
    descripcion: "Escuintla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 113,
    departamentoId: 7,
    descripcion: "Francisco León",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 114,
    departamentoId: 7,
    descripcion: "Frontera Comalapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 115,
    departamentoId: 7,
    descripcion: "Frontera Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 116,
    departamentoId: 7,
    descripcion: "La Grandeza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 117,
    departamentoId: 7,
    descripcion: "Huehuetán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 118,
    departamentoId: 7,
    descripcion: "Huixtán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 119,
    departamentoId: 7,
    descripcion: "Huitiupán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 120,
    departamentoId: 7,
    descripcion: "Huixtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 121,
    departamentoId: 7,
    descripcion: "La Independencia",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 122,
    departamentoId: 7,
    descripcion: "Ixhuatán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 123,
    departamentoId: 7,
    descripcion: "Ixtacomitán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 124,
    departamentoId: 7,
    descripcion: "Ixtapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 125,
    departamentoId: 7,
    descripcion: "Ixtapangajoya",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 126,
    departamentoId: 7,
    descripcion: "Jiquipilas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 127,
    departamentoId: 7,
    descripcion: "Jitotol",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 128,
    departamentoId: 7,
    descripcion: "Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 129,
    departamentoId: 7,
    descripcion: "Larráinzar",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 130,
    departamentoId: 7,
    descripcion: "La Libertad",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 131,
    departamentoId: 7,
    descripcion: "Mapastepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 132,
    departamentoId: 7,
    descripcion: "Las Margaritas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 133,
    departamentoId: 7,
    descripcion: "Mazapa de Madero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 134,
    departamentoId: 7,
    descripcion: "Mazatán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 135,
    departamentoId: 7,
    descripcion: "Metapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 136,
    departamentoId: 7,
    descripcion: "Mitontic",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 137,
    departamentoId: 7,
    descripcion: "Motozintla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 138,
    departamentoId: 7,
    descripcion: "Nicolás Ruíz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 139,
    departamentoId: 7,
    descripcion: "Ocosingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 140,
    departamentoId: 7,
    descripcion: "Ocotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 141,
    departamentoId: 7,
    descripcion: "Ocozocoautla de Espinosa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 142,
    departamentoId: 7,
    descripcion: "Ostuacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 143,
    departamentoId: 7,
    descripcion: "Osumacinta",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 144,
    departamentoId: 7,
    descripcion: "Oxchuc",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 145,
    departamentoId: 7,
    descripcion: "Palenque",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 146,
    departamentoId: 7,
    descripcion: "Pantelhó",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 147,
    departamentoId: 7,
    descripcion: "Pantepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 148,
    departamentoId: 7,
    descripcion: "Pichucalco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 149,
    departamentoId: 7,
    descripcion: "Pijijiapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 150,
    departamentoId: 7,
    descripcion: "El Porvenir",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 151,
    departamentoId: 7,
    descripcion: "Villa Comaltitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 152,
    departamentoId: 7,
    descripcion: "Pueblo Nuevo Solistahuacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 153,
    departamentoId: 7,
    descripcion: "Rayón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 154,
    departamentoId: 7,
    descripcion: "Reforma",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 155,
    departamentoId: 7,
    descripcion: "Las Rosas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 156,
    departamentoId: 7,
    descripcion: "Sabanilla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 157,
    departamentoId: 7,
    descripcion: "Salto de Agua",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 158,
    departamentoId: 7,
    descripcion: "San Cristóbal de las Casas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 159,
    departamentoId: 7,
    descripcion: "San Fernando",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 160,
    departamentoId: 7,
    descripcion: "Siltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 161,
    departamentoId: 7,
    descripcion: "Simojovel",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 162,
    departamentoId: 7,
    descripcion: "Sitalá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 163,
    departamentoId: 7,
    descripcion: "Socoltenango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 164,
    departamentoId: 7,
    descripcion: "Solosuchiapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 165,
    departamentoId: 7,
    descripcion: "Soyaló",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 166,
    departamentoId: 7,
    descripcion: "Suchiapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 167,
    departamentoId: 7,
    descripcion: "Suchiate",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 168,
    departamentoId: 7,
    descripcion: "Sunuapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 169,
    departamentoId: 7,
    descripcion: "Tapachula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 170,
    departamentoId: 7,
    descripcion: "Tapalapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 171,
    departamentoId: 7,
    descripcion: "Tapilula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 172,
    departamentoId: 7,
    descripcion: "Tecpatán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 173,
    departamentoId: 7,
    descripcion: "Tenejapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 174,
    departamentoId: 7,
    descripcion: "Teopisca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 175,
    departamentoId: 7,
    descripcion: "Tila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 176,
    departamentoId: 7,
    descripcion: "Tonalá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 177,
    departamentoId: 7,
    descripcion: "Totolapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 178,
    departamentoId: 7,
    descripcion: "La Trinitaria",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 179,
    departamentoId: 7,
    descripcion: "Tumbalá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 180,
    departamentoId: 7,
    descripcion: "Tuxtla Gutiérrez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 181,
    departamentoId: 7,
    descripcion: "Tuxtla Chico",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 182,
    departamentoId: 7,
    descripcion: "Tuzantán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 183,
    departamentoId: 7,
    descripcion: "Tzimol",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 184,
    departamentoId: 7,
    descripcion: "Unión Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 185,
    departamentoId: 7,
    descripcion: "Venustiano Carranza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 186,
    departamentoId: 7,
    descripcion: "Villa Corzo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 187,
    departamentoId: 7,
    descripcion: "Villaflores",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 188,
    departamentoId: 7,
    descripcion: "Yajalón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 189,
    departamentoId: 7,
    descripcion: "San Lucas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 190,
    departamentoId: 7,
    descripcion: "Zinacantán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 191,
    departamentoId: 7,
    descripcion: "San Juan Cancuc",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 192,
    departamentoId: 7,
    descripcion: "Aldama",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 193,
    departamentoId: 7,
    descripcion: "Benemérito de las Américas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 194,
    departamentoId: 7,
    descripcion: "Maravilla Tenejapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 195,
    departamentoId: 7,
    descripcion: "Marqués de Comillas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 196,
    departamentoId: 7,
    descripcion: "Montecristo de Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 197,
    departamentoId: 7,
    descripcion: "San Andrés Duraznal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 198,
    departamentoId: 7,
    descripcion: "Santiago el Pinar",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 199,
    departamentoId: 8,
    descripcion: "Ahumada",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 200,
    departamentoId: 8,
    descripcion: "Aldama",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 201,
    departamentoId: 8,
    descripcion: "Allende",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 202,
    departamentoId: 8,
    descripcion: "Aquiles Serdán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 203,
    departamentoId: 8,
    descripcion: "Ascensión",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 204,
    departamentoId: 8,
    descripcion: "Bachíniva",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 205,
    departamentoId: 8,
    descripcion: "Balleza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 206,
    departamentoId: 8,
    descripcion: "Batopilas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 207,
    departamentoId: 8,
    descripcion: "Bocoyna",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 208,
    departamentoId: 8,
    descripcion: "Buenaventura",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 209,
    departamentoId: 8,
    descripcion: "Camargo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 210,
    departamentoId: 8,
    descripcion: "Carichí",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 211,
    departamentoId: 8,
    descripcion: "Casas Grandes",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 212,
    departamentoId: 8,
    descripcion: "Coronado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 213,
    departamentoId: 8,
    descripcion: "Coyame del Sotol",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 214,
    departamentoId: 8,
    descripcion: "La Cruz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 215,
    departamentoId: 8,
    descripcion: "Cuauhtémoc",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 216,
    departamentoId: 8,
    descripcion: "Cusihuiriachi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 217,
    departamentoId: 8,
    descripcion: "Chihuahua",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 218,
    departamentoId: 8,
    descripcion: "Chínipas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 219,
    departamentoId: 8,
    descripcion: "Delicias",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 220,
    departamentoId: 8,
    descripcion: "Dr. Belisario Domínguez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 221,
    departamentoId: 8,
    descripcion: "Galeana",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 222,
    departamentoId: 8,
    descripcion: "Santa Isabel",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 223,
    departamentoId: 8,
    descripcion: "Gómez Farías",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 224,
    departamentoId: 8,
    descripcion: "Gran Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 225,
    departamentoId: 8,
    descripcion: "Guachochi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 226,
    departamentoId: 8,
    descripcion: "Guadalupe",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 227,
    departamentoId: 8,
    descripcion: "Guadalupe y Calvo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 228,
    departamentoId: 8,
    descripcion: "Guazapares",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 229,
    departamentoId: 8,
    descripcion: "Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 230,
    departamentoId: 8,
    descripcion: "Hidalgo del Parral",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 231,
    departamentoId: 8,
    descripcion: "Huejotitán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 232,
    departamentoId: 8,
    descripcion: "Ignacio Zaragoza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 233,
    departamentoId: 8,
    descripcion: "Janos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 234,
    departamentoId: 8,
    descripcion: "Jiménez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 235,
    departamentoId: 8,
    descripcion: "Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 236,
    departamentoId: 8,
    descripcion: "Julimes",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 237,
    departamentoId: 8,
    descripcion: "López",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 238,
    departamentoId: 8,
    descripcion: "Madera",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 239,
    departamentoId: 8,
    descripcion: "Maguarichi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 240,
    departamentoId: 8,
    descripcion: "Manuel Benavides",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 241,
    departamentoId: 8,
    descripcion: "Matachí",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 242,
    departamentoId: 8,
    descripcion: "Matamoros",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 243,
    departamentoId: 8,
    descripcion: "Meoqui",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 244,
    departamentoId: 8,
    descripcion: "Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 245,
    departamentoId: 8,
    descripcion: "Moris",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 246,
    departamentoId: 8,
    descripcion: "Namiquipa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 247,
    departamentoId: 8,
    descripcion: "Nonoava",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 248,
    departamentoId: 8,
    descripcion: "Nuevo Casas Grandes",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 249,
    departamentoId: 8,
    descripcion: "Ocampo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 250,
    departamentoId: 8,
    descripcion: "Ojinaga",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 251,
    departamentoId: 8,
    descripcion: "Praxedis G. Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 252,
    departamentoId: 8,
    descripcion: "Riva Palacio",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 253,
    departamentoId: 8,
    descripcion: "Rosales",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 254,
    departamentoId: 8,
    descripcion: "Rosario",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 255,
    departamentoId: 8,
    descripcion: "San Francisco de Borja",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 256,
    departamentoId: 8,
    descripcion: "San Francisco de Conchos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 257,
    departamentoId: 8,
    descripcion: "San Francisco del Oro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 258,
    departamentoId: 8,
    descripcion: "Santa Bárbara",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 259,
    departamentoId: 8,
    descripcion: "Satevó",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 260,
    departamentoId: 8,
    descripcion: "Saucillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 261,
    departamentoId: 8,
    descripcion: "Temósachic",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 262,
    departamentoId: 8,
    descripcion: "El Tule",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 263,
    departamentoId: 8,
    descripcion: "Urique",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 264,
    departamentoId: 8,
    descripcion: "Uruachi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 265,
    departamentoId: 8,
    descripcion: "Valle de Zaragoza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 266,
    departamentoId: 9,
    descripcion: "Azcapotzalco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 267,
    departamentoId: 9,
    descripcion: "Coyoacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 268,
    departamentoId: 9,
    descripcion: "Cuajimalpa de Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 269,
    departamentoId: 9,
    descripcion: "Gustavo A. Madero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 270,
    departamentoId: 9,
    descripcion: "Iztacalco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 271,
    departamentoId: 9,
    descripcion: "Iztapalapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 272,
    departamentoId: 9,
    descripcion: "La Magdalena Contreras",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 273,
    departamentoId: 9,
    descripcion: "Milpa Alta",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 274,
    departamentoId: 9,
    descripcion: "Álvaro Obregón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 275,
    departamentoId: 9,
    descripcion: "Tláhuac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 276,
    departamentoId: 9,
    descripcion: "Tlalpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 277,
    departamentoId: 9,
    descripcion: "Xochimilco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 278,
    departamentoId: 9,
    descripcion: "Benito Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 279,
    departamentoId: 9,
    descripcion: "Cuauhtémoc",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 280,
    departamentoId: 9,
    descripcion: "Miguel Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 281,
    departamentoId: 9,
    descripcion: "Venustiano Carranza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 282,
    departamentoId: 10,
    descripcion: "Canatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 283,
    departamentoId: 10,
    descripcion: "Canelas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 284,
    departamentoId: 10,
    descripcion: "Coneto de Comonfort",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 285,
    departamentoId: 10,
    descripcion: "Cuencamé",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 286,
    departamentoId: 10,
    descripcion: "Durango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 287,
    departamentoId: 10,
    descripcion: "General Simón Bolívar",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 288,
    departamentoId: 10,
    descripcion: "Gómez Palacio",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 289,
    departamentoId: 10,
    descripcion: "Guadalupe Victoria",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 290,
    departamentoId: 10,
    descripcion: "Guanaceví",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 291,
    departamentoId: 10,
    descripcion: "Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 292,
    departamentoId: 10,
    descripcion: "Indé",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 293,
    departamentoId: 10,
    descripcion: "Lerdo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 294,
    departamentoId: 10,
    descripcion: "Mapimí",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 295,
    departamentoId: 10,
    descripcion: "Mezquital",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 296,
    departamentoId: 10,
    descripcion: "Nazas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 297,
    departamentoId: 10,
    descripcion: "Nombre de Dios",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 298,
    departamentoId: 10,
    descripcion: "Ocampo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 299,
    departamentoId: 10,
    descripcion: "El Oro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 300,
    departamentoId: 10,
    descripcion: "Otáez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 301,
    departamentoId: 10,
    descripcion: "Pánuco de Coronado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 302,
    departamentoId: 10,
    descripcion: "Peñón Blanco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 303,
    departamentoId: 10,
    descripcion: "Poanas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 304,
    departamentoId: 10,
    descripcion: "Pueblo Nuevo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 305,
    departamentoId: 10,
    descripcion: "Rodeo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 306,
    departamentoId: 10,
    descripcion: "San Bernardo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 307,
    departamentoId: 10,
    descripcion: "San Dimas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 308,
    departamentoId: 10,
    descripcion: "San Juan de Guadalupe",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 309,
    departamentoId: 10,
    descripcion: "San Juan del Río",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 310,
    departamentoId: 10,
    descripcion: "San Luis del Cordero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 311,
    departamentoId: 10,
    descripcion: "San Pedro del Gallo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 312,
    departamentoId: 10,
    descripcion: "Santa Clara",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 313,
    departamentoId: 10,
    descripcion: "Santiago Papasquiaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 314,
    departamentoId: 10,
    descripcion: "Súchil",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 315,
    departamentoId: 10,
    descripcion: "Tamazula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 316,
    departamentoId: 10,
    descripcion: "Tepehuanes",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 317,
    departamentoId: 10,
    descripcion: "Tlahualilo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 318,
    departamentoId: 10,
    descripcion: "Topia",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 319,
    departamentoId: 10,
    descripcion: "Vicente Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 320,
    departamentoId: 10,
    descripcion: "Nuevo Ideal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 321,
    departamentoId: 11,
    descripcion: "Abasolo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 322,
    departamentoId: 11,
    descripcion: "Acámbaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 323,
    departamentoId: 11,
    descripcion: "San Miguel de Allende",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 324,
    departamentoId: 11,
    descripcion: "Apaseo el Alto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 325,
    departamentoId: 11,
    descripcion: "Apaseo el Grande",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 326,
    departamentoId: 11,
    descripcion: "Atarjea",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 327,
    departamentoId: 11,
    descripcion: "Celaya",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 328,
    departamentoId: 11,
    descripcion: "Manuel Doblado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 329,
    departamentoId: 11,
    descripcion: "Comonfort",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 330,
    departamentoId: 11,
    descripcion: "Coroneo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 331,
    departamentoId: 11,
    descripcion: "Cortazar",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 332,
    departamentoId: 11,
    descripcion: "Cuerámaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 333,
    departamentoId: 11,
    descripcion: "Doctor Mora",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 334,
    departamentoId: 11,
    descripcion: "Dolores Hidalgo Cuna de la Independencia Nacional",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 335,
    departamentoId: 11,
    descripcion: "Guanajuato",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 336,
    departamentoId: 11,
    descripcion: "Huanímaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 337,
    departamentoId: 11,
    descripcion: "Irapuato",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 338,
    departamentoId: 11,
    descripcion: "Jaral del Progreso",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 339,
    departamentoId: 11,
    descripcion: "Jerécuaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 340,
    departamentoId: 11,
    descripcion: "León",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 341,
    departamentoId: 11,
    descripcion: "Moroleón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 342,
    departamentoId: 11,
    descripcion: "Ocampo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 343,
    departamentoId: 11,
    descripcion: "Pénjamo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 344,
    departamentoId: 11,
    descripcion: "Pueblo Nuevo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 345,
    departamentoId: 11,
    descripcion: "Purísima del Rincón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 346,
    departamentoId: 11,
    descripcion: "Romita",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 347,
    departamentoId: 11,
    descripcion: "Salamanca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 348,
    departamentoId: 11,
    descripcion: "Salvatierra",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 349,
    departamentoId: 11,
    descripcion: "San Diego de la Unión",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 350,
    departamentoId: 11,
    descripcion: "San Felipe",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 351,
    departamentoId: 11,
    descripcion: "San Francisco del Rincón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 352,
    departamentoId: 11,
    descripcion: "San José Iturbide",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 353,
    departamentoId: 11,
    descripcion: "San Luis de la Paz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 354,
    departamentoId: 11,
    descripcion: "Santa Catarina",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 355,
    departamentoId: 11,
    descripcion: "Santa Cruz de Juventino Rosas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 356,
    departamentoId: 11,
    descripcion: "Santiago Maravatío",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 357,
    departamentoId: 11,
    descripcion: "Silao",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 358,
    departamentoId: 11,
    descripcion: "Tarandacuao",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 359,
    departamentoId: 11,
    descripcion: "Tarimoro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 360,
    departamentoId: 11,
    descripcion: "Tierra Blanca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 361,
    departamentoId: 11,
    descripcion: "Uriangato",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 362,
    departamentoId: 11,
    descripcion: "Valle de Santiago",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 363,
    departamentoId: 11,
    descripcion: "Victoria",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 364,
    departamentoId: 11,
    descripcion: "Villagrán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 365,
    departamentoId: 11,
    descripcion: "Xichú",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 366,
    departamentoId: 11,
    descripcion: "Yuriria",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 367,
    departamentoId: 12,
    descripcion: "Acapulco de Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 368,
    departamentoId: 12,
    descripcion: "Ahuacuotzingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 369,
    departamentoId: 12,
    descripcion: "Ajuchitlán del Progreso",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 370,
    departamentoId: 12,
    descripcion: "Alcozauca de Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 371,
    departamentoId: 12,
    descripcion: "Alpoyeca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 372,
    departamentoId: 12,
    descripcion: "Apaxtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 373,
    departamentoId: 12,
    descripcion: "Arcelia",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 374,
    departamentoId: 12,
    descripcion: "Atenango del Río",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 375,
    departamentoId: 12,
    descripcion: "Atlamajalcingo del Monte",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 376,
    departamentoId: 12,
    descripcion: "Atlixtac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 377,
    departamentoId: 12,
    descripcion: "Atoyac de Álvarez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 378,
    departamentoId: 12,
    descripcion: "Ayutla de los Libres",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 379,
    departamentoId: 12,
    descripcion: "Azoyú",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 380,
    departamentoId: 12,
    descripcion: "Benito Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 381,
    departamentoId: 12,
    descripcion: "Buenavista de Cuéllar",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 382,
    departamentoId: 12,
    descripcion: "Coahuayutla de José María Izazaga",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 383,
    departamentoId: 12,
    descripcion: "Cocula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 384,
    departamentoId: 12,
    descripcion: "Copala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 385,
    departamentoId: 12,
    descripcion: "Copalillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 386,
    departamentoId: 12,
    descripcion: "Copanatoyac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 387,
    departamentoId: 12,
    descripcion: "Coyuca de Benítez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 388,
    departamentoId: 12,
    descripcion: "Coyuca de Catalán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 389,
    departamentoId: 12,
    descripcion: "Cuajinicuilapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 390,
    departamentoId: 12,
    descripcion: "Cualác",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 391,
    departamentoId: 12,
    descripcion: "Cuautepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 392,
    departamentoId: 12,
    descripcion: "Cuetzala del Progreso",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 393,
    departamentoId: 12,
    descripcion: "Cutzamala de Pinzón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 394,
    departamentoId: 12,
    descripcion: "Chilapa de Álvarez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 395,
    departamentoId: 12,
    descripcion: "Chilpancingo de los Bravo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 396,
    departamentoId: 12,
    descripcion: "Florencio Villarreal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 397,
    departamentoId: 12,
    descripcion: "General Canuto A. Neri",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 398,
    departamentoId: 12,
    descripcion: "General Heliodoro Castillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 399,
    departamentoId: 12,
    descripcion: "Huamuxtitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 400,
    departamentoId: 12,
    descripcion: "Huitzuco de los Figueroa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 401,
    departamentoId: 12,
    descripcion: "Iguala de la Independencia",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 402,
    departamentoId: 12,
    descripcion: "Igualapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 403,
    departamentoId: 12,
    descripcion: "Ixcateopan de Cuauhtémoc",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 404,
    departamentoId: 12,
    descripcion: "Zihuatanejo de Azueta",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 405,
    departamentoId: 12,
    descripcion: "Juan R. Escudero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 406,
    departamentoId: 12,
    descripcion: "Leonardo Bravo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 407,
    departamentoId: 12,
    descripcion: "Malinaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 408,
    departamentoId: 12,
    descripcion: "Mártir de Cuilapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 409,
    departamentoId: 12,
    descripcion: "Metlatónoc",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 410,
    departamentoId: 12,
    descripcion: "Mochitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 411,
    departamentoId: 12,
    descripcion: "Olinalá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 412,
    departamentoId: 12,
    descripcion: "Ometepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 413,
    departamentoId: 12,
    descripcion: "Pedro Ascencio Alquisiras",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 414,
    departamentoId: 12,
    descripcion: "Petatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 415,
    departamentoId: 12,
    descripcion: "Pilcaya",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 416,
    departamentoId: 12,
    descripcion: "Pungarabato",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 417,
    departamentoId: 12,
    descripcion: "Quechultenango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 418,
    departamentoId: 12,
    descripcion: "San Luis Acatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 419,
    departamentoId: 12,
    descripcion: "San Marcos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 420,
    departamentoId: 12,
    descripcion: "San Miguel Totolapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 421,
    departamentoId: 12,
    descripcion: "Taxco de Alarcón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 422,
    departamentoId: 12,
    descripcion: "Tecoanapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 423,
    departamentoId: 12,
    descripcion: "Técpan de Galeana",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 424,
    departamentoId: 12,
    descripcion: "Teloloapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 425,
    departamentoId: 12,
    descripcion: "Tepecoacuilco de Trujano",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 426,
    departamentoId: 12,
    descripcion: "Tetipac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 427,
    departamentoId: 12,
    descripcion: "Tixtla de Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 428,
    departamentoId: 12,
    descripcion: "Tlacoachistlahuaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 429,
    departamentoId: 12,
    descripcion: "Tlacoapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 430,
    departamentoId: 12,
    descripcion: "Tlalchapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 431,
    departamentoId: 12,
    descripcion: "Tlalixtaquilla de Maldonado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 432,
    departamentoId: 12,
    descripcion: "Tlapa de Comonfort",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 433,
    departamentoId: 12,
    descripcion: "Tlapehuala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 434,
    departamentoId: 12,
    descripcion: "La Unión de Isidoro Montes de Oca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 435,
    departamentoId: 12,
    descripcion: "Xalpatláhuac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 436,
    departamentoId: 12,
    descripcion: "Xochihuehuetlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 437,
    departamentoId: 12,
    descripcion: "Xochistlahuaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 438,
    departamentoId: 12,
    descripcion: "Zapotitlán Tablas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 439,
    departamentoId: 12,
    descripcion: "Zirándaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 440,
    departamentoId: 12,
    descripcion: "Zitlala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 441,
    departamentoId: 12,
    descripcion: "Eduardo Neri",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 442,
    departamentoId: 12,
    descripcion: "Acatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 443,
    departamentoId: 12,
    descripcion: "Marquelia",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 444,
    departamentoId: 12,
    descripcion: "Cochoapa el Grande",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 445,
    departamentoId: 12,
    descripcion: "José Joaquín de Herrera",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 446,
    departamentoId: 12,
    descripcion: "Juchitán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 447,
    departamentoId: 12,
    descripcion: "Iliatenco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 448,
    departamentoId: 13,
    descripcion: "Acatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 449,
    departamentoId: 13,
    descripcion: "Acaxochitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 450,
    departamentoId: 13,
    descripcion: "Actopan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 451,
    departamentoId: 13,
    descripcion: "Agua Blanca de Iturbide",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 452,
    departamentoId: 13,
    descripcion: "Ajacuba",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 453,
    departamentoId: 13,
    descripcion: "Alfajayucan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 454,
    departamentoId: 13,
    descripcion: "Almoloya",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 455,
    departamentoId: 13,
    descripcion: "Apan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 456,
    departamentoId: 13,
    descripcion: "El Arenal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 457,
    departamentoId: 13,
    descripcion: "Atitalaquia",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 458,
    departamentoId: 13,
    descripcion: "Atlapexco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 459,
    departamentoId: 13,
    descripcion: "Atotonilco el Grande",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 460,
    departamentoId: 13,
    descripcion: "Atotonilco de Tula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 461,
    departamentoId: 13,
    descripcion: "Calnali",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 462,
    departamentoId: 13,
    descripcion: "Cardonal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 463,
    departamentoId: 13,
    descripcion: "Cuautepec de Hinojosa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 464,
    departamentoId: 13,
    descripcion: "Chapantongo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 465,
    departamentoId: 13,
    descripcion: "Chapulhuacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 466,
    departamentoId: 13,
    descripcion: "Chilcuautla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 467,
    departamentoId: 13,
    descripcion: "Eloxochitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 468,
    departamentoId: 13,
    descripcion: "Emiliano Zapata",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 469,
    departamentoId: 13,
    descripcion: "Epazoyucan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 470,
    departamentoId: 13,
    descripcion: "Francisco I. Madero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 471,
    departamentoId: 13,
    descripcion: "Huasca de Ocampo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 472,
    departamentoId: 13,
    descripcion: "Huautla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 473,
    departamentoId: 13,
    descripcion: "Huazalingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 474,
    departamentoId: 13,
    descripcion: "Huehuetla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 475,
    departamentoId: 13,
    descripcion: "Huejutla de Reyes",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 476,
    departamentoId: 13,
    descripcion: "Huichapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 477,
    departamentoId: 13,
    descripcion: "Ixmiquilpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 478,
    departamentoId: 13,
    descripcion: "Jacala de Ledezma",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 479,
    departamentoId: 13,
    descripcion: "Jaltocán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 480,
    departamentoId: 13,
    descripcion: "Juárez Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 481,
    departamentoId: 13,
    descripcion: "Lolotla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 482,
    departamentoId: 13,
    descripcion: "Metepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 483,
    departamentoId: 13,
    descripcion: "San Agustín Metzquititlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 484,
    departamentoId: 13,
    descripcion: "Metztitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 485,
    departamentoId: 13,
    descripcion: "Mineral del Chico",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 486,
    departamentoId: 13,
    descripcion: "Mineral del Monte",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 487,
    departamentoId: 13,
    descripcion: "La Misión",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 488,
    departamentoId: 13,
    descripcion: "Mixquiahuala de Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 489,
    departamentoId: 13,
    descripcion: "Molango de Escamilla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 490,
    departamentoId: 13,
    descripcion: "Nicolás Flores",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 491,
    departamentoId: 13,
    descripcion: "Nopala de Villagrán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 492,
    departamentoId: 13,
    descripcion: "Omitlán de Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 493,
    departamentoId: 13,
    descripcion: "San Felipe Orizatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 494,
    departamentoId: 13,
    descripcion: "Pacula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 495,
    departamentoId: 13,
    descripcion: "Pachuca de Soto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 496,
    departamentoId: 13,
    descripcion: "Pisaflores",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 497,
    departamentoId: 13,
    descripcion: "Progreso de Obregón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 498,
    departamentoId: 13,
    descripcion: "Mineral de la Reforma",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 499,
    departamentoId: 13,
    descripcion: "San Agustín Tlaxiaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 500,
    departamentoId: 13,
    descripcion: "San Bartolo Tutotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 501,
    departamentoId: 13,
    descripcion: "San Salvador",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 502,
    departamentoId: 13,
    descripcion: "Santiago de Anaya",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 503,
    departamentoId: 13,
    descripcion: "Santiago Tulantepec de Lugo Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 504,
    departamentoId: 13,
    descripcion: "Singuilucan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 505,
    departamentoId: 13,
    descripcion: "Tasquillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 506,
    departamentoId: 13,
    descripcion: "Tecozautla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 507,
    departamentoId: 13,
    descripcion: "Tenango de Doria",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 508,
    departamentoId: 13,
    descripcion: "Tepeapulco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 509,
    departamentoId: 13,
    descripcion: "Tepehuacán de Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 510,
    departamentoId: 13,
    descripcion: "Tepeji del Río de Ocampo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 511,
    departamentoId: 13,
    descripcion: "Tepetitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 512,
    departamentoId: 13,
    descripcion: "Tetepango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 513,
    departamentoId: 13,
    descripcion: "Villa de Tezontepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 514,
    departamentoId: 13,
    descripcion: "Tezontepec de Aldama",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 515,
    departamentoId: 13,
    descripcion: "Tianguistengo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 516,
    departamentoId: 13,
    descripcion: "Tizayuca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 517,
    departamentoId: 13,
    descripcion: "Tlahuelilpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 518,
    departamentoId: 13,
    descripcion: "Tlahuiltepa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 519,
    departamentoId: 13,
    descripcion: "Tlanalapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 520,
    departamentoId: 13,
    descripcion: "Tlanchinol",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 521,
    departamentoId: 13,
    descripcion: "Tlaxcoapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 522,
    departamentoId: 13,
    descripcion: "Tolcayuca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 523,
    departamentoId: 13,
    descripcion: "Tula de Allende",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 524,
    departamentoId: 13,
    descripcion: "Tulancingo de Bravo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 525,
    departamentoId: 13,
    descripcion: "Xochiatipan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 526,
    departamentoId: 13,
    descripcion: "Xochicoatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 527,
    departamentoId: 13,
    descripcion: "Yahualica",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 528,
    departamentoId: 13,
    descripcion: "Zacualtipán de Ángeles",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 529,
    departamentoId: 13,
    descripcion: "Zapotlán de Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 530,
    departamentoId: 13,
    descripcion: "Zempoala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 531,
    departamentoId: 13,
    descripcion: "Zimapán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 532,
    departamentoId: 14,
    descripcion: "Acatic",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 533,
    departamentoId: 14,
    descripcion: "Acatlán de Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 534,
    departamentoId: 14,
    descripcion: "Ahualulco de Mercado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 535,
    departamentoId: 14,
    descripcion: "Amacueca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 536,
    departamentoId: 14,
    descripcion: "Amatitán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 537,
    departamentoId: 14,
    descripcion: "Ameca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 538,
    departamentoId: 14,
    descripcion: "San Juanito de Escobedo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 539,
    departamentoId: 14,
    descripcion: "Arandas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 540,
    departamentoId: 14,
    descripcion: "El Arenal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 541,
    departamentoId: 14,
    descripcion: "Atemajac de Brizuela",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 542,
    departamentoId: 14,
    descripcion: "Atengo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 543,
    departamentoId: 14,
    descripcion: "Atenguillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 544,
    departamentoId: 14,
    descripcion: "Atotonilco el Alto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 545,
    departamentoId: 14,
    descripcion: "Atoyac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 546,
    departamentoId: 14,
    descripcion: "Autlán de Navarro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 547,
    departamentoId: 14,
    descripcion: "Ayotlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 548,
    departamentoId: 14,
    descripcion: "Ayutla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 549,
    departamentoId: 14,
    descripcion: "La Barca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 550,
    departamentoId: 14,
    descripcion: "Bolaños",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 551,
    departamentoId: 14,
    descripcion: "Cabo Corrientes",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 552,
    departamentoId: 14,
    descripcion: "Casimiro Castillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 553,
    departamentoId: 14,
    descripcion: "Cihuatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 554,
    departamentoId: 14,
    descripcion: "Zapotlán el Grande",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 555,
    departamentoId: 14,
    descripcion: "Cocula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 556,
    departamentoId: 14,
    descripcion: "Colotlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 557,
    departamentoId: 14,
    descripcion: "Concepción de Buenos Aires",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 558,
    departamentoId: 14,
    descripcion: "Cuautitlán de García Barragán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 559,
    departamentoId: 14,
    descripcion: "Cuautla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 560,
    departamentoId: 14,
    descripcion: "Cuquío",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 561,
    departamentoId: 14,
    descripcion: "Chapala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 562,
    departamentoId: 14,
    descripcion: "Chimaltitán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 563,
    departamentoId: 14,
    descripcion: "Chiquilistlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 564,
    departamentoId: 14,
    descripcion: "Degollado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 565,
    departamentoId: 14,
    descripcion: "Ejutla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 566,
    departamentoId: 14,
    descripcion: "Encarnación de Díaz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 567,
    departamentoId: 14,
    descripcion: "Etzatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 568,
    departamentoId: 14,
    descripcion: "El Grullo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 569,
    departamentoId: 14,
    descripcion: "Guachinango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 570,
    departamentoId: 14,
    descripcion: "Guadalajara",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 571,
    departamentoId: 14,
    descripcion: "Hostotipaquillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 572,
    departamentoId: 14,
    descripcion: "Huejúcar",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 573,
    departamentoId: 14,
    descripcion: "Huejuquilla el Alto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 574,
    departamentoId: 14,
    descripcion: "La Huerta",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 575,
    departamentoId: 14,
    descripcion: "Ixtlahuacán de los Membrillos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 576,
    departamentoId: 14,
    descripcion: "Ixtlahuacán del Río",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 577,
    departamentoId: 14,
    descripcion: "Jalostotitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 578,
    departamentoId: 14,
    descripcion: "Jamay",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 579,
    departamentoId: 14,
    descripcion: "Jesús María",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 580,
    departamentoId: 14,
    descripcion: "Jilotlán de los Dolores",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 581,
    departamentoId: 14,
    descripcion: "Jocotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 582,
    departamentoId: 14,
    descripcion: "Juanacatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 583,
    departamentoId: 14,
    descripcion: "Juchitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 584,
    departamentoId: 14,
    descripcion: "Lagos de Moreno",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 585,
    departamentoId: 14,
    descripcion: "El Limón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 586,
    departamentoId: 14,
    descripcion: "Magdalena",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 587,
    departamentoId: 14,
    descripcion: "Santa María del Oro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 588,
    departamentoId: 14,
    descripcion: "La Manzanilla de la Paz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 589,
    departamentoId: 14,
    descripcion: "Mascota",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 590,
    departamentoId: 14,
    descripcion: "Mazamitla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 591,
    departamentoId: 14,
    descripcion: "Mexticacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 592,
    departamentoId: 14,
    descripcion: "Mezquitic",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 593,
    departamentoId: 14,
    descripcion: "Mixtlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 594,
    departamentoId: 14,
    descripcion: "Ocotlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 595,
    departamentoId: 14,
    descripcion: "Ojuelos de Jalisco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 596,
    departamentoId: 14,
    descripcion: "Pihuamo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 597,
    departamentoId: 14,
    descripcion: "Poncitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 598,
    departamentoId: 14,
    descripcion: "Puerto Vallarta",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 599,
    departamentoId: 14,
    descripcion: "Villa Purificación",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 600,
    departamentoId: 14,
    descripcion: "Quitupan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 601,
    departamentoId: 14,
    descripcion: "El Salto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 602,
    departamentoId: 14,
    descripcion: "San Cristóbal de la Barranca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 603,
    departamentoId: 14,
    descripcion: "San Diego de Alejandría",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 604,
    departamentoId: 14,
    descripcion: "San Juan de los Lagos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 605,
    departamentoId: 14,
    descripcion: "San Julián",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 606,
    departamentoId: 14,
    descripcion: "San Marcos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 607,
    departamentoId: 14,
    descripcion: "San Martín de Bolaños",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 608,
    departamentoId: 14,
    descripcion: "San Martín Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 609,
    departamentoId: 14,
    descripcion: "San Miguel el Alto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 610,
    departamentoId: 14,
    descripcion: "Gómez Farías",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 611,
    departamentoId: 14,
    descripcion: "San Sebastián del Oeste",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 612,
    departamentoId: 14,
    descripcion: "Santa María de los Ángeles",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 613,
    departamentoId: 14,
    descripcion: "Sayula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 614,
    departamentoId: 14,
    descripcion: "Tala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 615,
    departamentoId: 14,
    descripcion: "Talpa de Allende",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 616,
    departamentoId: 14,
    descripcion: "Tamazula de Gordiano",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 617,
    departamentoId: 14,
    descripcion: "Tapalpa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 618,
    departamentoId: 14,
    descripcion: "Tecalitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 619,
    departamentoId: 14,
    descripcion: "Tecolotlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 620,
    departamentoId: 14,
    descripcion: "Techaluta de Montenegro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 621,
    departamentoId: 14,
    descripcion: "Tenamaxtlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 622,
    departamentoId: 14,
    descripcion: "Teocaltiche",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 623,
    departamentoId: 14,
    descripcion: "Teocuitatlán de Corona",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 624,
    departamentoId: 14,
    descripcion: "Tepatitlán de Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 625,
    departamentoId: 14,
    descripcion: "Tequila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 626,
    departamentoId: 14,
    descripcion: "Teuchitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 627,
    departamentoId: 14,
    descripcion: "Tizapán el Alto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 628,
    departamentoId: 14,
    descripcion: "Tlajomulco de Zúñiga",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 629,
    departamentoId: 14,
    descripcion: "San Pedro Tlaquepaque",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 630,
    departamentoId: 14,
    descripcion: "Tolimán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 631,
    departamentoId: 14,
    descripcion: "Tomatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 632,
    departamentoId: 14,
    descripcion: "Tonalá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 633,
    departamentoId: 14,
    descripcion: "Tonaya",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 634,
    departamentoId: 14,
    descripcion: "Tonila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 635,
    departamentoId: 14,
    descripcion: "Totatiche",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 636,
    departamentoId: 14,
    descripcion: "Tototlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 637,
    departamentoId: 14,
    descripcion: "Tuxcacuesco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 638,
    departamentoId: 14,
    descripcion: "Tuxcueca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 639,
    departamentoId: 14,
    descripcion: "Tuxpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 640,
    departamentoId: 14,
    descripcion: "Unión de San Antonio",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 641,
    departamentoId: 14,
    descripcion: "Unión de Tula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 642,
    departamentoId: 14,
    descripcion: "Valle de Guadalupe",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 643,
    departamentoId: 14,
    descripcion: "Valle de Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 644,
    departamentoId: 14,
    descripcion: "San Gabriel",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 645,
    departamentoId: 14,
    descripcion: "Villa Corona",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 646,
    departamentoId: 14,
    descripcion: "Villa Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 647,
    departamentoId: 14,
    descripcion: "Villa Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 648,
    departamentoId: 14,
    descripcion: "Cañadas de Obregón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 649,
    departamentoId: 14,
    descripcion: "Yahualica de González Gallo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 650,
    departamentoId: 14,
    descripcion: "Zacoalco de Torres",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 651,
    departamentoId: 14,
    descripcion: "Zapopan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 652,
    departamentoId: 14,
    descripcion: "Zapotiltic",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 653,
    departamentoId: 14,
    descripcion: "Zapotitlán de Vadillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 654,
    departamentoId: 14,
    descripcion: "Zapotlán del Rey",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 655,
    departamentoId: 14,
    descripcion: "Zapotlanejo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 656,
    departamentoId: 14,
    descripcion: "San Ignacio Cerro Gordo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 657,
    departamentoId: 15,
    descripcion: "Acambay de Ruíz Castañeda",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 658,
    departamentoId: 15,
    descripcion: "Acolman",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 659,
    departamentoId: 15,
    descripcion: "Aculco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 660,
    departamentoId: 15,
    descripcion: "Almoloya de Alquisiras",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 661,
    departamentoId: 15,
    descripcion: "Almoloya de Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 662,
    departamentoId: 15,
    descripcion: "Almoloya del Río",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 663,
    departamentoId: 15,
    descripcion: "Amanalco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 664,
    departamentoId: 15,
    descripcion: "Amatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 665,
    departamentoId: 15,
    descripcion: "Amecameca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 666,
    departamentoId: 15,
    descripcion: "Apaxco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 667,
    departamentoId: 15,
    descripcion: "Atenco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 668,
    departamentoId: 15,
    descripcion: "Atizapán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 669,
    departamentoId: 15,
    descripcion: "Atizapán de Zaragoza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 670,
    departamentoId: 15,
    descripcion: "Atlacomulco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 671,
    departamentoId: 15,
    descripcion: "Atlautla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 672,
    departamentoId: 15,
    descripcion: "Axapusco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 673,
    departamentoId: 15,
    descripcion: "Ayapango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 674,
    departamentoId: 15,
    descripcion: "Calimaya",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 675,
    departamentoId: 15,
    descripcion: "Capulhuac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 676,
    departamentoId: 15,
    descripcion: "Coacalco de Berriozábal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 677,
    departamentoId: 15,
    descripcion: "Coatepec Harinas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 678,
    departamentoId: 15,
    descripcion: "Cocotitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 679,
    departamentoId: 15,
    descripcion: "Coyotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 680,
    departamentoId: 15,
    descripcion: "Cuautitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 681,
    departamentoId: 15,
    descripcion: "Chalco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 682,
    departamentoId: 15,
    descripcion: "Chapa de Mota",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 683,
    departamentoId: 15,
    descripcion: "Chapultepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 684,
    departamentoId: 15,
    descripcion: "Chiautla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 685,
    departamentoId: 15,
    descripcion: "Chicoloapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 686,
    departamentoId: 15,
    descripcion: "Chiconcuac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 687,
    departamentoId: 15,
    descripcion: "Chimalhuacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 688,
    departamentoId: 15,
    descripcion: "Donato Guerra",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 689,
    departamentoId: 15,
    descripcion: "Ecatepec de Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 690,
    departamentoId: 15,
    descripcion: "Ecatzingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 691,
    departamentoId: 15,
    descripcion: "Huehuetoca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 692,
    departamentoId: 15,
    descripcion: "Hueypoxtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 693,
    departamentoId: 15,
    descripcion: "Huixquilucan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 694,
    departamentoId: 15,
    descripcion: "Isidro Fabela",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 695,
    departamentoId: 15,
    descripcion: "Ixtapaluca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 696,
    departamentoId: 15,
    descripcion: "Ixtapan de la Sal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 697,
    departamentoId: 15,
    descripcion: "Ixtapan del Oro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 698,
    departamentoId: 15,
    descripcion: "Ixtlahuaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 699,
    departamentoId: 15,
    descripcion: "Jalatlaco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 700,
    departamentoId: 15,
    descripcion: "Jaltenco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 701,
    departamentoId: 15,
    descripcion: "Jilotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 702,
    departamentoId: 15,
    descripcion: "Jilotzingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 703,
    departamentoId: 15,
    descripcion: "Jiquipilco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 704,
    departamentoId: 15,
    descripcion: "Jocotitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 705,
    departamentoId: 15,
    descripcion: "Joquicingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 706,
    departamentoId: 15,
    descripcion: "Juchitepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 707,
    departamentoId: 15,
    descripcion: "Lerma",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 708,
    departamentoId: 15,
    descripcion: "Malinalco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 709,
    departamentoId: 15,
    descripcion: "Melchor Ocampo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 710,
    departamentoId: 15,
    descripcion: "Metepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 711,
    departamentoId: 15,
    descripcion: "Mexicaltzingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 712,
    departamentoId: 15,
    descripcion: "Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 713,
    departamentoId: 15,
    descripcion: "Naucalpan de Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 714,
    departamentoId: 15,
    descripcion: "Nezahualcóyotl",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 715,
    departamentoId: 15,
    descripcion: "Nextlalpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 716,
    departamentoId: 15,
    descripcion: "Nicolás Romero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 717,
    departamentoId: 15,
    descripcion: "Nopaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 718,
    departamentoId: 15,
    descripcion: "Ocoyoacac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 719,
    departamentoId: 15,
    descripcion: "Ocuilan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 720,
    departamentoId: 15,
    descripcion: "El Oro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 721,
    departamentoId: 15,
    descripcion: "Otumba",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 722,
    departamentoId: 15,
    descripcion: "Otzoloapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 723,
    departamentoId: 15,
    descripcion: "Otzolotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 724,
    departamentoId: 15,
    descripcion: "Ozumba",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 725,
    departamentoId: 15,
    descripcion: "Papalotla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 726,
    departamentoId: 15,
    descripcion: "La Paz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 727,
    departamentoId: 15,
    descripcion: "Polotitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 728,
    departamentoId: 15,
    descripcion: "Rayón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 729,
    departamentoId: 15,
    descripcion: "San Antonio la Isla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 730,
    departamentoId: 15,
    descripcion: "San Felipe del Progreso",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 731,
    departamentoId: 15,
    descripcion: "San Martín de las Pirámides",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 732,
    departamentoId: 15,
    descripcion: "San Mateo Atenco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 733,
    departamentoId: 15,
    descripcion: "San Simón de Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 734,
    departamentoId: 15,
    descripcion: "Santo Tomás",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 735,
    departamentoId: 15,
    descripcion: "Soyaniquilpan de Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 736,
    departamentoId: 15,
    descripcion: "Sultepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 737,
    departamentoId: 15,
    descripcion: "Tecámac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 738,
    departamentoId: 15,
    descripcion: "Tejupilco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 739,
    departamentoId: 15,
    descripcion: "Temamatla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 740,
    departamentoId: 15,
    descripcion: "Temascalapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 741,
    departamentoId: 15,
    descripcion: "Temascalcingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 742,
    departamentoId: 15,
    descripcion: "Temascaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 743,
    departamentoId: 15,
    descripcion: "Temoaya",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 744,
    departamentoId: 15,
    descripcion: "Tenancingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 745,
    departamentoId: 15,
    descripcion: "Tenango del Aire",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 746,
    departamentoId: 15,
    descripcion: "Tenango del Valle",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 747,
    departamentoId: 15,
    descripcion: "Teoloyucan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 748,
    departamentoId: 15,
    descripcion: "Teotihuacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 749,
    departamentoId: 15,
    descripcion: "Tepetlaoxtoc",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 750,
    departamentoId: 15,
    descripcion: "Tepetlixpa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 751,
    departamentoId: 15,
    descripcion: "Tepotzotlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 752,
    departamentoId: 15,
    descripcion: "Tequixquiac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 753,
    departamentoId: 15,
    descripcion: "Texcaltitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 754,
    departamentoId: 15,
    descripcion: "Texcalyacac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 755,
    departamentoId: 15,
    descripcion: "Texcoco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 756,
    departamentoId: 15,
    descripcion: "Tezoyuca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 757,
    departamentoId: 15,
    descripcion: "Tianguistenco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 758,
    departamentoId: 15,
    descripcion: "Timilpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 759,
    departamentoId: 15,
    descripcion: "Tlalmanalco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 760,
    departamentoId: 15,
    descripcion: "Tlalnepantla de Baz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 761,
    departamentoId: 15,
    descripcion: "Tlatlaya",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 762,
    departamentoId: 15,
    descripcion: "Toluca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 763,
    departamentoId: 15,
    descripcion: "Tonatico",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 764,
    departamentoId: 15,
    descripcion: "Tultepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 765,
    departamentoId: 15,
    descripcion: "Tultitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 766,
    departamentoId: 15,
    descripcion: "Valle de Bravo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 767,
    departamentoId: 15,
    descripcion: "Villa de Allende",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 768,
    departamentoId: 15,
    descripcion: "Villa del Carbón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 769,
    departamentoId: 15,
    descripcion: "Villa Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 770,
    departamentoId: 15,
    descripcion: "Villa Victoria",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 771,
    departamentoId: 15,
    descripcion: "Xonacatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 772,
    departamentoId: 15,
    descripcion: "Zacazonapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 773,
    departamentoId: 15,
    descripcion: "Zacualpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 774,
    departamentoId: 15,
    descripcion: "Zinacantepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 775,
    departamentoId: 15,
    descripcion: "Zumpahuacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 776,
    departamentoId: 15,
    descripcion: "Zumpango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 777,
    departamentoId: 15,
    descripcion: "Cuautitlán Izcalli",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 778,
    departamentoId: 15,
    descripcion: "Valle de Chalco Solidaridad",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 779,
    departamentoId: 15,
    descripcion: "Luvianos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 780,
    departamentoId: 15,
    descripcion: "San José del Rincón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 781,
    departamentoId: 15,
    descripcion: "Tonanitla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 782,
    departamentoId: 16,
    descripcion: "Acuitzio",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 783,
    departamentoId: 16,
    descripcion: "Aguililla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 784,
    departamentoId: 16,
    descripcion: "Álvaro Obregón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 785,
    departamentoId: 16,
    descripcion: "Angamacutiro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 786,
    departamentoId: 16,
    descripcion: "Angangueo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 787,
    departamentoId: 16,
    descripcion: "Apatzingán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 788,
    departamentoId: 16,
    descripcion: "Aporo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 789,
    departamentoId: 16,
    descripcion: "Aquila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 790,
    departamentoId: 16,
    descripcion: "Ario",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 791,
    departamentoId: 16,
    descripcion: "Arteaga",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 792,
    departamentoId: 16,
    descripcion: "Briseñas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 793,
    departamentoId: 16,
    descripcion: "Buenavista",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 794,
    departamentoId: 16,
    descripcion: "Carácuaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 795,
    departamentoId: 16,
    descripcion: "Coahuayana",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 796,
    departamentoId: 16,
    descripcion: "Coalcomán de Vázquez Pallares",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 797,
    departamentoId: 16,
    descripcion: "Coeneo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 798,
    departamentoId: 16,
    descripcion: "Contepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 799,
    departamentoId: 16,
    descripcion: "Copándaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 800,
    departamentoId: 16,
    descripcion: "Cotija",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 801,
    departamentoId: 16,
    descripcion: "Cuitzeo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 802,
    departamentoId: 16,
    descripcion: "Charapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 803,
    departamentoId: 16,
    descripcion: "Charo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 804,
    departamentoId: 16,
    descripcion: "Chavinda",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 805,
    departamentoId: 16,
    descripcion: "Cherán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 806,
    departamentoId: 16,
    descripcion: "Chilchota",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 807,
    departamentoId: 16,
    descripcion: "Chinicuila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 808,
    departamentoId: 16,
    descripcion: "Chucándiro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 809,
    departamentoId: 16,
    descripcion: "Churintzio",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 810,
    departamentoId: 16,
    descripcion: "Churumuco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 811,
    departamentoId: 16,
    descripcion: "Ecuandureo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 812,
    departamentoId: 16,
    descripcion: "Epitacio Huerta",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 813,
    departamentoId: 16,
    descripcion: "Erongarícuaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 814,
    departamentoId: 16,
    descripcion: "Gabriel Zamora",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 815,
    departamentoId: 16,
    descripcion: "Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 816,
    departamentoId: 16,
    descripcion: "La Huacana",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 817,
    departamentoId: 16,
    descripcion: "Huandacareo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 818,
    departamentoId: 16,
    descripcion: "Huaniqueo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 819,
    departamentoId: 16,
    descripcion: "Huetamo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 820,
    departamentoId: 16,
    descripcion: "Huiramba",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 821,
    departamentoId: 16,
    descripcion: "Indaparapeo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 822,
    departamentoId: 16,
    descripcion: "Irimbo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 823,
    departamentoId: 16,
    descripcion: "Ixtlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 824,
    departamentoId: 16,
    descripcion: "Jacona",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 825,
    departamentoId: 16,
    descripcion: "Jiménez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 826,
    departamentoId: 16,
    descripcion: "Jiquilpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 827,
    departamentoId: 16,
    descripcion: "Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 828,
    departamentoId: 16,
    descripcion: "Jungapeo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 829,
    departamentoId: 16,
    descripcion: "Lagunillas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 830,
    departamentoId: 16,
    descripcion: "Madero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 831,
    departamentoId: 16,
    descripcion: "Maravatío",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 832,
    departamentoId: 16,
    descripcion: "Marcos Castellanos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 833,
    departamentoId: 16,
    descripcion: "Lázaro Cárdenas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 834,
    departamentoId: 16,
    descripcion: "Morelia",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 835,
    departamentoId: 16,
    descripcion: "Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 836,
    departamentoId: 16,
    descripcion: "Múgica",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 837,
    departamentoId: 16,
    descripcion: "Nahuatzen",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 838,
    departamentoId: 16,
    descripcion: "Nocupétaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 839,
    departamentoId: 16,
    descripcion: "Nuevo Parangaricutiro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 840,
    departamentoId: 16,
    descripcion: "Nuevo Urecho",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 841,
    departamentoId: 16,
    descripcion: "Numarán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 842,
    departamentoId: 16,
    descripcion: "Ocampo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 843,
    departamentoId: 16,
    descripcion: "Pajacuarán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 844,
    departamentoId: 16,
    descripcion: "Panindícuaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 845,
    departamentoId: 16,
    descripcion: "Parácuaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 846,
    departamentoId: 16,
    descripcion: "Paracho",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 847,
    departamentoId: 16,
    descripcion: "Pátzcuaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 848,
    departamentoId: 16,
    descripcion: "Penjamillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 849,
    departamentoId: 16,
    descripcion: "Peribán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 850,
    departamentoId: 16,
    descripcion: "La Piedad",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 851,
    departamentoId: 16,
    descripcion: "Purépero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 852,
    departamentoId: 16,
    descripcion: "Puruándiro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 853,
    departamentoId: 16,
    descripcion: "Queréndaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 854,
    departamentoId: 16,
    descripcion: "Quiroga",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 855,
    departamentoId: 16,
    descripcion: "Cojumatlán de Régules",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 856,
    departamentoId: 16,
    descripcion: "Los Reyes",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 857,
    departamentoId: 16,
    descripcion: "Sahuayo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 858,
    departamentoId: 16,
    descripcion: "San Lucas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 859,
    departamentoId: 16,
    descripcion: "Santa Ana Maya",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 860,
    departamentoId: 16,
    descripcion: "Salvador Escalante",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 861,
    departamentoId: 16,
    descripcion: "Senguio",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 862,
    departamentoId: 16,
    descripcion: "Susupuato",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 863,
    departamentoId: 16,
    descripcion: "Tacámbaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 864,
    departamentoId: 16,
    descripcion: "Tancítaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 865,
    departamentoId: 16,
    descripcion: "Tangamandapio",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 866,
    departamentoId: 16,
    descripcion: "Tangancícuaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 867,
    departamentoId: 16,
    descripcion: "Tanhuato",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 868,
    departamentoId: 16,
    descripcion: "Taretan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 869,
    departamentoId: 16,
    descripcion: "Tarímbaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 870,
    departamentoId: 16,
    descripcion: "Tepalcatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 871,
    departamentoId: 16,
    descripcion: "Tingambato",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 872,
    departamentoId: 16,
    descripcion: "Tinguindín",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 873,
    departamentoId: 16,
    descripcion: "Tiquicheo de Nicolás Romero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 874,
    departamentoId: 16,
    descripcion: "Tlalpujahua",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 875,
    departamentoId: 16,
    descripcion: "Tlazazalca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 876,
    departamentoId: 16,
    descripcion: "Tocumbo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 877,
    departamentoId: 16,
    descripcion: "Tumbiscatío",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 878,
    departamentoId: 16,
    descripcion: "Turicato",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 879,
    departamentoId: 16,
    descripcion: "Tuxpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 880,
    departamentoId: 16,
    descripcion: "Tuzantla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 881,
    departamentoId: 16,
    descripcion: "Tzintzuntzan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 882,
    departamentoId: 16,
    descripcion: "Tzitzio",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 883,
    departamentoId: 16,
    descripcion: "Uruapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 884,
    departamentoId: 16,
    descripcion: "Venustiano Carranza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 885,
    departamentoId: 16,
    descripcion: "Villamar",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 886,
    departamentoId: 16,
    descripcion: "Vista Hermosa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 887,
    departamentoId: 16,
    descripcion: "Yurécuaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 888,
    departamentoId: 16,
    descripcion: "Zacapu",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 889,
    departamentoId: 16,
    descripcion: "Zamora",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 890,
    departamentoId: 16,
    descripcion: "Zináparo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 891,
    departamentoId: 16,
    descripcion: "Zinapécuaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 892,
    departamentoId: 16,
    descripcion: "Ziracuaretiro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 893,
    departamentoId: 16,
    descripcion: "Zitácuaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 894,
    departamentoId: 16,
    descripcion: "José Sixto Verduzco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 895,
    departamentoId: 17,
    descripcion: "Amacuzac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 896,
    departamentoId: 17,
    descripcion: "Atlatlahucan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 897,
    departamentoId: 17,
    descripcion: "Axochiapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 898,
    departamentoId: 17,
    descripcion: "Ayala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 899,
    departamentoId: 17,
    descripcion: "Coatlán del Río",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 900,
    departamentoId: 17,
    descripcion: "Cuautla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 901,
    departamentoId: 17,
    descripcion: "Cuernavaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 902,
    departamentoId: 17,
    descripcion: "Emiliano Zapata",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 903,
    departamentoId: 17,
    descripcion: "Huitzilac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 904,
    departamentoId: 17,
    descripcion: "Jantetelco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 905,
    departamentoId: 17,
    descripcion: "Jiutepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 906,
    departamentoId: 17,
    descripcion: "Jojutla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 907,
    departamentoId: 17,
    descripcion: "Jonacatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 908,
    departamentoId: 17,
    descripcion: "Mazatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 909,
    departamentoId: 17,
    descripcion: "Miacatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 910,
    departamentoId: 17,
    descripcion: "Ocuituco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 911,
    departamentoId: 17,
    descripcion: "Puente de Ixtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 912,
    departamentoId: 17,
    descripcion: "Temixco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 913,
    departamentoId: 17,
    descripcion: "Tepalcingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 914,
    departamentoId: 17,
    descripcion: "Tepoztlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 915,
    departamentoId: 17,
    descripcion: "Tetecala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 916,
    departamentoId: 17,
    descripcion: "Tetela del Volcán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 917,
    departamentoId: 17,
    descripcion: "Tlalnepantla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 918,
    departamentoId: 17,
    descripcion: "Tlaltizapán de Zapata",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 919,
    departamentoId: 17,
    descripcion: "Tlaquiltenango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 920,
    departamentoId: 17,
    descripcion: "Tlayacapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 921,
    departamentoId: 17,
    descripcion: "Totolapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 922,
    departamentoId: 17,
    descripcion: "Xochitepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 923,
    departamentoId: 17,
    descripcion: "Yautepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 924,
    departamentoId: 17,
    descripcion: "Yecapixtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 925,
    departamentoId: 17,
    descripcion: "Zacatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 926,
    departamentoId: 17,
    descripcion: "Zacualpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 927,
    departamentoId: 17,
    descripcion: "Temoac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 928,
    departamentoId: 18,
    descripcion: "Acaponeta",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 929,
    departamentoId: 18,
    descripcion: "Ahuacatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 930,
    departamentoId: 18,
    descripcion: "Amatlán de Cañas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 931,
    departamentoId: 18,
    descripcion: "Compostela",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 932,
    departamentoId: 18,
    descripcion: "Huajicori",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 933,
    departamentoId: 18,
    descripcion: "Ixtlán del Río",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 934,
    departamentoId: 18,
    descripcion: "Jala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 935,
    departamentoId: 18,
    descripcion: "Xalisco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 936,
    departamentoId: 18,
    descripcion: "Del Nayar",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 937,
    departamentoId: 18,
    descripcion: "Rosamorada",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 938,
    departamentoId: 18,
    descripcion: "Ruíz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 939,
    departamentoId: 18,
    descripcion: "San Blas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 940,
    departamentoId: 18,
    descripcion: "San Pedro Lagunillas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 941,
    departamentoId: 18,
    descripcion: "Santa María del Oro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 942,
    departamentoId: 18,
    descripcion: "Santiago Ixcuintla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 943,
    departamentoId: 18,
    descripcion: "Tecuala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 944,
    departamentoId: 18,
    descripcion: "Tepic",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 945,
    departamentoId: 18,
    descripcion: "Tuxpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 946,
    departamentoId: 18,
    descripcion: "La Yesca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 947,
    departamentoId: 18,
    descripcion: "Bahía de Banderas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 948,
    departamentoId: 19,
    descripcion: "Abasolo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 949,
    departamentoId: 19,
    descripcion: "Agualeguas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 950,
    departamentoId: 19,
    descripcion: "Los Aldamas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 951,
    departamentoId: 19,
    descripcion: "Allende",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 952,
    departamentoId: 19,
    descripcion: "Anáhuac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 953,
    departamentoId: 19,
    descripcion: "Apodaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 954,
    departamentoId: 19,
    descripcion: "Aramberri",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 955,
    departamentoId: 19,
    descripcion: "Bustamante",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 956,
    departamentoId: 19,
    descripcion: "Cadereyta Jiménez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 957,
    departamentoId: 19,
    descripcion: "El Carmen",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 958,
    departamentoId: 19,
    descripcion: "Cerralvo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 959,
    departamentoId: 19,
    descripcion: "Ciénega de Flores",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 960,
    departamentoId: 19,
    descripcion: "China",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 961,
    departamentoId: 19,
    descripcion: "Doctor Arroyo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 962,
    departamentoId: 19,
    descripcion: "Doctor Coss",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 963,
    departamentoId: 19,
    descripcion: "Doctor González",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 964,
    departamentoId: 19,
    descripcion: "Galeana",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 965,
    departamentoId: 19,
    descripcion: "García",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 966,
    departamentoId: 19,
    descripcion: "San Pedro Garza García",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 967,
    departamentoId: 19,
    descripcion: "General Bravo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 968,
    departamentoId: 19,
    descripcion: "General Escobedo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 969,
    departamentoId: 19,
    descripcion: "General Terán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 970,
    departamentoId: 19,
    descripcion: "General Treviño",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 971,
    departamentoId: 19,
    descripcion: "General Zaragoza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 972,
    departamentoId: 19,
    descripcion: "General Zuazua",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 973,
    departamentoId: 19,
    descripcion: "Guadalupe",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 974,
    departamentoId: 19,
    descripcion: "Los Herreras",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 975,
    departamentoId: 19,
    descripcion: "Higueras",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 976,
    departamentoId: 19,
    descripcion: "Hualahuises",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 977,
    departamentoId: 19,
    descripcion: "Iturbide",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 978,
    departamentoId: 19,
    descripcion: "Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 979,
    departamentoId: 19,
    descripcion: "Lampazos de Naranjo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 980,
    departamentoId: 19,
    descripcion: "Linares",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 981,
    departamentoId: 19,
    descripcion: "Marín",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 982,
    departamentoId: 19,
    descripcion: "Melchor Ocampo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 983,
    departamentoId: 19,
    descripcion: "Mier y Noriega",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 984,
    departamentoId: 19,
    descripcion: "Mina",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 985,
    departamentoId: 19,
    descripcion: "Montemorelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 986,
    departamentoId: 19,
    descripcion: "Monterrey",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 987,
    departamentoId: 19,
    descripcion: "Parás",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 988,
    departamentoId: 19,
    descripcion: "Pesquería",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 989,
    departamentoId: 19,
    descripcion: "Los Ramones",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 990,
    departamentoId: 19,
    descripcion: "Rayones",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 991,
    departamentoId: 19,
    descripcion: "Sabinas Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 992,
    departamentoId: 19,
    descripcion: "Salinas Victoria",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 993,
    departamentoId: 19,
    descripcion: "San Nicolás de los Garza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 994,
    departamentoId: 19,
    descripcion: "Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 995,
    departamentoId: 19,
    descripcion: "Santa Catarina",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 996,
    departamentoId: 19,
    descripcion: "Santiago",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 997,
    departamentoId: 19,
    descripcion: "Vallecillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 998,
    departamentoId: 19,
    descripcion: "Villaldama",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 999,
    departamentoId: 20,
    descripcion: "Abejones",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1000,
    departamentoId: 20,
    descripcion: "Acatlán de Pérez Figueroa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1001,
    departamentoId: 20,
    descripcion: "Asunción Cacalotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1002,
    departamentoId: 20,
    descripcion: "Asunción Cuyotepeji",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1003,
    departamentoId: 20,
    descripcion: "Asunción Ixtaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1004,
    departamentoId: 20,
    descripcion: "Asunción Nochixtlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1005,
    departamentoId: 20,
    descripcion: "Asunción Ocotlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1006,
    departamentoId: 20,
    descripcion: "Asunción Tlacolulita",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1007,
    departamentoId: 20,
    descripcion: "Ayotzintepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1008,
    departamentoId: 20,
    descripcion: "El Barrio de la Soledad",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1009,
    departamentoId: 20,
    descripcion: "Calihualá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1010,
    departamentoId: 20,
    descripcion: "Candelaria Loxicha",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1011,
    departamentoId: 20,
    descripcion: "Ciénega de Zimatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1012,
    departamentoId: 20,
    descripcion: "Ciudad Ixtepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1013,
    departamentoId: 20,
    descripcion: "Coatecas Altas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1014,
    departamentoId: 20,
    descripcion: "Coicoyán de las Flores",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1015,
    departamentoId: 20,
    descripcion: "La Compañía",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1016,
    departamentoId: 20,
    descripcion: "Concepción Buenavista",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1017,
    departamentoId: 20,
    descripcion: "Concepción Pápalo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1018,
    departamentoId: 20,
    descripcion: "Constancia del Rosario",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1019,
    departamentoId: 20,
    descripcion: "Cosolapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1020,
    departamentoId: 20,
    descripcion: "Cosoltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1021,
    departamentoId: 20,
    descripcion: "Cuilápam de Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1022,
    departamentoId: 20,
    descripcion: "Cuyamecalco Villa de Zaragoza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1023,
    departamentoId: 20,
    descripcion: "Chahuites",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1024,
    departamentoId: 20,
    descripcion: "Chalcatongo de Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1025,
    departamentoId: 20,
    descripcion: "Chiquihuitlán de Benito Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1026,
    departamentoId: 20,
    descripcion: "Heroica Ciudad de Ejutla de Crespo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1027,
    departamentoId: 20,
    descripcion: "Eloxochitlán de Flores Magón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1028,
    departamentoId: 20,
    descripcion: "El Espinal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1029,
    departamentoId: 20,
    descripcion: "Tamazulápam del Espíritu Santo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1030,
    departamentoId: 20,
    descripcion: "Fresnillo de Trujano",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1031,
    departamentoId: 20,
    descripcion: "Guadalupe Etla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1032,
    departamentoId: 20,
    descripcion: "Guadalupe de Ramírez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1033,
    departamentoId: 20,
    descripcion: "Guelatao de Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1034,
    departamentoId: 20,
    descripcion: "Guevea de Humboldt",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1035,
    departamentoId: 20,
    descripcion: "Mesones Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1036,
    departamentoId: 20,
    descripcion: "Villa Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1037,
    departamentoId: 20,
    descripcion: "Heroica Ciudad de Huajuapan de León",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1038,
    departamentoId: 20,
    descripcion: "Huautepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1039,
    departamentoId: 20,
    descripcion: "Huautla de Jiménez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1040,
    departamentoId: 20,
    descripcion: "Ixtlán de Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1041,
    departamentoId: 20,
    descripcion: "Heroica Ciudad de Juchitán de Zaragoza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1042,
    departamentoId: 20,
    descripcion: "Loma Bonita",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1043,
    departamentoId: 20,
    descripcion: "Magdalena Apasco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1044,
    departamentoId: 20,
    descripcion: "Magdalena Jaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1045,
    departamentoId: 20,
    descripcion: "Santa Magdalena Jicotlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1046,
    departamentoId: 20,
    descripcion: "Magdalena Mixtepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1047,
    departamentoId: 20,
    descripcion: "Magdalena Ocotlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1048,
    departamentoId: 20,
    descripcion: "Magdalena Peñasco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1049,
    departamentoId: 20,
    descripcion: "Magdalena Teitipac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1050,
    departamentoId: 20,
    descripcion: "Magdalena Tequisistlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1051,
    departamentoId: 20,
    descripcion: "Magdalena Tlacotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1052,
    departamentoId: 20,
    descripcion: "Magdalena Zahuatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1053,
    departamentoId: 20,
    descripcion: "Mariscala de Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1054,
    departamentoId: 20,
    descripcion: "Mártires de Tacubaya",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1055,
    departamentoId: 20,
    descripcion: "Matías Romero Avendaño",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1056,
    departamentoId: 20,
    descripcion: "Mazatlán Villa de Flores",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1057,
    departamentoId: 20,
    descripcion: "Miahuatlán de Porfirio Díaz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1058,
    departamentoId: 20,
    descripcion: "Mixistlán de la Reforma",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1059,
    departamentoId: 20,
    descripcion: "Monjas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1060,
    departamentoId: 20,
    descripcion: "Natividad",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1061,
    departamentoId: 20,
    descripcion: "Nazareno Etla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1062,
    departamentoId: 20,
    descripcion: "Nejapa de Madero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1063,
    departamentoId: 20,
    descripcion: "Ixpantepec Nieves",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1064,
    departamentoId: 20,
    descripcion: "Santiago Niltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1065,
    departamentoId: 20,
    descripcion: "Oaxaca de Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1066,
    departamentoId: 20,
    descripcion: "Ocotlán de Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1067,
    departamentoId: 20,
    descripcion: "La Pe",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1068,
    departamentoId: 20,
    descripcion: "Pinotepa de Don Luis",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1069,
    departamentoId: 20,
    descripcion: "Pluma Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1070,
    departamentoId: 20,
    descripcion: "San José del Progreso",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1071,
    departamentoId: 20,
    descripcion: "Putla Villa de Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1072,
    departamentoId: 20,
    descripcion: "Santa Catarina Quioquitani",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1073,
    departamentoId: 20,
    descripcion: "Reforma de Pineda",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1074,
    departamentoId: 20,
    descripcion: "La Reforma",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1075,
    departamentoId: 20,
    descripcion: "Reyes Etla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1076,
    departamentoId: 20,
    descripcion: "Rojas de Cuauhtémoc",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1077,
    departamentoId: 20,
    descripcion: "Salina Cruz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1078,
    departamentoId: 20,
    descripcion: "San Agustín Amatengo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1079,
    departamentoId: 20,
    descripcion: "San Agustín Atenango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1080,
    departamentoId: 20,
    descripcion: "San Agustín Chayuco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1081,
    departamentoId: 20,
    descripcion: "San Agustín de las Juntas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1082,
    departamentoId: 20,
    descripcion: "San Agustín Etla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1083,
    departamentoId: 20,
    descripcion: "San Agustín Loxicha",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1084,
    departamentoId: 20,
    descripcion: "San Agustín Tlacotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1085,
    departamentoId: 20,
    descripcion: "San Agustín Yatareni",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1086,
    departamentoId: 20,
    descripcion: "San Andrés Cabecera Nueva",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1087,
    departamentoId: 20,
    descripcion: "San Andrés Dinicuiti",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1088,
    departamentoId: 20,
    descripcion: "San Andrés Huaxpaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1089,
    departamentoId: 20,
    descripcion: "San Andrés Huayápam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1090,
    departamentoId: 20,
    descripcion: "San Andrés Ixtlahuaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1091,
    departamentoId: 20,
    descripcion: "San Andrés Lagunas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1092,
    departamentoId: 20,
    descripcion: "San Andrés Nuxiño",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1093,
    departamentoId: 20,
    descripcion: "San Andrés Paxtlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1094,
    departamentoId: 20,
    descripcion: "San Andrés Sinaxtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1095,
    departamentoId: 20,
    descripcion: "San Andrés Solaga",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1096,
    departamentoId: 20,
    descripcion: "San Andrés Teotilálpam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1097,
    departamentoId: 20,
    descripcion: "San Andrés Tepetlapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1098,
    departamentoId: 20,
    descripcion: "San Andrés Yaá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1099,
    departamentoId: 20,
    descripcion: "San Andrés Zabache",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1100,
    departamentoId: 20,
    descripcion: "San Andrés Zautla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1101,
    departamentoId: 20,
    descripcion: "San Antonino Castillo Velasco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1102,
    departamentoId: 20,
    descripcion: "San Antonino el Alto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1103,
    departamentoId: 20,
    descripcion: "San Antonino Monte Verde",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1104,
    departamentoId: 20,
    descripcion: "San Antonio Acutla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1105,
    departamentoId: 20,
    descripcion: "San Antonio de la Cal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1106,
    departamentoId: 20,
    descripcion: "San Antonio Huitepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1107,
    departamentoId: 20,
    descripcion: "San Antonio Nanahuatípam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1108,
    departamentoId: 20,
    descripcion: "San Antonio Sinicahua",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1109,
    departamentoId: 20,
    descripcion: "San Antonio Tepetlapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1110,
    departamentoId: 20,
    descripcion: "San Baltazar Chichicápam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1111,
    departamentoId: 20,
    descripcion: "San Baltazar Loxicha",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1112,
    departamentoId: 20,
    descripcion: "San Baltazar Yatzachi el Bajo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1113,
    departamentoId: 20,
    descripcion: "San Bartolo Coyotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1114,
    departamentoId: 20,
    descripcion: "San Bartolomé Ayautla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1115,
    departamentoId: 20,
    descripcion: "San Bartolomé Loxicha",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1116,
    departamentoId: 20,
    descripcion: "San Bartolomé Quialana",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1117,
    departamentoId: 20,
    descripcion: "San Bartolomé Yucuañe",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1118,
    departamentoId: 20,
    descripcion: "San Bartolomé Zoogocho",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1119,
    departamentoId: 20,
    descripcion: "San Bartolo Soyaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1120,
    departamentoId: 20,
    descripcion: "San Bartolo Yautepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1121,
    departamentoId: 20,
    descripcion: "San Bernardo Mixtepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1122,
    departamentoId: 20,
    descripcion: "San Blas Atempa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1123,
    departamentoId: 20,
    descripcion: "San Carlos Yautepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1124,
    departamentoId: 20,
    descripcion: "San Cristóbal Amatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1125,
    departamentoId: 20,
    descripcion: "San Cristóbal Amoltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1126,
    departamentoId: 20,
    descripcion: "San Cristóbal Lachirioag",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1127,
    departamentoId: 20,
    descripcion: "San Cristóbal Suchixtlahuaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1128,
    departamentoId: 20,
    descripcion: "San Dionisio del Mar",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1129,
    departamentoId: 20,
    descripcion: "San Dionisio Ocotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1130,
    departamentoId: 20,
    descripcion: "San Dionisio Ocotlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1131,
    departamentoId: 20,
    descripcion: "San Esteban Atatlahuca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1132,
    departamentoId: 20,
    descripcion: "San Felipe Jalapa de Díaz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1133,
    departamentoId: 20,
    descripcion: "San Felipe Tejalápam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1134,
    departamentoId: 20,
    descripcion: "San Felipe Usila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1135,
    departamentoId: 20,
    descripcion: "San Francisco Cahuacuá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1136,
    departamentoId: 20,
    descripcion: "San Francisco Cajonos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1137,
    departamentoId: 20,
    descripcion: "San Francisco Chapulapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1138,
    departamentoId: 20,
    descripcion: "San Francisco Chindúa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1139,
    departamentoId: 20,
    descripcion: "San Francisco del Mar",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1140,
    departamentoId: 20,
    descripcion: "San Francisco Huehuetlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1141,
    departamentoId: 20,
    descripcion: "San Francisco Ixhuatán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1142,
    departamentoId: 20,
    descripcion: "San Francisco Jaltepetongo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1143,
    departamentoId: 20,
    descripcion: "San Francisco Lachigoló",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1144,
    departamentoId: 20,
    descripcion: "San Francisco Logueche",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1145,
    departamentoId: 20,
    descripcion: "San Francisco Nuxaño",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1146,
    departamentoId: 20,
    descripcion: "San Francisco Ozolotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1147,
    departamentoId: 20,
    descripcion: "San Francisco Sola",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1148,
    departamentoId: 20,
    descripcion: "San Francisco Telixtlahuaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1149,
    departamentoId: 20,
    descripcion: "San Francisco Teopan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1150,
    departamentoId: 20,
    descripcion: "San Francisco Tlapancingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1151,
    departamentoId: 20,
    descripcion: "San Gabriel Mixtepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1152,
    departamentoId: 20,
    descripcion: "San Ildefonso Amatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1153,
    departamentoId: 20,
    descripcion: "San Ildefonso Sola",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1154,
    departamentoId: 20,
    descripcion: "San Ildefonso Villa Alta",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1155,
    departamentoId: 20,
    descripcion: "San Jacinto Amilpas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1156,
    departamentoId: 20,
    descripcion: "San Jacinto Tlacotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1157,
    departamentoId: 20,
    descripcion: "San Jerónimo Coatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1158,
    departamentoId: 20,
    descripcion: "San Jerónimo Silacayoapilla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1159,
    departamentoId: 20,
    descripcion: "San Jerónimo Sosola",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1160,
    departamentoId: 20,
    descripcion: "San Jerónimo Taviche",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1161,
    departamentoId: 20,
    descripcion: "San Jerónimo Tecóatl",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1162,
    departamentoId: 20,
    descripcion: "San Jorge Nuchita",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1163,
    departamentoId: 20,
    descripcion: "San José Ayuquila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1164,
    departamentoId: 20,
    descripcion: "San José Chiltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1165,
    departamentoId: 20,
    descripcion: "San José del Peñasco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1166,
    departamentoId: 20,
    descripcion: "San José Estancia Grande",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1167,
    departamentoId: 20,
    descripcion: "San José Independencia",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1168,
    departamentoId: 20,
    descripcion: "San José Lachiguiri",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1169,
    departamentoId: 20,
    descripcion: "San José Tenango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1170,
    departamentoId: 20,
    descripcion: "San Juan Achiutla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1171,
    departamentoId: 20,
    descripcion: "San Juan Atepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1172,
    departamentoId: 20,
    descripcion: "Ánimas Trujano",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1173,
    departamentoId: 20,
    descripcion: "San Juan Bautista Atatlahuca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1174,
    departamentoId: 20,
    descripcion: "San Juan Bautista Coixtlahuaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1175,
    departamentoId: 20,
    descripcion: "San Juan Bautista Cuicatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1176,
    departamentoId: 20,
    descripcion: "San Juan Bautista Guelache",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1177,
    departamentoId: 20,
    descripcion: "San Juan Bautista Jayacatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1178,
    departamentoId: 20,
    descripcion: "San Juan Bautista Lo de Soto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1179,
    departamentoId: 20,
    descripcion: "San Juan Bautista Suchitepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1180,
    departamentoId: 20,
    descripcion: "San Juan Bautista Tlacoatzintepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1181,
    departamentoId: 20,
    descripcion: "San Juan Bautista Tlachichilco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1182,
    departamentoId: 20,
    descripcion: "San Juan Bautista Tuxtepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1183,
    departamentoId: 20,
    descripcion: "San Juan Cacahuatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1184,
    departamentoId: 20,
    descripcion: "San Juan Cieneguilla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1185,
    departamentoId: 20,
    descripcion: "San Juan Coatzóspam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1186,
    departamentoId: 20,
    descripcion: "San Juan Colorado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1187,
    departamentoId: 20,
    descripcion: "San Juan Comaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1188,
    departamentoId: 20,
    descripcion: "San Juan Cotzocón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1189,
    departamentoId: 20,
    descripcion: "San Juan Chicomezúchil",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1190,
    departamentoId: 20,
    descripcion: "San Juan Chilateca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1191,
    departamentoId: 20,
    descripcion: "San Juan del Estado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1192,
    departamentoId: 20,
    descripcion: "San Juan del Río",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1193,
    departamentoId: 20,
    descripcion: "San Juan Diuxi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1194,
    departamentoId: 20,
    descripcion: "San Juan Evangelista Analco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1195,
    departamentoId: 20,
    descripcion: "San Juan Guelavía",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1196,
    departamentoId: 20,
    descripcion: "San Juan Guichicovi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1197,
    departamentoId: 20,
    descripcion: "San Juan Ihualtepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1198,
    departamentoId: 20,
    descripcion: "San Juan Juquila Mixes",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1199,
    departamentoId: 20,
    descripcion: "San Juan Juquila Vijanos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1200,
    departamentoId: 20,
    descripcion: "San Juan Lachao",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1201,
    departamentoId: 20,
    descripcion: "San Juan Lachigalla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1202,
    departamentoId: 20,
    descripcion: "San Juan Lajarcia",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1203,
    departamentoId: 20,
    descripcion: "San Juan Lalana",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1204,
    departamentoId: 20,
    descripcion: "San Juan de los Cués",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1205,
    departamentoId: 20,
    descripcion: "San Juan Mazatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1206,
    departamentoId: 20,
    descripcion: "San Juan Mixtepec -Dto. 08 -",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1207,
    departamentoId: 20,
    descripcion: "San Juan Mixtepec -Dto. 26 -",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1208,
    departamentoId: 20,
    descripcion: "San Juan Ñumí",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1209,
    departamentoId: 20,
    descripcion: "San Juan Ozolotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1210,
    departamentoId: 20,
    descripcion: "San Juan Petlapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1211,
    departamentoId: 20,
    descripcion: "San Juan Quiahije",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1212,
    departamentoId: 20,
    descripcion: "San Juan Quiotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1213,
    departamentoId: 20,
    descripcion: "San Juan Sayultepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1214,
    departamentoId: 20,
    descripcion: "San Juan Tabaá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1215,
    departamentoId: 20,
    descripcion: "San Juan Tamazola",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1216,
    departamentoId: 20,
    descripcion: "San Juan Teita",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1217,
    departamentoId: 20,
    descripcion: "San Juan Teitipac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1218,
    departamentoId: 20,
    descripcion: "San Juan Tepeuxila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1219,
    departamentoId: 20,
    descripcion: "San Juan Teposcolula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1220,
    departamentoId: 20,
    descripcion: "San Juan Yaeé",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1221,
    departamentoId: 20,
    descripcion: "San Juan Yatzona",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1222,
    departamentoId: 20,
    descripcion: "San Juan Yucuita",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1223,
    departamentoId: 20,
    descripcion: "San Lorenzo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1224,
    departamentoId: 20,
    descripcion: "San Lorenzo Albarradas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1225,
    departamentoId: 20,
    descripcion: "San Lorenzo Cacaotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1226,
    departamentoId: 20,
    descripcion: "San Lorenzo Cuaunecuiltitla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1227,
    departamentoId: 20,
    descripcion: "San Lorenzo Texmelúcan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1228,
    departamentoId: 20,
    descripcion: "San Lorenzo Victoria",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1229,
    departamentoId: 20,
    descripcion: "San Lucas Camotlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1230,
    departamentoId: 20,
    descripcion: "San Lucas Ojitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1231,
    departamentoId: 20,
    descripcion: "San Lucas Quiaviní",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1232,
    departamentoId: 20,
    descripcion: "San Lucas Zoquiápam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1233,
    departamentoId: 20,
    descripcion: "San Luis Amatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1234,
    departamentoId: 20,
    descripcion: "San Marcial Ozolotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1235,
    departamentoId: 20,
    descripcion: "San Marcos Arteaga",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1236,
    departamentoId: 20,
    descripcion: "San Martín de los Cansecos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1237,
    departamentoId: 20,
    descripcion: "San Martín Huamelúlpam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1238,
    departamentoId: 20,
    descripcion: "San Martín Itunyoso",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1239,
    departamentoId: 20,
    descripcion: "San Martín Lachilá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1240,
    departamentoId: 20,
    descripcion: "San Martín Peras",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1241,
    departamentoId: 20,
    descripcion: "San Martín Tilcajete",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1242,
    departamentoId: 20,
    descripcion: "San Martín Toxpalan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1243,
    departamentoId: 20,
    descripcion: "San Martín Zacatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1244,
    departamentoId: 20,
    descripcion: "San Mateo Cajonos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1245,
    departamentoId: 20,
    descripcion: "Capulálpam de Méndez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1246,
    departamentoId: 20,
    descripcion: "San Mateo del Mar",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1247,
    departamentoId: 20,
    descripcion: "San Mateo Yoloxochitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1248,
    departamentoId: 20,
    descripcion: "San Mateo Etlatongo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1249,
    departamentoId: 20,
    descripcion: "San Mateo Nejápam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1250,
    departamentoId: 20,
    descripcion: "San Mateo Peñasco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1251,
    departamentoId: 20,
    descripcion: "San Mateo Piñas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1252,
    departamentoId: 20,
    descripcion: "San Mateo Río Hondo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1253,
    departamentoId: 20,
    descripcion: "San Mateo Sindihui",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1254,
    departamentoId: 20,
    descripcion: "San Mateo Tlapiltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1255,
    departamentoId: 20,
    descripcion: "San Melchor Betaza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1256,
    departamentoId: 20,
    descripcion: "San Miguel Achiutla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1257,
    departamentoId: 20,
    descripcion: "San Miguel Ahuehuetitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1258,
    departamentoId: 20,
    descripcion: "San Miguel Aloápam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1259,
    departamentoId: 20,
    descripcion: "San Miguel Amatitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1260,
    departamentoId: 20,
    descripcion: "San Miguel Amatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1261,
    departamentoId: 20,
    descripcion: "San Miguel Coatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1262,
    departamentoId: 20,
    descripcion: "San Miguel Chicahua",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1263,
    departamentoId: 20,
    descripcion: "San Miguel Chimalapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1264,
    departamentoId: 20,
    descripcion: "San Miguel del Puerto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1265,
    departamentoId: 20,
    descripcion: "San Miguel del Río",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1266,
    departamentoId: 20,
    descripcion: "San Miguel Ejutla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1267,
    departamentoId: 20,
    descripcion: "San Miguel el Grande",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1268,
    departamentoId: 20,
    descripcion: "San Miguel Huautla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1269,
    departamentoId: 20,
    descripcion: "San Miguel Mixtepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1270,
    departamentoId: 20,
    descripcion: "San Miguel Panixtlahuaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1271,
    departamentoId: 20,
    descripcion: "San Miguel Peras",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1272,
    departamentoId: 20,
    descripcion: "San Miguel Piedras",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1273,
    departamentoId: 20,
    descripcion: "San Miguel Quetzaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1274,
    departamentoId: 20,
    descripcion: "San Miguel Santa Flor",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1275,
    departamentoId: 20,
    descripcion: "Villa Sola de Vega",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1276,
    departamentoId: 20,
    descripcion: "San Miguel Soyaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1277,
    departamentoId: 20,
    descripcion: "San Miguel Suchixtepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1278,
    departamentoId: 20,
    descripcion: "Villa Talea de Castro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1279,
    departamentoId: 20,
    descripcion: "San Miguel Tecomatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1280,
    departamentoId: 20,
    descripcion: "San Miguel Tenango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1281,
    departamentoId: 20,
    descripcion: "San Miguel Tequixtepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1282,
    departamentoId: 20,
    descripcion: "San Miguel Tilquiápam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1283,
    departamentoId: 20,
    descripcion: "San Miguel Tlacamama",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1284,
    departamentoId: 20,
    descripcion: "San Miguel Tlacotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1285,
    departamentoId: 20,
    descripcion: "San Miguel Tulancingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1286,
    departamentoId: 20,
    descripcion: "San Miguel Yotao",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1287,
    departamentoId: 20,
    descripcion: "San Nicolás",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1288,
    departamentoId: 20,
    descripcion: "San Nicolás Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1289,
    departamentoId: 20,
    descripcion: "San Pablo Coatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1290,
    departamentoId: 20,
    descripcion: "San Pablo Cuatro Venados",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1291,
    departamentoId: 20,
    descripcion: "San Pablo Etla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1292,
    departamentoId: 20,
    descripcion: "San Pablo Huitzo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1293,
    departamentoId: 20,
    descripcion: "San Pablo Huixtepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1294,
    departamentoId: 20,
    descripcion: "San Pablo Macuiltianguis",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1295,
    departamentoId: 20,
    descripcion: "San Pablo Tijaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1296,
    departamentoId: 20,
    descripcion: "San Pablo Villa de Mitla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1297,
    departamentoId: 20,
    descripcion: "San Pablo Yaganiza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1298,
    departamentoId: 20,
    descripcion: "San Pedro Amuzgos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1299,
    departamentoId: 20,
    descripcion: "San Pedro Apóstol",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1300,
    departamentoId: 20,
    descripcion: "San Pedro Atoyac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1301,
    departamentoId: 20,
    descripcion: "San Pedro Cajonos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1302,
    departamentoId: 20,
    descripcion: "San Pedro Coxcaltepec Cántaros",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1303,
    departamentoId: 20,
    descripcion: "San Pedro Comitancillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1304,
    departamentoId: 20,
    descripcion: "San Pedro el Alto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1305,
    departamentoId: 20,
    descripcion: "San Pedro Huamelula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1306,
    departamentoId: 20,
    descripcion: "San Pedro Huilotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1307,
    departamentoId: 20,
    descripcion: "San Pedro Ixcatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1308,
    departamentoId: 20,
    descripcion: "San Pedro Ixtlahuaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1309,
    departamentoId: 20,
    descripcion: "San Pedro Jaltepetongo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1310,
    departamentoId: 20,
    descripcion: "San Pedro Jicayán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1311,
    departamentoId: 20,
    descripcion: "San Pedro Jocotipac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1312,
    departamentoId: 20,
    descripcion: "San Pedro Juchatengo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1313,
    departamentoId: 20,
    descripcion: "San Pedro Mártir",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1314,
    departamentoId: 20,
    descripcion: "San Pedro Mártir Quiechapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1315,
    departamentoId: 20,
    descripcion: "San Pedro Mártir Yucuxaco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1316,
    departamentoId: 20,
    descripcion: "San Pedro Mixtepec -Dto. 22 -",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1317,
    departamentoId: 20,
    descripcion: "San Pedro Mixtepec -Dto. 26 -",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1318,
    departamentoId: 20,
    descripcion: "San Pedro Molinos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1319,
    departamentoId: 20,
    descripcion: "San Pedro Nopala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1320,
    departamentoId: 20,
    descripcion: "San Pedro Ocopetatillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1321,
    departamentoId: 20,
    descripcion: "San Pedro Ocotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1322,
    departamentoId: 20,
    descripcion: "San Pedro Pochutla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1323,
    departamentoId: 20,
    descripcion: "San Pedro Quiatoni",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1324,
    departamentoId: 20,
    descripcion: "San Pedro Sochiápam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1325,
    departamentoId: 20,
    descripcion: "San Pedro Tapanatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1326,
    departamentoId: 20,
    descripcion: "San Pedro Taviche",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1327,
    departamentoId: 20,
    descripcion: "San Pedro Teozacoalco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1328,
    departamentoId: 20,
    descripcion: "San Pedro Teutila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1329,
    departamentoId: 20,
    descripcion: "San Pedro Tidaá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1330,
    departamentoId: 20,
    descripcion: "San Pedro Topiltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1331,
    departamentoId: 20,
    descripcion: "San Pedro Totolápam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1332,
    departamentoId: 20,
    descripcion: "Villa de Tututepec de Melchor Ocampo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1333,
    departamentoId: 20,
    descripcion: "San Pedro Yaneri",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1334,
    departamentoId: 20,
    descripcion: "San Pedro Yólox",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1335,
    departamentoId: 20,
    descripcion: "San Pedro y San Pablo Ayutla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1336,
    departamentoId: 20,
    descripcion: "Villa de Etla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1337,
    departamentoId: 20,
    descripcion: "San Pedro y San Pablo Teposcolula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1338,
    departamentoId: 20,
    descripcion: "San Pedro y San Pablo Tequixtepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1339,
    departamentoId: 20,
    descripcion: "San Pedro Yucunama",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1340,
    departamentoId: 20,
    descripcion: "San Raymundo Jalpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1341,
    departamentoId: 20,
    descripcion: "San Sebastián Abasolo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1342,
    departamentoId: 20,
    descripcion: "San Sebastián Coatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1343,
    departamentoId: 20,
    descripcion: "San Sebastián Ixcapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1344,
    departamentoId: 20,
    descripcion: "San Sebastián Nicananduta",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1345,
    departamentoId: 20,
    descripcion: "San Sebastián Río Hondo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1346,
    departamentoId: 20,
    descripcion: "San Sebastián Tecomaxtlahuaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1347,
    departamentoId: 20,
    descripcion: "San Sebastián Teitipac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1348,
    departamentoId: 20,
    descripcion: "San Sebastián Tutla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1349,
    departamentoId: 20,
    descripcion: "San Simón Almolongas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1350,
    departamentoId: 20,
    descripcion: "San Simón Zahuatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1351,
    departamentoId: 20,
    descripcion: "Santa Ana",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1352,
    departamentoId: 20,
    descripcion: "Santa Ana Ateixtlahuaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1353,
    departamentoId: 20,
    descripcion: "Santa Ana Cuauhtémoc",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1354,
    departamentoId: 20,
    descripcion: "Santa Ana del Valle",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1355,
    departamentoId: 20,
    descripcion: "Santa Ana Tavela",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1356,
    departamentoId: 20,
    descripcion: "Santa Ana Tlapacoyan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1357,
    departamentoId: 20,
    descripcion: "Santa Ana Yareni",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1358,
    departamentoId: 20,
    descripcion: "Santa Ana Zegache",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1359,
    departamentoId: 20,
    descripcion: "Santa Catalina Quierí",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1360,
    departamentoId: 20,
    descripcion: "Santa Catarina Cuixtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1361,
    departamentoId: 20,
    descripcion: "Santa Catarina Ixtepeji",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1362,
    departamentoId: 20,
    descripcion: "Santa Catarina Juquila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1363,
    departamentoId: 20,
    descripcion: "Santa Catarina Lachatao",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1364,
    departamentoId: 20,
    descripcion: "Santa Catarina Loxicha",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1365,
    departamentoId: 20,
    descripcion: "Santa Catarina Mechoacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1366,
    departamentoId: 20,
    descripcion: "Santa Catarina Minas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1367,
    departamentoId: 20,
    descripcion: "Santa Catarina Quiané",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1368,
    departamentoId: 20,
    descripcion: "Santa Catarina Tayata",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1369,
    departamentoId: 20,
    descripcion: "Santa Catarina Ticuá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1370,
    departamentoId: 20,
    descripcion: "Santa Catarina Yosonotú",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1371,
    departamentoId: 20,
    descripcion: "Santa Catarina Zapoquila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1372,
    departamentoId: 20,
    descripcion: "Santa Cruz Acatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1373,
    departamentoId: 20,
    descripcion: "Santa Cruz Amilpas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1374,
    departamentoId: 20,
    descripcion: "Santa Cruz de Bravo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1375,
    departamentoId: 20,
    descripcion: "Santa Cruz Itundujia",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1376,
    departamentoId: 20,
    descripcion: "Santa Cruz Mixtepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1377,
    departamentoId: 20,
    descripcion: "Santa Cruz Nundaco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1378,
    departamentoId: 20,
    descripcion: "Santa Cruz Papalutla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1379,
    departamentoId: 20,
    descripcion: "Santa Cruz Tacache de Mina",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1380,
    departamentoId: 20,
    descripcion: "Santa Cruz Tacahua",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1381,
    departamentoId: 20,
    descripcion: "Santa Cruz Tayata",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1382,
    departamentoId: 20,
    descripcion: "Santa Cruz Xitla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1383,
    departamentoId: 20,
    descripcion: "Santa Cruz Xoxocotlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1384,
    departamentoId: 20,
    descripcion: "Santa Cruz Zenzontepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1385,
    departamentoId: 20,
    descripcion: "Santa Gertrudis",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1386,
    departamentoId: 20,
    descripcion: "Santa Inés del Monte",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1387,
    departamentoId: 20,
    descripcion: "Santa Inés Yatzeche",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1388,
    departamentoId: 20,
    descripcion: "Santa Lucía del Camino",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1389,
    departamentoId: 20,
    descripcion: "Santa Lucía Miahuatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1390,
    departamentoId: 20,
    descripcion: "Santa Lucía Monteverde",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1391,
    departamentoId: 20,
    descripcion: "Santa Lucía Ocotlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1392,
    departamentoId: 20,
    descripcion: "Santa María Alotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1393,
    departamentoId: 20,
    descripcion: "Santa María Apazco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1394,
    departamentoId: 20,
    descripcion: "Santa María la Asunción",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1395,
    departamentoId: 20,
    descripcion: "Heroica Ciudad de Tlaxiaco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1396,
    departamentoId: 20,
    descripcion: "Ayoquezco de Aldama",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1397,
    departamentoId: 20,
    descripcion: "Santa María Atzompa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1398,
    departamentoId: 20,
    descripcion: "Santa María Camotlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1399,
    departamentoId: 20,
    descripcion: "Santa María Colotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1400,
    departamentoId: 20,
    descripcion: "Santa María Cortijo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1401,
    departamentoId: 20,
    descripcion: "Santa María Coyotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1402,
    departamentoId: 20,
    descripcion: "Santa María Chachoápam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1403,
    departamentoId: 20,
    descripcion: "Villa de Chilapa de Díaz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1404,
    departamentoId: 20,
    descripcion: "Santa María Chilchotla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1405,
    departamentoId: 20,
    descripcion: "Santa María Chimalapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1406,
    departamentoId: 20,
    descripcion: "Santa María del Rosario",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1407,
    departamentoId: 20,
    descripcion: "Santa María del Tule",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1408,
    departamentoId: 20,
    descripcion: "Santa María Ecatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1409,
    departamentoId: 20,
    descripcion: "Santa María Guelacé",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1410,
    departamentoId: 20,
    descripcion: "Santa María Guienagati",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1411,
    departamentoId: 20,
    descripcion: "Santa María Huatulco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1412,
    departamentoId: 20,
    descripcion: "Santa María Huazolotitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1413,
    departamentoId: 20,
    descripcion: "Santa María Ipalapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1414,
    departamentoId: 20,
    descripcion: "Santa María Ixcatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1415,
    departamentoId: 20,
    descripcion: "Santa María Jacatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1416,
    departamentoId: 20,
    descripcion: "Santa María Jalapa del Marqués",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1417,
    departamentoId: 20,
    descripcion: "Santa María Jaltianguis",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1418,
    departamentoId: 20,
    descripcion: "Santa María Lachixío",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1419,
    departamentoId: 20,
    descripcion: "Santa María Mixtequilla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1420,
    departamentoId: 20,
    descripcion: "Santa María Nativitas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1421,
    departamentoId: 20,
    descripcion: "Santa María Nduayaco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1422,
    departamentoId: 20,
    descripcion: "Santa María Ozolotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1423,
    departamentoId: 20,
    descripcion: "Santa María Pápalo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1424,
    departamentoId: 20,
    descripcion: "Santa María Peñoles",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1425,
    departamentoId: 20,
    descripcion: "Santa María Petapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1426,
    departamentoId: 20,
    descripcion: "Santa María Quiegolani",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1427,
    departamentoId: 20,
    descripcion: "Santa María Sola",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1428,
    departamentoId: 20,
    descripcion: "Santa María Tataltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1429,
    departamentoId: 20,
    descripcion: "Santa María Tecomavaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1430,
    departamentoId: 20,
    descripcion: "Santa María Temaxcalapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1431,
    departamentoId: 20,
    descripcion: "Santa María Temaxcaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1432,
    departamentoId: 20,
    descripcion: "Santa María Teopoxco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1433,
    departamentoId: 20,
    descripcion: "Santa María Tepantlali",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1434,
    departamentoId: 20,
    descripcion: "Santa María Texcatitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1435,
    departamentoId: 20,
    descripcion: "Santa María Tlahuitoltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1436,
    departamentoId: 20,
    descripcion: "Santa María Tlalixtac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1437,
    departamentoId: 20,
    descripcion: "Santa María Tonameca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1438,
    departamentoId: 20,
    descripcion: "Santa María Totolapilla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1439,
    departamentoId: 20,
    descripcion: "Santa María Xadani",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1440,
    departamentoId: 20,
    descripcion: "Santa María Yalina",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1441,
    departamentoId: 20,
    descripcion: "Santa María Yavesía",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1442,
    departamentoId: 20,
    descripcion: "Santa María Yolotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1443,
    departamentoId: 20,
    descripcion: "Santa María Yosoyúa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1444,
    departamentoId: 20,
    descripcion: "Santa María Yucuhiti",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1445,
    departamentoId: 20,
    descripcion: "Santa María Zacatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1446,
    departamentoId: 20,
    descripcion: "Santa María Zaniza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1447,
    departamentoId: 20,
    descripcion: "Santa María Zoquitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1448,
    departamentoId: 20,
    descripcion: "Santiago Amoltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1449,
    departamentoId: 20,
    descripcion: "Santiago Apoala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1450,
    departamentoId: 20,
    descripcion: "Santiago Apóstol",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1451,
    departamentoId: 20,
    descripcion: "Santiago Astata",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1452,
    departamentoId: 20,
    descripcion: "Santiago Atitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1453,
    departamentoId: 20,
    descripcion: "Santiago Ayuquililla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1454,
    departamentoId: 20,
    descripcion: "Santiago Cacaloxtepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1455,
    departamentoId: 20,
    descripcion: "Santiago Camotlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1456,
    departamentoId: 20,
    descripcion: "Santiago Comaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1457,
    departamentoId: 20,
    descripcion: "Santiago Chazumba",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1458,
    departamentoId: 20,
    descripcion: "Santiago Choápam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1459,
    departamentoId: 20,
    descripcion: "Santiago del Río",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1460,
    departamentoId: 20,
    descripcion: "Santiago Huajolotitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1461,
    departamentoId: 20,
    descripcion: "Santiago Huauclilla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1462,
    departamentoId: 20,
    descripcion: "Santiago Ihuitlán Plumas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1463,
    departamentoId: 20,
    descripcion: "Santiago Ixcuintepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1464,
    departamentoId: 20,
    descripcion: "Santiago Ixtayutla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1465,
    departamentoId: 20,
    descripcion: "Santiago Jamiltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1466,
    departamentoId: 20,
    descripcion: "Santiago Jocotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1467,
    departamentoId: 20,
    descripcion: "Santiago Juxtlahuaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1468,
    departamentoId: 20,
    descripcion: "Santiago Lachiguiri",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1469,
    departamentoId: 20,
    descripcion: "Santiago Lalopa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1470,
    departamentoId: 20,
    descripcion: "Santiago Laollaga",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1471,
    departamentoId: 20,
    descripcion: "Santiago Laxopa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1472,
    departamentoId: 20,
    descripcion: "Santiago Llano Grande",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1473,
    departamentoId: 20,
    descripcion: "Santiago Matatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1474,
    departamentoId: 20,
    descripcion: "Santiago Miltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1475,
    departamentoId: 20,
    descripcion: "Santiago Minas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1476,
    departamentoId: 20,
    descripcion: "Santiago Nacaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1477,
    departamentoId: 20,
    descripcion: "Santiago Nejapilla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1478,
    departamentoId: 20,
    descripcion: "Santiago Nundiche",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1479,
    departamentoId: 20,
    descripcion: "Santiago Nuyoó",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1480,
    departamentoId: 20,
    descripcion: "Santiago Pinotepa Nacional",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1481,
    departamentoId: 20,
    descripcion: "Santiago Suchilquitongo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1482,
    departamentoId: 20,
    descripcion: "Santiago Tamazola",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1483,
    departamentoId: 20,
    descripcion: "Santiago Tapextla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1484,
    departamentoId: 20,
    descripcion: "Villa Tejúpam de la Unión",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1485,
    departamentoId: 20,
    descripcion: "Santiago Tenango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1486,
    departamentoId: 20,
    descripcion: "Santiago Tepetlapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1487,
    departamentoId: 20,
    descripcion: "Santiago Tetepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1488,
    departamentoId: 20,
    descripcion: "Santiago Texcalcingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1489,
    departamentoId: 20,
    descripcion: "Santiago Textitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1490,
    departamentoId: 20,
    descripcion: "Santiago Tilantongo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1491,
    departamentoId: 20,
    descripcion: "Santiago Tillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1492,
    departamentoId: 20,
    descripcion: "Santiago Tlazoyaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1493,
    departamentoId: 20,
    descripcion: "Santiago Xanica",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1494,
    departamentoId: 20,
    descripcion: "Santiago Xiacuí",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1495,
    departamentoId: 20,
    descripcion: "Santiago Yaitepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1496,
    departamentoId: 20,
    descripcion: "Santiago Yaveo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1497,
    departamentoId: 20,
    descripcion: "Santiago Yolomécatl",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1498,
    departamentoId: 20,
    descripcion: "Santiago Yosondúa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1499,
    departamentoId: 20,
    descripcion: "Santiago Yucuyachi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1500,
    departamentoId: 20,
    descripcion: "Santiago Zacatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1501,
    departamentoId: 20,
    descripcion: "Santiago Zoochila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1502,
    departamentoId: 20,
    descripcion: "Nuevo Zoquiápam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1503,
    departamentoId: 20,
    descripcion: "Santo Domingo Ingenio",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1504,
    departamentoId: 20,
    descripcion: "Santo Domingo Albarradas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1505,
    departamentoId: 20,
    descripcion: "Santo Domingo Armenta",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1506,
    departamentoId: 20,
    descripcion: "Santo Domingo Chihuitán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1507,
    departamentoId: 20,
    descripcion: "Santo Domingo de Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1508,
    departamentoId: 20,
    descripcion: "Santo Domingo Ixcatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1509,
    departamentoId: 20,
    descripcion: "Santo Domingo Nuxaá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1510,
    departamentoId: 20,
    descripcion: "Santo Domingo Ozolotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1511,
    departamentoId: 20,
    descripcion: "Santo Domingo Petapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1512,
    departamentoId: 20,
    descripcion: "Santo Domingo Roayaga",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1513,
    departamentoId: 20,
    descripcion: "Santo Domingo Tehuantepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1514,
    departamentoId: 20,
    descripcion: "Santo Domingo Teojomulco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1515,
    departamentoId: 20,
    descripcion: "Santo Domingo Tepuxtepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1516,
    departamentoId: 20,
    descripcion: "Santo Domingo Tlatayápam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1517,
    departamentoId: 20,
    descripcion: "Santo Domingo Tomaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1518,
    departamentoId: 20,
    descripcion: "Santo Domingo Tonalá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1519,
    departamentoId: 20,
    descripcion: "Santo Domingo Tonaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1520,
    departamentoId: 20,
    descripcion: "Santo Domingo Xagacía",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1521,
    departamentoId: 20,
    descripcion: "Santo Domingo Yanhuitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1522,
    departamentoId: 20,
    descripcion: "Santo Domingo Yodohino",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1523,
    departamentoId: 20,
    descripcion: "Santo Domingo Zanatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1524,
    departamentoId: 20,
    descripcion: "Santos Reyes Nopala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1525,
    departamentoId: 20,
    descripcion: "Santos Reyes Pápalo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1526,
    departamentoId: 20,
    descripcion: "Santos Reyes Tepejillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1527,
    departamentoId: 20,
    descripcion: "Santos Reyes Yucuná",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1528,
    departamentoId: 20,
    descripcion: "Santo Tomás Jalieza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1529,
    departamentoId: 20,
    descripcion: "Santo Tomás Mazaltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1530,
    departamentoId: 20,
    descripcion: "Santo Tomás Ocotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1531,
    departamentoId: 20,
    descripcion: "Santo Tomás Tamazulapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1532,
    departamentoId: 20,
    descripcion: "San Vicente Coatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1533,
    departamentoId: 20,
    descripcion: "San Vicente Lachixío",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1534,
    departamentoId: 20,
    descripcion: "San Vicente Nuñú",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1535,
    departamentoId: 20,
    descripcion: "Silacayoápam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1536,
    departamentoId: 20,
    descripcion: "Sitio de Xitlapehua",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1537,
    departamentoId: 20,
    descripcion: "Soledad Etla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1538,
    departamentoId: 20,
    descripcion: "Villa de Tamazulápam del Progreso",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1539,
    departamentoId: 20,
    descripcion: "Tanetze de Zaragoza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1540,
    departamentoId: 20,
    descripcion: "Taniche",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1541,
    departamentoId: 20,
    descripcion: "Tataltepec de Valdés",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1542,
    departamentoId: 20,
    descripcion: "Teococuilco de Marcos Pérez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1543,
    departamentoId: 20,
    descripcion: "Teotitlán de Flores Magón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1544,
    departamentoId: 20,
    descripcion: "Teotitlán del Valle",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1545,
    departamentoId: 20,
    descripcion: "Teotongo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1546,
    departamentoId: 20,
    descripcion: "Tepelmeme Villa de Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1547,
    departamentoId: 20,
    descripcion:
      "Heroica Villa Tezoatlán de Segura y Luna, Cuna de la Independencia de Oaxaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1548,
    departamentoId: 20,
    descripcion: "San Jerónimo Tlacochahuaya",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1549,
    departamentoId: 20,
    descripcion: "Tlacolula de Matamoros",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1550,
    departamentoId: 20,
    descripcion: "Tlacotepec Plumas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1551,
    departamentoId: 20,
    descripcion: "Tlalixtac de Cabrera",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1552,
    departamentoId: 20,
    descripcion: "Totontepec Villa de Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1553,
    departamentoId: 20,
    descripcion: "Trinidad Zaachila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1554,
    departamentoId: 20,
    descripcion: "La Trinidad Vista Hermosa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1555,
    departamentoId: 20,
    descripcion: "Unión Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1556,
    departamentoId: 20,
    descripcion: "Valerio Trujano",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1557,
    departamentoId: 20,
    descripcion: "San Juan Bautista Valle Nacional",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1558,
    departamentoId: 20,
    descripcion: "Villa Díaz Ordaz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1559,
    departamentoId: 20,
    descripcion: "Yaxe",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1560,
    departamentoId: 20,
    descripcion: "Magdalena Yodocono de Porfirio Díaz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1561,
    departamentoId: 20,
    descripcion: "Yogana",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1562,
    departamentoId: 20,
    descripcion: "Yutanduchi de Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1563,
    departamentoId: 20,
    descripcion: "Villa de Zaachila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1564,
    departamentoId: 20,
    descripcion: "San Mateo Yucutindó",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1565,
    departamentoId: 20,
    descripcion: "Zapotitlán Lagunas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1566,
    departamentoId: 20,
    descripcion: "Zapotitlán Palmas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1567,
    departamentoId: 20,
    descripcion: "Santa Inés de Zaragoza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1568,
    departamentoId: 20,
    descripcion: "Zimatlán de Álvarez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1569,
    departamentoId: 21,
    descripcion: "Acajete",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1570,
    departamentoId: 21,
    descripcion: "Acateno",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1571,
    departamentoId: 21,
    descripcion: "Acatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1572,
    departamentoId: 21,
    descripcion: "Acatzingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1573,
    departamentoId: 21,
    descripcion: "Acteopan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1574,
    departamentoId: 21,
    descripcion: "Ahuacatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1575,
    departamentoId: 21,
    descripcion: "Ahuatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1576,
    departamentoId: 21,
    descripcion: "Ahuazotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1577,
    departamentoId: 21,
    descripcion: "Ahuehuetitla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1578,
    departamentoId: 21,
    descripcion: "Ajalpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1579,
    departamentoId: 21,
    descripcion: "Albino Zertuche",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1580,
    departamentoId: 21,
    descripcion: "Aljojuca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1581,
    departamentoId: 21,
    descripcion: "Altepexi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1582,
    departamentoId: 21,
    descripcion: "Amixtlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1583,
    departamentoId: 21,
    descripcion: "Amozoc",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1584,
    departamentoId: 21,
    descripcion: "Aquixtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1585,
    departamentoId: 21,
    descripcion: "Atempan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1586,
    departamentoId: 21,
    descripcion: "Atexcal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1587,
    departamentoId: 21,
    descripcion: "Atlixco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1588,
    departamentoId: 21,
    descripcion: "Atoyatempan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1589,
    departamentoId: 21,
    descripcion: "Atzala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1590,
    departamentoId: 21,
    descripcion: "Atzitzihuacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1591,
    departamentoId: 21,
    descripcion: "Atzitzintla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1592,
    departamentoId: 21,
    descripcion: "Axutla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1593,
    departamentoId: 21,
    descripcion: "Ayotoxco de Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1594,
    departamentoId: 21,
    descripcion: "Calpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1595,
    departamentoId: 21,
    descripcion: "Caltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1596,
    departamentoId: 21,
    descripcion: "Camocuautla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1597,
    departamentoId: 21,
    descripcion: "Caxhuacan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1598,
    departamentoId: 21,
    descripcion: "Coatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1599,
    departamentoId: 21,
    descripcion: "Coatzingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1600,
    departamentoId: 21,
    descripcion: "Cohetzala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1601,
    departamentoId: 21,
    descripcion: "Cohuecan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1602,
    departamentoId: 21,
    descripcion: "Coronango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1603,
    departamentoId: 21,
    descripcion: "Coxcatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1604,
    departamentoId: 21,
    descripcion: "Coyomeapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1605,
    departamentoId: 21,
    descripcion: "Coyotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1606,
    departamentoId: 21,
    descripcion: "Cuapiaxtla de Madero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1607,
    departamentoId: 21,
    descripcion: "Cuautempan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1608,
    departamentoId: 21,
    descripcion: "Cuautinchán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1609,
    departamentoId: 21,
    descripcion: "Cuautlancingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1610,
    departamentoId: 21,
    descripcion: "Cuayuca de Andrade",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1611,
    departamentoId: 21,
    descripcion: "Cuetzalan del Progreso",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1612,
    departamentoId: 21,
    descripcion: "Cuyoaco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1613,
    departamentoId: 21,
    descripcion: "Chalchicomula de Sesma",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1614,
    departamentoId: 21,
    descripcion: "Chapulco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1615,
    departamentoId: 21,
    descripcion: "Chiautla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1616,
    departamentoId: 21,
    descripcion: "Chiautzingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1617,
    departamentoId: 21,
    descripcion: "Chiconcuautla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1618,
    departamentoId: 21,
    descripcion: "Chichiquila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1619,
    departamentoId: 21,
    descripcion: "Chietla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1620,
    departamentoId: 21,
    descripcion: "Chigmecatitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1621,
    departamentoId: 21,
    descripcion: "Chignahuapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1622,
    departamentoId: 21,
    descripcion: "Chignautla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1623,
    departamentoId: 21,
    descripcion: "Chila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1624,
    departamentoId: 21,
    descripcion: "Chila de la Sal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1625,
    departamentoId: 21,
    descripcion: "Honey",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1626,
    departamentoId: 21,
    descripcion: "Chilchotla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1627,
    departamentoId: 21,
    descripcion: "Chinantla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1628,
    departamentoId: 21,
    descripcion: "Domingo Arenas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1629,
    departamentoId: 21,
    descripcion: "Eloxochitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1630,
    departamentoId: 21,
    descripcion: "Epatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1631,
    departamentoId: 21,
    descripcion: "Esperanza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1632,
    departamentoId: 21,
    descripcion: "Francisco Z. Mena",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1633,
    departamentoId: 21,
    descripcion: "General Felipe Ángeles",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1634,
    departamentoId: 21,
    descripcion: "Guadalupe",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1635,
    departamentoId: 21,
    descripcion: "Guadalupe Victoria",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1636,
    departamentoId: 21,
    descripcion: "Hermenegildo Galeana",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1637,
    departamentoId: 21,
    descripcion: "Huaquechula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1638,
    departamentoId: 21,
    descripcion: "Huatlatlauca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1639,
    departamentoId: 21,
    descripcion: "Huauchinango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1640,
    departamentoId: 21,
    descripcion: "Huehuetla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1641,
    departamentoId: 21,
    descripcion: "Huehuetlán el Chico",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1642,
    departamentoId: 21,
    descripcion: "Huejotzingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1643,
    departamentoId: 21,
    descripcion: "Hueyapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1644,
    departamentoId: 21,
    descripcion: "Hueytamalco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1645,
    departamentoId: 21,
    descripcion: "Hueytlalpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1646,
    departamentoId: 21,
    descripcion: "Huitzilan de Serdán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1647,
    departamentoId: 21,
    descripcion: "Huitziltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1648,
    departamentoId: 21,
    descripcion: "Atlequizayan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1649,
    departamentoId: 21,
    descripcion: "Ixcamilpa de Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1650,
    departamentoId: 21,
    descripcion: "Ixcaquixtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1651,
    departamentoId: 21,
    descripcion: "Ixtacamaxtitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1652,
    departamentoId: 21,
    descripcion: "Ixtepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1653,
    departamentoId: 21,
    descripcion: "Izúcar de Matamoros",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1654,
    departamentoId: 21,
    descripcion: "Jalpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1655,
    departamentoId: 21,
    descripcion: "Jolalpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1656,
    departamentoId: 21,
    descripcion: "Jonotla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1657,
    departamentoId: 21,
    descripcion: "Jopala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1658,
    departamentoId: 21,
    descripcion: "Juan C. Bonilla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1659,
    departamentoId: 21,
    descripcion: "Juan Galindo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1660,
    departamentoId: 21,
    descripcion: "Juan N. Méndez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1661,
    departamentoId: 21,
    descripcion: "Lafragua",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1662,
    departamentoId: 21,
    descripcion: "Libres",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1663,
    departamentoId: 21,
    descripcion: "La Magdalena Tlatlauquitepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1664,
    departamentoId: 21,
    descripcion: "Mazapiltepec de Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1665,
    departamentoId: 21,
    descripcion: "Mixtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1666,
    departamentoId: 21,
    descripcion: "Molcaxac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1667,
    departamentoId: 21,
    descripcion: "Cañada Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1668,
    departamentoId: 21,
    descripcion: "Naupan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1669,
    departamentoId: 21,
    descripcion: "Nauzontla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1670,
    departamentoId: 21,
    descripcion: "Nealtican",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1671,
    departamentoId: 21,
    descripcion: "Nicolás Bravo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1672,
    departamentoId: 21,
    descripcion: "Nopalucan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1673,
    departamentoId: 21,
    descripcion: "Ocotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1674,
    departamentoId: 21,
    descripcion: "Ocoyucan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1675,
    departamentoId: 21,
    descripcion: "Olintla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1676,
    departamentoId: 21,
    descripcion: "Oriental",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1677,
    departamentoId: 21,
    descripcion: "Pahuatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1678,
    departamentoId: 21,
    descripcion: "Palmar de Bravo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1679,
    departamentoId: 21,
    descripcion: "Pantepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1680,
    departamentoId: 21,
    descripcion: "Petlalcingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1681,
    departamentoId: 21,
    descripcion: "Piaxtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1682,
    departamentoId: 21,
    descripcion: "Puebla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1683,
    departamentoId: 21,
    descripcion: "Quecholac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1684,
    departamentoId: 21,
    descripcion: "Quimixtlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1685,
    departamentoId: 21,
    descripcion: "Rafael Lara Grajales",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1686,
    departamentoId: 21,
    descripcion: "Los Reyes de Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1687,
    departamentoId: 21,
    descripcion: "San Andrés Cholula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1688,
    departamentoId: 21,
    descripcion: "San Antonio Cañada",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1689,
    departamentoId: 21,
    descripcion: "San Diego la Mesa Tochimiltzingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1690,
    departamentoId: 21,
    descripcion: "San Felipe Teotlalcingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1691,
    departamentoId: 21,
    descripcion: "San Felipe Tepatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1692,
    departamentoId: 21,
    descripcion: "San Gabriel Chilac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1693,
    departamentoId: 21,
    descripcion: "San Gregorio Atzompa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1694,
    departamentoId: 21,
    descripcion: "San Jerónimo Tecuanipan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1695,
    departamentoId: 21,
    descripcion: "San Jerónimo Xayacatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1696,
    departamentoId: 21,
    descripcion: "San José Chiapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1697,
    departamentoId: 21,
    descripcion: "San José Miahuatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1698,
    departamentoId: 21,
    descripcion: "San Juan Atenco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1699,
    departamentoId: 21,
    descripcion: "San Juan Atzompa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1700,
    departamentoId: 21,
    descripcion: "San Martín Texmelucan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1701,
    departamentoId: 21,
    descripcion: "San Martín Totoltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1702,
    departamentoId: 21,
    descripcion: "San Matías Tlalancaleca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1703,
    departamentoId: 21,
    descripcion: "San Miguel Ixitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1704,
    departamentoId: 21,
    descripcion: "San Miguel Xoxtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1705,
    departamentoId: 21,
    descripcion: "San Nicolás Buenos Aires",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1706,
    departamentoId: 21,
    descripcion: "San Nicolás de los Ranchos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1707,
    departamentoId: 21,
    descripcion: "San Pablo Anicano",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1708,
    departamentoId: 21,
    descripcion: "San Pedro Cholula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1709,
    departamentoId: 21,
    descripcion: "San Pedro Yeloixtlahuaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1710,
    departamentoId: 21,
    descripcion: "San Salvador el Seco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1711,
    departamentoId: 21,
    descripcion: "San Salvador el Verde",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1712,
    departamentoId: 21,
    descripcion: "San Salvador Huixcolotla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1713,
    departamentoId: 21,
    descripcion: "San Sebastián Tlacotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1714,
    departamentoId: 21,
    descripcion: "Santa Catarina Tlaltempan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1715,
    departamentoId: 21,
    descripcion: "Santa Inés Ahuatempan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1716,
    departamentoId: 21,
    descripcion: "Santa Isabel Cholula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1717,
    departamentoId: 21,
    descripcion: "Santiago Miahuatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1718,
    departamentoId: 21,
    descripcion: "Huehuetlán el Grande",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1719,
    departamentoId: 21,
    descripcion: "Santo Tomás Hueyotlipan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1720,
    departamentoId: 21,
    descripcion: "Soltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1721,
    departamentoId: 21,
    descripcion: "Tecali de Herrera",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1722,
    departamentoId: 21,
    descripcion: "Tecamachalco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1723,
    departamentoId: 21,
    descripcion: "Tecomatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1724,
    departamentoId: 21,
    descripcion: "Tehuacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1725,
    departamentoId: 21,
    descripcion: "Tehuitzingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1726,
    departamentoId: 21,
    descripcion: "Tenampulco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1727,
    departamentoId: 21,
    descripcion: "Teopantlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1728,
    departamentoId: 21,
    descripcion: "Teotlalco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1729,
    departamentoId: 21,
    descripcion: "Tepanco de López",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1730,
    departamentoId: 21,
    descripcion: "Tepango de Rodríguez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1731,
    departamentoId: 21,
    descripcion: "Tepatlaxco de Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1732,
    departamentoId: 21,
    descripcion: "Tepeaca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1733,
    departamentoId: 21,
    descripcion: "Tepemaxalco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1734,
    departamentoId: 21,
    descripcion: "Tepeojuma",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1735,
    departamentoId: 21,
    descripcion: "Tepetzintla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1736,
    departamentoId: 21,
    descripcion: "Tepexco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1737,
    departamentoId: 21,
    descripcion: "Tepexi de Rodríguez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1738,
    departamentoId: 21,
    descripcion: "Tepeyahualco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1739,
    departamentoId: 21,
    descripcion: "Tepeyahualco de Cuauhtémoc",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1740,
    departamentoId: 21,
    descripcion: "Tetela de Ocampo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1741,
    departamentoId: 21,
    descripcion: "Teteles de Avila Castillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1742,
    departamentoId: 21,
    descripcion: "Teziutlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1743,
    departamentoId: 21,
    descripcion: "Tianguismanalco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1744,
    departamentoId: 21,
    descripcion: "Tilapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1745,
    departamentoId: 21,
    descripcion: "Tlacotepec de Benito Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1746,
    departamentoId: 21,
    descripcion: "Tlacuilotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1747,
    departamentoId: 21,
    descripcion: "Tlachichuca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1748,
    departamentoId: 21,
    descripcion: "Tlahuapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1749,
    departamentoId: 21,
    descripcion: "Tlaltenango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1750,
    departamentoId: 21,
    descripcion: "Tlanepantla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1751,
    departamentoId: 21,
    descripcion: "Tlaola",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1752,
    departamentoId: 21,
    descripcion: "Tlapacoya",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1753,
    departamentoId: 21,
    descripcion: "Tlapanalá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1754,
    departamentoId: 21,
    descripcion: "Tlatlauquitepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1755,
    departamentoId: 21,
    descripcion: "Tlaxco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1756,
    departamentoId: 21,
    descripcion: "Tochimilco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1757,
    departamentoId: 21,
    descripcion: "Tochtepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1758,
    departamentoId: 21,
    descripcion: "Totoltepec de Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1759,
    departamentoId: 21,
    descripcion: "Tulcingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1760,
    departamentoId: 21,
    descripcion: "Tuzamapan de Galeana",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1761,
    departamentoId: 21,
    descripcion: "Tzicatlacoyan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1762,
    departamentoId: 21,
    descripcion: "Venustiano Carranza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1763,
    departamentoId: 21,
    descripcion: "Vicente Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1764,
    departamentoId: 21,
    descripcion: "Xayacatlán de Bravo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1765,
    departamentoId: 21,
    descripcion: "Xicotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1766,
    departamentoId: 21,
    descripcion: "Xicotlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1767,
    departamentoId: 21,
    descripcion: "Xiutetelco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1768,
    departamentoId: 21,
    descripcion: "Xochiapulco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1769,
    departamentoId: 21,
    descripcion: "Xochiltepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1770,
    departamentoId: 21,
    descripcion: "Xochitlán de Vicente Suárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1771,
    departamentoId: 21,
    descripcion: "Xochitlán Todos Santos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1772,
    departamentoId: 21,
    descripcion: "Yaonáhuac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1773,
    departamentoId: 21,
    descripcion: "Yehualtepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1774,
    departamentoId: 21,
    descripcion: "Zacapala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1775,
    departamentoId: 21,
    descripcion: "Zacapoaxtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1776,
    departamentoId: 21,
    descripcion: "Zacatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1777,
    departamentoId: 21,
    descripcion: "Zapotitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1778,
    departamentoId: 21,
    descripcion: "Zapotitlán de Méndez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1779,
    departamentoId: 21,
    descripcion: "Zaragoza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1780,
    departamentoId: 21,
    descripcion: "Zautla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1781,
    departamentoId: 21,
    descripcion: "Zihuateutla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1782,
    departamentoId: 21,
    descripcion: "Zinacatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1783,
    departamentoId: 21,
    descripcion: "Zongozotla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1784,
    departamentoId: 21,
    descripcion: "Zoquiapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1785,
    departamentoId: 21,
    descripcion: "Zoquitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1786,
    departamentoId: 22,
    descripcion: "Amealco de Bonfil",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1787,
    departamentoId: 22,
    descripcion: "Pinal de Amoles",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1788,
    departamentoId: 22,
    descripcion: "Arroyo Seco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1789,
    departamentoId: 22,
    descripcion: "Cadereyta de Montes",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1790,
    departamentoId: 22,
    descripcion: "Colón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1791,
    departamentoId: 22,
    descripcion: "Corregidora",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1792,
    departamentoId: 22,
    descripcion: "Ezequiel Montes",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1793,
    departamentoId: 22,
    descripcion: "Huimilpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1794,
    departamentoId: 22,
    descripcion: "Jalpan de Serra",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1795,
    departamentoId: 22,
    descripcion: "Landa de Matamoros",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1796,
    departamentoId: 22,
    descripcion: "El Marqués",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1797,
    departamentoId: 22,
    descripcion: "Pedro Escobedo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1798,
    departamentoId: 22,
    descripcion: "Peñamiller",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1799,
    departamentoId: 22,
    descripcion: "Querétaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1800,
    departamentoId: 22,
    descripcion: "San Joaquín",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1801,
    departamentoId: 22,
    descripcion: "San Juan del Río",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1802,
    departamentoId: 22,
    descripcion: "Tequisquiapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1803,
    departamentoId: 22,
    descripcion: "Tolimán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1804,
    departamentoId: 23,
    descripcion: "Cozumel",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1805,
    departamentoId: 23,
    descripcion: "Felipe Carrillo Puerto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1806,
    departamentoId: 23,
    descripcion: "Isla Mujeres",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1807,
    departamentoId: 23,
    descripcion: "Othón P. Blanco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1808,
    departamentoId: 23,
    descripcion: "Benito Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1809,
    departamentoId: 23,
    descripcion: "José María Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1810,
    departamentoId: 23,
    descripcion: "Lázaro Cárdenas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1811,
    departamentoId: 23,
    descripcion: "Solidaridad",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1812,
    departamentoId: 23,
    descripcion: "Tulum",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1813,
    departamentoId: 23,
    descripcion: "Bacalar",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1814,
    departamentoId: 24,
    descripcion: "Ahualulco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1815,
    departamentoId: 24,
    descripcion: "Alaquines",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1816,
    departamentoId: 24,
    descripcion: "Aquismón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1817,
    departamentoId: 24,
    descripcion: "Armadillo de los Infante",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1818,
    departamentoId: 24,
    descripcion: "Cárdenas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1819,
    departamentoId: 24,
    descripcion: "Catorce",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1820,
    departamentoId: 24,
    descripcion: "Cedral",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1821,
    departamentoId: 24,
    descripcion: "Cerritos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1822,
    departamentoId: 24,
    descripcion: "Cerro de San Pedro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1823,
    departamentoId: 24,
    descripcion: "Ciudad del Maíz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1824,
    departamentoId: 24,
    descripcion: "Ciudad Fernández",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1825,
    departamentoId: 24,
    descripcion: "Tancanhuitz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1826,
    departamentoId: 24,
    descripcion: "Ciudad Valles",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1827,
    departamentoId: 24,
    descripcion: "Coxcatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1828,
    departamentoId: 24,
    descripcion: "Charcas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1829,
    departamentoId: 24,
    descripcion: "Ebano",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1830,
    departamentoId: 24,
    descripcion: "Guadalcázar",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1831,
    departamentoId: 24,
    descripcion: "Huehuetlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1832,
    departamentoId: 24,
    descripcion: "Lagunillas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1833,
    departamentoId: 24,
    descripcion: "Matehuala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1834,
    departamentoId: 24,
    descripcion: "Mexquitic de Carmona",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1835,
    departamentoId: 24,
    descripcion: "Moctezuma",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1836,
    departamentoId: 24,
    descripcion: "Rayón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1837,
    departamentoId: 24,
    descripcion: "Rioverde",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1838,
    departamentoId: 24,
    descripcion: "Salinas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1839,
    departamentoId: 24,
    descripcion: "San Antonio",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1840,
    departamentoId: 24,
    descripcion: "San Ciro de Acosta",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1841,
    departamentoId: 24,
    descripcion: "San Luis Potosí",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1842,
    departamentoId: 24,
    descripcion: "San Martín Chalchicuautla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1843,
    departamentoId: 24,
    descripcion: "San Nicolás Tolentino",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1844,
    departamentoId: 24,
    descripcion: "Santa Catarina",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1845,
    departamentoId: 24,
    descripcion: "Santa María del Río",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1846,
    departamentoId: 24,
    descripcion: "Santo Domingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1847,
    departamentoId: 24,
    descripcion: "San Vicente Tancuayalab",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1848,
    departamentoId: 24,
    descripcion: "Soledad de Graciano Sánchez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1849,
    departamentoId: 24,
    descripcion: "Tamasopo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1850,
    departamentoId: 24,
    descripcion: "Tamazunchale",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1851,
    departamentoId: 24,
    descripcion: "Tampacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1852,
    departamentoId: 24,
    descripcion: "Tampamolón Corona",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1853,
    departamentoId: 24,
    descripcion: "Tamuín",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1854,
    departamentoId: 24,
    descripcion: "Tanlajás",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1855,
    departamentoId: 24,
    descripcion: "Tanquián de Escobedo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1856,
    departamentoId: 24,
    descripcion: "Tierra Nueva",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1857,
    departamentoId: 24,
    descripcion: "Vanegas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1858,
    departamentoId: 24,
    descripcion: "Venado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1859,
    departamentoId: 24,
    descripcion: "Villa de Arriaga",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1860,
    departamentoId: 24,
    descripcion: "Villa de Guadalupe",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1861,
    departamentoId: 24,
    descripcion: "Villa de la Paz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1862,
    departamentoId: 24,
    descripcion: "Villa de Ramos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1863,
    departamentoId: 24,
    descripcion: "Villa de Reyes",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1864,
    departamentoId: 24,
    descripcion: "Villa Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1865,
    departamentoId: 24,
    descripcion: "Villa Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1866,
    departamentoId: 24,
    descripcion: "Axtla de Terrazas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1867,
    departamentoId: 24,
    descripcion: "Xilitla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1868,
    departamentoId: 24,
    descripcion: "Zaragoza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1869,
    departamentoId: 24,
    descripcion: "Villa de Arista",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1870,
    departamentoId: 24,
    descripcion: "Matlapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1871,
    departamentoId: 24,
    descripcion: "El Naranjo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1872,
    departamentoId: 25,
    descripcion: "Ahome",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1873,
    departamentoId: 25,
    descripcion: "Angostura",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1874,
    departamentoId: 25,
    descripcion: "Badiraguato",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1875,
    departamentoId: 25,
    descripcion: "Concordia",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1876,
    departamentoId: 25,
    descripcion: "Cosalá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1877,
    departamentoId: 25,
    descripcion: "Culiacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1878,
    departamentoId: 25,
    descripcion: "Choix",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1879,
    departamentoId: 25,
    descripcion: "Elota",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1880,
    departamentoId: 25,
    descripcion: "Escuinapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1881,
    departamentoId: 25,
    descripcion: "El Fuerte",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1882,
    departamentoId: 25,
    descripcion: "Guasave",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1883,
    departamentoId: 25,
    descripcion: "Mazatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1884,
    departamentoId: 25,
    descripcion: "Mocorito",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1885,
    departamentoId: 25,
    descripcion: "Rosario",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1886,
    departamentoId: 25,
    descripcion: "Salvador Alvarado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1887,
    departamentoId: 25,
    descripcion: "San Ignacio",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1888,
    departamentoId: 25,
    descripcion: "Sinaloa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1889,
    departamentoId: 25,
    descripcion: "Navolato",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1890,
    departamentoId: 26,
    descripcion: "Aconchi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1891,
    departamentoId: 26,
    descripcion: "Agua Prieta",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1892,
    departamentoId: 26,
    descripcion: "Alamos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1893,
    departamentoId: 26,
    descripcion: "Altar",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1894,
    departamentoId: 26,
    descripcion: "Arivechi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1895,
    departamentoId: 26,
    descripcion: "Arizpe",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1896,
    departamentoId: 26,
    descripcion: "Atil",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1897,
    departamentoId: 26,
    descripcion: "Bacadéhuachi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1898,
    departamentoId: 26,
    descripcion: "Bacanora",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1899,
    departamentoId: 26,
    descripcion: "Bacerac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1900,
    departamentoId: 26,
    descripcion: "Bacoachi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1901,
    departamentoId: 26,
    descripcion: "Bácum",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1902,
    departamentoId: 26,
    descripcion: "Banámichi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1903,
    departamentoId: 26,
    descripcion: "Baviácora",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1904,
    departamentoId: 26,
    descripcion: "Bavispe",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1905,
    departamentoId: 26,
    descripcion: "Benjamín Hill",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1906,
    departamentoId: 26,
    descripcion: "Caborca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1907,
    departamentoId: 26,
    descripcion: "Cajeme",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1908,
    departamentoId: 26,
    descripcion: "Cananea",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1909,
    departamentoId: 26,
    descripcion: "Carbó",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1910,
    departamentoId: 26,
    descripcion: "La Colorada",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1911,
    departamentoId: 26,
    descripcion: "Cucurpe",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1912,
    departamentoId: 26,
    descripcion: "Cumpas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1913,
    departamentoId: 26,
    descripcion: "Divisaderos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1914,
    departamentoId: 26,
    descripcion: "Empalme",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1915,
    departamentoId: 26,
    descripcion: "Etchojoa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1916,
    departamentoId: 26,
    descripcion: "Fronteras",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1917,
    departamentoId: 26,
    descripcion: "Granados",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1918,
    departamentoId: 26,
    descripcion: "Guaymas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1919,
    departamentoId: 26,
    descripcion: "Hermosillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1920,
    departamentoId: 26,
    descripcion: "Huachinera",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1921,
    departamentoId: 26,
    descripcion: "Huásabas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1922,
    departamentoId: 26,
    descripcion: "Huatabampo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1923,
    departamentoId: 26,
    descripcion: "Huépac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1924,
    departamentoId: 26,
    descripcion: "Imuris",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1925,
    departamentoId: 26,
    descripcion: "Magdalena",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1926,
    departamentoId: 26,
    descripcion: "Mazatán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1927,
    departamentoId: 26,
    descripcion: "Moctezuma",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1928,
    departamentoId: 26,
    descripcion: "Naco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1929,
    departamentoId: 26,
    descripcion: "Nácori Chico",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1930,
    departamentoId: 26,
    descripcion: "Nacozari de García",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1931,
    departamentoId: 26,
    descripcion: "Navojoa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1932,
    departamentoId: 26,
    descripcion: "Nogales",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1933,
    departamentoId: 26,
    descripcion: "Onavas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1934,
    departamentoId: 26,
    descripcion: "Opodepe",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1935,
    departamentoId: 26,
    descripcion: "Oquitoa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1936,
    departamentoId: 26,
    descripcion: "Pitiquito",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1937,
    departamentoId: 26,
    descripcion: "Puerto Peñasco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1938,
    departamentoId: 26,
    descripcion: "Quiriego",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1939,
    departamentoId: 26,
    descripcion: "Rayón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1940,
    departamentoId: 26,
    descripcion: "Rosario",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1941,
    departamentoId: 26,
    descripcion: "Sahuaripa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1942,
    departamentoId: 26,
    descripcion: "San Felipe de Jesús",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1943,
    departamentoId: 26,
    descripcion: "San Javier",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1944,
    departamentoId: 26,
    descripcion: "San Luis Río Colorado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1945,
    departamentoId: 26,
    descripcion: "San Miguel de Horcasitas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1946,
    departamentoId: 26,
    descripcion: "San Pedro de la Cueva",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1947,
    departamentoId: 26,
    descripcion: "Santa Ana",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1948,
    departamentoId: 26,
    descripcion: "Santa Cruz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1949,
    departamentoId: 26,
    descripcion: "Sáric",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1950,
    departamentoId: 26,
    descripcion: "Soyopa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1951,
    departamentoId: 26,
    descripcion: "Suaqui Grande",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1952,
    departamentoId: 26,
    descripcion: "Tepache",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1953,
    departamentoId: 26,
    descripcion: "Trincheras",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1954,
    departamentoId: 26,
    descripcion: "Tubutama",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1955,
    departamentoId: 26,
    descripcion: "Ures",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1956,
    departamentoId: 26,
    descripcion: "Villa Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1957,
    departamentoId: 26,
    descripcion: "Villa Pesqueira",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1958,
    departamentoId: 26,
    descripcion: "Yécora",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1959,
    departamentoId: 26,
    descripcion: "General Plutarco Elías Calles",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1960,
    departamentoId: 26,
    descripcion: "Benito Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1961,
    departamentoId: 26,
    descripcion: "San Ignacio Río Muerto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1962,
    departamentoId: 27,
    descripcion: "Balancán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1963,
    departamentoId: 27,
    descripcion: "Cárdenas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1964,
    departamentoId: 27,
    descripcion: "Centla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1965,
    departamentoId: 27,
    descripcion: "Centro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1966,
    departamentoId: 27,
    descripcion: "Comalcalco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1967,
    departamentoId: 27,
    descripcion: "Cunduacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1968,
    departamentoId: 27,
    descripcion: "Emiliano Zapata",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1969,
    departamentoId: 27,
    descripcion: "Huimanguillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1970,
    departamentoId: 27,
    descripcion: "Jalapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1971,
    departamentoId: 27,
    descripcion: "Jalpa de Méndez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1972,
    departamentoId: 27,
    descripcion: "Jonuta",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1973,
    departamentoId: 27,
    descripcion: "Macuspana",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1974,
    departamentoId: 27,
    descripcion: "Nacajuca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1975,
    departamentoId: 27,
    descripcion: "Paraíso",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1976,
    departamentoId: 27,
    descripcion: "Tacotalpa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1977,
    departamentoId: 27,
    descripcion: "Teapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1978,
    departamentoId: 27,
    descripcion: "Tenosique",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1979,
    departamentoId: 28,
    descripcion: "Abasolo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1980,
    departamentoId: 28,
    descripcion: "Aldama",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1981,
    departamentoId: 28,
    descripcion: "Altamira",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1982,
    departamentoId: 28,
    descripcion: "Antiguo Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1983,
    departamentoId: 28,
    descripcion: "Burgos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1984,
    departamentoId: 28,
    descripcion: "Bustamante",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1985,
    departamentoId: 28,
    descripcion: "Camargo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1986,
    departamentoId: 28,
    descripcion: "Casas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1987,
    departamentoId: 28,
    descripcion: "Ciudad Madero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1988,
    departamentoId: 28,
    descripcion: "Cruillas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1989,
    departamentoId: 28,
    descripcion: "Gómez Farías",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1990,
    departamentoId: 28,
    descripcion: "González",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1991,
    departamentoId: 28,
    descripcion: "Güémez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1992,
    departamentoId: 28,
    descripcion: "Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1993,
    departamentoId: 28,
    descripcion: "Gustavo Díaz Ordaz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1994,
    departamentoId: 28,
    descripcion: "Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1995,
    departamentoId: 28,
    descripcion: "Jaumave",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1996,
    departamentoId: 28,
    descripcion: "Jiménez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1997,
    departamentoId: 28,
    descripcion: "Llera",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1998,
    departamentoId: 28,
    descripcion: "Mainero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 1999,
    departamentoId: 28,
    descripcion: "El Mante",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2000,
    departamentoId: 28,
    descripcion: "Matamoros",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2001,
    departamentoId: 28,
    descripcion: "Méndez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2002,
    departamentoId: 28,
    descripcion: "Mier",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2003,
    departamentoId: 28,
    descripcion: "Miguel Alemán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2004,
    departamentoId: 28,
    descripcion: "Miquihuana",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2005,
    departamentoId: 28,
    descripcion: "Nuevo Laredo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2006,
    departamentoId: 28,
    descripcion: "Nuevo Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2007,
    departamentoId: 28,
    descripcion: "Ocampo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2008,
    departamentoId: 28,
    descripcion: "Padilla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2009,
    departamentoId: 28,
    descripcion: "Palmillas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2010,
    departamentoId: 28,
    descripcion: "Reynosa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2011,
    departamentoId: 28,
    descripcion: "Río Bravo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2012,
    departamentoId: 28,
    descripcion: "San Carlos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2013,
    departamentoId: 28,
    descripcion: "San Fernando",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2014,
    departamentoId: 28,
    descripcion: "San Nicolás",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2015,
    departamentoId: 28,
    descripcion: "Soto la Marina",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2016,
    departamentoId: 28,
    descripcion: "Tampico",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2017,
    departamentoId: 28,
    descripcion: "Tula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2018,
    departamentoId: 28,
    descripcion: "Valle Hermoso",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2019,
    departamentoId: 28,
    descripcion: "Victoria",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2020,
    departamentoId: 28,
    descripcion: "Villagrán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2021,
    departamentoId: 28,
    descripcion: "Xicoténcatl",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2022,
    departamentoId: 29,
    descripcion: "Amaxac de Guerrero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2023,
    departamentoId: 29,
    descripcion: "Apetatitlán de Antonio Carvajal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2024,
    departamentoId: 29,
    descripcion: "Atlangatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2025,
    departamentoId: 29,
    descripcion: "Altzayanca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2026,
    departamentoId: 29,
    descripcion: "Apizaco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2027,
    departamentoId: 29,
    descripcion: "Calpulalpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2028,
    departamentoId: 29,
    descripcion: "El Carmen Tequexquitla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2029,
    departamentoId: 29,
    descripcion: "Cuapiaxtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2030,
    departamentoId: 29,
    descripcion: "Cuaxomulco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2031,
    departamentoId: 29,
    descripcion: "Chiautempan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2032,
    departamentoId: 29,
    descripcion: "Muñoz de Domingo Arenas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2033,
    departamentoId: 29,
    descripcion: "Españita",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2034,
    departamentoId: 29,
    descripcion: "Huamantla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2035,
    departamentoId: 29,
    descripcion: "Hueyotlipan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2036,
    departamentoId: 29,
    descripcion: "Ixtacuixtla de Mariano Matamoros",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2037,
    departamentoId: 29,
    descripcion: "Ixtenco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2038,
    departamentoId: 29,
    descripcion: "Mazatecochco de José María Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2039,
    departamentoId: 29,
    descripcion: "Contla de Juan Cuamatzi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2040,
    departamentoId: 29,
    descripcion: "Tepetitla de Lardizábal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2041,
    departamentoId: 29,
    descripcion: "Sanctórum de Lázaro Cárdenas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2042,
    departamentoId: 29,
    descripcion: "Nanacamilpa de Mariano Arista",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2043,
    departamentoId: 29,
    descripcion: "Acuamanala de Miguel Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2044,
    departamentoId: 29,
    descripcion: "Natívitas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2045,
    departamentoId: 29,
    descripcion: "Panotla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2046,
    departamentoId: 29,
    descripcion: "San Pablo del Monte",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2047,
    departamentoId: 29,
    descripcion: "Santa Cruz Tlaxcala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2048,
    departamentoId: 29,
    descripcion: "Tenancingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2049,
    departamentoId: 29,
    descripcion: "Teolocholco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2050,
    departamentoId: 29,
    descripcion: "Tepeyanco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2051,
    departamentoId: 29,
    descripcion: "Terrenate",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2052,
    departamentoId: 29,
    descripcion: "Tetla de la Solidaridad",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2053,
    departamentoId: 29,
    descripcion: "Tetlatlahuca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2054,
    departamentoId: 29,
    descripcion: "Tlaxcala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2055,
    departamentoId: 29,
    descripcion: "Tlaxco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2056,
    departamentoId: 29,
    descripcion: "Tocatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2057,
    departamentoId: 29,
    descripcion: "Totolac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2058,
    departamentoId: 29,
    descripcion: "Ziltlaltépec de Trinidad Sánchez Santos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2059,
    departamentoId: 29,
    descripcion: "Tzompantepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2060,
    departamentoId: 29,
    descripcion: "Xaloztoc",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2061,
    departamentoId: 29,
    descripcion: "Xaltocan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2062,
    departamentoId: 29,
    descripcion: "Papalotla de Xicohténcatl",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2063,
    departamentoId: 29,
    descripcion: "Xicohtzinco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2064,
    departamentoId: 29,
    descripcion: "Yauhquemehcan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2065,
    departamentoId: 29,
    descripcion: "Zacatelco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2066,
    departamentoId: 29,
    descripcion: "Benito Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2067,
    departamentoId: 29,
    descripcion: "Emiliano Zapata",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2068,
    departamentoId: 29,
    descripcion: "Lázaro Cárdenas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2069,
    departamentoId: 29,
    descripcion: "La Magdalena Tlaltelulco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2070,
    departamentoId: 29,
    descripcion: "San Damián Texóloc",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2071,
    departamentoId: 29,
    descripcion: "San Francisco Tetlanohcan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2072,
    departamentoId: 29,
    descripcion: "San Jerónimo Zacualpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2073,
    departamentoId: 29,
    descripcion: "San José Teacalco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2074,
    departamentoId: 29,
    descripcion: "San Juan Huactzinco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2075,
    departamentoId: 29,
    descripcion: "San Lorenzo Axocomanitla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2076,
    departamentoId: 29,
    descripcion: "San Lucas Tecopilco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2077,
    departamentoId: 29,
    descripcion: "Santa Ana Nopalucan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2078,
    departamentoId: 29,
    descripcion: "Santa Apolonia Teacalco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2079,
    departamentoId: 29,
    descripcion: "Santa Catarina Ayometla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2080,
    departamentoId: 29,
    descripcion: "Santa Cruz Quilehtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2081,
    departamentoId: 29,
    descripcion: "Santa Isabel Xiloxoxtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2082,
    departamentoId: 30,
    descripcion: "Acajete",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2083,
    departamentoId: 30,
    descripcion: "Acatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2084,
    departamentoId: 30,
    descripcion: "Acayucan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2085,
    departamentoId: 30,
    descripcion: "Actopan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2086,
    departamentoId: 30,
    descripcion: "Acula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2087,
    departamentoId: 30,
    descripcion: "Acultzingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2088,
    departamentoId: 30,
    descripcion: "Camarón de Tejeda",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2089,
    departamentoId: 30,
    descripcion: "Alpatláhuac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2090,
    departamentoId: 30,
    descripcion: "Alto Lucero de Gutiérrez Barrios",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2091,
    departamentoId: 30,
    descripcion: "Altotonga",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2092,
    departamentoId: 30,
    descripcion: "Alvarado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2093,
    departamentoId: 30,
    descripcion: "Amatitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2094,
    departamentoId: 30,
    descripcion: "Naranjos Amatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2095,
    departamentoId: 30,
    descripcion: "Amatlán de los Reyes",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2096,
    departamentoId: 30,
    descripcion: "Angel R. Cabada",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2097,
    departamentoId: 30,
    descripcion: "La Antigua",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2098,
    departamentoId: 30,
    descripcion: "Apazapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2099,
    departamentoId: 30,
    descripcion: "Aquila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2100,
    departamentoId: 30,
    descripcion: "Astacinga",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2101,
    departamentoId: 30,
    descripcion: "Atlahuilco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2102,
    departamentoId: 30,
    descripcion: "Atoyac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2103,
    departamentoId: 30,
    descripcion: "Atzacan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2104,
    departamentoId: 30,
    descripcion: "Atzalan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2105,
    departamentoId: 30,
    descripcion: "Tlaltetela",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2106,
    departamentoId: 30,
    descripcion: "Ayahualulco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2107,
    departamentoId: 30,
    descripcion: "Banderilla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2108,
    departamentoId: 30,
    descripcion: "Benito Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2109,
    departamentoId: 30,
    descripcion: "Boca del Río",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2110,
    departamentoId: 30,
    descripcion: "Calcahualco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2111,
    departamentoId: 30,
    descripcion: "Camerino Z. Mendoza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2112,
    departamentoId: 30,
    descripcion: "Carrillo Puerto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2113,
    departamentoId: 30,
    descripcion: "Catemaco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2114,
    departamentoId: 30,
    descripcion: "Cazones de Herrera",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2115,
    departamentoId: 30,
    descripcion: "Cerro Azul",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2116,
    departamentoId: 30,
    descripcion: "Citlaltépetl",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2117,
    departamentoId: 30,
    descripcion: "Coacoatzintla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2118,
    departamentoId: 30,
    descripcion: "Coahuitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2119,
    departamentoId: 30,
    descripcion: "Coatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2120,
    departamentoId: 30,
    descripcion: "Coatzacoalcos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2121,
    departamentoId: 30,
    descripcion: "Coatzintla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2122,
    departamentoId: 30,
    descripcion: "Coetzala",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2123,
    departamentoId: 30,
    descripcion: "Colipa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2124,
    departamentoId: 30,
    descripcion: "Comapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2125,
    departamentoId: 30,
    descripcion: "Córdoba",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2126,
    departamentoId: 30,
    descripcion: "Cosamaloapan de Carpio",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2127,
    departamentoId: 30,
    descripcion: "Cosautlán de Carvajal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2128,
    departamentoId: 30,
    descripcion: "Coscomatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2129,
    departamentoId: 30,
    descripcion: "Cosoleacaque",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2130,
    departamentoId: 30,
    descripcion: "Cotaxtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2131,
    departamentoId: 30,
    descripcion: "Coxquihui",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2132,
    departamentoId: 30,
    descripcion: "Coyutla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2133,
    departamentoId: 30,
    descripcion: "Cuichapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2134,
    departamentoId: 30,
    descripcion: "Cuitláhuac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2135,
    departamentoId: 30,
    descripcion: "Chacaltianguis",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2136,
    departamentoId: 30,
    descripcion: "Chalma",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2137,
    departamentoId: 30,
    descripcion: "Chiconamel",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2138,
    departamentoId: 30,
    descripcion: "Chiconquiaco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2139,
    departamentoId: 30,
    descripcion: "Chicontepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2140,
    departamentoId: 30,
    descripcion: "Chinameca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2141,
    departamentoId: 30,
    descripcion: "Chinampa de Gorostiza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2142,
    departamentoId: 30,
    descripcion: "Las Choapas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2143,
    departamentoId: 30,
    descripcion: "Chocamán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2144,
    departamentoId: 30,
    descripcion: "Chontla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2145,
    departamentoId: 30,
    descripcion: "Chumatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2146,
    departamentoId: 30,
    descripcion: "Emiliano Zapata",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2147,
    departamentoId: 30,
    descripcion: "Espinal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2148,
    departamentoId: 30,
    descripcion: "Filomeno Mata",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2149,
    departamentoId: 30,
    descripcion: "Fortín",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2150,
    departamentoId: 30,
    descripcion: "Gutiérrez Zamora",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2151,
    departamentoId: 30,
    descripcion: "Hidalgotitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2152,
    departamentoId: 30,
    descripcion: "Huatusco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2153,
    departamentoId: 30,
    descripcion: "Huayacocotla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2154,
    departamentoId: 30,
    descripcion: "Hueyapan de Ocampo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2155,
    departamentoId: 30,
    descripcion: "Huiloapan de Cuauhtémoc",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2156,
    departamentoId: 30,
    descripcion: "Ignacio de la Llave",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2157,
    departamentoId: 30,
    descripcion: "Ilamatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2158,
    departamentoId: 30,
    descripcion: "Isla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2159,
    departamentoId: 30,
    descripcion: "Ixcatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2160,
    departamentoId: 30,
    descripcion: "Ixhuacán de los Reyes",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2161,
    departamentoId: 30,
    descripcion: "Ixhuatlán del Café",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2162,
    departamentoId: 30,
    descripcion: "Ixhuatlancillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2163,
    departamentoId: 30,
    descripcion: "Ixhuatlán del Sureste",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2164,
    departamentoId: 30,
    descripcion: "Ixhuatlán de Madero",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2165,
    departamentoId: 30,
    descripcion: "Ixmatlahuacan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2166,
    departamentoId: 30,
    descripcion: "Ixtaczoquitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2167,
    departamentoId: 30,
    descripcion: "Jalacingo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2168,
    departamentoId: 30,
    descripcion: "Xalapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2169,
    departamentoId: 30,
    descripcion: "Jalcomulco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2170,
    departamentoId: 30,
    descripcion: "Jáltipan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2171,
    departamentoId: 30,
    descripcion: "Jamapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2172,
    departamentoId: 30,
    descripcion: "Jesús Carranza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2173,
    departamentoId: 30,
    descripcion: "Xico",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2174,
    departamentoId: 30,
    descripcion: "Jilotepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2175,
    departamentoId: 30,
    descripcion: "Juan Rodríguez Clara",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2176,
    departamentoId: 30,
    descripcion: "Juchique de Ferrer",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2177,
    departamentoId: 30,
    descripcion: "Landero y Coss",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2178,
    departamentoId: 30,
    descripcion: "Lerdo de Tejada",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2179,
    departamentoId: 30,
    descripcion: "Magdalena",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2180,
    departamentoId: 30,
    descripcion: "Maltrata",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2181,
    departamentoId: 30,
    descripcion: "Manlio Fabio Altamirano",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2182,
    departamentoId: 30,
    descripcion: "Mariano Escobedo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2183,
    departamentoId: 30,
    descripcion: "Martínez de la Torre",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2184,
    departamentoId: 30,
    descripcion: "Mecatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2185,
    departamentoId: 30,
    descripcion: "Mecayapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2186,
    departamentoId: 30,
    descripcion: "Medellín",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2187,
    departamentoId: 30,
    descripcion: "Miahuatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2188,
    departamentoId: 30,
    descripcion: "Las Minas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2189,
    departamentoId: 30,
    descripcion: "Minatitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2190,
    departamentoId: 30,
    descripcion: "Misantla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2191,
    departamentoId: 30,
    descripcion: "Mixtla de Altamirano",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2192,
    departamentoId: 30,
    descripcion: "Moloacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2193,
    departamentoId: 30,
    descripcion: "Naolinco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2194,
    departamentoId: 30,
    descripcion: "Naranjal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2195,
    departamentoId: 30,
    descripcion: "Nautla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2196,
    departamentoId: 30,
    descripcion: "Nogales",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2197,
    departamentoId: 30,
    descripcion: "Oluta",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2198,
    departamentoId: 30,
    descripcion: "Omealca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2199,
    departamentoId: 30,
    descripcion: "Orizaba",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2200,
    departamentoId: 30,
    descripcion: "Otatitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2201,
    departamentoId: 30,
    descripcion: "Oteapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2202,
    departamentoId: 30,
    descripcion: "Ozuluama de Mascareñas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2203,
    departamentoId: 30,
    descripcion: "Pajapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2204,
    departamentoId: 30,
    descripcion: "Pánuco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2205,
    departamentoId: 30,
    descripcion: "Papantla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2206,
    departamentoId: 30,
    descripcion: "Paso del Macho",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2207,
    departamentoId: 30,
    descripcion: "Paso de Ovejas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2208,
    departamentoId: 30,
    descripcion: "La Perla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2209,
    departamentoId: 30,
    descripcion: "Perote",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2210,
    departamentoId: 30,
    descripcion: "Platón Sánchez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2211,
    departamentoId: 30,
    descripcion: "Playa Vicente",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2212,
    departamentoId: 30,
    descripcion: "Poza Rica de Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2213,
    departamentoId: 30,
    descripcion: "Las Vigas de Ramírez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2214,
    departamentoId: 30,
    descripcion: "Pueblo Viejo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2215,
    departamentoId: 30,
    descripcion: "Puente Nacional",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2216,
    departamentoId: 30,
    descripcion: "Rafael Delgado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2217,
    departamentoId: 30,
    descripcion: "Rafael Lucio",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2218,
    departamentoId: 30,
    descripcion: "Los Reyes",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2219,
    departamentoId: 30,
    descripcion: "Río Blanco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2220,
    departamentoId: 30,
    descripcion: "Saltabarranca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2221,
    departamentoId: 30,
    descripcion: "San Andrés Tenejapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2222,
    departamentoId: 30,
    descripcion: "San Andrés Tuxtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2223,
    departamentoId: 30,
    descripcion: "San Juan Evangelista",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2224,
    departamentoId: 30,
    descripcion: "Santiago Tuxtla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2225,
    departamentoId: 30,
    descripcion: "Sayula de Alemán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2226,
    departamentoId: 30,
    descripcion: "Soconusco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2227,
    departamentoId: 30,
    descripcion: "Sochiapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2228,
    departamentoId: 30,
    descripcion: "Soledad Atzompa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2229,
    departamentoId: 30,
    descripcion: "Soledad de Doblado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2230,
    departamentoId: 30,
    descripcion: "Soteapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2231,
    departamentoId: 30,
    descripcion: "Tamalín",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2232,
    departamentoId: 30,
    descripcion: "Tamiahua",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2233,
    departamentoId: 30,
    descripcion: "Tampico Alto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2234,
    departamentoId: 30,
    descripcion: "Tancoco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2235,
    departamentoId: 30,
    descripcion: "Tantima",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2236,
    departamentoId: 30,
    descripcion: "Tantoyuca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2237,
    departamentoId: 30,
    descripcion: "Tatatila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2238,
    departamentoId: 30,
    descripcion: "Castillo de Teayo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2239,
    departamentoId: 30,
    descripcion: "Tecolutla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2240,
    departamentoId: 30,
    descripcion: "Tehuipango",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2241,
    departamentoId: 30,
    descripcion: "Álamo Temapache",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2242,
    departamentoId: 30,
    descripcion: "Tempoal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2243,
    departamentoId: 30,
    descripcion: "Tenampa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2244,
    departamentoId: 30,
    descripcion: "Tenochtitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2245,
    departamentoId: 30,
    descripcion: "Teocelo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2246,
    departamentoId: 30,
    descripcion: "Tepatlaxco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2247,
    departamentoId: 30,
    descripcion: "Tepetlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2248,
    departamentoId: 30,
    descripcion: "Tepetzintla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2249,
    departamentoId: 30,
    descripcion: "Tequila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2250,
    departamentoId: 30,
    descripcion: "José Azueta",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2251,
    departamentoId: 30,
    descripcion: "Texcatepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2252,
    departamentoId: 30,
    descripcion: "Texhuacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2253,
    departamentoId: 30,
    descripcion: "Texistepec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2254,
    departamentoId: 30,
    descripcion: "Tezonapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2255,
    departamentoId: 30,
    descripcion: "Tierra Blanca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2256,
    departamentoId: 30,
    descripcion: "Tihuatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2257,
    departamentoId: 30,
    descripcion: "Tlacojalpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2258,
    departamentoId: 30,
    descripcion: "Tlacolulan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2259,
    departamentoId: 30,
    descripcion: "Tlacotalpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2260,
    departamentoId: 30,
    descripcion: "Tlacotepec de Mejía",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2261,
    departamentoId: 30,
    descripcion: "Tlachichilco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2262,
    departamentoId: 30,
    descripcion: "Tlalixcoyan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2263,
    departamentoId: 30,
    descripcion: "Tlalnelhuayocan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2264,
    departamentoId: 30,
    descripcion: "Tlapacoyan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2265,
    departamentoId: 30,
    descripcion: "Tlaquilpa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2266,
    departamentoId: 30,
    descripcion: "Tlilapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2267,
    departamentoId: 30,
    descripcion: "Tomatlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2268,
    departamentoId: 30,
    descripcion: "Tonayán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2269,
    departamentoId: 30,
    descripcion: "Totutla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2270,
    departamentoId: 30,
    descripcion: "Tuxpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2271,
    departamentoId: 30,
    descripcion: "Tuxtilla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2272,
    departamentoId: 30,
    descripcion: "Ursulo Galván",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2273,
    departamentoId: 30,
    descripcion: "Vega de Alatorre",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2274,
    departamentoId: 30,
    descripcion: "Veracruz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2275,
    departamentoId: 30,
    descripcion: "Villa Aldama",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2276,
    departamentoId: 30,
    descripcion: "Xoxocotla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2277,
    departamentoId: 30,
    descripcion: "Yanga",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2278,
    departamentoId: 30,
    descripcion: "Yecuatla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2279,
    departamentoId: 30,
    descripcion: "Zacualpan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2280,
    departamentoId: 30,
    descripcion: "Zaragoza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2281,
    departamentoId: 30,
    descripcion: "Zentla",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2282,
    departamentoId: 30,
    descripcion: "Zongolica",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2283,
    departamentoId: 30,
    descripcion: "Zontecomatlán de López y Fuentes",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2284,
    departamentoId: 30,
    descripcion: "Zozocolco de Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2285,
    departamentoId: 30,
    descripcion: "Agua Dulce",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2286,
    departamentoId: 30,
    descripcion: "El Higo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2287,
    departamentoId: 30,
    descripcion: "Nanchital de Lázaro Cárdenas del Río",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2288,
    departamentoId: 30,
    descripcion: "Tres Valles",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2289,
    departamentoId: 30,
    descripcion: "Carlos A. Carrillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2290,
    departamentoId: 30,
    descripcion: "Tatahuicapan de Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2291,
    departamentoId: 30,
    descripcion: "Uxpanapa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2292,
    departamentoId: 30,
    descripcion: "San Rafael",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2293,
    departamentoId: 30,
    descripcion: "Santiago Sochiapan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2294,
    departamentoId: 31,
    descripcion: "Abalá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2295,
    departamentoId: 31,
    descripcion: "Acanceh",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2296,
    departamentoId: 31,
    descripcion: "Akil",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2297,
    departamentoId: 31,
    descripcion: "Baca",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2298,
    departamentoId: 31,
    descripcion: "Bokobá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2299,
    departamentoId: 31,
    descripcion: "Buctzotz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2300,
    departamentoId: 31,
    descripcion: "Cacalchén",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2301,
    departamentoId: 31,
    descripcion: "Calotmul",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2302,
    departamentoId: 31,
    descripcion: "Cansahcab",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2303,
    departamentoId: 31,
    descripcion: "Cantamayec",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2304,
    departamentoId: 31,
    descripcion: "Celestún",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2305,
    departamentoId: 31,
    descripcion: "Cenotillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2306,
    departamentoId: 31,
    descripcion: "Conkal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2307,
    departamentoId: 31,
    descripcion: "Cuncunul",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2308,
    departamentoId: 31,
    descripcion: "Cuzamá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2309,
    departamentoId: 31,
    descripcion: "Chacsinkín",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2310,
    departamentoId: 31,
    descripcion: "Chankom",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2311,
    departamentoId: 31,
    descripcion: "Chapab",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2312,
    departamentoId: 31,
    descripcion: "Chemax",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2313,
    departamentoId: 31,
    descripcion: "Chicxulub Pueblo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2314,
    departamentoId: 31,
    descripcion: "Chichimilá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2315,
    departamentoId: 31,
    descripcion: "Chikindzonot",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2316,
    departamentoId: 31,
    descripcion: "Chocholá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2317,
    departamentoId: 31,
    descripcion: "Chumayel",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2318,
    departamentoId: 31,
    descripcion: "Dzán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2319,
    departamentoId: 31,
    descripcion: "Dzemul",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2320,
    departamentoId: 31,
    descripcion: "Dzidzantún",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2321,
    departamentoId: 31,
    descripcion: "Dzilam de Bravo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2322,
    departamentoId: 31,
    descripcion: "Dzilam González",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2323,
    departamentoId: 31,
    descripcion: "Dzitás",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2324,
    departamentoId: 31,
    descripcion: "Dzoncauich",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2325,
    departamentoId: 31,
    descripcion: "Espita",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2326,
    departamentoId: 31,
    descripcion: "Halachó",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2327,
    departamentoId: 31,
    descripcion: "Hocabá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2328,
    departamentoId: 31,
    descripcion: "Hoctún",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2329,
    departamentoId: 31,
    descripcion: "Homún",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2330,
    departamentoId: 31,
    descripcion: "Huhí",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2331,
    departamentoId: 31,
    descripcion: "Hunucmá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2332,
    departamentoId: 31,
    descripcion: "Ixil",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2333,
    departamentoId: 31,
    descripcion: "Izamal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2334,
    departamentoId: 31,
    descripcion: "Kanasín",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2335,
    departamentoId: 31,
    descripcion: "Kantunil",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2336,
    departamentoId: 31,
    descripcion: "Kaua",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2337,
    departamentoId: 31,
    descripcion: "Kinchil",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2338,
    departamentoId: 31,
    descripcion: "Kopomá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2339,
    departamentoId: 31,
    descripcion: "Mama",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2340,
    departamentoId: 31,
    descripcion: "Maní",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2341,
    departamentoId: 31,
    descripcion: "Maxcanú",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2342,
    departamentoId: 31,
    descripcion: "Mayapán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2343,
    departamentoId: 31,
    descripcion: "Mérida",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2344,
    departamentoId: 31,
    descripcion: "Mocochá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2345,
    departamentoId: 31,
    descripcion: "Motul",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2346,
    departamentoId: 31,
    descripcion: "Muna",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2347,
    departamentoId: 31,
    descripcion: "Muxupip",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2348,
    departamentoId: 31,
    descripcion: "Opichén",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2349,
    departamentoId: 31,
    descripcion: "Oxkutzcab",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2350,
    departamentoId: 31,
    descripcion: "Panabá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2351,
    departamentoId: 31,
    descripcion: "Peto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2352,
    departamentoId: 31,
    descripcion: "Progreso",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2353,
    departamentoId: 31,
    descripcion: "Quintana Roo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2354,
    departamentoId: 31,
    descripcion: "Río Lagartos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2355,
    departamentoId: 31,
    descripcion: "Sacalum",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2356,
    departamentoId: 31,
    descripcion: "Samahil",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2357,
    departamentoId: 31,
    descripcion: "Sanahcat",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2358,
    departamentoId: 31,
    descripcion: "San Felipe",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2359,
    departamentoId: 31,
    descripcion: "Santa Elena",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2360,
    departamentoId: 31,
    descripcion: "Seyé",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2361,
    departamentoId: 31,
    descripcion: "Sinanché",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2362,
    departamentoId: 31,
    descripcion: "Sotuta",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2363,
    departamentoId: 31,
    descripcion: "Sucilá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2364,
    departamentoId: 31,
    descripcion: "Sudzal",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2365,
    departamentoId: 31,
    descripcion: "Suma",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2366,
    departamentoId: 31,
    descripcion: "Tahdziú",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2367,
    departamentoId: 31,
    descripcion: "Tahmek",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2368,
    departamentoId: 31,
    descripcion: "Teabo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2369,
    departamentoId: 31,
    descripcion: "Tecoh",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2370,
    departamentoId: 31,
    descripcion: "Tekal de Venegas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2371,
    departamentoId: 31,
    descripcion: "Tekantó",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2372,
    departamentoId: 31,
    descripcion: "Tekax",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2373,
    departamentoId: 31,
    descripcion: "Tekit",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2374,
    departamentoId: 31,
    descripcion: "Tekom",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2375,
    departamentoId: 31,
    descripcion: "Telchac Pueblo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2376,
    departamentoId: 31,
    descripcion: "Telchac Puerto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2377,
    departamentoId: 31,
    descripcion: "Temax",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2378,
    departamentoId: 31,
    descripcion: "Temozón",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2379,
    departamentoId: 31,
    descripcion: "Tepakán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2380,
    departamentoId: 31,
    descripcion: "Tetiz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2381,
    departamentoId: 31,
    descripcion: "Teya",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2382,
    departamentoId: 31,
    descripcion: "Ticul",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2383,
    departamentoId: 31,
    descripcion: "Timucuy",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2384,
    departamentoId: 31,
    descripcion: "Tinum",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2385,
    departamentoId: 31,
    descripcion: "Tixcacalcupul",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2386,
    departamentoId: 31,
    descripcion: "Tixkokob",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2387,
    departamentoId: 31,
    descripcion: "Tixmehuac",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2388,
    departamentoId: 31,
    descripcion: "Tixpéhual",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2389,
    departamentoId: 31,
    descripcion: "Tizimín",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2390,
    departamentoId: 31,
    descripcion: "Tunkás",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2391,
    departamentoId: 31,
    descripcion: "Tzucacab",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2392,
    departamentoId: 31,
    descripcion: "Uayma",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2393,
    departamentoId: 31,
    descripcion: "Ucú",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2394,
    departamentoId: 31,
    descripcion: "Umán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2395,
    departamentoId: 31,
    descripcion: "Valladolid",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2396,
    departamentoId: 31,
    descripcion: "Xocchel",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2397,
    departamentoId: 31,
    descripcion: "Yaxcabá",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2398,
    departamentoId: 31,
    descripcion: "Yaxkukul",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2399,
    departamentoId: 31,
    descripcion: "Yobaín",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2400,
    departamentoId: 32,
    descripcion: "Apozol",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2401,
    departamentoId: 32,
    descripcion: "Apulco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2402,
    departamentoId: 32,
    descripcion: "Atolinga",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2403,
    departamentoId: 32,
    descripcion: "Benito Juárez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2404,
    departamentoId: 32,
    descripcion: "Calera",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2405,
    departamentoId: 32,
    descripcion: "Cañitas de Felipe Pescador",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2406,
    departamentoId: 32,
    descripcion: "Concepción del Oro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2407,
    departamentoId: 32,
    descripcion: "Cuauhtémoc",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2408,
    departamentoId: 32,
    descripcion: "Chalchihuites",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2409,
    departamentoId: 32,
    descripcion: "Fresnillo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2410,
    departamentoId: 32,
    descripcion: "Trinidad García de la Cadena",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2411,
    departamentoId: 32,
    descripcion: "Genaro Codina",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2412,
    departamentoId: 32,
    descripcion: "General Enrique Estrada",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2413,
    departamentoId: 32,
    descripcion: "General Francisco R. Murguía",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2414,
    departamentoId: 32,
    descripcion: "El Plateado de Joaquín Amaro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2415,
    departamentoId: 32,
    descripcion: "General Pánfilo Natera",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2416,
    departamentoId: 32,
    descripcion: "Guadalupe",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2417,
    departamentoId: 32,
    descripcion: "Huanusco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2418,
    departamentoId: 32,
    descripcion: "Jalpa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2419,
    departamentoId: 32,
    descripcion: "Jerez",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2420,
    departamentoId: 32,
    descripcion: "Jiménez del Teul",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2421,
    departamentoId: 32,
    descripcion: "Juan Aldama",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2422,
    departamentoId: 32,
    descripcion: "Juchipila",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2423,
    departamentoId: 32,
    descripcion: "Loreto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2424,
    departamentoId: 32,
    descripcion: "Luis Moya",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2425,
    departamentoId: 32,
    descripcion: "Mazapil",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2426,
    departamentoId: 32,
    descripcion: "Melchor Ocampo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2427,
    departamentoId: 32,
    descripcion: "Mezquital del Oro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2428,
    departamentoId: 32,
    descripcion: "Miguel Auza",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2429,
    departamentoId: 32,
    descripcion: "Momax",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2430,
    departamentoId: 32,
    descripcion: "Monte Escobedo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2431,
    departamentoId: 32,
    descripcion: "Morelos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2432,
    departamentoId: 32,
    descripcion: "Moyahua de Estrada",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2433,
    departamentoId: 32,
    descripcion: "Nochistlán de Mejía",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2434,
    departamentoId: 32,
    descripcion: "Noria de Ángeles",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2435,
    departamentoId: 32,
    descripcion: "Ojocaliente",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2436,
    departamentoId: 32,
    descripcion: "Pánuco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2437,
    departamentoId: 32,
    descripcion: "Pinos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2438,
    departamentoId: 32,
    descripcion: "Río Grande",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2439,
    departamentoId: 32,
    descripcion: "Sain Alto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2440,
    departamentoId: 32,
    descripcion: "El Salvador",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2441,
    departamentoId: 32,
    descripcion: "Sombrerete",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2442,
    departamentoId: 32,
    descripcion: "Susticacán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2443,
    departamentoId: 32,
    descripcion: "Tabasco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2444,
    departamentoId: 32,
    descripcion: "Tepechitlán",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2445,
    departamentoId: 32,
    descripcion: "Tepetongo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2446,
    departamentoId: 32,
    descripcion: "Teúl de González Ortega",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2447,
    departamentoId: 32,
    descripcion: "Tlaltenango de Sánchez Román",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2448,
    departamentoId: 32,
    descripcion: "Valparaíso",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2449,
    departamentoId: 32,
    descripcion: "Vetagrande",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2450,
    departamentoId: 32,
    descripcion: "Villa de Cos",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2451,
    departamentoId: 32,
    descripcion: "Villa García",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2452,
    departamentoId: 32,
    descripcion: "Villa González Ortega",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2453,
    departamentoId: 32,
    descripcion: "Villa Hidalgo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2454,
    departamentoId: 32,
    descripcion: "Villanueva",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2455,
    departamentoId: 32,
    descripcion: "Zacatecas",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2456,
    departamentoId: 32,
    descripcion: "Trancoso",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    municipioId_depto: 2457,
    departamentoId: 32,
    descripcion: "Santa María de la Paz",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const tiposDoc = [
  {
    descripcion: "DPI",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Partida Nacimiento",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Cedula",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Certificado de Defuncion",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Otro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const personas = [
  {
    nombre1: "Admin",
    nombre2: "",
    nombreOtros: "",
    apellido1: "Admin",
    apellido2: "",
    fechaNacimiento: "2020-01-01",
    generoId: 1,
    paisId: 2,
    telefono: 0,
    direccion: "Direccion",
    municipioId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    nombre1: "Omar",
    nombre2: "Bertoni",
    nombreOtros: "",
    apellido1: "Giron",
    apellido2: "",
    fechaNacimiento: "2020-01-01",
    generoId: 1,
    paisId: 2,
    telefono: 0,
    direccion: "Direccion",
    municipioId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    nombre1: "Diego",
    nombre2: "",
    nombreOtros: "",
    apellido1: "Vega",
    apellido2: "",
    fechaNacimiento: "2020-01-01",
    generoId: 1,
    paisId: 2,
    telefono: 0,
    direccion: "Direccion",
    municipioId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    nombre1: "Carolina",
    nombre2: "",
    nombreOtros: "",
    apellido1: "Castillo",
    apellido2: "",
    fechaNacimiento: "2020-01-01",
    generoId: 2,
    paisId: 2,
    telefono: 0,
    direccion: "Direccion",
    municipioId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    nombre1: "Jennifer",
    nombre2: "",
    nombreOtros: "",
    apellido1: "Torres",
    apellido2: "",
    fechaNacimiento: "2020-01-01",
    generoId: 2,
    paisId: 2,
    telefono: 0,
    direccion: "Direccion",
    municipioId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    nombre1: "Marco",
    nombre2: "",
    nombreOtros: "",
    apellido1: "Garcia",
    apellido2: "",
    fechaNacimiento: "2020-01-01",
    generoId: 1,
    paisId: 2,
    telefono: 0,
    direccion: "Direccion",
    municipioId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const usuarios = [
  {
    usuarioId: 1,
    personaId: 1,
    usuario: "administrador",
    password: bcrypt.hashSync("Admin123.", 10),
    email: "oqsolutionsgt@gmail.com",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    usuarioId: 2,
    personaId: 2,
    usuario: "bertoni.giron",
    password: bcrypt.hashSync("bertoni", 10),
    email: "bertoni.giron@fafg.org",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    usuarioId: 3,
    personaId: 3,
    usuario: "diego.vega",
    password: bcrypt.hashSync("diego", 10),
    email: "diego.vega@fafg.org",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    usuarioId: 4,
    personaId: 4,
    usuario: "carolina.castillo",
    password: bcrypt.hashSync("carolina", 10),
    email: "carolina.castillo@fafg.org",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    usuarioId: 5,
    personaId: 5,
    usuario: "jennifer.torres",
    password: bcrypt.hashSync("jennifer", 10),
    email: "jennifer.torres@fafg.org",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    usuarioId: 6,
    personaId: 6,
    usuario: "marco.garcia",
    password: bcrypt.hashSync("marco", 10),
    email: "marco.garcia@fafg.org",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const roles = [
  {
    descripcion: "SUPERADMIN DID",
    estadoId: 1,
    moduloId: 1,
    aplicativoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Administrador DID",
    estadoId: 1,
    moduloId: 1,
    aplicativoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Asistente DID",
    estadoId: 1,
    moduloId: 1,
    aplicativoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Analista Genetica Forense lll",
    estadoId: 1,
    moduloId: 1,
    aplicativoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const usuarioRoles = [
  {
    usuarioId: 1,
    rolId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    usuarioId: 2,
    rolId: 2,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    usuarioId: 3,
    rolId: 3,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    usuarioId: 4,
    rolId: 3,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    usuarioId: 5,
    rolId: 3,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    usuarioId: 6,
    rolId: 4,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const accesos = [
  {
    descripcion: "VER",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "AGREGAR",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "ACTUALIZAR",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "ELIMINAR",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const aplicaciones = [
  {
    descripcion: "Sistema Operativo DID",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Sistema Operativo DIV",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const objetosMenu = [
  {
    //1
    descripcion: "Home",
    url: "/home",
    type: "item",
    icon: "feather icon-sidebar",
    classes: "nav-item",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    //2
    descripcion: "Catalogos",
    type: "collapse",
    icon: "feather icon-list",
    classes: "",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    //3
    descripcion: "Seguridad",
    type: "collapse",
    icon: "feather icon-lock",
    classes: "",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    //4
    descripcion: "Personas",
    url: "/personas",
    type: "item",
    classes: "nav-item",
    objetoPadreId: 2,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    //5
    descripcion: "Usuarios",
    url: "/usuarios",
    type: "item",
    classes: "nav-item",
    objetoPadreId: 3,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },

  {
    //6
    descripcion: "Identificaciones",
    type: "collapse",
    icon: "feather icon-users",
    classes: "",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },

  {
    //7
    descripcion: "Osamentas",
    url: "/osamentas",
    type: "item",
    classes: "nav-item",
    objetoPadreId: 6,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    //8
    descripcion: "Victimas",
    url: "/victimas",
    type: "item",
    classes: "nav-item",
    objetoPadreId: 6,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    //9
    descripcion: "Coincidencias",
    url: "/coincidencias",
    type: "item",
    classes: "nav-item",
    objetoPadreId: 6,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    //10
    descripcion: "Identificados",
    type: "collapse",
    icon: "feather icon-list",
    classes: "",
    objetoPadreId: 6,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    //11
    descripcion: "Smih",
    url: "/identificadosSmIh",
    type: "item",
    classes: "nav-item",
    objetoPadreId: 10,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },

  {
    //12
    descripcion: "Reportes",
    type: "collapse",
    icon: "feather icon-book",
    classes: "",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    //13
    descripcion: "Reportes Varios",
    type: "collapse",
    icon: "",
    classes: "",
    objetoPadreId: 12,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },

  {
    //14
    descripcion: "Coincidencias",
    url: "/reporteCoincidencia",
    type: "item",
    classes: "nav-item",
    objetoPadreId: 13,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    //15
    descripcion: "Identificado SmIh",
    url: "/reporteISmih",
    type: "item",
    classes: "nav-item",
    objetoPadreId: 13,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const objetosAcceso = [
  {
    objetoId: 1,
    accesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    objetoId: 2,
    accesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    objetoId: 3,
    accesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    objetoId: 4,
    accesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    objetoId: 5,
    accesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    objetoId: 6,
    accesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    objetoId: 7,
    accesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    objetoId: 8,
    accesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    objetoId: 9,
    accesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    objetoId: 10,
    accesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    objetoId: 11,
    accesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    objetoId: 12,
    accesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    objetoId: 13,
    accesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    objetoId: 14,
    accesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    objetoId: 15,
    accesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const rolesObjetosAccesos = [
  {
    rolId: 1,
    objetoAccesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 1,
    objetoAccesoId: 2,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 1,
    objetoAccesoId: 3,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 1,
    objetoAccesoId: 4,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 1,
    objetoAccesoId: 5,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 1,
    objetoAccesoId: 6,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 1,
    objetoAccesoId: 7,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 1,
    objetoAccesoId: 8,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 1,
    objetoAccesoId: 9,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 1,
    objetoAccesoId: 10,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 1,
    objetoAccesoId: 11,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 1,
    objetoAccesoId: 12,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 1,
    objetoAccesoId: 13,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 1,
    objetoAccesoId: 14,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 1,
    objetoAccesoId: 15,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },

  //rol2
  {
    rolId: 2,
    objetoAccesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 2,
    objetoAccesoId: 2,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 2,
    objetoAccesoId: 3,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 2,
    objetoAccesoId: 4,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 2,
    objetoAccesoId: 5,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 2,
    objetoAccesoId: 6,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 2,
    objetoAccesoId: 7,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 2,
    objetoAccesoId: 8,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 2,
    objetoAccesoId: 9,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 2,
    objetoAccesoId: 10,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 2,
    objetoAccesoId: 11,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 2,
    objetoAccesoId: 12,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 2,
    objetoAccesoId: 13,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 2,
    objetoAccesoId: 14,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 2,
    objetoAccesoId: 15,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },

  //ROL 3
  {
    rolId: 3,
    objetoAccesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 3,
    objetoAccesoId: 6,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 3,
    objetoAccesoId: 9,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 3,
    objetoAccesoId: 10,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 3,
    objetoAccesoId: 11,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  //ROL 4
  {
    rolId: 4,
    objetoAccesoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 4,
    objetoAccesoId: 6,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 4,
    objetoAccesoId: 7,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 4,
    objetoAccesoId: 8,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    rolId: 4,
    objetoAccesoId: 9,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const basesInfo = [
  {
    descripcion: "Achi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Mestizo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Poqomchi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Ixil",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Kaqchikel",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Kiche",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Mam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Queqchi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const cromosomasY = [
  {
    descripcion: "SI",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "NO",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const donantes = [
  {
    descripcion: "Especial",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Padre",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Madre",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Hijo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Hija",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Hermano",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Hermana",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "1/2 hermano/a",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Otro",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const estadosCoincidencia = [
  {
    descripcion: "Notificada",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Confirmada",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Excluida",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Seguimiento",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Inconclusa",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Excluida",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const programasIdent = [
  {
    descripcion: "M-FISys",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "DNA-VIEW",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const sexosAdn = [
  {
    descripcion: "XY",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "XX",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "No determinado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const estadosInvestigacion = [
  {
    descripcion: "Finalizado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Seguimiento",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const tiposCasosDid = [
  {
    descripcion: "Muerte Idirecta",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Desaparicion",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Masacre",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Ejecucion Arbitraria Individual",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Abierto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Ejecucion Arbitraria Colectiva",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Desastre Masivo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Cerrado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Fallecido",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const tiposContexto = [
  {
    descripcion: "Abierto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Cerrado",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Desaparicion",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const traumasCirc = [
  {
    descripcion: "Herida por proyectil de arma de fuego",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Cortante",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Cortocontundente",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Punzante",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "No determinada",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const gruposEtarios = [
  {
    descripcion: "Nonato",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Neonato",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Infante",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Niño",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Adolescente",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Adulto Joven",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Adulto",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Anciano",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const regionesAnato = [
  {
    descripcion: "Craneo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Region Cervical",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Torax",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Extremidad superior derecha",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Extremidad superior Izquierda",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Extremidad Inferior derecha",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Extremidad Inferior Izquierda",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Sin Identificar",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const gruposEtno = [
  {
    descripcion: "Achi´",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Akateco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Awakateco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Chalchiteco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Ch´orti´",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Chuj",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Itza´",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Ixil",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Jacalteco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Kaqchikel",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "K´iche´",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Mam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Mestizo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Mopan",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Poqomam",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Pocomchi´",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Q´anjob´al",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Q´eqchi",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Sakapulteco",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Sipakapense",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Tektiteko",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Tz´utujil",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Uspantek",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const causasMuerte = [
  {
    descripcion: "Herida por proyectil de arma de fuego",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Cortante",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Corto-contundente",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Punzante",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "No determinada",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Contuso",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const valoresEdad = [
  {
    descripcion: "Meses",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Años",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const datosOdonto = [
  {
    descripcion: "Rellenos Dentales",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Placas Dentales",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Ausencia AM",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Otros",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const tiposIdentificado = [
  {
    descripcion: "SmIh",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Osteologico",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const reposDoc = [
  {
    descripcion: "Información AM",
    path: "AM",
    aplicativoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Información PM",
    path: "PM",
    aplicativoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Información GF",
    path: "GF",
    aplicativoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Información DID",
    path: "DID",
    aplicativoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Otros",
    path: "OTROS",
    aplicativoId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const documentos = [
  {
    descripcion: "Entrevista antemortem",
    repoDocId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Genograma",
    repoDocId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Documento de identificación de víctima",
    repoDocId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Consentimientos",
    repoDocId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Documentos de identificación donantes",
    repoDocId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Informe individual de victima",
    repoDocId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Otro",
    repoDocId: 1,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Ficha de exhumación",
    repoDocId: 2,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Ficha de análisis osteológico",
    repoDocId: 2,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Informe individual de análisis",
    repoDocId: 2,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Fotografías exhumación",
    repoDocId: 2,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Otro",
    repoDocId: 2,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Perfil genético osamenta",
    repoDocId: 3,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Perfil (es) genético (s) donantes",
    repoDocId: 3,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Reporte de coincidencia de ADN",
    repoDocId: 3,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Reporte generado por software",
    repoDocId: 3,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Otro",
    repoDocId: 3,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "FIO",
    repoDocId: 4,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Presentación coincidencia",
    repoDocId: 4,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Presentación Comité de Identificaciones",
    repoDocId: 4,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Acta de identificación",
    repoDocId: 4,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Resumen de identificación para notificación",
    repoDocId: 4,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Dictamen de identificación",
    repoDocId: 4,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Reporte de notificación",
    repoDocId: 4,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Acta de inhumación",
    repoDocId: 4,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Otro",
    repoDocId: 4,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Documentos Varios",
    repoDocId: 5,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Fotografías trauma",
    repoDocId: 2,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Fotografías extendido",
    repoDocId: 2,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Fotografías dentinción",
    repoDocId: 2,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Fotografías ropa",
    repoDocId: 2,
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const calidadPerfiles = [
  {
    descripcion: "Perfil Parcial",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Perfil Completo",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const extensionesDoc = [
  {
    descripcion: "PDF",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "JPG",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

const puesto = [
  {
    descripcion: "Puesto 1",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  },
  {
    descripcion: "Puesto 2",
    estadoId: 1,
    fechaHoraIngreso: Date.now()
  }
];

module.exports = {
  estados,
  generos,
  modulos,
  paises,
  departamentos,
  municipios,
  tiposDoc,
  personas,
  usuarios,
  roles,
  usuarioRoles,
  accesos,
  objetosMenu,
  objetosAcceso,
  rolesObjetosAccesos,
  basesInfo,
  cromosomasY,
  donantes,
  estadosCoincidencia,
  programasIdent,
  sexosAdn,
  estadosInvestigacion,
  tiposCasosDid,
  tiposContexto,
  traumasCirc,
  gruposEtarios,
  regionesAnato,
  gruposEtno,
  causasMuerte,
  valoresEdad,
  datosOdonto,
  tiposIdentificado,
  reposDoc,
  documentos,
  calidadPerfiles,
  extensionesDoc,
  aplicaciones,
  puesto
};
