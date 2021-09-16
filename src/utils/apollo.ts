import {useMemo} from 'react';
import {ApolloClient, HttpLink, NormalizedCacheObject} from '@apollo/client';
import {Session} from 'next-auth/client';
import {setContext} from '@apollo/client/link/context';
import apolloCache from './apolloCache';

let apolloClient: ApolloClient<NormalizedCacheObject | null>;

function createApolloClient(session?: Session | null) {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  });

  const authLink = setContext((_, {headers}) => {
    const authorization = session?.jwt ? `Bearer ${session?.jwt}` : '';
    return {headers: {...headers, authorization}};
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: apolloCache,
    ssrMode: typeof window === 'undefined',
  });
}

export function initializeApollo(
  initialState = null,
  session?: Session | null,
) {
  const apolloClientGlobal = apolloClient ?? createApolloClient(session);
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }
  if (typeof window === 'undefined') return apolloClientGlobal;
  apolloClient = apolloClient ?? apolloClientGlobal;
  return apolloClient;
}

export function useApollo(initialState = null, session?: Session) {
  const store = useMemo(
    () => initializeApollo(initialState, session),
    [initialState, session],
  );
  return store;
}
