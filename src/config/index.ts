// Server config
// export const SERVER_BASE = process.env.SERVER_BASE
export const SERVER_BASE =
  'https://pfp-public-productdb-api.azurewebsites.net/api';

// USR config
export const SWR_DEFAULT_CONFIG = {
  errorRetryCount: 5,
  errorRetryInterval: 1000,
  revalidateOnFocus: false,
};
