const  http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
  // console.log(req, res)
  const { url, method, headers } = req
  // console.log(url, method, headers) // 用浏览器发请求，会请求两次，包含favicon.ico
  // res.end('htllo worldd')
  if (url === '/' && method === 'GET') {
    // 返回一个静态页面
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-type': 'text/plain;charset=utf-8'}) // 设置charset=utf-8，汉字可以正常显示，否则乱码
        res.end('Server Error 服务器错误')
      }
      res.statusCode = 201
      res.setHeader('Content-type', 'text/html')
      res.end(data)
    })
  } else if (url === '/users' && method === 'GET') {
    // 返回JSON数据
    res.writeHead(200, {'Contetn-type': 'application/json'})
    res.end(JSON.stringify({name: 'qinjing'}))
  } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
    fs.createReadStream('.' + url).pipe(res) // 文件流引入res
  }
})
server.listen(3000)
// 利用http实现express功能，思路：
// 1、http实现一个请求，就是一个if语句；判断内容相同，然后做一些事，多个请求，写法累赘
// 2、将判断项和函数作为一个对象，放入一个数组中，然后循环数组，找到需要执行项，执行函数
