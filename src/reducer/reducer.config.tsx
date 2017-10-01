/************************************/
/*           DEPENDENCIES           */
/************************************/
import { combineReducers } from 'redux';
import { ApolloClient } from 'react-apollo';


// Initialize Client
const client = new ApolloClient();

/************************************/
/*            INTERFACES            */
/************************************/
// Root State: Contains every Reducer State on the Store
export interface IRootState {
    apollo: any;
}

/************************************/
/*           ROOT REDUCER           */
/************************************/
// Combines all reducers to a single reducer function
const rootReducer = combineReducers<IRootState>({
    apollo: client.reducer(),
});

/* Export */
export default rootReducer;