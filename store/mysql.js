const Sequelize = require("sequelize");

const config = require("../config");

const db = new Sequelize(
  config.mysql.database,
  config.mysql.username,
  config.mysql.password,
  {
    host: config.mysql.host,
    dialect: config.mysql.dialect,
    dialectOptions: {
      supportBigNumbers: true,
    },
    timezone: '-06:00',
  }
);

//modelos
const EstadoModel = require("./models/cat_estado");
const EstadoCivilModel = require("./models/cat_estado_civil");
const TipoSangreModel = require("./models/cat_tipo_sangre");
const TipoDocumentoModel = require("./models/cat_tipo_documento");
const GeneroModel = require("./models/cat_genero");
const ModuloModel = require("./models/cat_modulo");
const PaisModel = require("./models/cat_pais");
const DepartamentoModel = require("./models/cat_departamento");
const MunicipioModel = require("./models/cat_municipio");
const PersonaModel = require("./models/persona");
const DatosPersonaModel = require("./models/datos_persona");
const IdentificacionModel = require("./models/identificacion_persona");
const UsuarioModel = require("./models/usuario");
const FotoUsuarioModel = require("./models/foto_usuario");
const RolModel = require("./models/cat_rol");
const UsuarioRolModel = require("./models/usuario_rol");
const AccesoModel = require("./models/cat_acceso");
const ObjetoMenuModel = require("./models/objeto_menu");
const ObjetoAccesoModel = require("./models/objeto_acceso");
const RolObjetoAccesoModel = require("./models/rol_objeto_acceso");
const AplicativoModel = require("./models/cat_aplicativo");
//coincidencias
const BaseInfoModel = require("./models/cat_base_info");
const CromosomaYModel = require("./models/cat_cromosomaY");
const DonanteModel = require("./models/cat_donante");
const EstadoCoincidenciaModel = require("./models/cat_estado_coincidencia");
const EstadoInvestigacionModel = require("./models/cat_estado_investigacion");
const ProgramaIdentModel = require("./models/cat_programa_ident");
const SexoAdnModel = require("./models/cat_sexo_adn");
const TipoCasoDidModel = require("./models/cat_tipo_caso_did");
const TipoContextoModel = require("./models/cat_tipo_contexto");
const OsamentaModel = require("./models/osamenta");
const VictimaModel = require("./models/victima");
const ParienteVictimaModel = require("./models/pariente_victima");
const CoincidenciaModel = require("./models/coincidencia");
const AnotacionHechoModel = require("./models/anotacion_hecho");
const AnotacionCoincidenciaModel = require("./models/anotacion_coincidencia");
const NotaLabGeneticaModel = require("./models/nota_lab_genetica");
const DonanteCoincidenciaModel = require("./models/donante_coincidencia");
const SolicitudSeguimientoModel = require("./models/solicitud_seguimiento");
const CalidadPerfilModel = require("./models/cat_calidad_perfil");
const FioModel = require("./models/fio");
const PuestoModel = require("./models/cat_puesto");
//identificaciones
const TraumaCircModel = require("./models/cat_trauma_circ");
const GrupoEtarioModel = require("./models/cat_grupo_etario");
const RegionAnatomicaModel = require("./models/cat_region_anatomica");
const GrupoEtnolinguisticoModel = require("./models/cat_grupo_etnolinguistico");
const CausaMuerteModel = require("./models/cat_causa_muerte");
const ValorEdadModel = require("./models/cat_valor_edad");
const DatosOdontModel = require("./models/cat_datos_odont");
const TipoIdentModel = require("./models/cat_tipo_identificado");
const IdentificadoSmihModel = require("./models/identificado_smih");
const IdentificadoOstModel = require("./models/identificado_ost");
//documentos
const RepoDocModel = require("./models/cat_repo_doc");
const DocumentoModel = require("./models/cat_documento");
const ExtensionDocModel = require("./models/cat_extension_doc");
const CoincidenciaDocumentoModel = require("./models/coincidencia_documento");
const IdentificadoOstDocumentoModel = require("./models/identificado_ost_documento");
//seguridad
const TokenModel = require("./models/token");
const ParametroModel = require("./models/parametro");
//sincronizacion de objeto a bd
const Estado = EstadoModel(db, Sequelize);
const EstadoCivil = EstadoCivilModel(db, Sequelize);
const TipoSangre = TipoSangreModel(db, Sequelize);
const TipoDocumento = TipoDocumentoModel(db, Sequelize);
const Genero = GeneroModel(db, Sequelize);
const Modulo = ModuloModel(db, Sequelize);
const Pais = PaisModel(db, Sequelize);
const Departamento = DepartamentoModel(db, Sequelize);
const Municipio = MunicipioModel(db, Sequelize);
const Persona = PersonaModel(db, Sequelize);
const Puesto = PuestoModel(db,Sequelize)
const DatosPersona = DatosPersonaModel(db, Sequelize);
const Identificacion = IdentificacionModel(db, Sequelize);
const Usuario = UsuarioModel(db, Sequelize);
const FotoUsuario = FotoUsuarioModel(db, Sequelize);
const Rol = RolModel(db, Sequelize);
const UsuarioRol = UsuarioRolModel(db, Sequelize);
const Acceso = AccesoModel(db, Sequelize);
const ObjetoMenu = ObjetoMenuModel(db, Sequelize);
const ObjetoAcceso = ObjetoAccesoModel(db, Sequelize);
const RolObjetoAcceso = RolObjetoAccesoModel(db, Sequelize);
const Aplicativo = AplicativoModel(db, Sequelize);
//coincidencias
const BaseInfo = BaseInfoModel(db, Sequelize);
const CromosomaY = CromosomaYModel(db, Sequelize);
const Donante = DonanteModel(db, Sequelize);
const EstadoCoincidencia = EstadoCoincidenciaModel(db, Sequelize);
const EstadoInvestigacion = EstadoInvestigacionModel(db, Sequelize);
const ProgramaIdent = ProgramaIdentModel(db, Sequelize);
const SexoAdn = SexoAdnModel(db, Sequelize);
const TipoCasoDid = TipoCasoDidModel(db, Sequelize);
const TipoContexto = TipoContextoModel(db, Sequelize);
const Osamenta = OsamentaModel(db, Sequelize);
const Victima = VictimaModel(db, Sequelize);
const ParienteVictima = ParienteVictimaModel(db, Sequelize);
const Coincidencia = CoincidenciaModel(db, Sequelize);
const AnotacionHecho = AnotacionHechoModel(db, Sequelize);
const AnotacionCoincidencia = AnotacionCoincidenciaModel(db, Sequelize);
const NotaLabGenetica = NotaLabGeneticaModel(db, Sequelize);
const DonanteCoincidencia = DonanteCoincidenciaModel(db, Sequelize);
const SolicitudSeguimiento = SolicitudSeguimientoModel(db, Sequelize);
const CalidadPerfil = CalidadPerfilModel(db, Sequelize);
const Fio = FioModel(db, Sequelize);
//identificaciones
const TraumaCirc = TraumaCircModel(db, Sequelize);
const GrupoEtario = GrupoEtarioModel(db, Sequelize);
const RegionAnatomica = RegionAnatomicaModel(db, Sequelize);
const GrupoEtnolinguistico = GrupoEtnolinguisticoModel(db, Sequelize);
const CausaMuerte = CausaMuerteModel(db, Sequelize);
const ValorEdad = ValorEdadModel(db, Sequelize);
const DatosOdont = DatosOdontModel(db, Sequelize);
const TipoIdent = TipoIdentModel(db, Sequelize);
const IdentificadoSmih = IdentificadoSmihModel(db, Sequelize);
const IdentificadoOst = IdentificadoOstModel(db, Sequelize);
//documentos
const RepoDoc = RepoDocModel(db, Sequelize);
const Documento = DocumentoModel(db, Sequelize);
const ExtensionDoc = ExtensionDocModel(db, Sequelize);
const CoincidenciaDocumento = CoincidenciaDocumentoModel(db, Sequelize);
const IdentificadoOstDocumento = IdentificadoOstDocumentoModel(db, Sequelize);
//seguridad
const Token = TokenModel(db, Sequelize);
const Parametro = ParametroModel(db, Sequelize);
//Relations
Usuario.hasMany(UsuarioRol, {foreignKey: "usuarioId"});
//Relations coincidencias
Osamenta.belongsTo(SexoAdn, {
  as: "SexoAdn",
  foreignKey: "sexoAdnId",
  onDelete: "CASCADE",
});
Osamenta.belongsTo(Estado, {
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});
Osamenta.belongsTo(Usuario, {
  as: "Usuario",
  foreignKey: "usuarioIngresoId",
  onDelete: "CASCADE",
});
Victima.belongsTo(Municipio, {
  as: "MuniResidencia",
  foreignKey: "residenciaMuniId",
  onDelete: "CASCADE",
});
Victima.belongsTo(Departamento, {
  as: "DeptoResidencia",
  foreignKey: "residenciaDeptoId",
  onDelete: "CASCADE",
});
Victima.belongsTo(Municipio, {
  as: "MuniLugarHecho",
  foreignKey: "lugarHechoMuniId",
  onDelete: "CASCADE",
});
Victima.belongsTo(Departamento, {
  as: "DeptoLugarHecho",
  foreignKey: "lugarHechoDeptoId",
  onDelete: "CASCADE",
});
Osamenta.belongsTo(Municipio, {
  as: "MuniExhumacion",
  foreignKey: "exhumacionMuniId",
  onDelete: "CASCADE",
});
Osamenta.belongsTo(Departamento, {
  as: "DeptoExhumacion",
  foreignKey: "exhumacionDeptoId",
  onDelete: "CASCADE",
});
Victima.belongsTo(TipoDocumento, {
  as: "TipoDocumento",
  foreignKey: "tipoDocumentoId",
  onDelete: "CASCADE",
});
Victima.belongsTo(Estado, {
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});
Victima.belongsTo(Usuario, {
  as: "Usuario",
  foreignKey: "usuarioIngresoId",
  onDelete: "CASCADE",
});
ParienteVictima.belongsTo(Victima, {
  as: "Victima",
  foreignKey: "victimaId",
  onDelete: "CASCADE",
});
ParienteVictima.belongsTo(Estado, {
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});
ParienteVictima.belongsTo(Usuario, {
  as: "Usuario",
  foreignKey: "usuarioIngresoId",
  onDelete: "CASCADE",
});
Coincidencia.belongsTo(Osamenta, {
  as: "Osamenta",
  foreignKey: "osamentaId",
  onDelete: "CASCADE",
});
Coincidencia.belongsTo(Victima, {
  as: "Victima",
  foreignKey: "victimaId",
  onDelete: "CASCADE",
});
Coincidencia.belongsTo(BaseInfo, {
  as: "BaseInfo",
  foreignKey: "baseInfoId",
  onDelete: "CASCADE",
});
Coincidencia.belongsTo(ProgramaIdent, {
  as: "ProgramaIdent",
  foreignKey: "programaIdentId",
  onDelete: "CASCADE",
});
Coincidencia.belongsTo(EstadoCoincidencia, {
  as: "EstadoCoincidencia",
  foreignKey: "estadoCoincidenciaId",
  onDelete: "CASCADE",
});
Coincidencia.belongsTo(EstadoInvestigacion, {
  as: "EstadoInvestigacion",
  foreignKey: "estadoInvestigacionId",
  onDelete: "CASCADE",
});
Coincidencia.belongsTo(CromosomaY, {
  as: "CromosomaY",
  foreignKey: "cromosomaYId",
  onDelete: "CASCADE",
});
Coincidencia.belongsTo(TipoContexto, {
  as: "TipoContexto",
  foreignKey: "tipoContextoId",
  onDelete: "CASCADE",
});
Coincidencia.belongsTo(TipoCasoDid, {
  as: "TipoCasoDid",
  foreignKey: "tipoCasoDidId",
  onDelete: "CASCADE",
});
Coincidencia.belongsTo(CalidadPerfil, {
  as: "CalidadPerfil",
  foreignKey: "calidadPerfilId",
  onDelete: "CASCADE",
});
Coincidencia.belongsTo(Estado, {
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});
Coincidencia.belongsTo(Usuario, {
  as: "Usuario",
  foreignKey: "usuarioIngresoId",
  onDelete: "CASCADE",
});
Coincidencia.hasMany(DonanteCoincidencia, {
  as: "DonanteCoincidencia",
  foreignKey: "coincidenciaId",
  onDelete: "CASCADE",
});
DonanteCoincidencia.belongsTo(Donante, {
  as: "Donante",
  foreignKey: "donanteId",
  onDelete: "CASCADE",
});
DonanteCoincidencia.belongsTo(Estado, {
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});
DonanteCoincidencia.belongsTo(Usuario, {
  as: "Usuario",
  foreignKey: "usuarioIngresoId",
  onDelete: "CASCADE",
});
NotaLabGenetica.belongsTo(Estado, {
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});
NotaLabGenetica.belongsTo(Usuario, {
  as: "Usuario",
  foreignKey: "usuarioIngresoId",
  onDelete: "CASCADE",
});
AnotacionCoincidencia.belongsTo(Estado, {
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});
AnotacionCoincidencia.belongsTo(Usuario, {
  as: "Usuario",
  foreignKey: "usuarioIngresoId",
  onDelete: "CASCADE",
});
Parametro.belongsTo(Estado, {
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});
Parametro.belongsTo(Usuario, {
  as: "Usuario",
  foreignKey: "usuarioIngresoId",
  onDelete: "CASCADE",
});
UsuarioRol.belongsTo(Usuario, {
  as: "Usuario",
  foreignKey: "usuarioId",
  onDelete: "CASCADE",
});
UsuarioRol.belongsTo(Rol, {
  as: "modulo",
  foreignKey: "rolId",
  onDelete: "CASCADE",
});

