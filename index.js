const express = require('express')
const app = express();
const path = require('path');

app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))
app.get('/feedback',(req,res) =>{
    res.render('Feedback')
})
app.get('/register',(req,res)=>{
    res.render('Signup')
})
app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/g',(req,res)=>{
    res.render('partials/video')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/bot',(req,res)=>{
    res.render('bot')
})
app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/l',(req,res)=>{
    res.render('partials/nav')
})
app.get('/but',(req,res)=>{
    res.render('partials/botbutton')
})


app.listen(3000,()=>{
    console.log("Listening To Port 3000");
})