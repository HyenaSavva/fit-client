import { useThemeChange } from "shared/model";
import { Button } from "primereact/button";
import { FC } from "react";

interface ThemeSwitchProps {}

export const ThemeSwitch: FC<ThemeSwitchProps> = () => {
  const { changeTheme } = useThemeChange();

  return <Button onClick={changeTheme}>Theme</Button>;
};
