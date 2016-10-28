/* @flow */

import Sequelize from 'sequelize';
import { databaseUrl } from '../config';

if (!databaseUrl) {
  throw new Error('Missing databaseUrl!');
}

const sequelize = new Sequelize(databaseUrl, {
  define: {
    freezeTableName: true,
  },
});

export default sequelize;
