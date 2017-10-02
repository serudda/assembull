/************************************/
/*           DEPENDENCIES           */
/************************************/
import * as React from 'react';

import { Part as PartModel } from '../../../models/part/part.model';


/********************************/
/*      INTERFACES & TYPES      */
/********************************/

/* Own Props */
type ProgressListProps = {
    parts: Array<PartModel>;
};


/**
 * @desc Represent Progress List Component
 * @function ProgressList
 * @type STATELESS FUNCTIONAL COMPONENT (SFC)
 * @returns component view
 */
const ProgressList: React.SFC<ProgressListProps> = ({ parts }) => {


    /*        FUNCTIONS        */
    /***************************/
    function assignStatus(): string {
        return 'color-silver fontSize-xxl fa fa-circle-o';
    }

    
    /*         MARKUP          */
    /***************************/
    return (
        <div className="ProgressLists">
            {parts.map((part: PartModel) => (
                <div key={part.id} className="row">
                    <div className="col text-center">
                    <i className={assignStatus()}
                       aria-hidden="true" />
                        <span className="ml-2 color-silver fontSize-xxl">
                            Part {part.label} position
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
    
};


/* Export */
export default ProgressList;