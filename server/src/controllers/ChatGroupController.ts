import { Request, Response } from "express";
import prisma from "../config/db.config.js";

class ChatGroupController {
  static async index(req: Request, res: Response) {
    try {
      const body = req.body;
      const user = req.user;
      const groups = await prisma.chatGroup.findMany({
        where: {
          user_id: user.id,
        },
        orderBy: {
          created_at: "desc",
        },
      });
      return res.json({
        message: "Chat groups Fetched Message successfully",
        data: groups,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async show(req: Request, res: Response) {
    try {
        const {id} =req.params;
      const groups = await prisma.chatGroup.findUnique({
        where : {
            id:id
        }
      })
      return res.json({
        message: "Chat group show Message successfully",
        data: groups,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async store(req: Request, res: Response) {
    try {
      const body = req.body;
      const user = req.user;
      await prisma.chatGroup.create({
        data: {
          title: body.title,
          passcode: body.passcode,
          user_id: user.id,
        },
      });

      return res.json({ message: "Chat group created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }


  static async update(req: Request, res: Response) {
    try {
      const body = req.body;
      const {id} = req.params;
      await prisma.chatGroup.update({
        data:{
            title:body.title,
            passcode:body.passcode
        },
        where: {
            id:id
        }
      })

      return res.json({ message: "Chat group updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async destroy(req: Request, res: Response) {
    try {
        const {id} =req.params;
  await prisma.chatGroup.delete({
        where : {
            id:id
        }
      })
      return res.json({
        message: "Chat group deleted Message successfully",
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default ChatGroupController;
