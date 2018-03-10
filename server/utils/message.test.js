var expect = require('expect');

var {generateMessage} = require('./message');

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
