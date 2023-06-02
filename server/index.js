import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/authRoute.js';

const app = express();
dotenv.config();

 
app.use(bodyParser.json({limit :"30mb", extended :true }));
app.use(bodyParser.urlencoded({limit :"30mb", extended :true }));
app.use(cors());

app.use('/posts',  postRoutes   );
app.use('/users', userRoutes )

// app.use('./posts', postRoutes );s

// const CoNNECTION_URL = 'mongodb+srv://Dkboss:Dkboss23@cluster0.zaxxkoq.mongodb.net/moments'
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CoNNECTION_URL)
.then(()=> app.listen(PORT, ()=> console.log(`Server running on port:${PORT}`)))
.catch((err)=> console.log(err));

// mongoose.set('useFindAndModify', false); 