import express from "express";
import ReactDOM from "react-dom/server";
import App from "../App";
import { indexTemplate } from "./indexTemplate.js";

const app = express();
const port = 3000;

app.use("/static", express.static("./dist/client"));

app.get("/", (req, res) => {
    res.send(indexTemplate(ReactDOM.renderToString(App())));
});

// app.set('port', process.env.PORT || 3001);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
