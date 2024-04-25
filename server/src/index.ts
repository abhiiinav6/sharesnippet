import express from "express"

const app = express()

app.get("/", async (req, res) => {
    res.json({ "hi": "hello" })
})

app.listen(8080)