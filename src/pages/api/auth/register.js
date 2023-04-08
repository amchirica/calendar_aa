import handler from "@/utils/handler";
import { hash } from "bcrypt";
import prisma from '../../../utils/prisma';

const salts = 10

export default handler.post(async (req, res) => {
    const { email, password, name } = req.body;
    if (!email) {
        res.status(404).send({
            message: 'No data to create an account!'
        })
    }
    hash(password, salts, async (err, hash) => {
        const user = await prisma.user.create({
            data: {
                email: email,
                password: hash,
                name: name
            }
        })
        if (err) {
            return res.status(500).send({
                    message: "Something wrong happened!"
                })
        }
        return res.status(200).send({
                user: user,
                message: `Account created successfully!`
            })
    })
 })