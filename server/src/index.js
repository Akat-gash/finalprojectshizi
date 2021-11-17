const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("./config/databaseCon");
const authRouter = require('./routes/auth.api');
const userJobsRouter = require('./routes/user_jobs.api');
const jobsRouter = require('./routes/jobs.api');
const userProfileRouter = require('./routes/user_profile.api');
const mwIsAuth = require('./middleware/header_authentication');
const { SECRET_KEY, STATUS_ERROR } = require('./common/constantValues');

// Start databaseCon connection
mongoose.connection.on('error', console.error.bind(console, 'databaseCon connection error!!!'));
const app = express();

dotenv.config();

// CONFIG
/////////////////////////////////////////
app.set(SECRET_KEY, process.env.SECRET_KEY || 'MWAsecureCode');

////////////////////MIDDLEWARE/////////////////////
app.use(require('cors')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//////////////////ROUTING///////////////////////
app.use('/auth', authRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/u/jobs', mwIsAuth, userJobsRouter);
app.use('/api/u/profile', mwIsAuth, userProfileRouter);


////////////////////ERROR HANDLER/////////////////////
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        status: STATUS_ERROR,
        payload: {
            error: err
        }
    });
});


//////////////////START SERVER///////////////////////
app.listen(process.env.SERVER_PORT || 3000,
    () => console.log(`Server started at http://localhost:${process.env.SERVER_PORT || 3000}`));
