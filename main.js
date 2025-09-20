
import express from 'express';
import movieRoutes from './routes/moviesRoute.js';
import connectDB from './lib/db.js';
const app = express();
const PORT = 6969;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();
// Middleware for JSON parsing
app.use(express.json());


app.get('/', (req, res) => {
    res.json({ msg: "Hello World" });
});


app.use('/movies', movieRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});