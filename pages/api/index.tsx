import type { NextApiRequest, NextApiResponse } from 'next';
import ErrorResponse from '../../interfaces/errorResponse';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const errorResponse: ErrorResponse = {
        title: "Missing argument",
        status: 400,
        detail: "A number argument was not provided",
        instance: request.url
    }

    response.status(errorResponse.status).json(errorResponse);
}