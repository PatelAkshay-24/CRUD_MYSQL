const express = require("express");
const bodyparser = require("body-parser");
const connect = require("./connection");
const app = express();
app.use(bodyparser.json());


//update 
app.get("/find", (req, res) => {
  connect.query("select * from student", (err, rows) => {
    if (err) {
      console.log("bhai maja nai aa raha");
      res.status(500).json("error");
    } else {
      console.log(rows);
      res.send(rows);
      return;
    }
  });
});

//ADD
app.post('/create',(req,res)=>{
  const add = [req.body.student_id,req.body.student_name,req.body.student_phone,req.body.student_department]

  connect.query("INSERT INTO `student` (student_id, student_name, student_phone,student_department) VALUES (?)",[add],(err,rows)=>{
    if(err){

      res.send('somthing wrong')
      console.log(err);

    }else{

      res.send('kam ho gaya')
      console.log(rows);

    }
  })
})

//DELETE
app.delete('/delete/:id',(req,res)=>{

  connect.query("DELETE FROM `student` WHERE student_id=?",[req.params.id],(err,rows)=>{
    if(err){
      res.send('something err')
      console.log(err);
    }else{

      res.send('its working')
      console.log(rows);

    }
  })
})

//update
app.put("/update", (req,res)=>{
  student = req.body

  connect.query('UPDATE `student` SET ? WHERE student_id='+student.student_id,[student],(err,rows)=>{
      if(err){
        res.send(err)
          console.log(" somthing error",err);
      }else{
          console.log(rows);
          return res.send(rows)
      }
  })
})


app.listen(3600, async () => {
  console.log("serer start on port 3600");
});
