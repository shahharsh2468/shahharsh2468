const mongoose = require("mongoose");
const db_connect_url = 'mongodb://127.0.0.1:27017/expense_management';

// Connection creation and check if db not exist it will create new db or use existing one
mongoose.set("strictQuery", false);
mongoose.connect(db_connect_url, {    
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log("Connection is successful")   
}).catch((err) => {
    console.log("No connection");
});