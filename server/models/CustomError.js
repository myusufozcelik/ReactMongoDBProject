
 export default class CustomError extends Error {

    constructor(message, errorCode = 0, statusCode = 0, category = 0) {
        super(message)
        this.errorCode = errorCode;
        this.statusCode = statusCode;
        this.category = category;
    }
}