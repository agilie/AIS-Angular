import {User} from "./user";

describe('User test', () => {

    let user: User;

    beforeEach(() => {
        user = new User('Sergey', 'qqqqqqqq');
    });

    it('should have a name', () => {
        expect(user.username).toBe('Sergey');
    });

    it('should check password', () => {
        expect(user.validatePassword('qqqqqqqq')).toBeTruthy();
        expect(user.validatePassword('11111111')).toBeFalsy();
    });

});