import { useCallback, useContext, useState } from "react";
import { PrimeReactContext } from "primereact/api";

enum ThemesEnum {
  VivaLight = "viva-light",
  VivaDark = "viva-dark",
}

interface useThemeChangeProps {
  currentTheme: ThemesEnum;
  changeTheme: () => void;
}

// to do - have to change switch logic entirely
export const useThemeChange = (): useThemeChangeProps => {
  const { changeTheme } = useContext(PrimeReactContext);
  const [currentTheme, setCurrentTheme] = useState<ThemesEnum>(
    ThemesEnum.VivaLight
  );

  const handleChangeTheme = useCallback(() => {
    const newTheme =
      currentTheme === ThemesEnum.VivaDark
        ? ThemesEnum.VivaLight
        : ThemesEnum.VivaDark;
    setCurrentTheme(newTheme);
    //@ts-ignore
    changeTheme(currentTheme, newTheme, "theme-link");
  }, [changeTheme, currentTheme]);

  return { currentTheme, changeTheme: handleChangeTheme };
};
