"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicPlaylistDTO = void 0;
const PublicUserDTO_1 = require("./PublicUserDTO");
class PublicPlaylistDTO {
    constructor(playlist) {
        this.id = playlist.id;
        this.name = playlist.name;
        this.image_path = playlist.image_path;
        this.user = new PublicUserDTO_1.PublicUserDTO(playlist.user);
        this.songs = playlist.songs;
        this.created_at = playlist.created_at;
        this.updated_at = playlist.updated_at;
    }
}
exports.PublicPlaylistDTO = PublicPlaylistDTO;
