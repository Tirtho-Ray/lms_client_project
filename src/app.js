import express from "express";
import cors from "cors";
import notFound from "./app/middleware/notfound.js";
import routes from "./app/routes/routes.js";

const app = express();

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Test route ---
app.get("/", (req, res) => {
    res.send(" API is running...");
});

app.use('/api/v1', routes);

app.use(notFound)
export default app;
