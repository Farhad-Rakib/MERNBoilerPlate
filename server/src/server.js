import mongoose from "mongoose";
import dotenv from "dotenv"
import app from  "./app.js"

dotenv.config({
    path: './config.env'
});

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION!!! shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

var connection_url='';


if(process.env.ENVIRONMENT == 'development')
{
    connection_url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
}
else if (process.env.ENVIRONMENT == 'staging')
{
    connection_url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
}
else if (process.env.ENVIRONMENT == 'production')
{
    connection_url= `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
}



// Connect the database
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(process.env.SERVER_PORT, () => {console.log(` DB Connection is Successful and Application is running on port : ${process.env.SERVER_PORT}`)}))
    .catch( (error) => console.log(`${error}`));

//Start the server

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION!!!  shutting down ...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});