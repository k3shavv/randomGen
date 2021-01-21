const express=require('express');
const mongoose=require('mongoose');
const connectDB=require('./config/db')
const app=express();
require('dotenv').config();

console.log(process.env);

/*setting up express app*/ 
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log(`listening at port ${PORT}`));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

/*connecting to database*/
connectDB();

app.use('/',require('./controllers/getData.js'));

