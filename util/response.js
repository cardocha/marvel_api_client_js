class ApiResponse {

    constructor(response) {
        this._response = response;
    }

    parse(apiResponseType) {
        switch (apiResponseType) {
            case Response.HEROS_REQUEST :
                return JSON.parse(this._response).data.results;
        }
    }
}