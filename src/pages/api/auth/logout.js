/**
 * ? Logout function.
 * @author "Sebastian Pavel"
 */



export default function handler(req, res) {
    res.setHeader("Set-Cookie", [`auth=deleted; Max-Age=0; path=/`]);
    return res.status(200).send({
        message: 'Logged out',
        status: 200
    })
}