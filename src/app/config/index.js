import dotenv from "dotenv";
import path from "path";

// Load .env file from root directory
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
    node_env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 5000,
    db_url: process.env.DB_URL,
    bcrypt_salt_rounds: Number(process.env.BCRYPT_SALT_ROUNDS) || 10,
    jwt: {
        access_secret: process.env.JWT_ACCESS_SECRET,
        access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
        refresh_secret: process.env.JWT_REFRESH_SECRET,
        refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
    },
};
