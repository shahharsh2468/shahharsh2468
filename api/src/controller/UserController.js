const app  = require('../app');
const response = require('../common/response');
const Users = require('../model/UserModel');

// Create New Customer
app.post("/users",async(req,res)=> {
    try{
        return res.send("hello");
        if(Object.keys(req.body).length == 0){
            return response.message(res,400,"ERROR",'no data in body'); //if there is no content in body then this error will generate
        }else{
            const User = new Users(req.body);
            const createUser = await User.save();
            response.message(res,201,"SUCCESS",'user created successfully',createUser); //successfully created new customer
        }
    }catch(e){
        response.error400(e,res);
    }
})

app.get("/users/:id",async(req,res)=>{
    try{
        const user = await Users.findOne({"user_name": req.params.id}).select(["user_name","email","phone"]);
        if(!user) {
            return response.message(res,404,"ERROR",'user not found'); //if customer not found
        } else {
            return response.message(res,200,"SUCCESS",'user found',user);
        }
    } catch(e) {
        response.error400(e,res);
    }
})