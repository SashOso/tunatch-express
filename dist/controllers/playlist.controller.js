"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getOne = exports.getAll = void 0;
const Playlist_1 = require("../entities/Playlist");
const PublicPlaylistDTO_1 = require("../dtos/PublicPlaylistDTO");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list = yield Playlist_1.Playlist.find();
        const data = list.map(item => new PublicPlaylistDTO_1.PublicPlaylistDTO(item));
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
        return;
    }
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const item = yield Playlist_1.Playlist.findOne({ where: { id: parseInt(id) } });
        if (!item) {
            res.status(404).json({ message: "Not found" });
            return;
        }
        const data = new PublicPlaylistDTO_1.PublicPlaylistDTO(item);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
        return;
    }
});
exports.getOne = getOne;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _a = req.body, { id } = _a, data = __rest(_a, ["id"]);
        const item = Object.assign(new Playlist_1.Playlist(), data);
        yield item.save();
        res.json(item);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
        return;
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _a = req.body, { id } = _a, data = __rest(_a, ["id"]);
        const item = yield Playlist_1.Playlist.findOne({ where: { id: parseInt(id) } });
        if (!item) {
            res.status(404).json({ message: "Not found" });
            return;
        }
        Object.assign(item, data);
        if (data.songs) {
            item.songs = data.songs;
        }
        yield item.save();
        res.status(200).json(item);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
        return;
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const item = yield Playlist_1.Playlist.findOne({ where: { id: parseInt(id) } });
        if (!item) {
            res.status(404).json({ message: "Not found" });
            return;
        }
        yield Playlist_1.Playlist.remove(item);
        res.status(200).json({ message: "Deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
        return;
    }
});
exports.remove = remove;
