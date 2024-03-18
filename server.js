const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
 
require('dotenv').config({ path: './.env' });

const PORT = 3000;
const userRoutes = require('./src/routes/userRoutes');
const db =process.env.DB_URL

app.use(express.json())
app.use(cors())
app.use('/api/users', userRoutes)
 

mongoose.connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`Port connected on ${PORT}`)
})
