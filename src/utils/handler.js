import nc from 'next-connect'
 
 const handler = nc({
     onError(error, req, res) {
         return res.status(501).json({ error: `Something happened! ${error}` })
     },
     onNoMatch(req, res) {
         return res.status(501).json({ error: `Something happened! ${req.method}` })
     }
 })
 
 export default handler;