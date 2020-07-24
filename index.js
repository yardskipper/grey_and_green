const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.send("updated...Got to the local copy");
    console.log('updated...got here');
})

app.listen(3000, ()=>{
    
    console.log('Updated...Listening on 3000');
})