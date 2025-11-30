export class UserModel {
    userId: string;
    email: string;
    name: string;

    constructor(userId: string, email: string, name: string) {
        this.userId = userId;
        this.email = email;
        this.name = name;
    }
}
