import { wrapPromise } from './wrapPromise';

export const fetchData = (url: string) => {
  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => res);

  return wrapPromise(promise);
};

export default fetchData;
