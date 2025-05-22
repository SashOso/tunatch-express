import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Artist } from "./Artist";
import { Album } from "./Album";
import { Genre } from "./Genre";
import { Song } from "./Song";
import { User } from "./User";

@Entity()
export class Playlist extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    image_path: string;

    @ManyToOne(() => User, { eager: true })
    @JoinColumn({ name: 'user_id' })
    user:User;

    //---------------------------------------//
    @ManyToMany(() => Song, { eager: true })
      @JoinTable({
        name: 'playlist_song',
        joinColumn: {
          name: 'playlist_id',
          referencedColumnName: 'id',
        },
        inverseJoinColumn: {
          name: 'song_id',
          referencedColumnName: 'id',
        },
      })
      songs: Song[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}