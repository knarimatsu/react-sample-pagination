import axios from "axios";
import { refreshTokenState } from "../libs/recoilAtoms";

//baseUrl
const baseUrl = "https://api.jpx-jquants.com";
const version = "v1";
const mailaddress = import.meta.env.VITE_MAILADDRESS;
const password = import.meta.env.VITE_PASSWORD;

/**
 * getRefreshToken
 * @returns {Promise<void>}
 */
export const getRefreshTokenAPI = async () => {
    const response = await axios.post(`${baseUrl}/${version}/token/auth_user`, {
        mailaddress: mailaddress,
        password: password,
    });
    return response.data;
};

/**
 * getIdToken
 * @params {string} refreshToken
 * @returns {Promise<void>}
 */
export const getIdTokenAPI = async (refreshToken: string) => {
    const REFRESH_TOKEN = refreshToken;
    const response = await axios.post(
        `${baseUrl}/${version}/token/auth_refresh?refreshtoken=${REFRESH_TOKEN}`
    );
    return response.data;
};
