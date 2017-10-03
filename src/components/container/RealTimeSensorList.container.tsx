/********************************/
/*         DEPENDENCIES         */
/********************************/
import * as React from 'react';
import { graphql, compose, ChildProps } from 'react-apollo';
import { connect, Dispatch } from 'react-redux';

import { Part } from '../../models/part/part.model';

import { closeRealTimeSectionAction } from '../../actions/ui.action';

import RealTimeSensorList from '../common/RealTimeSensorList/RealTimeSensorList';
import { UPDATE_COMBINATION_MUTATION } from '../../models/combination/combination.mutation';
import { GET_ALL_THINGS_QUERY } from '../../models/thing/thing.query';
import { IUiState } from '../../reducers/ui.reducer';
import { IRootState } from '../../reducers/reducer.config';

// -----------------------------------


/********************************/
/*      INTERFACES & TYPES      */
/********************************/

/* Own Props */
type RealTimeSensorListContainerProps = {
    parts: Array<Part>;
};

/* Mapped State to Props */
type IStateProps = {
    ui: IUiState;
};

/* Mapped Dispatches to Props */
type IDispatchProps = {
    actions: {
        ui: {
            closeRealTimeSection: () => void;
        }
    };
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
extends React.Component<ChildProps<RealTimeSensorListContainerProps & IStateProps & IDispatchProps, {}>, LocalStates> {

    
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
        // e.preventDefault();
        let target = e.target;
        let value = target.value || 0;
        let combinationId = target.getAttribute('data-id');
        
        // INPUT - NEW DISTANCE
        let newCombination = {
            distance: value,
            id: combinationId
        };

        // this.setState({[combinationId]: e.target.value});

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

        this._closeRealTimeSection();

    }


    /**
     * @desc Close Real Time section
     * @method _closeRealTimeSection
     * @example this._closeRealTimeSection()
     * @private 
     * @returns {void}
     */
    _closeRealTimeSection() {
        this.props.actions.ui.closeRealTimeSection();
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
/*      MAP STATE TO PROPS      */
/********************************/
function mapStateToProps(state: IRootState): IStateProps {
    return {
        ui:  state.ui
    };
}

/********************************/
/*     MAP DISPATCH TO PROPS    */
/********************************/
function mapDispatchToProps(dispatch: Dispatch<IRootState>): IDispatchProps {
    return {
        actions: {
            ui: {
                closeRealTimeSection: () => dispatch(closeRealTimeSectionAction())
            }
        }
    };
}


/********************************/
/*           MUTATION           */
/********************************/
const updateCombinationMutation = graphql<any, any>(
    UPDATE_COMBINATION_MUTATION
);


/********************************/
/*         REDUX CONNECT        */
/********************************/
const realTimeSensorListContainerConnect = connect(mapStateToProps, mapDispatchToProps); 


/*         EXPORT          */
/***************************/
export default compose(
    updateCombinationMutation,
    realTimeSensorListContainerConnect
)(RealTimeSensorListContainer);