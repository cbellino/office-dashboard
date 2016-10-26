/* @flow */

import { GraphQLList } from 'graphql';
import PreviewType from '../types/PreviewType';
import Preview from '../models/Preview';

const previews = {
  type: new GraphQLList(PreviewType),
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
