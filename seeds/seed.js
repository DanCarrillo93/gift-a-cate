const sequelize = require('../config/connection');
const { User, Items, Friend } = require('../models');

const userSeedData = require('./userSeedData.json');
const itemsSeedData = require('./itemsSeedData.json');
const friendSeedData = require('./friendSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userSeedData);

  const items = await Items.bulkCreate(itemsSeedData);
  
  const friend = await Friend.bulkCreate(friendSeedData);
 

  process.exit(0);
};

seedDatabase();