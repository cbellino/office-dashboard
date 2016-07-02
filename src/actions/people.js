import { GET_PERSON } from '../constants';

export const getPerson = (username) => (
  { type: GET_PERSON, username }
);
