/************************************/
/*           DEPENDENCIES           */
/************************************/
import * as types from '../constants/action.types';
import { Action } from '../actions/ui.action';


/************************************/
/*            INTERFACES            */
/************************************/

export interface IUiState {
    openRealTimeSection: boolean;
    openBaselineSection: boolean;
}

/************************************/
/*          DEFAULT STATE           */
/************************************/

const defaultState: IUiState = {
    openRealTimeSection: false,
    openBaselineSection: false
};

// -----------------------------------


/** 
 * @desc This function takes UI actions and return a new state 
 * @param {IUiState} [state=defaultState] 
 * @param {Action} action 
 * @returns {IUiState} 
 */
export default function (state: IUiState = defaultState, action: Action): IUiState {

    switch (action.type) {

        /***********************************/
        /*            UI ACTIONS           */
        /***********************************/

        case types.OPEN_REALTIME_SECTION: {
            return {...state, openRealTimeSection: true};
        }

        case types.CLOSE_REALTIME_SECTION: {
            return {...state, openRealTimeSection: false};
        }

        case types.OPEN_BASELINE_SECTION: {
            return {...state, openBaselineSection: true};
        }

        case types.CLOSE_BASELINE_SECTION: {
            return {...state, openBaselineSection: false};
        }
            
        default:
            return state;  
    }
}
