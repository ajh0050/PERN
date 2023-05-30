const express = require("express");
const app = express();
const cors = require("cors")

//middleware
app.use(cors())
app.use(express.json())

app.listen(4000, () => {
    console.log("The port is live and listening at port 4000")
})

