import { atom } from 'jotai';

export const searchAtom = atom<string>('');
export const searchResultAtom = atom<string[]>([]);
export const valueAtom = atom<string>('');
