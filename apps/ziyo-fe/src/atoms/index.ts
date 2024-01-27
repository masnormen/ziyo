import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const searchAtom = atom<string>('');
export const searchResultAtom = atom<string[]>([]);
export const valueAtom = atom<string>('');

type Settings = {
  preferLatin?: boolean;
};

export const settingsAtom = atomWithStorage<Settings>('ziyo-settings', {
  preferLatin: false,
});
