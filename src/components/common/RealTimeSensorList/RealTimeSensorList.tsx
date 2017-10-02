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
type RealTimeSensorListProps = {
    parts: Array<PartModel>;
    onInputChange: (e: any) => void;
};


/**
 * @desc Represent Real-Time Sensor List Component
 * @function RealTimeSensorList
 * @type STATELESS FUNCTIONAL COMPONENT (SFC)
 * @returns component view
 */
const RealTimeSensorList: React.SFC<RealTimeSensorListProps> = ({ parts, onInputChange }) => {
    
    /*         MARKUP          */
    /***************************/
    
    return (
        <div className="RealTimeSensorList">

            <div className="row">
                <div className="col">

                    <div className="d-flex flex-wrap align-items-center justify-content-center mb-3">
                        <div className="d-flex flex-wrap align-items-center fontSize-xxl">
                            <form className="form-inline">
                                <p className="color-slate m-0 mr-3" style={{width: '80px'}}>Parts</p>
                                <div className="form-group text-center mb-0">
                                    <p className="color-slate m-0" style={{width: '100px'}}>Distance</p>
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
                                        <p className="color-silver mr-3" style={{width: '90px'}}>R - {combination.label}</p>
                                        <div className="form-group">
                                            <input  data-id={combination.id} 
                                                    type="text" 
                                                    value={combination.distance} 
                                                    style={{width: '100px'}} 
                                                    onChange={onInputChange}/>
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
export default RealTimeSensorList;