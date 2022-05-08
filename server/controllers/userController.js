
module.exports={
    
    register:(req,res,next)=>{
console.log("==========================");
console.log(req.params);

console.log(req.body);
res.send({"fff":"ffff"})
console.log("==========================");
}
}