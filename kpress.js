const http = require('http')
const url = require('url')
class Application {
  constructor () {
    this.router = []
  }
  get(path, handler) {
    this.router.push({
      path,
      method: 'get',
      handler
    })
  }
  listen () {
    // 生成一个服务器，在router数组中找到与请求相同的请求，然后执行handler
    const server = http.createServer((req, res)=>{
      const {pathname} = url.parse(req.url, true)
      for (const item of this.router) {
        const {path, method, handler} = item
        if (pathname === path && req.method.toLowerCase() === method){
          return handler(req, res)
        }
      }
    })
    server.listen(...arguments)
    // console.log(arguments)
  }
}

module.exports = function CreatApplication () {
  return new Application
}
