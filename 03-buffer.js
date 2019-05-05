// buffer主要处理二进制数据

const buf1= Buffer.alloc(10) // 开辟内存空间，存取二进制函数，对C语言浅层封装
// console.log(Buffer)
// poolSize: 8192,
// from: [Function],
// alloc: [Function],
// allocUnsafe: [Function],
// allocUnsafeSlow: [Function],
// isBuffer: [Function: isBuffer],
// compare: [Function: compare],
// isEncoding: [Function],
// concat: [Function],
// byteLength: [Function: byteLength],
console.log(buf1)

const buf2= Buffer.from([1,2,3]) // 二进制
console.log(buf2)

const buf3= Buffer.from('BUFFER创建方法') // 二进制
console.log(buf3.toString('utf-8'))

buf1.write('hello')
console.log('buf1:', buf1.toString('utf-8'))

const buf4 = Buffer.concat([buf1, buf3])
console.log('buf4:', buf4.toString('utf-8'))
console.log('buf4:', buf4.toJSON())
