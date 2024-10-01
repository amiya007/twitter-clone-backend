import express from 'express';
import bodyParser from 'body-parser';
import { connect } from './src/config/database.js';
import apiRoutes from "./src/routes/index.js";
import passport from 'passport';

import { passportAuth } from "./src/config/jwt-middleware.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api', apiRoutes);
// app.use('/', (req,res) => {
//     res.json({message: 'kjdnj'})
// })


app.listen(3000, async () => {
    console.log(`Server started on `);
    await connect();
    console.log('MongoDB connected');
});     