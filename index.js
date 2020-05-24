/* Puzzle Test */
/* @auther satyanarayana g */
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
let port = 3003;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// initial test 
app.get('/', (req,res)=>{
    console.log('Hello');
})


let output = [];

// Puzzle result   
app.post('/puzzleResult', (req,res)=>{
    console.log(req.body.puzzleInput.length)
    if(req.body.puzzleInput.length === 81){
        req.body.puzzleInput.forEach((r ,i)=>{
            console.log(typeof r  +'-----'+ i);
            if(typeof r === 'number'){
                output.push(r+1)
            }
            else{
                output.push(r)
            }
        })
        res.json({"status": 0,"message" : "success", "data": output})
    }else{
        res.json({"status": 1,"message" : "it's not 9*9 input invalid please check"})
    }
})

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))