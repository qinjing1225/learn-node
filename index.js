// const express = require('express') // 如何使用http写一个服务器，不用express
const express = require('./kpress.js')
const app = express()
// express服务器使用方法
app.get('/', (req, res) =>{
  res.end('hellowordlllllllll')
})
app.get('/users', (req, res) => {
  res.end(JSON.stringify({name: 'jingljl'}))
})
app.listen(3001, ()=>{
  console.log('app listen at 3001')
})
