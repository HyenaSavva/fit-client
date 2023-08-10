import { PassThroughCutomMenuAttributes } from "../lib/passThroughAttributes";
import { MenuItem } from "primereact/menuitem";
import { MegaMenu } from "primereact/megamenu";
import { useNavigate } from "react-router-dom";
import { ButtonMenu } from "shared/ui";
import { Avatar } from "entities/user";
import { FC } from "react";

import styles from "./Menu.module.css";

interface MenuProps {
  options: MenuItem[];
}

export const Menu: FC<MenuProps> = ({ options }) => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => navigate(path);

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
          <ul>
            <ol>
              <ButtonMenu
                icon="pi pi-cog"
                url="settings"
                handleNavigate={handleNavigate}
              />
            </ol>
            <ol>
              <ButtonMenu
                icon="pi pi-sign-out"
                url="login"
                handleNavigate={handleNavigate}
              />
            </ol>
          </ul>
        </section>
      }
    />
  );
};
