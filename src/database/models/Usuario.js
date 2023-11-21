

module.exports = (sequelize, dataTypes) => {
    let alias = "usuario";
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        nombre: {
            type: dataTypes.STRING(10),
            allowNull: false
        },

        apellido: {
            type: dataTypes.STRING(10),
            allowNull: false
        }
    };

    let config = {
        timestamps: true, 
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false
    }
    

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models){
        Usuario.belongsTo(models.producto, {
            as: "productos",
            foreignKey: "usuario_id"
        })
    }

   

    return Usuario

}