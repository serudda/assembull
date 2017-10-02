/********************************/
/*         DEPENDENCIES         */
/********************************/
import * as React from 'react';
import { graphql, compose, ChildProps } from 'react-apollo';

// Las dependencias de mis queries, mutations, subscriptions
import { GET_THING_BY_ID_QUERY, GetByIdResponse } from '../../../models/thing/thing.query';

import ProgressListContainer from '../../container/ProgressList.container';
// -----------------------------------


/********************************/
/*      INTERFACES & TYPES      */
/********************************/

type DashboardPageProps = {/**/};

type InputProps = {
    match: {
        params: {
            id: number
        }
    }
};


/***********************************************/
/*              CLASS DEFINITION               */
/***********************************************/
class DashboardPage 
extends React.Component<ChildProps<DashboardPageProps, GetByIdResponse>, {}> {
    
    
    /********************************/
    /*         CONSTRUCTOR          */
    /********************************/
    constructor() {
        
        super();
        
        // Bind methods
        // this.toggleChecked = this.toggleChecked.bind(this);
        // this._handleChange = this._handleChange.bind(this);

    }


    /********************************/
    /*       COMPONENTDIDMOUNT      */
    /********************************/
    componentDidMount() {   
        /* NOTE: Se invoca una sola vez, 
        inmediatamente DESPUES de que el renderizado inicial ocurra */
    }


    /********************************/
    /*      COMPONENTWILLMOUNT      */
    /********************************/
    componentWillMount() {  
        /* NOTE: Se invoca una sola vez, 
        inmediatamente ANTES de que el renderizado inicial ocurra */
    }


    /********************************/
    /*      COMPONENTWILLUNMOUNT    */
    /********************************/
    componentWillUnmount() {        
        /* NOTE: Se invoca inmediatamente ANTES de que 
            el el componente es desmontado del el DOM */
    }


    /********************************/
    /*        PUBLIC METHODS        */
    /********************************/

    /**
     * @desc Method description
     * @method toggleChecked
     * @example this.toggleChecked()
     * @public
     * @returns {void}
     */
    toggleChecked(): void {
        //
    }


    /********************************/
    /*       PRIVATE METHODS        */
    /********************************/

    /**
     * @desc Method description
     * @method _handleChange
     * @example this._handleChange()
     * @private 
     * @returns {void}
     */
    _handleChange = (event: Event) => {
        event.preventDefault();
    }

    
    /********************************/
    /*        RENDER MARKUP         */
    /********************************/
    render() {


        /*       PROPERTIES       */
        /**************************/
        /* TODO: Estudiar por que si hago la destructuracion como en 
        Stylepills, me lanza error de type */
        const {...data} = this.props.data;


        /*       VALIDATIONS       */
        /***************************/
        if (data.loading) {
            return (<div>Loading</div>);
        }

        if (data.error) {
            return (<p>{data.error.message}</p>);
        }

        if (data.thing === null) {
            return (<div>No data</div>);
        }
            
        
        /*         MARKUP          */
        /***************************/
        return (
            <div className="DashboardPage">
                <ProgressListContainer parts={data.thing.parts}/>
            </div>
        );


    }

}


/********************************/
/*            QUERY             */
/********************************/
const getUiComponentByIdQuery = graphql<GetByIdResponse, DashboardPageProps>(
    GET_THING_BY_ID_QUERY, {
        options: (ownProps: InputProps) => (
            { 
                variables: 
                { 
                    id: ownProps.match.params.id 
                } 
            }
        )
    }
);


/*         EXPORT          */
/***************************/
export default compose(
    getUiComponentByIdQuery
)(DashboardPage);