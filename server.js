const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 9000;
const timestamp = require("./server/timestamp");
const routes = require("./server/timestamp");

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.resolve(__dirname,'public')));

app.get('/',function(req,res){
    res.render('index',{name:'Timestamp'});
});
app.get('/:query',timestamp);


app.listen(port, () => {
  console.log(`Server starts at ${port}`);
});