/************************************/
/*           DEPENDENCIES           */
/************************************/
import * as React from 'react';

import { Part as PartModel } from '../../../models/part/part.model';
import { Combination as CombinationModel, Status } from '../../../models/combination/combination.model';


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
    function assignStatus(combinations: Array<CombinationModel>): string {
        /* TODO: Mejorar el proceso, aprovechar el uso de ES6 para la asignacion de variables
           y los IF lineales */
        const OK_CLASS = 'color-positive fontSize-xxl fa fa-check-circle';
        const WARNING_CLASS = 'color-warning fontSize-xxl fa fa-exclamation-circle';
        const NORMAL_CLASS = 'color-silver fontSize-xxl fa fa-circle-o';
        let statusClass = NORMAL_CLASS;

        combinations.forEach(combination => {
            switch (combination.status) {
                case Status.OK:
                    statusClass = OK_CLASS;
                    break;
                case Status.WARNING:
                    statusClass = WARNING_CLASS;
                    break;
                case Status.NORMAL:
                    statusClass = NORMAL_CLASS;
                    break;
                default:
                    statusClass = NORMAL_CLASS;
                    break;
            }
        });

        return statusClass;
    }

    
    /*         MARKUP          */
    /***************************/
    return (
        <div className="ProgressLists">
            {parts.map((part: PartModel) => (
                <div key={part.id} className="row">
                    <div className="col text-center">
                    <i className={assignStatus(part.combinations)}
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