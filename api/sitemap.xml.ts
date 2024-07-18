import {VercelApiHandler} from "@vercel/node"

export const GET: VercelApiHandler = (req,res)=> {
    res.setHeader("Content-Type","application/xml")
    res.send(`
    <?xml version="1.0" encoding="UTF-8"?>
    `)
}
      