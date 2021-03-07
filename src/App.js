import React from 'react';
import { ApolloProvider } from '@apollo/client';
import GraphQLClient from './graphQL/ApolloClient';
import TestingPage from "./components/TestingPage/TestingPage";

function App() {
  const client = GraphQLClient();

  return (
    <ApolloProvider client={client}>
      <TestingPage />
    </ApolloProvider>
  );
}

export default App;