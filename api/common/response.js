//const constant = require("./message");

//json format to send error reponse
function error400(e, res){
    res.status(400).send({
        "code": 400,
        "status": "ERROR",
        "message": "Bad request" + " ("+e["message"]+")"
    });
}

//json format to send reponse
function message(res, code, status, message, data) {
    let flag = code;
    if(code == 200 || code == 201)
    {
        flag = 0;
    }
    res.status(code).send({
        "code": flag, 
        "status" : status,
        "message" : message,
        "data": data
    });
}

module.exports = {error400, message};