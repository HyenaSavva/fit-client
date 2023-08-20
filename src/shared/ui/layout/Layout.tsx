import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import { FC, ReactNode, Suspense } from "react";

import styles from "./Layout.module.css";

type LayoutProps = {
  sidebarSlot: ReactNode;
  announcementSlot?: ReactNode;
  navbarSlot?: ReactNode;
  headerSlot?: ReactNode;
  bottomSlot?: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ sidebarSlot }) => {
  return (
    <>
      <Suspense fallback={<>Loading</>}>
        <div className={styles.layout}>
          {sidebarSlot && sidebarSlot}
          <main className={styles.main}>
            <AnimatePresence initial={false} mode="wait">
              <Outlet />
            </AnimatePresence>
          </main>
        </div>
      </Suspense>
    </>
  );
};
