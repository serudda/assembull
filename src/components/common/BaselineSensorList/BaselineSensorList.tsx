/************************************/
/*           DEPENDENCIES           */
/************************************/
import * as React from 'react';

import { Part as PartModel } from '../../../models/part/part.model';
import { Combination as CombinationModel } from '../../../models/combination/combination.model';

/********************************/
/*      INTERFACES & TYPES      */
/********************************/

/* Own Props */
type BaselineSensorListProps = {
    parts: Array<PartModel>;
    onMinInputChange: (e: any) => void;
    onMaxInputChange: (e: any) => void;
};


/**
 * @desc Represent Real-Time Sensor List Component
 * @function BaselineSensorList
 * @type STATELESS FUNCTIONAL COMPONENT (SFC)
 * @returns component view
 */
const BaselineSensorList: React.SFC<BaselineSensorListProps> = ({ parts, onMinInputChange, onMaxInputChange }) => {
    
    /*         MARKUP          */
    /***************************/
    
    return (
        <div className="BaselineSensorList">

            <div className="row">
                <div className="col">

                    <div className="d-flex flex-wrap align-items-center justify-content-center mb-3">
                        <div className="d-flex flex-wrap align-items-center fontSize-xxl">
                            <form className="form-inline">
                                <p className="color-slate m-0 mr-3" style={{width: '80px'}}>Parts</p>
                                <div className="form-group text-center mb-0">
                                    <p className="color-slate m-0" style={{width: '100px'}}>Min</p>
                                </div>
                                <div className="form-group mx-sm-3 text-center mb-0">
                                    <p className="color-slate m-0" style={{width: '100px'}}>Max</p>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Parts List Generator */}
                    {parts.map((part: PartModel) => (
                        part.combinations.map((combination: CombinationModel) => (
                            <div key={combination.id} className="d-flex flex-wrap align-items-center justify-content-center mb-3">
                                <div className="d-flex flex-wrap align-items-center fontSize-xxl">
                                    <form className="form-inline">
                                        <p className="color-silver mr-3" style={{width: '80px'}}>{combination.label}</p>
                                        <div className="form-group">
                                            <input  data-id={combination.id}
                                                    data-key="min" 
                                                    type="text" 
                                                    value={combination.min} 
                                                    style={{width: '100px'}} 
                                                    onChange={onMinInputChange}/>
                                        </div>
                                        <div className="form-group mx-sm-3">
                                            <input  data-id={combination.id} 
                                                    data-key="max"
                                                    type="text" 
                                                    value={combination.max} 
                                                    style={{width: '100px'}} 
                                                    onChange={onMaxInputChange}/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        ))
                    ))}

                </div>
            </div>
            
        </div>
    );
    
};


/* Export */
export default BaselineSensorList;