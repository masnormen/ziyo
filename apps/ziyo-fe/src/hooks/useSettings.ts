import { useAtom } from 'jotai';
import { useCallback } from 'react';

import { settingsAtom } from '../atoms';

export default function useSettings() {
  const [settings, _setSettings] = useAtom(settingsAtom);

  const setSettings = useCallback(
    (settingKey: keyof typeof settings, value: boolean) => {
      _setSettings((prev) => ({
        ...prev,
        [settingKey]: value,
      }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return { settings, setSettings };
}
