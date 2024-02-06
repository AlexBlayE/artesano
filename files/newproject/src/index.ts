import express from "express";
import helmet from "helmet";
import cors from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = process.env.WEB_PORT ?? 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

app.use(cors());
app.use(helmet());

// router imports

// routes
app.use();
app.use();

app.listen(PORT, () => {
    console.log(`Server init ${process.env.WEB_PORT}`);
});

export default app;
