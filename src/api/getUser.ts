import fs from "fs";
import path from "path";
import axios from "axios";
import { userAdapter } from "./user.adapter";
import { User } from "./interfaces/User.interface";
import { CvData } from "../domain/interfaces/cvData.interface";

export const getUser = async (url: string): Promise<CvData | undefined> => {
  try {
    const user = await axios.get<User>(url);
    // const fileName = `${user.data.data.first_name.toLowerCase()}.json`;
    // const jsonDir = path.join(__dirname, "json");

    // Verifica si la carpeta 'json' existe, si no, la crea
    // if (!fs.existsSync(jsonDir)) {
    //   fs.mkdirSync(jsonDir);
    // }
    // const filePath = path.join(jsonDir, fileName);
    // const fileContent = JSON.stringify(user.data, null, 2);
    // fs.writeFileSync(filePath, fileContent);

    return userAdapter(user.data);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error("Bad Request: URL not found");
    }
    throw new Error("Failed to fetch user data");
  }
};
