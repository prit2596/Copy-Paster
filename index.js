var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    //console.log('a user connected');

    socket.on('content', function(msg){
        //console.log(msg);
        io.emit('content', msg);
    })
    socket.on('disconnect', function(){
        //console.log('user disconnected');
    });
});
var port = process.env.PORT || 5000; 
http.listen(port, function(){
    console.log('listening on *: ' + port);
});