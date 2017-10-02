/********************************/
/*         DEPENDENCIES         */
/********************************/
import * as React from 'react';
import { graphql, compose, ChildProps } from 'react-apollo';

import { UPDATE_COMBINATION_MUTATION } from '../../models/combination/combination.mutation';
import { GET_ALL_THINGS_QUERY } from '../../models/thing/thing.query';

import { Status } from '../../models/combination/combination.model';
import { Part } from '../../models/part/part.model';

import ProgressList from '../common/ProgressList/ProgressList';

// -----------------------------------


/********************************/
/*      INTERFACES & TYPES      */
/********************************/

/* Own Props */
type ProgressListContainerProps = {
    parts: Array<Part>;
};


/***********************************************/
/*              CLASS DEFINITION               */
/***********************************************/
class ProgressListContainer 
extends React.Component<ChildProps<ProgressListContainerProps, {}>, {}> {

    
    /********************************/
    /*         CONSTRUCTOR          */
    /********************************/
    constructor() {
        /* NOTE: No hay necesidad de pasar 'props' en el constructor 
        si desea utilizarlo en otros lugares. Porque React lo configuró 
        automáticamente para usted.
        reference: http://cheng.logdown.com/posts/2016/03/26/683329 */
        super();
        
        // Bind methods
        this._handleClick = this._handleClick.bind(this);

    }


    /********************************/
    /*       PRIVATE METHODS        */
    /********************************/

    /**
     * @desc HandleClick
     * @method _handleClick
     * @example this._handleClick()
     * @private 
     * @returns {void}
     */
    private _handleClick (e: any) {
        e.preventDefault();
        this._checkMyProgress();
    }


    /**
     * @desc Check Progress
     * @method _checkMyProgress
     * @example this._checkMyProgress()
     * @private 
     * @returns {void}
     */
    private _checkMyProgress() {

        // Select each part to see its combinations
        this.props.parts.forEach(part => {
            
            /* 
             Select each combination in order to validate if the distance is 
             into min and max range
            */
            part.combinations.forEach(combination => {
                
                if (combination.distance >= combination.min &&
                    combination.distance <= combination.max) {
                    
                    // STATUS OK
                    let input = {
                        status: Status.OK,
                        id: combination.id
                    };

                    this.props.mutate({
                        variables: {input},
                        refetchQueries: [ { query: GET_ALL_THINGS_QUERY }],
                    }).then(
                        () => {
                            // tslint:disable-next-line:no-console
                            console.log('STATUS UPDATED', input);   
                        }
                    );

                } else {
                    
                    // STATUS WARNING
                    let input = {
                        status: Status.WARNING,
                        id: combination.id
                    };

                    this.props.mutate({
                        variables: {input},
                        refetchQueries: [ { query: GET_ALL_THINGS_QUERY }],
                    }).then(
                        () => {
                            // tslint:disable-next-line:no-console
                            console.log('STATUS UPDATED', input);
                        }
                    );

                }

            });


        });
    }


    /********************************/
    /*       COMPONENTDIDMOUNT      */
    /********************************/
    componentDidMount() {   
        //
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
    /*        RENDER MARKUP         */
    /********************************/
    render() {


        /*       PROPERTIES       */
        /**************************/
        const {
            parts
        } = this.props;
                    
        
        /*         MARKUP          */
        /***************************/
        return (
            <div className="ProgressListContainer">
                
                {/* Progress List */}
                <ProgressList parts={parts}/>

                <hr className="m-4" />
                
                {/* Footer section */}
                <div className="row">
                    <div className="col text-center">

                        {/* Check my progress button */}
                        <button className="btn btn-primary btn-lg btn-block mb-2"
                                onClick={this._handleClick}>
                            Check my progress
                        </button>

                    </div>
                </div>

            </div>
        );


    }


}


/********************************/
/*           MUTATION           */
/********************************/
const updateCombinationMutation = graphql<any, any>(
    UPDATE_COMBINATION_MUTATION
);


/*         EXPORT          */
/***************************/
export default compose(
    updateCombinationMutation
)(ProgressListContainer);