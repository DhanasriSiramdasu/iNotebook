const connectToMongo = require('./db');
const express = require('express');
const cors = require("cors");

connectToMongo();

const app = express();

// Allow requests from Vercel frontend
app.use(cors({
    origin: "https://i-notebook-llm219ur6-dhanasri-siramdasus-projects.vercel.app"
}));

app.use(express.json());

// Routes
app.use("/api/auth", require('./Routes/auth'));
app.use("/api/notes", require('./Routes/notes'));

// Render requires dynamic port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});