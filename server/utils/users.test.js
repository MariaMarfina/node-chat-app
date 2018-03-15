const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Natalya',
            room: 'Admin Room'
        }, {
            id: '2',
            name: 'Dosya',
            room: 'Guest Room'
        }, {
            id: '3',
            name: 'Agnessia',
            room: 'Admin Room'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Mari',
            room: 'Admin Room'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '29303184';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '1'
        var user = users.getUser(userId);

        expect(user.id).toEqual(userId);
    });

    it('should not find user', () => {
        var userId = '213415'
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return names for Admin Room', () => {
        var userList = users.getUserList('Admin Room');

        expect(userList).toEqual(['Natalya', 'Agnessia']);
    });

    it('should return names for Guest Room', () => {
        var userList = users.getUserList('Guest Room');

        expect(userList).toEqual(['Dosya']);
    });
});
