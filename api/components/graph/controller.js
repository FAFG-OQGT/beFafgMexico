var sequelize = require("sequelize");
const error = require("../../../utils/error");
const {
  IdentificadoOst,
  IdentificadoSmih,
  Coincidencia,
  EstadoCoincidencia,
  Genero,
  GrupoEtario,
  TipoContexto,
  Departamento,
  Osamenta,
} = require("../../../store/mysql");

const list = async (req) => {
  const grafico = req.params.grafico;
  const totalIdentOst = await IdentificadoOst.findAndCountAll({
    attributes: { include: ["identificadoOstId"] },
  }).then((result) => {
    return result.count;
  });

  const totalIdentSmih = await IdentificadoSmih.findAndCountAll({
    attributes: { include: ["identificadoSmihId"] },
  }).then((result) => {
    return result.count;
  });

  const totalIdentificados = totalIdentSmih + totalIdentOst;

  switch (grafico) {
    case "identOst": {
      op = (totalIdentOst * 100) / totalIdentificados;

      return (data = {
        valor: totalIdentOst,
        porcentaje: Math.round(op),
      });
    }
    case "identSmih": {
      op = (totalIdentSmih * 100) / totalIdentificados;

      return (data = {
        valor: totalIdentSmih,
        porcentaje: Math.round(op),
      });
    }
    case "identAll": {
      return (data = {
        valor: totalIdentificados,
        porcentaje: 100,
      });
    }
    case "estadoCoincidencia": {
      const estadosCoin = await Coincidencia.findAll({
        include: [
          {
            model: EstadoCoincidencia,
            as: "EstadoCoincidencia",
            attributes: [
              [sequelize.literal(`ifnull(descripcion,'No Asignado')`), "descripcion"]
              ],
          },
        ],
        group: ["estadoCoincidenciaId"],
        attributes: [
          "estadoCoincidenciaId",
          [sequelize.fn("COUNT", "estadoCoincidenciaId"), "cantidad"],
        ],
      });
      let totalCantidad = 0;

      await estadosCoin.map((item) => {
        let sumador = item.dataValues.cantidad;
        totalCantidad += sumador;
      });

      let nuevaSalida = [];
      estadosCoin.map((item) => {
        let cantidad = item.dataValues.cantidad;
        const {
          EstadoCoincidencia: { descripcion: categoria },
        } = item.dataValues;
        const porcentaje = Math.round((cantidad * 100) / totalCantidad);
        const salida = {
          cantidad,
          categoria,
          porcentaje,
        };
        nuevaSalida.push(salida);
      });

      return nuevaSalida;
    }
    case "sexoIdentificado": {
      const sexoIdentOst = await IdentificadoOst.findAll({
        include: [
          {
            model: Genero,
            as: "Sexo",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso"],
            },
          },
        ],
        group: ["sexoId"],
        attributes: ["sexoId", [sequelize.fn("COUNT", "sexoId"), "cantidad"]],
      });
      let totalCantidad = 0;

      await sexoIdentOst.map((item) => {
        let sumador = item.dataValues.cantidad;
        totalCantidad += sumador;
      });

      let nuevaSalida = [];
      sexoIdentOst.map((item) => {
        let cantidad = item.dataValues.cantidad;
        const padre = "OST";
        const {
          Sexo: { descripcion: categoria },
        } = item.dataValues;
        const porcentaje = Math.round((cantidad * 100) / totalCantidad);
        const salida = {
          cantidad,
          categoria,
          porcentaje,
          padre,
        };
        nuevaSalida.push(salida);
      });

      const sexoIdentSmih = await IdentificadoSmih.findAll({
        include: [
          {
            model: Genero,
            as: "Sexo",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso"],
            },
          },
        ],
        group: ["sexoId"],
        attributes: ["sexoId", [sequelize.fn("COUNT", "sexoId"), "cantidad"]],
        where: sequelize.literal(`sexoId is not null`),
      });
      let totalCantidadSmih = 0;
      await sexoIdentSmih.map((item) => {
        let sumadorSmih = item.dataValues.cantidad;
        totalCantidadSmih += sumadorSmih;
      });

      sexoIdentSmih.map((item) => {
        let cantidad = item.dataValues.cantidad;
        const padre = "SMIH";
        const {
          Sexo: { descripcion: categoria },
        } = item.dataValues;
        const porcentaje = Math.round((cantidad * 100) / totalCantidadSmih);
        const salida = {
          cantidad,
          categoria,
          porcentaje,
          padre,
        };
        nuevaSalida.push(salida);
      });

      return nuevaSalida;
    }
    case "grupoEtarioIdent": {
      const grupoEtIdentOst = await IdentificadoOst.findAll({
        include: [
          {
            model: GrupoEtario,
            as: "GrupoEtario",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso"],
            },
          },
        ],
        group: ["grupoEtarioId"],
        attributes: [
          "grupoEtarioId",
          [sequelize.fn("COUNT", "grupoEtarioId"), "cantidad"],
        ],
        where: sequelize.literal(`identificado_ost.grupoEtarioId is not null`),
      });
      let totalCantidad = 0;

      await grupoEtIdentOst.map((item) => {
        let sumador = item.dataValues.cantidad;
        totalCantidad += sumador;
      });

      let nuevaSalida = [];
      grupoEtIdentOst.map((item) => {
        let cantidad = item.dataValues.cantidad;
        const padre = "OST";
        const {
          GrupoEtario: { descripcion: categoria },
        } = item.dataValues;
        const porcentaje = Math.round((cantidad * 100) / totalCantidad);
        const salida = {
          cantidad,
          categoria,
          porcentaje,
          padre,
        };
        nuevaSalida.push(salida);
      });

      const grupoEtIdentSmih = await IdentificadoSmih.findAll({
        include: [
          {
            model: GrupoEtario,
            as: "GrupoEtario",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso"],
            },
          },
        ],
        group: ["grupoEtarioId"],
        attributes: [
          "grupoEtarioId",
          [sequelize.fn("COUNT", "grupoEtarioId"), "cantidad"],
        ],
        where: sequelize.literal(`identificado_smih.grupoEtarioId is not null`),
      });
      let totalCantidadSmih = 0;
      await grupoEtIdentSmih.map((item) => {
        let sumadorSmih = item.dataValues.cantidad;
        totalCantidadSmih += sumadorSmih;
      });

      grupoEtIdentSmih.map((item) => {
        let cantidad = item.dataValues.cantidad;
        const padre = "SMIH";
        const {
          GrupoEtario: { descripcion: categoria },
        } = item.dataValues;
        const porcentaje = Math.round((cantidad * 100) / totalCantidadSmih);
        const salida = {
          cantidad,
          categoria,
          porcentaje,
          padre,
        };
        nuevaSalida.push(salida);
      });

      return nuevaSalida;
    }
    case "tipoContextoIdent": {
      const tipoContextoSmih = await IdentificadoSmih.findAll({
        include: [
          {
            model: Coincidencia,
            as: "Coincidencia",
            include: [
              {
                model: TipoContexto,
                as: "TipoContexto",
                attributes: {
                  exclude: ["estadoId", "fechaHoraIngreso"],
                },
              },
            ],
            attributes: {
              include: ["coincidenciaId", "tipoContextoId"],
            },
          },
        ],
        group: ["Coincidencia.tipoContextoId"],
        attributes: [
          "Coincidencia.tipoContextoId",
          [sequelize.fn("COUNT", "Coincidencia.tipoContextoId"), "cantidad"],
        ],
        where: sequelize.literal(`Coincidencia.tipoContextoId is not null`),
      });

      let totalCantidadSmih = 0;
      await tipoContextoSmih.map((item) => {
        let sumadorSmih = item.dataValues.cantidad;
        totalCantidadSmih += sumadorSmih;
      });
      let nuevaSalida = [];
      tipoContextoSmih.map((item) => {
        let cantidad = item.dataValues.cantidad;
        const { Coincidencia } = item.dataValues;
        const {
          TipoContexto: { descripcion: categoria },
        } = Coincidencia;
        const porcentaje = Math.round((cantidad * 100) / totalCantidadSmih);
        const salida = {
          cantidad,
          categoria,
          porcentaje,
        };
        nuevaSalida.push(salida);
      });

      return nuevaSalida;
    }
    case "anioDesaparicion": {
      const anioDesaparicionOst = await IdentificadoOst.findAll({
        group: ["desaparicionAnio"],
        attributes: [
          "desaparicionAnio",
          [sequelize.fn("COUNT", "desaparicionAnio"), "cantidad"],
        ],
        where: sequelize.literal(
          `identificado_ost.desaparicionAnio is not null`
        ),
      });
      let totalCantidad = 0;

      await anioDesaparicionOst.map((item) => {
        let sumador = item.dataValues.cantidad;
        totalCantidad += sumador;
      });

      let nuevaSalida = [];
      anioDesaparicionOst.map((item) => {
        let cantidad = item.dataValues.cantidad;
        const padre = "OST";
        const categoria = item.dataValues.desaparicionAnio;
        const porcentaje = Math.round((cantidad * 100) / totalCantidad);
        const salida = {
          cantidad,
          categoria,
          porcentaje,
          padre,
        };
        nuevaSalida.push(salida);
      });

      const anioDesaparicionSmih = await IdentificadoSmih.findAll({
        group: ["desaparicionAnio"],
        attributes: [
          "desaparicionAnio",
          [sequelize.fn("COUNT", "desaparicionAnio"), "cantidad"],
        ],
        where: sequelize.literal(
          `identificado_smih.desaparicionAnio is not null`
        ),
      });
      let totalCantidadSmih = 0;
      await anioDesaparicionSmih.map((item) => {
        let sumadorSmih = item.dataValues.cantidad;
        totalCantidadSmih += sumadorSmih;
      });

      anioDesaparicionSmih.map((item) => {
        let cantidad = item.dataValues.cantidad;
        const padre = "SMIH";
        const categoria = item.dataValues.desaparicionAnio;
        const porcentaje = Math.round((cantidad * 100) / totalCantidadSmih);
        const salida = {
          cantidad,
          categoria,
          porcentaje,
          padre,
        };
        nuevaSalida.push(salida);
      });

      return nuevaSalida;
    }
    case "anioConfirmacion": {
      const anioConfirmacionOst = await IdentificadoOst.findAll({
        attributes: [
          [sequelize.literal(` EXTRACT(YEAR FROM fechaConfirmacion)`), "anio"],

          [sequelize.literal(`COUNT(*)`), "cantidad"],
        ],
        group: "anio",
        where: sequelize.literal(
          `identificado_ost.fechaConfirmacion is not null`
        ),
      });

      let totalCantidad = 0;

      await anioConfirmacionOst.map((item) => {
        let sumador = item.dataValues.cantidad;
        totalCantidad += sumador;
      });

      let nuevaSalida = [];
      anioConfirmacionOst.map((item) => {
        let cantidad = item.dataValues.cantidad;
        const padre = "OST";
        const categoria = item.dataValues.anio;
        const porcentaje = Math.round((cantidad * 100) / totalCantidad);
        const salida = {
          cantidad,
          categoria,
          porcentaje,
          padre,
        };
        nuevaSalida.push(salida);
      });

      const anioConfirmacionSmih = await IdentificadoSmih.findAll({
        attributes: [
          [sequelize.literal(` EXTRACT(YEAR FROM fechaConfirmacion)`), "anio"],

          [sequelize.literal(`COUNT(*)`), "cantidad"],
        ],
        group: "anio",
        where: sequelize.literal(
          `identificado_smih.fechaConfirmacion is not null`
        ),
      });
      let totalCantidadSmih = 0;
      await anioConfirmacionSmih.map((item) => {
        let sumadorSmih = item.dataValues.cantidad;
        totalCantidadSmih += sumadorSmih;
      });

      anioConfirmacionSmih.map((item) => {
        let cantidad = item.dataValues.cantidad;
        const padre = "SMIH";
        const categoria = item.dataValues.anio;
        const porcentaje = Math.round((cantidad * 100) / totalCantidadSmih);
        const salida = {
          cantidad,
          categoria,
          porcentaje,
          padre,
        };
        nuevaSalida.push(salida);
      });

      return nuevaSalida;
    }
    case "deptoDesapIdent": {
      const deptoDesapOst = await IdentificadoOst.findAll({
        include: [
          {
            model: Departamento,
            as: "DeptoDesap",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso"],
            },
          },
        ],
        group: ["desaparicionDeptoId"],
        attributes: [
          "desaparicionDeptoId",
          [sequelize.fn("COUNT", "desaparicionDeptoId"), "cantidad"],
        ],
        where: sequelize.literal(
          `identificado_ost.desaparicionDeptoId is not null`
        ),
      });
      let totalCantidad = 0;

      await deptoDesapOst.map((item) => {
        let sumador = item.dataValues.cantidad;
        totalCantidad += sumador;
      });

      let nuevaSalida = [];
      deptoDesapOst.map((item) => {
        let cantidad = item.dataValues.cantidad;
        const padre = "OST";
        const {
          DeptoDesap: { descripcion: categoria },
        } = item.dataValues;
        const {
          DeptoDesap: { departamentoId: id },
        } = item.dataValues;
        const porcentaje = Math.round((cantidad * 100) / totalCantidad);
        const salida = {
          cantidad,
          categoria,
          id,
          porcentaje,
          padre,
        };
        nuevaSalida.push(salida);
      });

      const deptoDesapSmih = await IdentificadoSmih.findAll({
        include: [
          {
            model: Departamento,
            as: "DeptoDesap",
            attributes: {
              exclude: ["estadoId", "fechaHoraIngreso"],
            },
          },
        ],
        group: ["desaparicionDeptoId"],
        attributes: [
          "desaparicionDeptoId",
          [sequelize.fn("COUNT", "desaparicionDeptoId"), "cantidad"],
        ],
        where: sequelize.literal(
          `identificado_smih.desaparicionDeptoId is not null`
        ),
      });
      let totalCantidadSmih = 0;
      await deptoDesapSmih.map((item) => {
        let sumadorSmih = item.dataValues.cantidad;
        totalCantidadSmih += sumadorSmih;
      });

      deptoDesapSmih.map((item) => {
        let cantidad = item.dataValues.cantidad;
        const padre = "SMIH";
        const {
          DeptoDesap: { descripcion: categoria },
        } = item.dataValues;
        const {
          DeptoDesap: { departamentoId: id },
        } = item.dataValues;
        const porcentaje = Math.round((cantidad * 100) / totalCantidadSmih);
        const salida = {
          cantidad,
          categoria,
          id,
          porcentaje,
          padre,
        };
        nuevaSalida.push(salida);
      });

      return nuevaSalida;
    }
    case "deptoExhuIdent": {
      const deptoExhuOst = await IdentificadoOst.findAll({
        include: [
          {
            model: Osamenta,
            as: "Osamenta",
            include: [
              {
                model: Departamento,
                as: "DeptoExhumacion",
                attributes: {
                  exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
                },
              },
            ],
            attributes: {
              include: ["osamentaId", "exhumacionDeptoId"],
            },
          },
        ],
        group: ["Osamenta.exhumacionDeptoId"],
        attributes: [
          "Osamenta.exhumacionDeptoId",
          [sequelize.fn("COUNT", "Osamenta.exhumacionDeptoId"), "cantidad"],
        ],
        where: sequelize.literal(`Osamenta.exhumacionDeptoId is not null`),
      });
      let totalCantidad = 0;

      await deptoExhuOst.map((item) => {
        let sumador = item.dataValues.cantidad;
        totalCantidad += sumador;
      });

      let nuevaSalida = [];
      deptoExhuOst.map((item) => {
        
        let cantidad = item.dataValues.cantidad;
        const padre = "OST";
        const { Osamenta } = item.dataValues;
        const {
          DeptoExhumacion: { descripcion: categoria },
        } = Osamenta;
        const {
          DeptoExhumacion: { departamentoId: id },
        } = Osamenta;
        const porcentaje = Math.round((cantidad * 100) / totalCantidad);
        const salida = {
          cantidad,
          categoria,
          id,
          porcentaje,
          padre,
        };
        nuevaSalida.push(salida);
      });

      const deptoExhuSmih = await IdentificadoSmih.findAll({
        include: [
          {
            model: Osamenta,
            as: "Osamenta",
            include: [
              {
                model: Departamento,
                as: "DeptoExhumacion",
                attributes: {
                  exclude: ["estadoId", "fechaHoraIngreso", "paisId"],
                },
              },
            ],
            attributes: {
              include: ["osamentaId", "exhumacionDeptoId"],
            },
          },
        ],
        group: ["Osamenta.exhumacionDeptoId"],
        attributes: [
          "Osamenta.exhumacionDeptoId",
          [sequelize.fn("COUNT", "Osamenta.exhumacionDeptoId"), "cantidad"],
        ],
        where: sequelize.literal(`Osamenta.exhumacionDeptoId is not null`),
      });
      let totalCantidadSmih = 0;
      await deptoExhuSmih.map((item) => {
        let sumadorSmih = item.dataValues.cantidad;
        totalCantidadSmih += sumadorSmih;
      });

      deptoExhuSmih.map((item) => {
        let cantidad = item.dataValues.cantidad;
        const padre = "SMIH";
        const { Osamenta } = item.dataValues;
        const {
          DeptoExhumacion: { descripcion: categoria },
        } = Osamenta;
        const {
          DeptoExhumacion: { departamentoId: id },
        } = Osamenta;
        const porcentaje = Math.round((cantidad * 100) / totalCantidadSmih);
        const salida = {
          cantidad,
          categoria,
          id,
          porcentaje,
          padre,
        };
        nuevaSalida.push(salida);
      });

      return nuevaSalida;
    }

    default:
      throw error("No existe la grafica", 400);
  }
};

module.exports = {
  list,
};
