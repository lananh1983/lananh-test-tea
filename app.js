const dayjs = require('dayjs')

dayjs().second(30).valueOf() // => new Date().setSeconds(30)
dayjs().second() // => new Date().getSeconds()

console.log(dayjs().second(30).valueOf())
