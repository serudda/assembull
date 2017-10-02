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
}

/************************************/
/*          DEFAULT STATE           */
/************************************/

const defaultState: IUiState = {
    openRealTimeSection: false
};

// -----------------------------------


/** 
 * @desc This function takes Color Palette actions and return a new state 
 * @param {IColorPaletteState} [state=defaultState] 
 * @param {Action} action 
 * @returns {IColorPaletteState} 
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
            
        default:
            return state;  
    }
}
