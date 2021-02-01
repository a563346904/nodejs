<!--
 * @Author: your name
 * @Date: 2021-01-29 10:32:35
 * @LastEditTime: 2021-01-29 10:40:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \learn\nodejs\websocket\README.MD
-->
#### 前言
什么是`Websocket`呢  
我们都知道在`http`协议中,客户端与服务端的通信是靠客户端发起请求,然后服务器端,收到请求再进行回应,这个过程中,客户端是主动的,服务器端是被动的.`Websocket`协议就不一样了,它是基于TCP的一种新的网络协议,它与`Http`协议不同之处就在于`Websocket`能实现服务器端主动推送消息到客户端,服务器端能与客户端都能发起通信。

