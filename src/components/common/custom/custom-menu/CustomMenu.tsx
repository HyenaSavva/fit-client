import { PassThroughCutomMenuAttributes } from "examples/constants/constants";
import CustomAvatar from "../custom-avatar/CustomAvatar";
import { MenuItem } from "primereact/menuitem";
import { MegaMenu } from "primereact/megamenu";
import { ButtonMenu } from "shared/ui";
import { FC } from "react";

import styles from "./CustomMenu.module.css";

interface CustomMenuProps {
  handleNavigate: (path: string) => void;
  options: MenuItem[];
}

const CustomMenu: FC<CustomMenuProps> = ({ options, handleNavigate }) => {
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
          <CustomAvatar handleNavigate={handleNavigate} />
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

export default CustomMenu;
