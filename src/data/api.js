import fetch from '../core/fetch';

export async function fetchPreviews() {
  const resp = await fetch('/graphql', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: '{previews{id,name,comment,status,owner}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.previews) throw new Error('Failed to load the previews feed.');

  return data.previews;
}
