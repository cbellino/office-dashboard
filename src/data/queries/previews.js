import {
  GraphQLList as List,
} from 'graphql';
import PreviewType from '../types/PreviewType';
import Preview from '../models/Preview';

const previews = {
  type: new List(PreviewType),
  resolve() {
    const query = {
      order: [['id', 'ASC']],
      include: [{
        all: true,
      }],
    };

    return Preview.findAll(query);
  },
};

export default previews;
