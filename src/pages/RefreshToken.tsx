import axios from "axios";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { refreshTokenState } from "../libs/recoilAtoms";
import { callApi } from "../libs/useApi";

export const RefreshToken = () => {
    const { t } = useTranslation();
    const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenState);
    const getRefreshToken = async () => {
        axios
            .post("https://api.jpx-jquants.com/v1/token/auth_user", {
                mailaddress: import.meta.env.VITE_EMAIL,
                password: import.meta.env.VITE_PASSWORD,
            })
            .then((res: any) => {
                setRefreshToken(res.data.refreshToken);
            });
    };
    const copyRefreshToken = () => {
        navigator.clipboard.writeText(refreshToken);
    };

    return (
        <>
            <h1 className="mx-3 mt-3 text-3xl font-bold underline">
                {t("pages.refreshToken.title")}
            </h1>
            <button
                className="mx-3 mt-3 px-3 py-2 border rounded"
                onClick={getRefreshToken}
            >
                {t("pages.refreshToken.getTokenButton")}
            </button>
            {refreshToken ? (
                <div className="flex border-solid">
                    <input
                        className="mx-3 mt-3 px-3 py-2 w-1/2 border-solid"
                        type="text"
                        readOnly
                        value={refreshToken}
                    />

                    <div className="mt-3 p-3 border-solid hover:bg-slate-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-7 h-7 cursor-pointer"
                            onClick={copyRefreshToken}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                            />
                        </svg>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default RefreshToken;
