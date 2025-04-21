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
exports.getLinkedinUser = void 0;
const axios_1 = __importDefault(require("axios"));
const user_adapter_1 = require("./user.adapter");
const getLinkedinUser = (url) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const options = {
        method: "GET",
        url: "https://fresh-linkedin-profile-data.p.rapidapi.com/get-linkedin-profile",
        params: {
            linkedin_url: url,
            include_skills: "true",
            include_certifications: "true",
            include_volunteers: "true",
            include_courses: "true",
            include_organizations: "true",
            include_profile_status: "true",
        },
        headers: {
            "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
            "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
        },
    };
    try {
        console.log(options);
        const user = yield axios_1.default.request(options);
        return (0, user_adapter_1.userAdapter)(user.data);
    }
    catch (error) {
        console.log(error);
        if (axios_1.default.isAxiosError(error) && ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
            throw new Error("Bad Request: URL not found");
        }
        throw new Error("Failed to fetch user data");
    }
});
exports.getLinkedinUser = getLinkedinUser;
