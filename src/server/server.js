import express from "express";
import ReactDOM from "react-dom/server";
import App from "../App";
import { indexTemplate } from "./indexTemplate.js";
import axios from "axios";

const app = express();
const port = 3000;

app.use("/static", express.static("./dist/client"));

app.get("/", (req, res) => {
    res.send(indexTemplate(ReactDOM.renderToString(App())));
});
app.get("/auth", (req, res) => {
    axios
        .post(
            "https://www.reddit.com/api/v1/access_token",
            `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
            {
                auth: {
                    username: process.env.CLIENT_ID,
                    password: "UM055MPpcn-ReVpWcYTuWSCSIvzWhg",
                },
                headers: { "content-type": "application/x-www-form-urlencoded" },
            }
        )
        .then(({ data }) => {
            res.send(indexTemplate(ReactDOM.renderToString(App()), data["access_token"]));
        })
        .catch(console.log);
});

// app.set('port', process.env.PORT || 3001);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
