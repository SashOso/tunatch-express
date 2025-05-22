import {Router} from 'express';

import albumRoutes from './album.routes';
import artistRoutes from './artist.routes';
import authRoutes from './auth.routes';
import genreRoutes from './genre.routes';
import playlistRoutes from './playlist.routes';
import roleRoutes from './role.routes';
import songRoutes from './song.routes';
import userRoutes from './user.routes';
import uploadRoutes from './upload.routes';
import viewsRoutes from './views.routes';

const router = Router();

router.use('/api/albums', albumRoutes);
router.use('/api/artists', artistRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/genres', genreRoutes);
router.use('/api/playlists', playlistRoutes);
router.use('/api/roles', roleRoutes);
router.use('/api/songs', songRoutes);
router.use('/api/users', userRoutes);
router.use('/api/upload', uploadRoutes);
router.use('/', viewsRoutes);


export default router;