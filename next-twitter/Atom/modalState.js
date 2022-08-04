import { atom } from "recoil";

export const modalState = atom({ key: "modalState", default: false });
export const clickedPost = atom({ key: "clickedPost", default: "id" });
