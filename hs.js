let op=require('fs');

op.readFile('hs.txt','utf-8',(err,data)=>{
    if(err){
        console.log('error');
        return;
    }
    //ovde samo zgrabis i ubacis u p5 
    
})

op.writeFile('hs.txt','utf-8',(err,data)=>{
    if(err){
        console.log('error');
        return;
    }
    //ovde manipulisi hs znas i sam kad imas novi koristi pomocnu prom i max
})