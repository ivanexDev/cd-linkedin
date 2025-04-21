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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const createDoc_1 = require("./create-cv/createDoc");
require("dotenv/config");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { url } = req.body;
        if (!url) {
            res.status(400).json({ msg: "Please send the linkding url profile" });
            return;
        }
        const { buffer, filename } = yield (0, createDoc_1.createDocx)(url);
        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
        res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
        res.send(buffer);
    }
    catch (error) {
        console.log(error);
    }
}));
app.use((req, res, next) => {
    const filePath = path_1.default.join(__dirname, "../public/404.html");
    res.status(404).sendFile(filePath, (err) => {
        if (err) {
            console.error("Error serving 404 page:", err);
            res.status(500).send("Internal Server Error");
        }
    });
});
app.listen(3123, () => console.log("Server running on port 3123"));
