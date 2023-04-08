import handler from '../../../utils/handler'
import prisma from '@/utils/prisma';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import cookie from 'cookie'

const key = process.env.JWT_KEY;

export default handler.post(async (req, res) => {
    const { password, email } = req.body;    
    console.log(req.body);
    if (!password) {
        return res.status(404).send({
            message: "Please provide a password"
        })
    }
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if (!user) {
        return res.status(404).send({
            message: "Account not found!"
        })
    }
        return compare(password, user.password, (err, result) => {
            if (result && !err) {
                return sign({
                    email: user.email,
                    name: user.name
                }, key, (err, token) => {
                        res.setHeader(
                            "Set-Cookie",
                            cookie.serialize("auth", token, {
                                httpOnly: true,
                                secure: process.env.NODE_ENV !== "development",
                                sameSite: "strict",
                                maxAge: 60 * 60 * 24 * 7,
                                path: "/",
                            })
                        );
                    return res.status(200).send({
                            message: `${user.email} successfully authenticated!`,
                            user: user,
                        })
                })
            } else {
                return res.status(404).send({
                        message: 'Incorrect password!'
                    })
            }
        })
}).get(async (req, res) => {

    console.log('Hitting server');

    res.status(200).send({
        message: "Hitting get method"
    })
})