import axios from "axios";

export const callApi = async <T>(
    path: string,
    method: "POST" | "GET",
    requestBody?: T
) => {
    if (method === "POST") {
        await axios
            .post(path, {
                requestBody,
            })
            .then((res: any) => {
                return res.data;
            });
    } else {
        await axios.get(path).then((res: any) => {
            return res.data;
        });
    }
};
