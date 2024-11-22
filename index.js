const express = require('express');
const app = express();

const path = require('path');


const {engine} = require('express-handlebars');

app.engine(
      "handlebars",  
      engine({
        layoutsDir: path.join(__dirname, "views"),
        partialsDir: path.join(__dirname, "views"  ),
      })
    );

    app.set("view engine", "handlebars");
    
    app.set("views", path.join(__dirname, "views"));

    app.get('/', (req,res)=>{
        res.render('home',{
            content:'home page',
            message:"welcome to Home page"
       
        })
    } )





    app.get('/about', (req,res)=>{
        res.render('about',{
            content:'about page',
            message:"Welcome to About page",
            array:[1,2,3,4]
        })
    })




app.listen(4000,(req,res)=>{
 console.log('Server is running on port', 4000)
})

