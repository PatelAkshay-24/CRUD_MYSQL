const sql = require('mysql2')


//connect database
var db = sql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"School"
})
db.connect( (error) => {
    if(error){
        console.log("connection failed");
    }
    else{
        console.log("success fully database connect ");
    }
    
})

module.exports = db