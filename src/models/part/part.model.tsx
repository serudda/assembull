/********************************/
/*         DEPENDENCIES         */
/********************************/
import { Combination } from '../combination/combination.model';


/**
 * @desc Specifies the Part type (model) to identify
 * its properties, methods, etc.
 * @type Part
 */
export type Part = {
    id: number | null;
    label: string;
    combinations: Array<Combination>;
};