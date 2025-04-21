import axios from "axios";
import { userAdapter } from "./user.adapter";
import { User } from "./interfaces/User.interface";
import { CvData } from "../domain/interfaces/cvData.interface";

export const getLinkedinUser = async (
  url: string,
): Promise<CvData | undefined> => {
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
    const user = await axios.request<User>(options);

    return userAdapter(user.data);
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error("Bad Request: URL not found");
    }
    throw new Error("Failed to fetch user data");
  }
};
