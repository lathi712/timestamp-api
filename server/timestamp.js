const moment = require("moment");

module.exports = (req,res)=>{
    console.log(req.params);
  var timestamp = req.params.query;
  if(isNaN(timestamp)){
      if(moment(timestamp,'MMMM DD YYYY').isValid()){
          var unixFormat = new Date(timestamp).getTime()/1000;
          var normalFormat  = moment(timestamp).format('MMMM DD YYYY');
            res.json({"unix":unixFormat,"natural":normalFormat});
      }else{
          res.json({"unix":null,"natural":null});
      }
  }else{
      if(moment.unix(timestamp).isValid()){
          var unixFormat = moment.unix(timestamp).format('MMMM DD YYYY');
          res.json({"unix":unixFormat,"natural":timestamp});
      }else{
          res.json({"unix":null,"natural":null});
      }
  }
  
};