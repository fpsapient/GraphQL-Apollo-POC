import React from 'react';
import { useQuery } from '@apollo/client';
import { testingQuery } from '../../graphQL/Queries/TestQuery';

const TestingPage = () => {
  const graphqlRes = useQuery(testingQuery, {
    variables: {
      key: 'currency',
    },
  });

  console.log(graphqlRes, 'graphqlResponse');

  return (
    <div>{graphqlRes?.data}</div>
  );
};

export default TestingPage;
