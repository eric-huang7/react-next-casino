// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = '127.0.0.1'
const port = 3005

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

const httpsOptions = {
  key: fs.readFileSync("/etc/letsencrypt/live/tst-si-site.slotsidol.com/cert.key"),
  cert: fs.readFileSync("/etc/letsencrypt/live/tst-si-site.slotsidol.com/cert.crt"),
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
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
