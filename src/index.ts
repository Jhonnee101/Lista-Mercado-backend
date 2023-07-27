import application from "./server"

const port = process.env.SERVER_PORT ?? 3000

application.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
