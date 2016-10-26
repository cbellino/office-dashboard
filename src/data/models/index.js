/* @flow */

import sequelize from '../sequelize';
import Preview from './Preview';

function sync(...args: any[]) {
  return sequelize.sync(...args);
}

export default { sync };
export { Preview };
