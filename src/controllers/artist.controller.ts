import { Request, Response } from "express";
import { ArtistService } from "../services/artist.service";

export const ArtistController = {
    getAll: async (_: Request, res: Response) => {
        const items = await ArtistService.findAll();
        res.json(items);
    },

    getOne: async (req: Request, res: Response) => {
        const item = await ArtistService.findById(+req.params.id);
        if (item) res.json(item);
        else res.status(404).json({ message: "Not found" });
    },

    create: async (req: Request, res: Response) => {
        const newItem = await ArtistService.create(req.body);
        res.status(201).json(newItem);
    },

    update: async (req: Request, res: Response) => {
        try {
            const updatedItem = await ArtistService.update(+req.params.id, req.body);
            res.json(updatedItem);
        } catch (err: any) {
            res.status(404).json({ message: err.message || "Update failed" });
        }
    },

    delete: async (req: Request, res: Response) => {
        try {
            await ArtistService.delete(+req.params.id);
            res.status(204).send();
        } catch (err: any) {
            res.status(404).json({ message: err.message || "Delete failed" });
        }
    }
};