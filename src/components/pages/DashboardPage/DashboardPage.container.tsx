/********************************/
/*         DEPENDENCIES         */
/********************************/
import * as React from 'react';
import { graphql, compose, ChildProps } from 'react-apollo';
import { connect, Dispatch } from 'react-redux';

// Las dependencias de mis queries, mutations, subscriptions
import { GET_THING_BY_ID_QUERY, GetByIdResponse } from '../../../models/thing/thing.query';

import { openRealTimeSectionAction,
         closeRealTimeSectionAction,
         openBaselineSectionAction, 
         closeBaselineSectionAction } from '../../../actions/ui.action';

import { IRootState } from '../../../reducers/reducer.config';
import { IUiState } from '../../../reducers/ui.reducer';

import ProgressListContainer from '../../container/ProgressList.container';
import RealTimeSensorListContainer from '../../container/RealTimeSensorList.container';
import BaselineSensorListContainer from '../../container/BaselineSensorList.container';
// -----------------------------------


/********************************/
/*      INTERFACES & TYPES      */
/********************************/

/* Own Props */
type DashboardPageProps = {/**/};

/* Mapped State to Props */
type IStateProps = {
    ui: IUiState;
};

/* Mapped Dispatches to Props */
type IDispatchProps = {
    actions: {
        ui: {
            openRealTimeSection: () => void;
            closeRealTimeSection: () => void;
            openBaselineSection: () => void;
            closeBaselineSection: () => void;
        }
    };
};

/* Input Props Query */
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
extends React.Component<ChildProps<DashboardPageProps & IStateProps & IDispatchProps, GetByIdResponse>, {}> {
    
    
    /********************************/
    /*         CONSTRUCTOR          */
    /********************************/
    constructor() {    
        super();

        // Bind methods
        this._handleClick = this._handleClick.bind(this);
    }


    /********************************/
    /*       PRIVATE METHODS        */
    /********************************/

    /**
     * @desc Handle Real-time sensor manage Click
     * @method _handleClick
     * @example this._handleClick()
     * @private 
     * @returns {void}
     */
    _handleClick = (e: any) => {
        e.preventDefault();
        let target = e.target;
        let section = target.getAttribute('data-section');

        const BASELINE_SENSOR_LIST_CONTAINER = 'BaselineSensorListContainer';
        const REALTIME_SENSOR_LIST_CONTAINER = 'RealTimeSensorListContainer';

        switch (section) {
            case BASELINE_SENSOR_LIST_CONTAINER:
                this._openBaselineSection();
                break;
            case REALTIME_SENSOR_LIST_CONTAINER:
                this._openRealTimeSection();
                break;
        
            default:
                break;
        }
    }

    /**
     * @desc Open Real-time section
     * @method _openRealTimeSection
     * @example this._openRealTimeSection()
     * @private 
     * @returns {void}
     */
    _openRealTimeSection() {
        this.props.actions.ui.openRealTimeSection();
        this.props.actions.ui.closeBaselineSection();
    }

    /**
     * @desc Open Baseline section
     * @method _openBaselineSection
     * @example this._openBaselineSection()
     * @private 
     * @returns {void}
     */
    _openBaselineSection() {
        this.props.actions.ui.openBaselineSection();
        this.props.actions.ui.closeRealTimeSection();
    }

    
    /********************************/
    /*        RENDER MARKUP         */
    /********************************/
    render() {


        /*       PROPERTIES       */
        /**************************/
        const {...data} = this.props.data;
        const{...ui} = this.props.ui;


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
                {!ui.openRealTimeSection && !ui.openBaselineSection && <ProgressListContainer parts={data.thing.parts}/>}
                {ui.openRealTimeSection  && !ui.openBaselineSection && <RealTimeSensorListContainer parts={data.thing.parts}/>}
                {ui.openBaselineSection  && !ui.openRealTimeSection && <BaselineSensorListContainer parts={data.thing.parts}/>}

                <hr className="m-4" />
                
                {/* Go to Real-time section and Baseline section */}
                <div className="row">
                    <div className="col text-center">
                        <div>
                            <a data-section="RealTimeSensorListContainer"
                                href="#"
                                className="color-silver fontSize-xl fontWeight-2 textDecoration-underline"
                                onClick={this._handleClick}>
                                Real-time sensor manage
                            </a>
                        </div>
                        <div>
                            <a data-section="BaselineSensorListContainer"
                                href="#"
                                className="color-silver fontSize-xl fontWeight-2 textDecoration-underline"
                                onClick={this._handleClick}>
                                Baseline sensor manage
                            </a>
                        </div>
                    </div>
                </div>
            </div>
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
                openRealTimeSection: () => dispatch(openRealTimeSectionAction()),
                closeRealTimeSection: () => dispatch(closeRealTimeSectionAction()),
                openBaselineSection: () => dispatch(openBaselineSectionAction()),
                closeBaselineSection: () => dispatch(closeBaselineSectionAction())
            }
        }
    };
}


/********************************/
/*            QUERY             */
/********************************/
const getUiComponentByIdQuery = graphql<GetByIdResponse,  DashboardPageProps>(
    GET_THING_BY_ID_QUERY, {
        options:  (ownProps: InputProps) => (
            { 
                variables: 
                 { 
                    id:  ownProps.match.params.id 
                } 
            }
        )
    }
);


/********************************/
/*         REDUX CONNECT        */
/********************************/
const dashboardPageConnect = connect(mapStateToProps, mapDispatchToProps); 


/*         EXPORT          */
/***************************/
export default compose(
    getUiComponentByIdQuery,
    dashboardPageConnect
)(DashboardPage);