import { createHttpLink } from 'apollo-link-http';

// import { HttpLink } from '@apollo/client';

// export const graphQLApiUri = new HttpLink({ uri: "http://graphql.f1967b23d46b44b5bbd0.eastus2.aksapp.io/refdata", });

export const graphQLApiUri = createHttpLink({
  uri: "http://graphql.f1967b23d46b44b5bbd0.eastus2.aksapp.io/refdata/",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  fetch,
  // fetchOptions: {
  //   mode: 'no-cors',
  // },
  // credentials: 'same-origin'
});

export default graphQLApiUri;
