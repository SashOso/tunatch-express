"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const playlist_controller_1 = require("../controllers/playlist.controller");
const router = express_1.default.Router();
router.post('/', playlist_controller_1.create);
router.get('/', playlist_controller_1.getAll);
router.get('/:id', playlist_controller_1.getOne);
router.put('/', playlist_controller_1.update);
router.delete('/:id', playlist_controller_1.remove);
exports.default = router;
