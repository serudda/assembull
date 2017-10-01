/**
 * @desc Specifies the Combination type (model) to identify
 * its properties, methods, etc.
 * @type Combination
 */
export type Combination = {
    id: number | null;
    label: string;
    min: number;
    max: number;
    distance: number;
};