// web server code
// website starts here

// imports
const express = require('express');
const fileupload = require("express-fileupload");
const http = require('http')

const app = express();

app.use(fileupload({ parseNested: true }));
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', "/home/csi/Desktop/web-server/frontend/pages");

app.get('/', (req, res) => {
   res.render('index')
});



// sever starting ...
const server = http.Server(app);
const addr = "192.168.98.10"
const port = 8080;
server.listen(port, addr, () => {
    console.log('Server listening on '+ addr + ' port ' + port);
 });