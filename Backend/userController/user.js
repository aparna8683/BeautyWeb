import User from "../Models/user";
export const signup= async (req, res)=>{
    try{ 
            const {name, email, password}=req.body;

        if(! name || !email || !password)
        { 
            return res.status(400).json({message:'Missing required fields'})

        } 
    }
catch(error){

}

}