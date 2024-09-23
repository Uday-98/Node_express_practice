const os =require('os');

//------------------check system bit (32/64)---------------/
//console.log(os.arch());

//------------------check system memory free (ram) in bites ---------------/
//console.log(os.freemem());

//------------------check system memory free (ram) in byte convert in byte ---------------/
//console.log(os.freemem()/(1024*1024*1024));


//------------------check total ram ---------------/
//console.log(os.totalmem()/(1024*1024*1024));


//------------------check system host name ---------------/
console.log(os.hostname());