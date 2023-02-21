import axios from "axios";

//interface
export type StockInterface = {
    info: StockDataInfoInterface;
};
export type StockDataInfoInterface = {
    Code: string;
    CompanyName: string;
    Date: string;
    MarketCode: string;
    MarketCodeName: string;
    ScaleCategory: string;
    Sector17Code: string;
    Sector17CodeName: string;
    Sector33Code: string;
    Sector33CodeName: string;
};
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

/**
 * getStockList
 * @params {string} idToken
 * @returns {Promise<StockInterface>}
 */
export const getStockListAPI = async (
    idToken: string
): Promise<StockInterface> => {
    const response = await axios.get(`${baseUrl}/${version}/listed/info`, {
        headers: {
            Authorization: `Bearer ${idToken}`,
        },
    });
    return response.data;
};
