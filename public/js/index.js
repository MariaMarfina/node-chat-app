var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Maria',
        text: 'Hooray-hooray'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnectsd from server');
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
});

// 2 events -
// newMessage(from server, params: from, text, createdAt. Got new message and object print in the browser) and
// createMessage, data: from, text
