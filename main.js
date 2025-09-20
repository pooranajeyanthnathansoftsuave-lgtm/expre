
import express from 'express';
import movieRoutes from './routes/moviesRoute.js';
const app = express();
const PORT = 6969;

// Middleware for JSON parsing
app.use(express.json());


app.get('/', (req, res) => {
    res.json({ msg: "Hello World" });
});


app.use('/movies', movieRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});