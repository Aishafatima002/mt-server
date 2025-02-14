console.log("hello world");
import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log(req.ip);
})
// 192.168.228.14:3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})