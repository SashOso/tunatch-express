import { Request, Response } from "express";
import { GenreService } from "../services/genre.service";

export const GenreController = {
    getAll: async (_: Request, res: Response) => {
        const items = await GenreService.findAll();
        res.json(items);
    },

    getOne: async (req: Request, res: Response) => {
        const item = await GenreService.findById(+req.params.id);
        if (item) res.json(item);
        else res.status(404).json({ message: "Not found" });
    },

    create: async (req: Request, res: Response) => {
        const newItem = await GenreService.create(req.body);
        res.status(201).json(newItem);
    },

    update: async (req: Request, res: Response) => {
        try {
            const updatedItem = await GenreService.update(+req.params.id, req.body);
            res.json(updatedItem);
        } catch (err: any) {
            res.status(404).json({ message: err.message || "Update failed" });
        }
    },

    delete: async (req: Request, res: Response) => {
        try {
            await GenreService.delete(+req.params.id);
            res.status(204).send();
        } catch (err: any) {
            res.status(404).json({ message: err.message || "Delete failed" });
        }
    }
};