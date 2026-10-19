import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/about', (req, res) => {
  res.json({
    name: 'Product CRUD API',
    version: '1.0.0',
    description: 'Backend service for managing products.',
  });
});

export default app;
