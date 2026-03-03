export class InternalServerError extends Error {
    constructor({ cause }) {
        super("An unexpected internal error ocurred.", {
            cause: cause,
        });
        this.name = "InternalServerError";
        this.action = "Please contact support.";
        this.status_code = 500;
    }

    toJSON() {
        return {
            name: this.name,
            message: this.message,
            action: this.action,
            status_code: this.status_code,
        }
    }
}