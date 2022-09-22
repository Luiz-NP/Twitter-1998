require("../../db/mongoose");
import { UserModel } from "../../models/User";

export default async (req, res) => {

    const { decodeId } = req.body;
    
    const user = await UserModel.findById(decodeId);

    res.json({user});
}