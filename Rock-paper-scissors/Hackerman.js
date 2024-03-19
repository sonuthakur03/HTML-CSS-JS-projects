function hax (){
   let a = new Promise( (resolve,reject)=>{
   setTimeout(()=>{
    console.log("initializing hack");
  },2000);
  });
  /*await a; */
}
hax();