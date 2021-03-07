import { gql } from '@apollo/client';

export const getSkill = gql`
   query GetSkill($id: ID!) {
      Skill(id: $id) {
          id
          type
        }
      }
    `;

export const getSkills = gql`
  query GetSkills {
    allSkills {
      id
      type
    }
  }
`;

// export const getToDos = gql`
//   query ToDos {
//     todo {
//       id
//       title
//     }
//   }
// `;
// export default getSkills;
