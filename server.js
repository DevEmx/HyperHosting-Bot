const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('Hyper Bot Online ');
});
 
function keepAlive() {
   server.listen(3000, () => { console.log("Hyper bot is ready" + Date.now()) });
}

module.exports = keepAlive;