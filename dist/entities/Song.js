"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
const typeorm_1 = require("typeorm");
const Artist_1 = require("./Artist");
const Album_1 = require("./Album");
const Genre_1 = require("./Genre");
let Song = class Song extends typeorm_1.BaseEntity {
};
exports.Song = Song;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Song.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Song.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Artist_1.Artist, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'artist_id' }),
    __metadata("design:type", Artist_1.Artist)
], Song.prototype, "artist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Album_1.Album, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'album_id' }),
    __metadata("design:type", Album_1.Album)
], Song.prototype, "album", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Genre_1.Genre, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'genre_id' }),
    __metadata("design:type", Genre_1.Genre)
], Song.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Song.prototype, "file_path", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Song.prototype, "image_path", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Song.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Song.prototype, "updated_at", void 0);
exports.Song = Song = __decorate([
    (0, typeorm_1.Entity)()
], Song);
