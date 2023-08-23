const os = require("os")

//get userinfo
const user = os.userInfo()
console.log(user);

//get system runtime in seconds

console.log(`the system runtime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)