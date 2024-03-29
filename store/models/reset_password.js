module.exports = (sequelize, type) => {
    return sequelize.define(
        "reset_password",
        {
            codigo: {
                type: type.STRING(300),
                primaryKey: true,
            },
            messageId: {
                type: type.STRING(300)
            },
            emisor: {
                type: type.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            receptor: {
                type: type.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            usuarioId: {
                type: type.INTEGER
            },
            fechaHoraIngreso: {
                type: type.DATE,
                allowNull: false,
                defaultValue: type.NOW
            },
            fechaHoraVencimiento: {
                type: type.DATE,
                allowNull: false
            },
            ipSolicitud: {
                type: type.STRING(100)
            },
            fechaHoraUpdate: {
                type: type.DATE,
                allowNull: true
            },
            ipUpdate: {
                type: type.STRING(100)
            },
            estadoId: {
                type: type.INTEGER,
                allowNull: false,
                defaultValue: 2,
                references: {
                    model: "cat_estado",
                    key: "estadoId",
                }
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
        }
    );
};
