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
exports.getUser = void 0;
const axios_1 = __importDefault(require("axios"));
const user_adapter_1 = require("./user.adapter");
const getUser = (url) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const user = yield axios_1.default.get(url);
        // const fileName = `${user.data.data.first_name.toLowerCase()}.json`;
        // const jsonDir = path.join(__dirname, "json");
        // Verifica si la carpeta 'json' existe, si no, la crea
        // if (!fs.existsSync(jsonDir)) {
        //   fs.mkdirSync(jsonDir);
        // }
        // const filePath = path.join(jsonDir, fileName);
        // const fileContent = JSON.stringify(user.data, null, 2);
        // fs.writeFileSync(filePath, fileContent);
        return (0, user_adapter_1.userAdapter)(user.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error) && ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
            throw new Error("Bad Request: URL not found");
        }
        throw new Error("Failed to fetch user data");
    }
});
exports.getUser = getUser;
