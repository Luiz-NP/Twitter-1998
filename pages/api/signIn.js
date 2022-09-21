require("../../db/mongoose");
import { UserModel } from "../../models/User";

export default async (req, res) => {
    const { username: name, password } = req.body;

    const userExists = await UserModel.findOne({ name });
    if (userExists) return res.json({message: "Username already exists."});

    const newUser = await UserModel.create({
        name,
        username: `@${name.toLowerCase()}`,
        password
    });

    const token = jwt.sign({id: newUser.id}, process.env.JWT_SECRET);

    res.json({message: "User Created.", token});
}