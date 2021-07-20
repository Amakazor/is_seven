import type { NextApiResponse } from 'next';
import type  NumberApiRequest  from '../../interfaces/numberApiRequest';
import COMPARISON_TYPE from '../../enums/comparisonType';
import ErrorResponse from '../../interfaces/errorResponse';

export default (request: NumberApiRequest, response: NextApiResponse) => {
    if (isNaN(request.query.number)) {
        const errorResponse: ErrorResponse = {
            title: "Bad argument",
            status: 400,
            code: 1002,
            detail: "Argument 'number' was not a number",
            instance: request.url
        }

        response.status(errorResponse.status).json(errorResponse);
    } else if (request.query.comparison && !Object.values(COMPARISON_TYPE).includes(request.query.comparison)) {
        const errorResponse: ErrorResponse = {
            title: "Bad argument",
            status: 400,
            code: 1003,
            detail: "Argument 'comparison' value is incorrect. Possible values are: " + Object.values(COMPARISON_TYPE).join(', '),
            instance: request.url
        }

        response.status(errorResponse.status).json(errorResponse);
    } else {
        response.status(200);

        switch (request.query.comparison) {
            case COMPARISON_TYPE.close:
                response.json({value: Math.abs(request.query.number - 7) < 0.0001})
                break;
            case COMPARISON_TYPE.round:
                response.json({value: Math.round(request.query.number) == 7})
                break;
            case COMPARISON_TYPE.exact:
            default:
                response.json({value: request.query.number == 7})
                break;
        }
    }
}