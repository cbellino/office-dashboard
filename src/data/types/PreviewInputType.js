/* @flow */

import {
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql';

const PreviewInputType = new GraphQLInputObjectType({
  name: 'PreviewInput',
  fields: {
    comment: { type: GraphQLString },
    status: { type: GraphQLString },
    owner: { type: GraphQLString },
  },
});

export default PreviewInputType;
