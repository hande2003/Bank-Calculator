require('dotenv').config();
const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.status(200).sendFile(process.cwd() + '/views/mainPage.html');
})

app.get("/FDInterestCalculator", (req, res)=>{
    res.status(200).sendFile(process.cwd() + '/views/FDInterestCalculator.html');
})

app.get("/loanCalculator", (req, res)=>{
    res.status(200).sendFile(process.cwd() + '/views/loanCalculator.html');
})

app.use('/public', express.static(process.cwd()+'/public'));

app.listen('3000', ()=>{
    console.log('App is listening at port 3000');
})