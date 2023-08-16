import { PersistGate } from "redux-persist/integration/react";
import { Provider as ReduxProvider } from "react-redux";
import { PrimeReactProvider } from "primereact/api";
import { RouterProvider } from "react-router-dom";
import { store, persistor } from "./appStore";
import ReactDOM from "react-dom/client";
import { router } from "./appRouter";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "shared/base.css";

const root = document.getElementById("root") as HTMLElement;

async function initApp() {
  const { startApiMockWorker } = await import("./apiMockWorker");
  await startApiMockWorker();
}

initApp().then(() => {
  ReactDOM.createRoot(root).render(
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PrimeReactProvider>
          <RouterProvider router={router} />
        </PrimeReactProvider>
      </PersistGate>
    </ReduxProvider>
  );
});
