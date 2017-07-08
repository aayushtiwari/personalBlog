var express=require('express');

var app=express();
var port=process.env.PORT||8888;
app.listen(port,
  function(){
console.log(`server is running at port :${port}`)
}
  );
