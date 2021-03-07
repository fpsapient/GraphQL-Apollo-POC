import { ApolloClient, InMemoryCache } from '@apollo/client';
import { graphQLApiUri } from '../config/endpoints';

const GraphQLClient = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache({}),
    link: graphQLApiUri,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  });

  return client;
};


export default GraphQLClient;
