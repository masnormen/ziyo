import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Label,
  Switch,
} from '@ziyo/ui';
import { SettingsIcon } from 'lucide-react';

import useSettings from '../hooks/useSettings';

export function Settings() {
  const { settings, setSettings } = useSettings();

  return (
    <section className="flex w-full flex-row justify-end">
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="bg-kiiro-800">
            <SettingsIcon className="text-gray-100" size={16} />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Settings</DrawerTitle>
            <DrawerDescription>Configurations for Ziyo</DrawerDescription>
          </DrawerHeader>
          <div className="flex items-center space-x-2">
            <Switch
              id="preferLatin"
              checked={settings.preferLatin}
              onCheckedChange={(checked) => setSettings('preferLatin', checked)}
            />
            <Label htmlFor="preferLatin" className="cursor-pointer">
              Prefer Latin/Romaji
            </Label>
          </div>
          <DrawerFooter className="flex w-full items-center md:flex-row md:justify-end">
            <DrawerClose className="w-full md:w-fit">
              <Button className="w-full bg-kiiro-800 md:w-fit">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>
  );
}
