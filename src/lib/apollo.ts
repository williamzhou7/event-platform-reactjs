import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ok33z90a7v01xxfcrl0gwa/master',
  cache: new InMemoryCache()
});