import { PassThroughCutomMenuAttributes } from "../lib/passThroughAttributes";
import { ConfirmModal } from "shared/ui/confirm-modal";
import { clearSessionData } from "entities/session";
import { MenuItem } from "primereact/menuitem";
import { MegaMenu } from "primereact/megamenu";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "shared/model";
import { ButtonMenu } from "shared/ui";
import { Avatar } from "entities/user";
import { FC, memo } from "react";

import styles from "./Menu.module.css";

interface MenuProps {
  options: MenuItem[];
}

export const Menu: FC<MenuProps> = memo(({ options }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => dispatch(clearSessionData());
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
              <ConfirmModal
                buttonComponent={
                  <ButtonMenu icon="pi pi-sign-out" url="login" />
                }
                handleAccept={handleLogout}
                message="Are you sure you want to logout ?"
              />
            </ol>
          </ul>
        </section>
      }
    />
  );
});
