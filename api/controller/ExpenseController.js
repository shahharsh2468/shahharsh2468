const app  = require('../app');
const response = require('../common/response');
const Expenses = require('../model/ExpenseModel');

app.post("/expenses",async(req,res)=> {
    try{
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
        if(Object.keys(req.body).length == 0){
            return response.message(res,400,"ERROR",'no data in body'); //if there is no content in body then this error will generate
        }else{
            const expense = new Expenses(req.body);
            const createExpenses = await expense.save();
            response.message(res,201,"SUCCESS",'Expense created successfully',createExpenses); //successfully created new customer
        }
    } catch(e) {
        response.error400(e,res);
    }
})

app.get("/expenses",async(req,res)=> {
    try{
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
        const user_id = req.query.user_id;
        const expense = await Expenses.find({"user_id":user_id});
        if(Object.keys(expense).length == 0){
            return response.message(res,200,"SUCCESS",'No Data Available'); //if there is no content in body then this error will generate
        }
        response.message(res,200,"SUCCESS",'Expense fetched successfully',expense); //successfully created new customer
    } catch(e) {
        response.error400(e,res);
    }
})