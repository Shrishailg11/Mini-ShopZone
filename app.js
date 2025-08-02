const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const ownersRouter = require('./routes/owenersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');



const db = require('./config/mongoose-connection');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.use('/owners',ownersRouter);
app.use('/users',usersRouter);
app.use('/products',productsRouter);

app.get('/',(req,res)=>{
    res.send("Hey");
})

app.listen(3000);