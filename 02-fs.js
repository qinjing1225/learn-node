// const fs = require('fs')
// const data = fs.readFileSync('./package.json') // 得到二进制格式数据（buffer）使用toString转化,
// console.log(data.toString('utf-8'))

// 异步
// fs.readFile('./package.json', (err, data) => {
//   console.log(data.toString('utf-8'))
// })

// promise形式
// const { promisify } = require('util')
// const readFile = promisify(fs.readFile) // 将fs.readFile处理成promise对象
// readFile('./package.json')
// .then(data => {
//   console.log(data.toString('utf-8'))
// })

// async形式
(async () => {
  const fs = require('fs')
  const { promisify } = require('util')
  const readFile = promisify(fs.readFile) // 将fs.readFile处理成promise对象
  const data = await readFile('./package.json')
  console.log(data.toString('utf-8'))

})()
