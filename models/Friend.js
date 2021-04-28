const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Friend extends Model {}

// create fields/columns for Trip model
Friend.init(
  {
    friend_1: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
          unique: false
        }
     },
      friend_2: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
          unique: false
        }
      },  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Friend'
  }
);

module.exports = Friend;