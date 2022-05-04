//This is starting an http server, doesn't do anything just a server
const http = require('http');

//init websockets server which allows the handshake
const webSocketServer = require('websocket').server;
let connection = null;

const httpserver = http.createServer((req, res) => {
  console.log('We have received a request');
});

//Here we make the httpserver able to turn into a websockets server
//if requested
const websocket = new webSocketServer({
  httpServer: httpserver,
});

websocket.on('request', (request) => {
  //this will send the switching protocol from the websockets server
  (connection = request.accept(null, request.origin)),
    //to open a connection from client: let ws = new WebSocket('ws://localhost:5003')
    connection.on('open', (e) => console.log('Opened connection')),
    connection.on('close', (e) => console.log('Closed connection')),
    //When getting a message, print it, to send msg you use ws.send(msg) - in the client
    connection.on('message', (message) => {
      console.log(`Recevied message: ${message.utf8Data}`);
    });
  sendEvery5Seconds();
});

httpserver.listen(5003, () =>
  console.log('My server is listening on port 5003')
);

//Making a loop message sending a random number every 5 seconds to the client
function sendEvery5Seconds() {
  connection.send(`Message: ${Math.random() * 10}`);
  setTimeout(sendEvery5Seconds, 5000);
}
