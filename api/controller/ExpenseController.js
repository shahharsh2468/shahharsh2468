const app  = require('../app');
const response = require('../common/response');
const Expenses = require('../model/ExpenseModel');

app.post("/expenses",async(req,res)=> {
    try{
        if(Object.keys(req.body).length == 0){
            return response.message(res,400,"ERROR",'no data in body'); //if there is no content in body then this error will generate
        }else{
            const Expenses = new Expenses(req.body);
            const createExpenses = await Expenses.save();
            response.message(res,201,"SUCCESS",'Expense created successfully',createExpenses); //successfully created new customer
        }
    } catch(e) {
        response.error400(e,res);
    }
})

app.get("/expenses",async(req,res)=> {
    try{
        const user_id = req.query.user_id;
        const Expenses = await Expenses.find({"user_id":user_id});
        if(Object.keys(Expenses).length == 0){
            return response.message(res,200,"SUCCESS",'No Data Available'); //if there is no content in body then this error will generate
        }
        response.message(res,200,"SUCCESS",'Expense created successfully',createExpenses); //successfully created new customer
    } catch(e) {
        response.error400(e,res);
    }
})