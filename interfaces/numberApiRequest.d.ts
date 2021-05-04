import type { NextApiRequest } from 'next';
import MatchingType from '../enums/matchingType'


export default interface NumberApiRequest extends NextApiRequest {
    query: {
        number: any,
        matching?: MatchingType
    }
}