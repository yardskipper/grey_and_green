const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.send("Got to the local copy");
    console.log('got here');
})

app.listen(3000, ()=>{
    
    console.log('Listening on 3000');
})