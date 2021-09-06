import {useMemo} from 'react';
import {ApolloClient, HttpLink, NormalizedCacheObject} from '@apollo/client';
import apolloCache from './apolloCache';
let apolloClient: ApolloClient<NormalizedCacheObject | null>;

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({uri: 'http://localhost:1337/graphql'}),
    cache: apolloCache,
    ssrMode: typeof window === 'undefined',
  });
}

export function initializeApollo(initialState = null) {
  const apolloClientGlobal = apolloClient ?? createApolloClient();
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }
  if (typeof window === 'undefined') return apolloClientGlobal;
  apolloClient = apolloClient ?? apolloClientGlobal;
  return apolloClient;
}

export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}