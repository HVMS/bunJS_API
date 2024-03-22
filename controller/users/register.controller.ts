import server from "bunrest";
// Import User from the correct file path
import { User } from "../../model/user.model";

import UserService from "../../service/user.service";

export const registerRouter = server().router();

const userService = new UserService();

registerRouter.post('/', async (req, res) => {
    console.log(req.body);

    const currentUser = req.body as User;
    const { user_email, password } = currentUser;

    if (!user_email || !password) {
        res.status(400).json({message: 'User email and password are required'});
        return;
    }

    const user = await userService.createUser(currentUser);
    if (user){
        res.status(200).json({ message: 'User created successfully' });
    }else{
        res.status(500).json({ message: 'Error creating user' });
    }
});
