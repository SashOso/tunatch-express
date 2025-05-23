import { AppDataSource } from "../config/data-source";
import { Artist } from "../entities/Artist";

const repository = AppDataSource.getRepository(Artist);

export const ArtistService = {
    findAll: () => repository.find(),

    findById: (id: number) => repository.findOneBy({ id }),

    create: (data: Partial<Artist>) => {
        const user = repository.create(data);
        return repository.save(user);
    },

    update: async (id: number, data: Partial<Artist>) => {
        await repository.update(id, data);
        return repository.findOneBy({ id });
    },

    delete: (id: number) => repository.delete(id),
};