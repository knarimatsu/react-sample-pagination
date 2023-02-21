import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { idTokenState, refreshTokenState } from "../libs/recoilAtoms";
import { getIdTokenAPI, getRefreshTokenAPI } from "../modules/api";

export const RefreshToken = () => {
    const { t } = useTranslation();

    const { register, handleSubmit, watch } = useForm();
    const onSubmit = (data: any) => getIdToken(data.refreshToken);
    const [isIdTokenButtonClicked, setIsIdTokenButtonClicked] = useState(false);
    const [isRefreshTokenButtonClicked, setIsRefreshTokenButtonClicked] =
        useState(false);
    const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenState);
    const [idToken, setIdToken] = useRecoilState(idTokenState);

    /**
     * getRefreshToken
     * @returns {Promise} refreshToken
     */
    const getRefreshToken = async () => {
        const result = await getRefreshTokenAPI();
        sessionStorage.setItem("refreshToken", result.refreshToken);
        setRefreshToken(result.refreshToken);
    };

    /**
     * getIdToken
     * @param {string} refreshToken
     * @returns {Promise} idToken
     */
    const getIdToken = async (refreshToken: string) => {
        const result = await getIdTokenAPI(refreshToken);
        setIdToken(result.idToken);
        sessionStorage.setItem("idToken", result.idToken);
    };

    const copyRefreshToken = () => {
        navigator.clipboard.writeText(refreshToken);
        setIsRefreshTokenButtonClicked(true);
        setTimeout(() => {
            setIsRefreshTokenButtonClicked(false);
        }, 2000);
    };

    const copyIdToken = () => {
        navigator.clipboard.writeText(idToken);
        setIsIdTokenButtonClicked(true);
        setTimeout(() => {
            setIsIdTokenButtonClicked(false);
        }, 2000);
    };

    const CopyRefreshTokenIcon = (
        <div className="mt-3 p-3">
            {!isRefreshTokenButtonClicked ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className={`w-7 h-7 cursor-pointer`}
                    onClick={copyRefreshToken}
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className={`w-7 h-7 cursor-pointer`}
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                    />
                </svg>
            )}
        </div>
    );
    const CopyIdTokenIcon = (
        <div className="mt-3 p-3">
            {!isIdTokenButtonClicked ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className={`w-7 h-7 cursor-pointer`}
                    onClick={copyIdToken}
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className={`w-7 h-7 cursor-pointer`}
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                    />
                </svg>
            )}
        </div>
        // <div className="mt-3 p-3 border-solid hover:bg-slate-200">
        //     <svg
        //         xmlns="http://www.w3.org/2000/svg"
        //         fill="none"
        //         viewBox="0 0 24 24"
        //         stroke-width="1.5"
        //         stroke="currentColor"
        //         className={`w-7 h-7 cursor-pointer ${
        //             isIdTokenButtonClicked && "text-gray-400"
        //         }`}
        //         onClick={copyIdToken}
        //     >
        //         <path
        //             stroke-linecap="round"
        //             stroke-linejoin="round"
        //             d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
        //         />
        //     </svg>
        // </div>
    );

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
                    {CopyRefreshTokenIcon}
                </div>
            ) : null}
            <h1 className="mx-3 mt-3 text-3xl font-bold underline">
                {t("pages.refreshToken.idToken")}
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="mx-3 mt-3 px-3 py-2 border rounded"
                    type="text"
                    {...register("refreshToken")}
                />
                <input
                    className="mx-3 mt-3 px-3 py-2 border rounded cursor-pointer"
                    type="submit"
                    value={t("pages.refreshToken.getIdTokenButton") as string}
                />
            </form>
            {idToken ? (
                <div className="flex border-solid">
                    <input
                        className="mx-3 mt-3 px-3 py-2 w-1/2 border-solid"
                        type="text"
                        readOnly
                        value={idToken}
                    />
                    {CopyIdTokenIcon}
                </div>
            ) : null}
        </>
    );
};

export default RefreshToken;
