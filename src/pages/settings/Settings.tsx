import { ThemeSwitch } from "shared/ui";
import { FC } from "react";

interface SettingsProps {}

const Settings: FC<SettingsProps> = () => {
  return (
    <>
      <ThemeSwitch />
    </>
  );
};

export default Settings;
