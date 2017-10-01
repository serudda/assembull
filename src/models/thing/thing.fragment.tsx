/********************************/
/*         DEPENDENCIES         */
/********************************/
import gql from 'graphql-tag';


/********************************/
/*            QUERIES           */
/********************************/

export const THING_FRAGMENT = gql`
    fragment ThingFragment on Thing {
        id
        name
        __typename
        parts {
            id
            label
            __typename
            combinations {
                id
                label
                min
                max
                distance
                __typename
            }
        }
    }
`;