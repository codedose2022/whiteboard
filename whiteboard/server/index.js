import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import boardRoutes from './routes/board.js'
import path from 'path';

// dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(cors());

app.use('/', boardRoutes)

if (process.env.NODE_ENV==="production") {
  app.use(express.static('../client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  })
}

const CONNECTION_URL = 'mongodb+srv://sftdev16:mersat123@maincluster.4woyg.mongodb.net/whiteboard?authSource=admin&replicaSet=atlas-9tpctr-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
