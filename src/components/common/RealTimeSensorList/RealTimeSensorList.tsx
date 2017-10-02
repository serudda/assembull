/************************************/
/*           DEPENDENCIES           */
/************************************/
import * as React from 'react';

import { Part as PartModel } from '../../../models/part/part.model';


/********************************/
/*      INTERFACES & TYPES      */
/********************************/

/* Own Props */
type RealTimeSensorListProps = {
    parts: Array<PartModel>;
};


/**
 * @desc Represent Real-Time Sensor List Component
 * @function RealTimeSensorList
 * @type STATELESS FUNCTIONAL COMPONENT (SFC)
 * @returns component view
 */
const RealTimeSensorList: React.SFC<RealTimeSensorListProps> = ({ parts }) => {


    /*        FUNCTIONS        */
    /***************************/

    
    /*         MARKUP          */
    /***************************/
    
    return (
        <div className="RealTimeSensorList">
            {parts.map((part: PartModel) => (
                <div key={part.id} className="row">
                    <div className="col text-center">
                        <span className="ml-2 color-silver fontSize-xxl">
                            R-{part.label}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
    
};


/* Export */
export default RealTimeSensorList;