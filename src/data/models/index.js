import sequelize from '../sequelize';
import Preview from './Preview';

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { Preview };
