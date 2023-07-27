const express = require('express')
const cors = require('cors')
const productRouter = require('./routes/productRoutes')

const app = express()
const port = process.env.SERVER_PORT ?? 3000

app.use(cors())
app.use(express.json())

app.get('/healthcheck', (_req, res) => {
  res.send('OK!')
})

app.use('/product', productRouter)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
