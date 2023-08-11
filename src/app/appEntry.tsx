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

async function initApp() {
  const { apiMockWorker } = await import("../app/apiMockWorker");
  await apiMockWorker.start();
}

initApp().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <PrimeReactProvider>
          <RouterProvider router={router} />
        </PrimeReactProvider>
      </PersistGate>
    </ReduxProvider>
  );
});
