export class User {
    readonly login: string;
    readonly password: string;

    constructor(login: string, password: string) {
        this.login = login;
        this.password = password;
    }

    getEmail() {
        return this.login;
    }

    getPassword() {
        return this.password;
    }
}
