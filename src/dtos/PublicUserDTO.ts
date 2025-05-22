import { User } from '../entities/User';

export class PublicUserDTO {
  id: number;
  username: string;
  profile_picture: string;

  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.profile_picture = user.profile_picture;
  }
}