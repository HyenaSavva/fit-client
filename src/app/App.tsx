import Dashboard from "pages/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Settings from "pages/settings/Settings";
import Calendar from "pages/calendar/Calendar";
import { SideBar } from "widgets/SideBar";
import { CardsPage } from "pages/cards";
import { Layout } from "shared/ui";
import EditPage from "pages/edit/EditPage";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout sidebarSlot={<SideBar />} />}>
          <Route path="*" element={<></>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="edit" element={<EditPage />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
