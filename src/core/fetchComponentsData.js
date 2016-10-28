function fetchComponentsData(fetchData, store) {
  const promises = fetchData.map(fn => fn(store.dispatch));
  return Promise.all(promises);
}

export default fetchComponentsData;
