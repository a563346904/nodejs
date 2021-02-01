var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
/*定义用户数组*/
var users = [];
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	/*是否是新用户标识*/
	var isNewPerson = true; 
	/*当前登录用户*/
    var username = null;
	/*监听登录*/
	socket.on('login',function(data){
        console.log('login', data) 
        for(var i=0;i<users.length;i++){
            if(users[i].username === data.username){
                  isNewPerson = false
                  break;
            }else{
                  isNewPerson = true
            }
        }

        if(isNewPerson){
            username = data.username
            users.push({
              username:data.username
            })
            /*登录成功*/
            socket.emit('loginSuccess',data)
            /*向所有连接的客户端广播add事件*/
            io.sockets.emit('add',data)
        }else{
            /*登录失败*/
            socket.emit('loginFail','')
        }
    })
    
    socket.on('sendMessage',function(data){
        io.sockets.emit('receiveMessage',data)
    })

})

http.listen(3000, function(){
  console.log('listening on *:3000');
});