import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const PreviewType = new ObjectType({
  name: 'Preview',
  fields: {
    id: { type: new NonNull(ID) },
    name: { type: StringType },
    comment: { type: StringType },
    status: { type: StringType },
    owner: { type: StringType },
  },
});

export default PreviewType;
