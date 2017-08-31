export class User {

    private _username;
    private passwordHash;

    constructor(name: string, password: string) {
        this._username = name;
        this.password = password;
    }

    get username() {
        return this._username;
    }

    set password(password: string) {
        this.passwordHash = this.securePassword(password);
    }

    validatePassword(password) {
        console.log('::: Validating password :::');
        return this.passwordHash == this.securePassword(password);
    }

    private securePassword(password :string) {
        return atob(password);
    }

    getSecureData(password: string) {
        if (this.validatePassword(password)) {
            return {secure: true};
        }
        return null;
    }

}