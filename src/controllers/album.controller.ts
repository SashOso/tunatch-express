import { Request, Response } from "express";
import { AlbumService } from "../services/album.service";

export const AlbumController = {
    getAll: async (_: Request, res: Response) => {
        const items = await AlbumService.findAll();
        res.json(items);
    },

    getOne: async (req: Request, res: Response) => {
        const item = await AlbumService.findById(+req.params.id);
        if (item) res.json(item);
        else res.status(404).json({ message: "Not found" });
    },

    create: async (req: Request, res: Response) => {
        const newItem = await AlbumService.create(req.body);
        res.status(201).json(newItem);
    },

    update: async (req: Request, res: Response) => {
        try {
            const updatedItem = await AlbumService.update(+req.params.id, req.body);
            res.json(updatedItem);
        } catch (err: any) {
            res.status(404).json({ message: err.message || "Update failed" });
        }
    },

    delete: async (req: Request, res: Response) => {
        try {
            await AlbumService.delete(+req.params.id);
            res.status(204).send();
        } catch (err: any) {
            res.status(404).json({ message: err.message || "Delete failed" });
        }
    }
};