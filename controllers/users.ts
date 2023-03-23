import { Request, Response, NextFunction } from "express"

import user from "../models/users";

const add = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
    const { body: payload } = req;

    const resData = await user.create(payload);
    res.send('User added successfully.')
    } catch (err) {
        console.log(err);
    }
}

const get = (req: Request, res: Response, next: NextFunction) => {
    res.send('Hey, Poonam Good morning gt.................')
}

export { add, get };