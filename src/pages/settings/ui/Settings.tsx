import { ThemeSwitch } from "shared/ui";
import { FC } from "react";

interface SettingsProps {}

export const Settings: FC<SettingsProps> = () => {
  return (
    <>
      <ThemeSwitch />
    </>
  );
};
