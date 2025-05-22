import {Request,Response} from 'express';
import { Genre } from '../entities/Genre';

export const getAll= async(req:Request,res:Response): Promise<void> =>{
    try{
        const list=await Genre.find();
        res.json(list)
    }catch(error){
        res.status(500).json({ message: "Internal server error" }); 
        return;
    }
}
export const getOne=  async(req:Request,res:Response): Promise<void> =>{
    try{
        const { id } = req.params;
        
        const item = await Genre.findOne({where: { id: parseInt(id) }});
        if (!item) { res.status(404).json({ message: "Not found" }); return; }

        res.json(item)
    }catch(error){
        res.status(500).json({ message: "Internal server error" }); 
        return;
    }
}
export const create=  async(req:Request,res:Response): Promise<void> =>{
    try{
        const { id, ...data } = req.body;
        const item = Object.assign(new Genre(), data);
        await item.save();
        res.json(item);
    }catch(error){
        res.status(500).json({ message: "Internal server error" }); 
        return;
    }
}
export const update=  async(req:Request,res:Response): Promise<void> =>{
    try{
        const { id, ...data } = req.body;

        const item = await Genre.findOne({ where: { id: parseInt(id) }});
        if (!item) { res.status(404).json({ message: "Not found" }); return; }

        Object.assign(item, data);

        await item.save();
        res.status(200).json(item);
    }catch(error){
        res.status(500).json({ message: "Internal server error" }); 
        return;
    }
}

export const remove = async (req: Request, res: Response): Promise<void>  => {
    try {
        const { id } = req.params;

        const item = await Genre.findOne({where: { id: parseInt(id) }});
        if (!item) { res.status(404).json({ message: "Not found" }); return; }

        await Genre.remove(item);
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }); 
        return;
    }
};
