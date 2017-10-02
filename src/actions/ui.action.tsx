/************************************/
/*           DEPENDENCIES           */
/************************************/
import * as types from '../constants/action.types';


/************************************/
/*            INTERFACES            */
/************************************/
export interface IOpenRealTimeSectionAction {
    type: types.OPEN_REALTIME_SECTION;
    openRealTimeSection: boolean;
}

export interface ICloseRealTimeSectionAction {
    type: types.CLOSE_REALTIME_SECTION;
    openRealTimeSection: boolean;
}


export type Action = 
    // UI interaction
    IOpenRealTimeSectionAction 
|   ICloseRealTimeSectionAction;



/************************************/
/*             ACTIONS              */
/************************************/


/**
 * @desc Return an action type, OPEN_REALTIME_SECTION 
 * to indicate that user wants opening Real-Time Sensor Section
 * @function openRealTimeSectionAction
 * @returns {Action}
 */
export const openRealTimeSectionAction = (): Action => {
    return {
        type: types.OPEN_REALTIME_SECTION,
        openRealTimeSection: true
    };
};


/**
 * @desc Return an action type, CLOSE_REALTIME_SECTION 
 * to indicate that user wants closing Real-Time Sensor Section
 * @function closeRealTimeSectionAction
 * @returns {Action}
 */
export const closeRealTimeSectionAction = (): Action => {
    return {
        type: types.CLOSE_REALTIME_SECTION,
        openRealTimeSection: false
    };
};

