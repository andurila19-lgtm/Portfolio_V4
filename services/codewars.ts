import axios from "axios";

import { CODEWARS_ACCOUNT } from "@/common/constants/codewars";

const { user_id } = CODEWARS_ACCOUNT;

const CODEWARS_ENDPOINT = `https://www.codewars.com/api/v1/users/${user_id}`;

export const getCodewarsData = async () => {
  try {
    const response = await axios.get(CODEWARS_ENDPOINT);
    const status = response.status;
    const data = response.data;
    return { status, data };
  } catch (error: any) {
    console.error("Codewars Error:", error?.response?.data || error.message);
    return { status: error?.response?.status || 500, data: {} };
  }
};
