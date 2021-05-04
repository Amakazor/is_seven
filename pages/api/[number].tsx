import type { NextApiResponse } from 'next';
import type  NumberApiRequest  from '../../interfaces/numberApiRequest';
import MATCHING_TYPE from '../../enums/matchingType';
import ErrorResponse from '../../interfaces/errorResponse';

export default (request: NumberApiRequest, response: NextApiResponse) => {
    if (isNaN(request.query.number)) {
        const errorResponse: ErrorResponse = {
            title: "Bad argument",
            status: 400,
            detail: "Argument 'number' was not a number",
            instance: request.url
        }

        response.status(errorResponse.status).json(errorResponse);
    } else if (request.query.matching && !Object.values(MATCHING_TYPE).includes(request.query.matching)) {
        const errorResponse: ErrorResponse = {
            title: "Bad argument",
            status: 400,
            detail: "Argument 'matching' value is incorrect. Possible vallues are: " + Object.values(MATCHING_TYPE).join(', '),
            instance: request.url
        }

        response.status(errorResponse.status).json(errorResponse);
    } else {
        response.status(200);

        switch (request.query.matching) {
            case MATCHING_TYPE.close:
                response.json({value: Math.abs(request.query.number - 7) < 0.0001})
                break;
            case MATCHING_TYPE.round:
                response.json({value: Math.round(request.query.number) == 7})
                break;
            case MATCHING_TYPE.exact:
            default:
                response.json({value: request.query.number == 7})
                break;
        }
    }
}