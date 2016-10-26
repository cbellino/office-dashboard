/* @flow */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import previewsQuery from './queries/previews';
import updatePreview from './mutations/updatePreview';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      previews: previewsQuery,
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      updatePreview,
    },
  }),
});

export default schema;
