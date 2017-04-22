import FetchJsonClient from 'fetch-json-client';

export const WS_SEARCH_CLIENT = new FetchJsonClient().configure(config => {
    config.withBaseUrl(process.env.WS_SEARCH);
});