SolicitudSeguimiento.belongsTo(Estado, {
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});
SolicitudSeguimiento.belongsTo(Usuario, {
  as: "Usuario",
  foreignKey: "usuarioIngresoId",
  onDelete: "CASCADE",
});
IdentificadoSmih.belongsTo(Victima, {
  as: "Victima",
  foreignKey: "victimaId",
  onDelete: "CASCADE",
});
IdentificadoSmih.belongsTo(Osamenta, {
  as: "Osamenta",
  foreignKey: "osamentaId",
  onDelete: "CASCADE",
});
IdentificadoSmih.belongsTo(Coincidencia, {
  as: "Coincidencia",
  foreignKey: "coincidenciaId",
  onDelete: "CASCADE",
});
IdentificadoSmih.belongsTo(Genero, {
  as: "Sexo",
  foreignKey: "sexoId",
  onDelete: "CASCADE",
});
IdentificadoSmih.belongsTo(GrupoEtario, {
  as: "GrupoEtario",
  foreignKey: "grupoEtarioId",
  onDelete: "CASCADE",
});
IdentificadoSmih.belongsTo(GrupoEtnolinguistico, {
  as: "GrupoEtnolinguistico",
  foreignKey: "grupoEtnolinguisticoId",
  onDelete: "CASCADE",
});
IdentificadoSmih.belongsTo(ValorEdad, {
  as: "ValorEdadAM",
  foreignKey: "valorEdadAM",
  onDelete: "CASCADE",
});
IdentificadoSmih.belongsTo(ValorEdad, {
  as: "ValorPM",
  foreignKey: "valorEdadPM",
  onDelete: "CASCADE",
});
IdentificadoSmih.belongsTo(TraumaCirc, {
  as: "TraumaCirc",
  foreignKey: "traumaCircId",
  onDelete: "CASCADE",
});
IdentificadoSmih.belongsTo(DatosOdont, {
  as: "DatosOdont",
  foreignKey: "datosOdontId",
  onDelete: "CASCADE",
});
IdentificadoSmih.belongsTo(RegionAnatomica, {
  as: "RegionAnatomica",
  foreignKey: "regionAnatomicaId",
  onDelete: "CASCADE",
});
IdentificadoSmih.belongsTo(Estado, {
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});
IdentificadoSmih.belongsTo(Usuario, {
  as: "Usuario",
  foreignKey: "usuarioIngresoId",
  onDelete: "CASCADE",
});
IdentificadoSmih.belongsTo(TipoCasoDid, {
  as: "TipoCasoDid",
  foreignKey: "tipoCasoDidId",
  onDelete: "CASCADE",
});
IdentificadoSmih.belongsTo(CausaMuerte, {
  as: "CausaMuerte",
  foreignKey: "causaMuerteId",
  onDelete: "CASCADE",
});
IdentificadoSmih.belongsTo(Municipio, {
  as: "MuniDesap",
  foreignKey: "desaparicionMuniId",
  onDelete: "CASCADE",
});
IdentificadoSmih.belongsTo(Departamento, {
  as: "DeptoDesap",
  foreignKey: "desaparicionDeptoId",
  onDelete: "CASCADE",
});
IdentificadoOst.belongsTo(Victima, {
  as: "Victima",
  foreignKey: "victimaId",
  onDelete: "CASCADE",
});
IdentificadoOst.belongsTo(Osamenta, {
  as: "Osamenta",
  foreignKey: "osamentaId",
  onDelete: "CASCADE",
});
IdentificadoOst.belongsTo(Genero, {
  as: "Sexo",
  foreignKey: "sexoId",
  onDelete: "CASCADE",
});
IdentificadoOst.belongsTo(GrupoEtario, {
  as: "GrupoEtario",
  foreignKey: "grupoEtarioId",
  onDelete: "CASCADE",
});
IdentificadoOst.belongsTo(GrupoEtnolinguistico, {
  as: "GrupoEtnolinguistico",
  foreignKey: "grupoEtnolinguisticoId",
  onDelete: "CASCADE",
});
IdentificadoOst.belongsTo(Estado, {
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});
IdentificadoOst.belongsTo(Usuario, {
  as: "Usuario",
  foreignKey: "usuarioIngresoId",
  onDelete: "CASCADE",
});
IdentificadoOst.belongsTo(TipoCasoDid, {
  as: "TipoCasoDidOst",
  foreignKey: "tipoCasoDidId",
  onDelete: "CASCADE",
});
IdentificadoOst.belongsTo(Municipio, {
  as: "MuniDesap",
  foreignKey: "desaparicionMuniId",
  onDelete: "CASCADE",
});
IdentificadoOst.belongsTo(Departamento, {
  as: "DeptoDesap",
  foreignKey: "desaparicionDeptoId",
  onDelete: "CASCADE",
});
Municipio.belongsTo(Departamento, {
  as: "Departamento",
  foreignKey: "departamentoId",
  onDelete: "CASCADE",
});
//documentos
Documento.belongsTo(RepoDoc, {
  as: "RepoDoc",
  foreignKey: "repoDocId",
  onDelete: "CASCADE",
});
CoincidenciaDocumento.belongsTo(Documento, {
  as: "Documento",
  foreignKey: "documentoId",
  onDelete: "CASCADE",
});
CoincidenciaDocumento.belongsTo(Estado, {
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});
CoincidenciaDocumento.belongsTo(Usuario, {
  as: "Usuario",
  foreignKey: "usuarioIngresoId",
  onDelete: "CASCADE",
});
IdentificadoOstDocumento.belongsTo(Documento, {
  as: "Documento",
  foreignKey: "documentoId",
  onDelete: "CASCADE",
});
IdentificadoOstDocumento.belongsTo(Estado, {
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});
IdentificadoOstDocumento.belongsTo(Usuario, {
  as: "Usuario",
  foreignKey: "usuarioIngresoId",
  onDelete: "CASCADE",
});
Token.belongsTo(Estado, {
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});
Token.belongsTo(Usuario, {
  as: "Usuario",
  foreignKey: "usuarioIngresoId",
  onDelete: "CASCADE",
});
Fio.belongsTo(Coincidencia, {
  as: "Coincidencia",
  foreignKey: "coincidenciaId",
  onDelete: "CASCADE",
});
Fio.belongsTo(GrupoEtnolinguistico, {
  as: "GrupoEtnolinguistico",
  foreignKey: "grupoEtnolinguisticoId",
  onDelete: "CASCADE",
});
Fio.belongsTo(Estado, {
  as: "Estado",
  foreignKey: "estadoId",
  onDelete: "CASCADE",
});
Fio.belongsTo(Genero, {
  as: "Genero",
  foreignKey: "sexoAM",
  onDelete: "CASCADE",
});
Fio.belongsTo(SexoAdn, {
  as: "SexoAdn",
  foreignKey: "sexoPM",
  onDelete: "CASCADE",
});
Fio.belongsTo(TraumaCirc, {
  as: "TraumaCircAM",
  foreignKey: "traumaCircAM",
  onDelete: "CASCADE",
});
Fio.belongsTo(TraumaCirc, {
  as: "TraumaCircPM",
  foreignKey: "traumaCircPM",
  onDelete: "CASCADE",
});
Fio.belongsTo(CausaMuerte, {
  as: "CausaMuerteAM",
  foreignKey: "causaMuerteAM",
  onDelete: "CASCADE",
});
Fio.belongsTo(CausaMuerte, {
  as: "CausaMuertePM",
  foreignKey: "causaMuertePM",
  onDelete: "CASCADE",
});
Usuario.belongsTo(Persona, {
  as: "Persona",
  foreignKey: "personaId",
  onDelete: "CASCADE",
});


