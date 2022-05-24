// server.js
const { createServer } = require('https')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const port = 3005

const app = next({ dev })
const handle = app.getRequestHandler()

const httpsOptions = {
  key: fs.readFileSync("/etc/letsencrypt/live/tst-si-site.slotsidol.com/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/tst-si-site.slotsidol.com/fullchain.pem"),
}

app.prepare().then(() => {
  createServer(httpsOptions, async (req, res) => {
    try {
      await handle(req, res, parse(req.url, true))
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
