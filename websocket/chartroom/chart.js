/*
 * @Author: your name
 * @Date: 2021-01-29 10:40:00
 * @LastEditTime: 2021-01-29 18:08:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodejs\websocket\chartroom\chart.js
 */
var socket = io('ws://localhost:3000');
/*定义用户名*/
var uname = null;

/*登录*/
$('.login-btn').click(function () {
  uname = $.trim($('#loginName').val());
  if (uname) {
    /*向服务端发送登录事件*/
    socket.emit('login', { username: uname })
  } else {
    alert('请输入昵称')
  }
})