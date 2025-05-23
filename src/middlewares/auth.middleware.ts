import { Request, Response, NextFunction } from 'express';
import {verifyToken} from '../utils/jwt';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({ error: 'No token provided' });
      return;
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      res.status(401).json({ error: 'No token provided' });
      return;
    }

  try {
    // Verificamos y decodificamos el token
    const decoded = verifyToken(token);

    // Guardamos la información del token en la request para usarla en el siguiente middleware o controlador
    (req as any).user = decoded;

    // Llamamos a next() para pasar al siguiente middleware
    next();
  } catch (error: any) {
    res.status(401).json({ error: 'Invalid token' });
    return;
  }
};