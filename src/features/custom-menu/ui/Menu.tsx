import { PassThroughCutomMenuAttributes } from "../lib/passThroughAttributes";
import { MenuItem } from "primereact/menuitem";
import { MegaMenu } from "primereact/megamenu";
import { ButtonMenu } from "shared/ui";
import { Avatar } from "entities/user";
import { FC } from "react";

import styles from "./Menu.module.css";

interface MenuProps {
  handleNavigate: (path: string) => void;
  options: MenuItem[];
}

export const Menu: FC<MenuProps> = ({ options, handleNavigate }) => {
  return (
    <MegaMenu
      className={styles.menu}
      orientation="vertical"
      pt={PassThroughCutomMenuAttributes}
      model={options.map((option) => ({
        id: option.id,
        icon: option.icon,
        command: () => {
          handleNavigate(option.url as string);
        },
      }))}
      start={
        <section className={styles.topOptions}>
          <Avatar handleNavigate={handleNavigate} />
        </section>
      }
      end={
        <section className={styles.bottomOptions}>
          <ButtonMenu
            icon="pi pi-cog"
            url="settings"
            handleNavigate={handleNavigate}
          />
        </section>
      }
    />
  );
};
