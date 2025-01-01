import userModel from "../model/userModel.js";  // Ensure path is correct


import utils from "../utils/utils.js";

const register=async (req,res,next)=>{
    try {
        // firstname ,lastname ,email,password from req.body
        const {firstName ,lastName ,email,password} =req.body
        // creaNe user
        const newUser = await userModel.create({
            firstName ,lastName ,email,password
        })
        // create token
        const token = utils.signToken({id:newUser.id,role:newUser.role})
        // send response
        
        res.status(201).json({
            token,
            status:'succes',
            message:'user register successfully',
            newUser
        })
     
    } catch (error) {
        console.log(error)
    }
}
const login=async (req,res,next)=>{
try {
    
    const {email,password,role}=req.body

    const user = await userModel.findOne({email}).select("+password")
    console.log(user)
    // check user existan
    if(!user){

        return res.status(404).json({
            status:"fail",
            message:"user not found"
})
    }


 // check if passwored is matched
 if( !(await user.comparePassword(password,user.password))){
    // console.log('password:',password)
    // console.log('user password:',user.password)
    return (
        res.status(400).json({
            status:'failed',
            message:'Incorrect password,please try again'
        })
    ) }   
    

    const token = utils.signToken(user.id, user.role);

    // const token = utils.signToken({id:user.id,role:user.role})
    //send response
    console.log(token)
    return (
        res.status(200).json({
            
            token,
            status:'success',
            message:'user logged successfully'
        })
    )

} catch (error) {
    console.log(error)
    
}
}
const getAllUser= async(req,res,next)=>{
    console.log(res.locals.id)
    const users = await userModel.find()

    //send response
    return (
        res.status(200).json({
            status:'success',
            users
        })
    )
}
export default { register, login, getAllUser };