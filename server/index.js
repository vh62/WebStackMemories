import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.use('/posts', postRoutes);
const CONNECTIONURL = 'mongodb+srv://Vikram86:Edward81@cluster0.v2ans.mongodb.net/WebStack?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTIONURL, {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error )=> console.log(error.message))

mongoose.set('useFindAndModify', false)