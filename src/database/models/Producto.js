
module.exports = (sequelize, dataTypes) => {
    let alias = "producto";
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },

        descripcion: {
            type: dataTypes.STRING(500),
            allowNull: false
        },

        precio: {
            type: dataTypes.BIGINT(10),
            allowNull: false
            
        },

        
       
        length: dataTypes.BIGINT(10),
        usuario_id: dataTypes.BIGINT(10)
       

    };

    let config = {
        timestamps: true, 
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false
    }

    
    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models){
        Producto.belongsTo(models.usuario, {
            as: "usuario",
            foreignKey: "usuario_id"
        })
    }

    return Producto

}