/********************************/
/*         DEPENDENCIES         */
/********************************/
import { Part } from '../part/part.model';


/**
 * @desc Specifies the Thing type (model) to identify
 * its properties, methods, etc.
 * @type Thing
 */
export type Thing = {
    id: number | null;
    name: string;
    parts: Array<Part>;
};