Usuario.belongsTo(Puesto, {
  as: "Puesto",
  foreignKey: "puestoId",
});

//Get data catalogos
const {
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
  estadosInvestigacion,
  programasIdent,
  sexosAdn,
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
} = require("./data");

try {
  db.sync({
    force: false,
    logging: false,
  }).then(async () => {
    if (1 === 0) {

      await Estado.bulkCreate(estados);
      await Genero.bulkCreate(generos);
      await Modulo.bulkCreate(modulos);
      await Pais.bulkCreate(paises);
    
      await Departamento.bulkCreate(departamentos);
     
      await Municipio.bulkCreate(municipios);
      await TipoDocumento.bulkCreate(tiposDoc);
      await Persona.bulkCreate(personas);
      await Usuario.bulkCreate(usuarios);
      await Puesto.bulkCreate(puesto);

      //Accesos y menu
      await Aplicativo.bulkCreate(aplicaciones);
      await Rol.bulkCreate(roles);
      await UsuarioRol.bulkCreate(usuarioRoles);
      await Acceso.bulkCreate(accesos);
      await ObjetoMenu.bulkCreate(objetosMenu);
      await ObjetoAcceso.bulkCreate(objetosAcceso);
      await RolObjetoAcceso.bulkCreate(rolesObjetosAccesos);
      
    
      //Catalogos Coincidencias
      await BaseInfo.bulkCreate(basesInfo);
      await CromosomaY.bulkCreate(cromosomasY);
      await Donante.bulkCreate(donantes);
      await EstadoCoincidencia.bulkCreate(estadosCoincidencia);
      await EstadoInvestigacion.bulkCreate(estadosInvestigacion);
      await ProgramaIdent.bulkCreate(programasIdent);
      await SexoAdn.bulkCreate(sexosAdn);
      await TipoCasoDid.bulkCreate(tiposCasosDid);
      await TipoContexto.bulkCreate(tiposContexto);
      await TraumaCirc.bulkCreate(traumasCirc);
      await GrupoEtario.bulkCreate(gruposEtarios);
      await RegionAnatomica.bulkCreate(regionesAnato);
      await GrupoEtnolinguistico.bulkCreate(gruposEtno);
      await CausaMuerte.bulkCreate(causasMuerte);
      await ValorEdad.bulkCreate(valoresEdad);
      await DatosOdont.bulkCreate(datosOdonto);
      await TipoIdent.bulkCreate(tiposIdentificado);
      await CalidadPerfil.bulkCreate(calidadPerfiles);
      //documentos
       
      await RepoDoc.bulkCreate(reposDoc);
      await Documento.bulkCreate(documentos);
      await ExtensionDoc.bulkCreate(extensionesDoc);

    }
  });
} catch (e) {
  console.error(e);
}

