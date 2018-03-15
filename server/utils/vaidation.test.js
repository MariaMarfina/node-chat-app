const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string objects', () => {
        var name = 123;
        var room = 321321321321321321321;
        var isRealName = isRealString(name);
        var isRealRoom = isRealString(room);

        expect(isRealName).toBe(false);
        expect(isRealRoom).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var name = '  ';
        var room = '                      ';
        var isRealName = isRealString(name);
        var isRealRoom = isRealString(room);

        expect(isRealName).toBe(false);
        expect(isRealRoom).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var name = 'Admin';
        var room = '  Test ';
        var isRealName = isRealString(name);
        var isRealRoom = isRealString(room);

        expect(isRealName).toBe(true);
        expect(isRealRoom).toBe(true);
    })
});
