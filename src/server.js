import mongoose from "mongoose";
import app from "./app.js";
import config from "./app/config/index.js";


const PORT = config.port
const startServer = async () => {
    try {
        await mongoose.connect(config.db_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

startServer();
