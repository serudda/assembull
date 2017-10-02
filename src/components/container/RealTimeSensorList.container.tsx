/********************************/
/*         DEPENDENCIES         */
/********************************/
import * as React from 'react';
import { graphql, compose, ChildProps } from 'react-apollo';

import { Part } from '../../models/part/part.model';

import RealTimeSensorList from '../common/RealTimeSensorList/RealTimeSensorList';
import { UPDATE_COMBINATION_MUTATION } from '../../models/combination/combination.mutation';

// -----------------------------------


/********************************/
/*      INTERFACES & TYPES      */
/********************************/

/* Own Props */
type RealTimeSensorListContainerProps = {
    parts: Array<Part>;
};


/***********************************************/
/*              CLASS DEFINITION               */
/***********************************************/
class RealTimeSensorListContainer 
extends React.Component<ChildProps<RealTimeSensorListContainerProps, {}>, {}> {

    
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
        // Save changes 
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
            <section className="RealTimeSensorListContainer container">             

                {/* Title */}
                <div className="row mb-4">
                    <div className="col text-center">
                        <h3>
                            Real-Time Sensor Manage
                        </h3>
                    </div>
                </div>{/* Real-time sensor ranges list */}
                <RealTimeSensorList parts={parts}/>

                <hr className="borderStyle-dashed mb-5" />

                {/* Save new distances */}
                <div className="row mb-5">
                    <div className="col">
                        <button className="btn btn-success btn-lg btn-block"
                                onClick={() => this._handleClick(this)}>
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