import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Artist } from '../entities/Artist';
import { Album } from '../entities/Album';
import { Genre } from '../entities/Genre';
import { Song } from '../entities/Song';
import { Playlist } from '../entities/Playlist';
import { Role } from '../entities/Role';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './data.db',
  entities: [
    Role,
    User,
    Artist,
    Album,
    Genre,
    Song,
    Playlist
  ],
  synchronize: true,
  logging: false,
});

/*
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'db_prueba',
  entities: [],
  synchronize: true,
  logging: false,
});
*/