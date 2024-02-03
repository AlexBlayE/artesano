import express from "express";
// import https from "https";
import helmet from "helmet";
import cors from "cors";
// import fs from "fs";
// import path, { dirname } from "path";
// import { fileURLToPath } from "url";
import "dotenv/config";

// const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = process.env.WEB_PORT ?? 3000;

// Uncomment if you use https options
// const options = {
//     key: fs.readFileSync(process.env.HTTPS_WEB_KEY as string),
//     cert: fs.readFileSync(process.env.HTTPS_WEB_CERT as string),
// };

const app = express();
// const server = https.createServer(options, app); // Uncoment if you use https options

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "../views"));
// app.use(express.static(path.join(__dirname, "../public")));

app.use(cors());
app.use(helmet());

// router imports

// routes
// app.use();

app.listen(PORT, () => {
    console.log(`Server init ${process.env.WEB_PORT}`);
});

// Uncomment if you use https options
// server.listen(PORT, () => {
//     console.log(`Server init ${process.env.WEB_PORT}`);
// });

export default app;
