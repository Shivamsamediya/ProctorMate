import express from 'express';
import authRoutes from './routes/auth.routes.js';
import allocationRoutes from './routes/allocations.routes.js';
import hallsRoutes from './routes/hall.routes.js';
import teachersRoutes from './routes/teacher.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({
    origin:[ 'http://localhost:5173','https://proctor-mate-frontend.vercel.app'], // Allowing requests from your frontend URL
    credentials: true,            
  }));

app.get('/', (req,res,next) =>{
  res.send("Hello");
});

//routes
app.use('/auth', authRoutes);
app.use('/allocation', allocationRoutes);
app.use('/halls', hallsRoutes);
app.use('/teachers', teachersRoutes);

export default app;