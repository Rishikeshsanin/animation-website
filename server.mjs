import { createServer } from 'node:http'
import { createReadStream, existsSync, statSync } from 'node:fs'
import { extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(fileURLToPath(new URL('.', import.meta.url)), 'dist')
const port = Number(process.env.PORT || 3000)

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0])
  const safePath = normalize(urlPath).replace(/^([.][.][/\\])+/, '')
  let filePath = join(root, safePath)

  if (safePath === '/' || !existsSync(filePath) || (existsSync(filePath) && statSync(filePath).isDirectory())) {
    filePath = join(root, 'index.html')
  }

  if (!filePath.startsWith(root)) {
    res.writeHead(403)
    res.end('Forbidden')
    return
  }

  res.setHeader('Content-Type', mime[extname(filePath)] || 'application/octet-stream')
  res.setHeader('Cache-Control', extname(filePath) === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable')

  createReadStream(filePath)
    .on('error', () => {
      res.writeHead(404)
      res.end('Not found')
    })
    .pipe(res)
}).listen(port, '0.0.0.0', () => {
  console.log(`MotionLab running on port ${port}`)
})
