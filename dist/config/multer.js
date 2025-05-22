"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const root = path_1.default.resolve(__dirname, '..', '..', 'uploads');
const storage = multer_1.default.diskStorage({
    destination: (req, _file, cb) => {
        let folder = '';
        if (req.url.includes('/song/media'))
            folder = 'song/media';
        else if (req.url.includes('/song/image'))
            folder = 'song/image';
        else if (req.url.includes('/artist/image'))
            folder = 'artist/image';
        else if (req.url.includes('/user/image'))
            folder = 'user/image';
        else if (req.url.includes('/album/image'))
            folder = 'album/image';
        else
            folder = 'others';
        const fullPath = path_1.default.join(root, folder);
        //crear la carpeta si no exite
        if (!fs_1.default.existsSync(fullPath)) {
            fs_1.default.mkdirSync(fullPath, { recursive: true });
        }
        req.uploadFolder = folder;
        cb(null, fullPath);
    },
    filename: (req, file, cb) => {
        const extension = path_1.default.extname(file.originalname);
        let fileName = `${Date.now()}${extension}`;
        if (req.params.name) {
            fileName = `${req.params.name}${extension}`;
        }
        cb(null, fileName);
    },
});
exports.upload = (0, multer_1.default)({ storage });
