require("dotenv").config();
const sequelize = require('../config/connection');
const { User, Items, Friend } = require('../models');

const userSeedData = require('./userSeedData.json');
const itemsSeedData = require('./itemsSeedData.json');
const friendSeedData = require('./friendSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // eslint-disable-next-line no-unused-vars
  const user = await User.bulkCreate(userSeedData);

  // eslint-disable-next-line no-unused-vars
  const items = await Items.bulkCreate(itemsSeedData);
  
  // eslint-disable-next-line no-unused-vars
  const friend = await Friend.bulkCreate(friendSeedData);
 

  process.exit(0);
};

seedDatabase();