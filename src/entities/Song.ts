import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Artist } from "./Artist";
import { Album } from "./Album";
import { Genre } from "./Genre";

@Entity()
export class Song extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne(() => Artist, { eager: true })
    @JoinColumn({ name: 'artist_id' })
    artist:Artist;

    @ManyToOne(() => Album, { eager: true })
    @JoinColumn({ name: 'album_id' })
    album:Album;

    @ManyToOne(() => Genre, { eager: true })
    @JoinColumn({ name: 'genre_id' })
    genre:Genre;

    @Column()
    file_path: string;

    @Column()
    image_path: string;

    //---------------------------------------//
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}