// Used for consistant return of an arr from a URL query
export const queryToArr = (query: string | string[] | undefined) => {
  if (!query) {
    return [];
  }
  if (typeof query === 'string') {
    return [query];
  } else {
    return query;
  }
};
