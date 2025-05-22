"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicUserDTO = void 0;
class PublicUserDTO {
    constructor(user) {
        this.id = user.id;
        this.username = user.username;
        this.profile_picture = user.profile_picture;
    }
}
exports.PublicUserDTO = PublicUserDTO;
