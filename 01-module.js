// 与前端不同
// js核心语法不变
// 前端BOM DOM
// 后端fs http buffer event os

// nodemon    :nodemon ***(文件名字)   文件有改变，重启文件

// mkdir ***      创建文件夹
// code .    在编辑器打开

// 内置模块，无需安装，引入直接使用

const os = require('os')
const men = os.freemem() / os.totalmem() * 100
console.log(`内存占用率：${men}`)

// 第三方模块，需要npm install安装，然后引入使用
const cpuStat = require('cpu-stat')
cpuStat.usagePercent((err, percent) => {
  console.log(`内存占用率：${percent}`)
})

// 导出用 module.exports
