// Require express dependency to include express functionality
const express = require('express');
const bodyParser = require('body-parser');
const { dirname } = require('path');
const path = require('path');
// const mongoose = require("mongoose");
// const userRoutes = require('./routes/registerRoutes');
// const registerRoutes = require('./routes/registerRoutes');
// const loginRoutes = require('./routes/loginRoutes');
// const salesRoutes = require('./routes/salesRoutes');
// const passport = require('passport')
// const User = require('./models/adminModel')
// //const Sales = require('./models/salesModel')
// // Creates an express server
const server = express();
// //Setting the Engine view which contains the pug file
// server.set('view engine', 'pug');

server.use(express.static('public'));
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({ extended: true }));
// server.use('/', userRoutes)
// server.use(passport.initialize())
// server.use('/', registerRoutes)
// server.use('/login', loginRoutes)
// server.use('/form', loginRoutes)
// server.use('/', loginRoutes)
// server.use('/addsales', salesRoutes)

// passport.use(User.createStrategy())
// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())


// mongoose.connect("mongodb://localhost:27017/BodaBoda-Banja", { useNewUrlParser: true, useUnifiedTopology: true },
//     function (err) {
//         if (err) throw err;
//         console.log('Successfully connected');

//     });
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
server.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'loginn.html'))
})
server.get('/info',(req,res)=>{
    res.sendFile(path.join(__dirname,'info.html'))
})
server.get('/preview',(req,res)=>{
    res.sendFile(path.join(__dirname,'preview.html'))
})

server.listen(3004, () => {
    console.log('Listening on 3004');

})