import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoute from './routes/authRoute.js'
import cors from 'cors'
import mongoose from "mongoose";


// configure env 
dotenv.config()

//database config
connectDB();

// rest app 
const app = express()


// Define a schema and model for your form data
const eventDataSchema = new mongoose.Schema({
    // Define your fields here based on your form
    title: String,
    date: String,
    // Add more fields as needed
});

const EventData = mongoose.model('EventData', eventDataSchema);


//Middelwares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoute);
// app.use(bodyParser.json());

// rest api
app.get('/', (req, res) => {
    res.send("<h1>welcome to codingninja</h1 >");
})
app.post('/api/eventdata', async (req, res) => {
    try {
        const eventData = new EventData(req.body);
        await eventData.save();
        res.status(201).json({ message: 'Form data saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

//Port
const PORT = process.env.PORT || 8080;

//run Listen
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`.bgGreen);
});