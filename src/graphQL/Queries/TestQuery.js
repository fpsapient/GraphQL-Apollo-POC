import gql from 'graphql-tag'

export const testingQuery = gql`
query refDatabyKey($key: String) {
        currency{
            id
            country
            currency_name
            currency_code
        }
    }
`;




