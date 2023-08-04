import { TabMenu, TabMenuTabChangeEvent } from "primereact/tabmenu";
import { MenuItem } from "primereact/menuitem";
import { menuItems } from "examples/constants/constants";
import { FC, useState } from "react";

import styles from "./Navigation.module.css";
import { useNavigate } from "react-router-dom";

interface NavigationProps {}

interface IMenuItem extends MenuItem {
  path: string;
}

interface TabChangeEventProps extends TabMenuTabChangeEvent {
  value: IMenuItem;
}

const Navigation: FC<NavigationProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <nav className={styles.navigation}>
      <TabMenu
        className={styles.navBar}
        onTabChange={(event: TabChangeEventProps) => {
          setActiveIndex(event.index);
          navigate(event.value.path);
        }}
        activeIndex={activeIndex}
        model={menuItems}
      />
    </nav>
  );
};

export default Navigation;
