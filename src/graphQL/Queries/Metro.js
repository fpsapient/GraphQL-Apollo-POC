// import { gql } from '@apollo/client';

import gql from 'graphql-tag'

export const getMetro = gql`
  query GetMetro($id: ID!) {
    Metro(id: $id) {
      id
      metro
      domain {
        domainName
        title {
          titleName
          role {
            roleName
          }
        }
      }
    }
  }
`;

export const getMetros = gql`
  query GetMetros {
    allMetros {
      id
      metro
      domain {
        domainName
        title {
          titleName
          role {
            roleName
          }
        }
      }
    }
  }
`;
