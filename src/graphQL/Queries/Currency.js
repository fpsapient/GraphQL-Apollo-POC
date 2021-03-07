import { gql } from '@apollo/client';

export const getCurrency = gql`
  query GetCurrency($id: ID!) {
    Currency (id: $id){
      country
      code
      name
      id
    }
  }
`;

export const getCurrencies = gql`
  query GetCurrencies {
    allCurrencies {
      id
      name
      code
      country
    }
  }
`;
