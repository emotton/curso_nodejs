const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
    if(request.url == "/banana"){
        response.end('Banana eh voce')
    } else  if(request.url == "/abobrinha"){
        response.end('desculpe so tenho xuxu')
    }
    console.log(request.url)
    // response.end('Hello Node.js Server do Akio ! '+request.url)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})