module.exports = {
  Estado,
  EstadoCivil,
  TipoSangre,
  TipoDocumento,
  Genero,
  Modulo,
  Pais,
  Departamento,
  Municipio,
  Persona,
  DatosPersona,
  Identificacion,
  Usuario,
  FotoUsuario,
  Rol,
  UsuarioRol,
  Acceso,
  ObjetoMenu,
  ObjetoAcceso,
  RolObjetoAcceso,
  BaseInfo,
  CromosomaY,
  Donante,
  EstadoCoincidencia,
  EstadoInvestigacion,
  ProgramaIdent,
  SexoAdn,
  TipoCasoDid,
  TipoContexto,
  Osamenta,
  Victima,
  ParienteVictima,
  Coincidencia,
  AnotacionHecho,
  AnotacionCoincidencia,
  NotaLabGenetica,
  DonanteCoincidencia,
  SolicitudSeguimiento,
  TraumaCirc,
  GrupoEtario,
  RegionAnatomica,
  GrupoEtnolinguistico,
  CausaMuerte,
  ValorEdad,
  DatosOdont,
  TipoIdent,
  IdentificadoSmih,
  IdentificadoOst,
  RepoDoc,
  Documento,
  CalidadPerfil,
  ExtensionDoc,
  CoincidenciaDocumento,
  IdentificadoOstDocumento,
  Token,
  Parametro,
  Fio,
  Aplicativo,
  Puesto
};
