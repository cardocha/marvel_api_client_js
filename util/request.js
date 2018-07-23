class ApiRequest {

    constructor(parameters) {
        this._parameters = parameters;
    }

    get parameters() {
        return this._parameters;
    }

    set parameters(value) {
        this._parameters = value;
    }

    parseParameters() {
        let strParameters = "?";
        for (let paramName in this._parameters) {
            strParameters += paramName + '=' + this.parameters[paramName] + "&";
        }
        return strParameters;
    }

    execute(type, url, callback) {
        let request = new XMLHttpRequest();
        request.open(type, url + this.parseParameters(), true);
        request.onreadystatechange = function () {
            if(request.readyState === 4 && request.status === 200) {
                callback(request.response);
            }
        };
        request.send();
    }
}