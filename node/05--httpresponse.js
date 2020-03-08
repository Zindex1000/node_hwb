//核心模块：http--创建编写服务器
//加载http核心模块
//http.createserver
var http = require('http')

var server = http.createServer()

server.on('request',function(request,response){
	console.log('收到客户端请求,请求路径是：'+request.url)
	if(request.url==='/index'){
		//response.write()
		response.end('首页')
	}
	if(request.url==='/login'){
		//response.write()
		response.end('登录')
	}
	else{
	//response.write()
	//response.write('  nodejs')
	response.end('hello nodejs world')
	}
})

//绑定端口号,启动服务器
server.listen(3000,function(){
	console.log("服务器启动成功，可以通过http://127.0.0.1:3000/login来访问")
})