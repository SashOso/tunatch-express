import { AppDataSource } from "../config/data-source";
import { Playlist } from "../entities/Playlist";

const repository = AppDataSource.getRepository(Playlist);

export const PlaylistService = {
    findAll: () => repository.find(),

    findById: (id: number) => repository.findOneBy({ id }),

    create: (data: Partial<Playlist>) => {
        const user = repository.create(data);
        return repository.save(user);
    },

    update: async (id: number, data: Partial<Playlist>) => {
        await repository.update(id, data);
        return repository.findOneBy({ id });
    },

    delete: (id: number) => repository.delete(id),
};
