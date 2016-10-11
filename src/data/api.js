import { query } from 'modelizr';
import { graphql } from '../config.js';
import { preview } from '../data/modelizr/preview';

export async function fetchPreviews() {
  const data = await query(
    preview()
  )
  .path(graphql.url)
  .normalize(res => res);

  if (data && data.result && data.result.errors) {
    throw new Error('Failed to load the previews.');
  }

  return data;
}

export async function updatePreview(preview) {
  // console.log('[API] updatePreview', preview);

  // const resp = await fetch('/graphql', {
  //   method: 'post',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     query: '{previews{id,name,comment,status,owner}}',
  //   }),
  // });
  // const { data } = await resp.json();
  // if (!data || !data.previews) throw new Error('Failed to update the preview.');

  // return data.previews;
}
