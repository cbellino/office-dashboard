import DataType from 'sequelize';
import Model from '../sequelize';

const Preview = Model.define('Preview', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  name: {
    type: DataType.STRING(255),
  },

  url: {
    type: DataType.STRING(255),
  },

  comment: {
    type: DataType.STRING(255),
  },

  owner: {
    type: DataType.STRING(255),
  },

  status: {
    type: DataType.STRING(255),
  },

});

export default Preview;
