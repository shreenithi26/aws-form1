const express = require("express")
const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json())


app.post("/data", (req,res) => {
    const data = req.body;
    console.log(data);
    res.send("SUCCESS")
})

app.listen(3000, () => {
    console.log("SERVER STARTED");
})
