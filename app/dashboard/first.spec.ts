import {User} from "./user";
import {TestBed} from "@angular/core/testing";
import {ShotService} from "../services/shot.service";

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

    it('should return secure data', () => {
        spyOn(user, 'validatePassword').and.returnValue(true);
        expect(user.getSecureData('8275482735')).not.toBeNull();
        expect(user.validatePassword).toHaveBeenCalledTimes(1);
    })

});

describe('Test real Angular service', () => {

    beforeEach(() => TestBed.configureTestingModule({
        providers: [ShotService]
    }));

    fit('should return result when method called', () => {
        const shotService = TestBed.get(ShotService);
        expect(shotService.getData()).toBeTruthy();
    });


});