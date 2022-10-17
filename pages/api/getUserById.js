require("../../db/mongoose");
import { UserModel } from "../../models/User";

export default async (req, res) => {

    const { id } = req.body;

    const user = await UserModel.findById({id})
    if (!user) return res.json({error: "Could not load tweets."});

    res.status(200).json({ user });
}