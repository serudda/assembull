/********************************/
/*         DEPENDENCIES         */
/********************************/
import * as React from 'react';
import { graphql, compose, ChildProps } from 'react-apollo';

import { Part } from '../../models/part/part.model';

import RealTimeSensorList from '../common/RealTimeSensorList/RealTimeSensorList';
import { UPDATE_COMBINATION_MUTATION } from '../../models/combination/combination.mutation';
import { GET_ALL_THINGS_QUERY } from '../../models/thing/thing.query';

// -----------------------------------


/********************************/
/*      INTERFACES & TYPES      */
/********************************/

/* Own Props */
type RealTimeSensorListContainerProps = {
    parts: Array<Part>;
};

type LocalStates = { 
    combinationsUpdated: Array<{
        id: number,
        distance: string
    }>;
};


/***********************************************/
/*              CLASS DEFINITION               */
/***********************************************/
class RealTimeSensorListContainer 
extends React.Component<ChildProps<RealTimeSensorListContainerProps, {}>, LocalStates> {

    
    /********************************/
    /*         CONSTRUCTOR          */
    /********************************/
    constructor() {
        /* NOTE: No hay necesidad de pasar 'props' en el constructor 
        si desea utilizarlo en otros lugares. Porque React lo configuró 
        automáticamente para usted.
        reference: http://cheng.logdown.com/posts/2016/03/26/683329 */
        super();

        this.state = {
            combinationsUpdated: []
        };
        
        // Bind methods
        this._handleClick = this._handleClick.bind(this);
        this._handleChange = this._handleChange.bind(this);

    }


    /********************************/
    /*       PRIVATE METHODS        */
    /********************************/

    /**
     * @desc HandleChange
     * @method _handleChange
     * @example this._handleChange()
     * @private 
     * @returns {void}
     */
    private _handleChange (e: any) {
        e.preventDefault();
        let target = e.target;
        let value = target.value;
        let combinationId = target.getAttribute('data-id');
        
        // INPUT - NEW DISTANCE
        let newCombination = {
            distance: value,
            id: combinationId
        };

        // Save combination updated in Local State
        this.setState(prevState => ({
            combinationsUpdated: [...prevState.combinationsUpdated, newCombination]
        }));
        
    }

    /**
     * @desc HandleClick
     * @method _handleClick
     * @example this._handleClick()
     * @private 
     * @returns {void}
     */
    private _handleClick (e: any) {
        e.preventDefault();
        this._saveDistances();
    }


    /**
     * @desc Save Distances
     * @method _saveDistances
     * @example this._saveDistances()
     * @private 
     * @returns {void}
     */
    private _saveDistances() {
        /* 
            Select each combination in order to validate if the distance is 
            into min and max range
        */
        this.state.combinationsUpdated.forEach(combination => {
             
             // INPUT - NEW DISTANCE
            let input = {
                distance: combination.distance,
                id: combination.id
            };

            this.props.mutate({
                variables: {input},
                refetchQueries: [{ query: GET_ALL_THINGS_QUERY }],
            }).then(
                () => {
                    // tslint:disable-next-line:no-console
                    console.log('DISTANCE UPDATED', input);   
                }
            );

        });
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
            <section className="RealTimeSensorListContainer container">             

                {/* Title */}
                <div className="row mb-4">
                    <div className="col text-center">
                        <h3>
                            Real-Time Sensor Manage
                        </h3>
                    </div>
                </div>{/* Real-time sensor ranges list */}
                <RealTimeSensorList parts={parts} onInputChange={this._handleChange}/>

                <hr className="borderStyle-dashed mb-5" />

                {/* Save new distances */}
                <div className="row mb-5">
                    <div className="col">
                        <button className="btn btn-success btn-lg btn-block"
                                onClick={this._handleClick}>
                            Save
                        </button>
                    </div>
                </div>

            </section>
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
)(RealTimeSensorListContainer);