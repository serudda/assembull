/************************************/
/*           DEPENDENCIES           */
/************************************/
import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import App from './components/pages/App/App';
import configureStore from './store/store.config';


// Initialize apollo client - DEV
/*const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'http://localhost:4000/graphql'
    }),
});*/

// Initialize apollo client - PRD
const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'https://assembull-server.herokuapp.com/graphql'
    }),
});

// Initialize store
const store = configureStore();


/*         RENDER         */
/**************************/
render((
    <ApolloProvider store={store} client={client}>
        <Router>
            <App />
        </Router>
    </ApolloProvider>
), document.getElementById('root'));