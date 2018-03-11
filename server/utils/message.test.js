var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    //without done
    it('should generate correct message object', () => {
        //generateMessage(from, text)
        //store response in var
        //assert from and text match
        //assert createdAt is number (toBeA)

        var from = 'Maria';
        var text = 'Test message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location oblect', () => {
        var from = 'testUser';
        var lat = 59.91509560000001;
        var lon = 30.4800903;
        var message = generateLocationMessage(from, lat, lon);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            url: `https://www.google.com/maps?q=${lat},${lon}`
        });
    });
});
