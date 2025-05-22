"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Artist_1 = require("../entities/Artist");
const Album_1 = require("../entities/Album");
const Genre_1 = require("../entities/Genre");
const Song_1 = require("../entities/Song");
const Playlist_1 = require("../entities/Playlist");
const Role_1 = require("../entities/Role");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'sqlite',
    database: './data.db',
    entities: [
        Role_1.Role,
        User_1.User,
        Artist_1.Artist,
        Album_1.Album,
        Genre_1.Genre,
        Song_1.Song,
        Playlist_1.Playlist
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
