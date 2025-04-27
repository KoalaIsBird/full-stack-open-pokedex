import express from 'express'
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('why is push on secondary branch running action??? I tried to remove the pull request and am going to push it to the secondary branch') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('very good health')
})
app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`)
})
