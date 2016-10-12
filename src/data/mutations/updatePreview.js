import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import PreviewType from '../types/PreviewType';
import PreviewInputType from '../types/PreviewInputType';
import Preview from '../models/Preview';

const updatePreview = {
  type: PreviewType,
  description: 'Update a preview',
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    preview: { type: new GraphQLNonNull(PreviewInputType) },
  },
  resolve: (value, { id, preview }) => (
    Preview.update(preview, { where: { id } })
      .then(() => Preview.findById(id))
  ),
};

export default updatePreview;
