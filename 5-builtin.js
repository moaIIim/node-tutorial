// OS MODULE

const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`The system uptime is ${os.uptime()}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS)


// PATH MODULE

const path = require('path')

const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)


// FS MODULE SYNC

const fs = require('fs')

const readFileSync = fs.readFileSync
const writeFileSync = fs.writeFileSync

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log('starting task')

writeFileSync('./content/result-sync.txt', `here is the result: ${first}, ${second}`, {flag:'a'})

console.log('finished task moving onto next one')

// FS MODULE ASYNC

const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8', (err, result) => {
    if (err) {
        return console.log(err)
    }
    const first = result
    readFile('./content/second.txt', 
    'utf8', 
    (err, result) => {
        if (err) {
            return console.log(err)
        }
        const second = result
        writeFile(
            './content/result-async.txt', 
            `Here: ${first}, ${second}`, 
            {flag:'a'}, 
            (err, result) => {
                if (err) {
                   return console.log(err)
                }
                console.log(result)
            })
    })
})
