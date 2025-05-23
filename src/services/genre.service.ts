import { AppDataSource } from "../config/data-source";
import { Genre } from "../entities/Genre";

const repository = AppDataSource.getRepository(Genre);

export const GenreService = {
    findAll: () => repository.find(),

    findById: (id: number) => repository.findOneBy({ id }),

    create: (data: Partial<Genre>) => {
        const user = repository.create(data);
        return repository.save(user);
    },

    update: async (id: number, data: Partial<Genre>) => {
        await repository.update(id, data);
        return repository.findOneBy({ id });
    },

    delete: (id: number) => repository.delete(id),
};