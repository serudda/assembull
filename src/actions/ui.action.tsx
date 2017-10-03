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

export interface IOpenBaselineSectionAction {
    type: types.OPEN_BASELINE_SECTION;
    openBaselineSection: boolean;
}

export interface ICloseBaselineSectionAction {
    type: types.CLOSE_BASELINE_SECTION;
    openBaselineSection: boolean;
}


export type Action = 
    // UI interaction
    IOpenRealTimeSectionAction 
|   ICloseRealTimeSectionAction
|   IOpenBaselineSectionAction
|   ICloseBaselineSectionAction;



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


/**
 * @desc Return an action type, OPEN_BASELINE_SECTION 
 * to indicate that user wants opening Baseline Sensor Section
 * @function openBaselineSectionAction
 * @returns {Action}
 */
export const openBaselineSectionAction = (): Action => {
    return {
        type: types.OPEN_BASELINE_SECTION,
        openBaselineSection: true
    };
};


/**
 * @desc Return an action type, CLOSE_BASELINE_SECTION 
 * to indicate that user wants closing Baseline Sensor Section
 * @function closeBaselineSectionAction
 * @returns {Action}
 */
export const closeBaselineSectionAction = (): Action => {
    return {
        type: types.CLOSE_BASELINE_SECTION,
        openBaselineSection: false
    };
};

