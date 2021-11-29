import express from 'express';
import clientRouters from './routes/client.routers';
import userRoutes from './routes/user.routers';

const app = express();
app.use(express.json());
app.use("/client", clientRouters);
app.use("/user", userRoutes);

export default app;
