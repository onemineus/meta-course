import { atom } from "jotai";

export const tab = atom(0);
export const createTab = atom(0);
export const roomCode = atom("");
export const accessToken = atom("");
export const test = atom(1);
export const stepCounter = atom<number>(1);
export const createCourseData = atom<any>({});
