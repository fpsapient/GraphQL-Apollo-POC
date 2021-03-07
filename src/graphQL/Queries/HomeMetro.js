import { gql } from '@apollo/client';

export const getHomeMetro = gql`
  query GetHomeMetro($id: ID!) {
    HomeMetro(id: $id) {
      id
      metro
    }
  }
`;

export const getHomeMetros = gql`
  query GetHomeMetros {
    allHomeMetros {
      id
      metro
    }
  }
`;
