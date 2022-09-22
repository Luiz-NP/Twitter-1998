require("../../db/mongoose");
import { UserModel } from "../../models/User";
import jwt from "jsonwebtoken";

export default async (req, res) => {
    const { username: name, password } = req.body;

    const validUser = await UserModel.findOne({name});
    if (!validUser) return res.json({message: "User not found."});

    const validPassword = await UserModel.findOne({password});
    if (!validPassword) return res.json({message: "Invalid password."});

    const token = jwt.sign({id: validUser.id}, process.env.JWT_SECRET);    

    res.json({message: "Logged.", token});
}
