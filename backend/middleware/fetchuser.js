var jwt=require('jsonwebtoken');
const JWT_SECRET="dhana@dhana";
const fetchuser=(req,res,next)=>{
    const token=req.header("auth-token");
    if(!token){
        return res.status(401).send({error:"please authenticate using a valid string"});
    }
    try {
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user;
        next();
    } catch (error) {
        return res.status(401).send({error:"please authenticate using a valid string"});
    }
}
module.exports=fetchuser;
