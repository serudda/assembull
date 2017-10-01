/********************************/
/*         DEPENDENCIES         */
/********************************/
import gql from 'graphql-tag';

import { THING_FRAGMENT } from './thing.fragment';
import { Thing as ThingModel } from './thing.model';



/********************************/
/*            QUERIES           */
/********************************/

export const GET_ALL_THINGS_QUERY = gql`
    query getAllThings {
        things {
            ...ThingFragment
        }
    }
    ${THING_FRAGMENT}
`;

/*        TYPE         */
/***********************/

export type GetAllResponse = {
    things: Array<ThingModel>;
};


// --------------------------------


export const GET_THING_BY_ID_QUERY = gql`
    query getThingById ($id: ID!) {
        thing(id: $id) {
            ...ThingFragment
        }
    }
    ${THING_FRAGMENT}
`;

/*        TYPE         */
/***********************/

export type GetByIdResponse = {
    thing: ThingModel;
};