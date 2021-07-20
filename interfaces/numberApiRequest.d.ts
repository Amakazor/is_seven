import type { NextApiRequest } from 'next';
import COMPARISON_TYPE from '../enums/comparisonType'


export default interface NumberApiRequest extends NextApiRequest {
    query: {
        number: any,
        comparison?: COMPARISON_TYPE
    }
}