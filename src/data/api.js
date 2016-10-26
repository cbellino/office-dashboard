/* @flow */

import { query, mutation } from 'modelizr';
import { graphql } from '../config.js';
import { preview } from '../data/modelizr';

import type { Preview } from '../types';

export async function fetchPreviews() {
  const result = await query(preview())
  .path(graphql.url)
  .normalize(res => res);

  if (result && result.result && result.result.errors) {
    throw new Error('Failed to load the previews.');
  }

  return result;
}

export async function updatePreview(id: string, { status, comment }: Preview) {
  const result = await mutation(
    preview()
    .as('updatePreview')
    .params({ id, preview: { comment, status } })
  )
  .query()
  .path(graphql.url)
  .normalize(res => res);

  if (result && result.result && result.result.errors) {
    throw new Error('Failed to update the preview.');
  }

  return result;
}
