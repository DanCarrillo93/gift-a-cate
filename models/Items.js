const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Items extends Model {

}

Items.init(
    {
        item_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'User',
              key: 'id',
              unique: false
            }
            },
        item_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            }
        },      
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "Items",
    }
);

module.exports = Items;