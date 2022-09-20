require("../../db/mongoose");
import { UserModel } from "../../models/User";

export default async (req, res) => {
    const { username, password } = req.body;

    const validUser = await UserModel.findOne({username});
    if (!validUser) res.json({message: "User not found."});

    const validPassword = await UserModel.findOne({password});
    if (!validPassword) res.json({message: "Invalid password."});

    res.json({message: "Logged."})
}
