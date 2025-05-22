"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadController = void 0;
const uploadController = (req, res) => {
    try {
        if (!req.file) {
            res.status(400).json({ message: 'No file uploaded' });
            return;
        }
        const folder = req.uploadFolder;
        if (!folder) {
            res.status(400).json({ message: 'Upload folder information missing' });
            return;
        }
        const path = `/${folder}/${req.file.filename}`;
        res.status(200).json({ path: path });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
        return;
    }
};
exports.uploadController = uploadController;
