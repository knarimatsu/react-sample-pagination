import { atom } from "recoil";

export const refreshTokenState = atom({
    key: "refreshTokenState",
    default: "",
});

export const idTokenState = atom({
    key: "idTokenState",
    default: "",
});
