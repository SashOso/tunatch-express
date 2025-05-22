// src/dtos/PublicPlaylistDTO.ts
import { Playlist } from '../entities/Playlist';
import { PublicUserDTO } from './PublicUserDTO';
import { Song } from '../entities/Song';

export class PublicPlaylistDTO {
  id: number;
  name: string;
  image_path: string;
  user: PublicUserDTO;
  songs: Song[];
  created_at: Date;
  updated_at: Date;

  constructor(playlist: Playlist) {
    this.id = playlist.id;
    this.name = playlist.name;
    this.image_path = playlist.image_path;
    this.user = new PublicUserDTO(playlist.user);
    this.songs = playlist.songs;
    this.created_at = playlist.created_at;
    this.updated_at = playlist.updated_at;
  }
}