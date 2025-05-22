import multer from 'multer';
import path from 'path';
import fs from 'fs';

const root = path.resolve(__dirname, '..', '..', 'uploads');

const storage = multer.diskStorage({
  destination: (req, _file, cb) => {
    let folder = '';
    if (req.url.includes('/song/media')) folder = 'song/media';
    else if (req.url.includes('/song/image')) folder = 'song/image';
    else if (req.url.includes('/artist/image')) folder = 'artist/image';
    else if (req.url.includes('/user/image')) folder = 'user/image';
    else if (req.url.includes('/album/image')) folder = 'album/image';
    else folder = 'others';

    const fullPath = path.join(root, folder);

    //crear la carpeta si no exite
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }

    (req as any).uploadFolder = folder;
    cb(null, fullPath);
  },
  filename: (req, file, cb) => {
    const extension=path.extname(file.originalname)
    let fileName = `${Date.now()}${extension}`
    if(req.params.name){
      fileName = `${req.params.name}${extension}`
    }
    cb(null, fileName);
  },
});

export const upload = multer({ storage });
