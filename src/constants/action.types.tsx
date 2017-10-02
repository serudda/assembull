/**
 * @desc Action Types 
 * Naming convention: 
 * <VERB>_<NOUN>
 * e.g. GET_UICOMPONENT, ADD_TODO, GET_UICOMPONENT_FULFILLED
 * @type constants
 */


/* UI Actions Type */
export const OPEN_REALTIME_SECTION = 'OPEN_REALTIME_SECTION';
export type OPEN_REALTIME_SECTION = typeof OPEN_REALTIME_SECTION;

export const CLOSE_REALTIME_SECTION = 'CLOSE_REALTIME_SECTION';
export type CLOSE_REALTIME_SECTION = typeof CLOSE_REALTIME_SECTION;


/*
 * Es necesario crear un 'type' a cada constante si queremos asignarla despues a una interface
 *      export interface getUiComponent {
 *          type: types.GET_UICOMPONENT;
 *      }
 * 
 * Si no lo creamos, al querer hacer - type: types.GET_UICOMPONENT; daria error:
 * 
 * Namespace '"/Users/sergioruizdavila/Documents/Projects/react-redux-typescript/src/constants/action.types"' 
 * has no exported member 'GET_UICOMPONENT'.
 * 
 */