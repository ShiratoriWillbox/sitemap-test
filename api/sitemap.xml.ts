import {VercelApiHandler} from "@vercel/node"

export const GET: VercelApiHandler = async (req, res) => {
    res.setHeader('Content-Type', 'text/xml')
    res.write(`<?xml version="1.0" encoding="UTF-8"?>`)
    res.write(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`)
    res.write(`<url><loc>https://www.example.com/hoge</loc></url>`)
    res.write(`</urlset>`)
    res.end()
}

