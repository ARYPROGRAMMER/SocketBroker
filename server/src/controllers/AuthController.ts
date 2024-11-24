import { Request, Response } from 'express';
import prisma from '../config/db.config.js';
import jwt from 'jsonwebtoken';

interface LoginPayloadType{
    name: string;
    email: string;
    oauth_id: string;
    provider: string;
    image?: string;
}

class AuthController {

    static async login(request: Request, response: Response){
        try{
            const body: LoginPayloadType = request.body;
            let findUser = await prisma.user.findUnique({
                where:{
                    email: body.email
                }
            })

            if (!findUser){
                findUser = await prisma.user.create({
                    data: body
                })
            }

            let JWTPayload = {
                name: body.name,
                email: body.email,
                id: findUser.id
            }

            const token = jwt.sign(JWTPayload, process.env.JWT_SECRET , {
                expiresIn: "365d"
            } )

            return response.json({
                message: "User logged in successfully",
                user: {
                    ...findUser,
                    token: `Bearer ${token}`
                }
            })
        }
        catch(err){
            return response.status(500).json({
                message: "Internal server error"
            })
        }
    }

}

export default AuthController;