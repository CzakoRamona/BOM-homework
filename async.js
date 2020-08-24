console.log('Hello there!');

setTimeout(function(){
 console.log('Hello from set timeout!');
}, 0);

/*for( var i=0; i<100; i++)
console.log('Hello again!');*/

var timeOutId = setTimeout(function(){
    console.log("Second timeout");
    
   }, 1000);
   console.log(timeOutId);

   clearTimeout(timeOutId); 