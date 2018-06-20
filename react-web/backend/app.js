const express = require('express');
const bodyParser = require('body parser');
const cors = require('cors');

var Client = require('node-rest-client').Client;

var client = new Client();

const  app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.post('/getlocations',(req,res)=>{
    const me = req.body.city;

    client.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query="+me+"top+sights&key=AIzaSyDTIZ7li0HeSX_l5b7oxONASS_XkqfNpkE", function (data, response) {
        // parsed response body as js object
        // console.log(data);
        // raw response
        // console.log(response);
        res.json({msg:true,data:data})
    });


})
app.listen(3001,()=>{
    console.log('listening to port 3001')
})