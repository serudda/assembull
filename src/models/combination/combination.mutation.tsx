/********************************/
/*         DEPENDENCIES         */
/********************************/
import gql from 'graphql-tag';



/********************************/
/*          MUTATIONS           */
/********************************/
export const UPDATE_COMBINATION_MUTATION = gql`
    mutation updateCombination($input: UpdateCombinationInput!){
        updateCombination(input: $input) {
          id
          min
        }
    }
`;



/*

UPDATE COMBINATION
mutation updateCombination($input: UpdateCombinationInput!){
    updateCombination(input: $input) {
      id
      status
    }
}

Query Variables:
{
  "input": {"id": 1, "status": "OK"}
}

*/