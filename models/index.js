const User = require('./User');
const Items = require('./Items');
const Friend = require('./Friend');

// Define sequelize associations in this file.
User.hasMany(Items, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Items.belongsTo(User, { 
    foreignKey: 'user_id'
});

User.belongsToMany(User, {
    through: {
      model: Friend,
      unique: false
    },
    as: "lister",
    foreignKey: "lister"
  });

  User.belongsToMany(User, {
    through: {
      model: Friend,
      unique: false
    },
    as: "follower",
    foreignKey: "follower"
  });

module.exports = { User, Items, Friend };
