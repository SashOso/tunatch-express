import {Request,Response} from 'express';
import { User } from '../entities/User';
import bcrypt from 'bcrypt';
import {generateToken} from '../utils/jwt';
import { PublicUserDTO } from '../dtos/PublicUserDTO';

export const register = async (req: Request, res: Response): Promise<void>  => {
  try {
    const { id, username, password, ...rest } = req.body;

    const user = await User.findOne({ where: { username } });
    if (user) {  res.status(400).json({ error: 'Username already exists' });return; }

    const hashedPassword = await bcrypt.hash(password, 10);
    const new_user = User.create({
      username,
      password: hashedPassword,
      ...rest,
    });

    const created_user = await new_user.save();

    const publicUser = new PublicUserDTO(created_user);

     res.status(201).json(publicUser);
  } catch (error: any) {
    res.status(500).json({ message: "Internal server error" }); 
    return;
  }
};

export const login = async (req: Request, res: Response): Promise<void>  => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {res.status(400).json({ message: "Username and password are required" }); return;}

    const user = await User.findOne({ where: { username } });
    if (!user) {res.status(401).json({ message: "Username does not exist" });return;}

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {res.status(401).json({ message: "Password is invalid" });return;}

    const token = generateToken({sub:user.id,username:username});
    const roles = (user.roles || []).map(role => role.name);
    res.set('Authorization', `Bearer ${token}`).json({ jwt: token, roles });
  } catch (error: any) {
    res.status(500).json({ message: "Internal server error" }); 
    return;
  }
};

export const me = async (req: Request, res: Response): Promise<void>  => {
  const user = (req as any).user;
  res.json(user);
};