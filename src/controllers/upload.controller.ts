import { Request, Response } from 'express';

export const uploadController = (req: Request, res: Response):void => {
  try{
    if (!req.file) {res.status(400).json({ message: 'No file uploaded' });return;}

    const folder = (req as any).uploadFolder;
    if (!folder) {res.status(400).json({ message: 'Upload folder information missing' });return;}

    const path = `/${folder}/${req.file.filename}`;
    res.status(200).json({path: path});
  }catch (error) {
    res.status(500).json({ message: "Internal server error" }); 
    return;
  }
};