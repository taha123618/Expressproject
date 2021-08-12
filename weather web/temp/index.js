const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const port =process.env.PORT || 9000;

// use satic content 
const saticPath = path.join(__dirname,"../public");
// partial 
const srcviewPath = path.join(__dirname,"../temp/views");
// use parial template engine 
const partials_path = path.join(__dirname,"../temp/partial");

app.use(express.static(saticPath));
app.set('view engine', 'hbs');
app.set('views',srcviewPath);
hbs.registerPartials(partials_path);
// routhing
app.get("/", (req,res) =>{
    res.render("index.hbs");
});

app.get("/about", (req,res) =>{
   res.render("about.hbs");
    });

    app.get("/weather", (req,res) =>{
        res.render("weather.hbs");
        });
        
// error page 
app.get("*",(req,res) => {
    res.render("404.hbs",{errmsg : 'Opps! Page Not Found'})
    }); 


// listing
app.listen(port, () =>{
console.log(`listing.... to ${port}`)   
});