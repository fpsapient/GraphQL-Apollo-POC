// import { gql } from '@apollo/client';

import gql from 'graphql-tag'

// export const getAssignment = gql`
//   query GetAssignment($id: ID!) {
//     Assignment(id: $id) {
//       id
//       type
//     }
//   }

// `;

export const getAssignments = gql`
query GetAssignments {
  allAssignments {
    id
    type
  }
}
`;
